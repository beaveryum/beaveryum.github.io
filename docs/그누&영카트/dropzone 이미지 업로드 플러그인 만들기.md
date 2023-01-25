---
title: 'dropzone 이미지 업로드 플러그인 만들기'
---

# {{ $frontmatter.title }}


## 설명 :

드롭존 이미지 업로드 플러그인에 대해서 설명한다.

그누보드에서 사용되는 드롭존 플러그인이다 필요 에 따라서 응용해서 사용하면된다.

간단하게 포스팅 하는거라서 에러는 알아서들 해결 하면 된다.

 

일단 필요한 디비들은 이러하다 

설정 테이블에서 하나를 추가 하면된다.

```php
// 팝업 설정 이미지 토큰 필드 추가
if(!sql_query(" select nw_token_id from {$g5['new_win_table']} limit 1", false)) {
    sql_query(" ALTER TABLE `{$g5['new_win_table']}` 
                      ADD `nw_token_id` varchar(255) NOT NULL AFTER `nw_content_html`
                        ", true);
}
```

위에 소스는 토큰 유니크 아이디 이다 설정 테이블, 이미지 테이블에 둘 다 존재 해야 된다.

필드 값이 설정, 이미지 두 곳에 똑같이 존재 해야 하는데 설정 테이블에 없거나 다르면 이미지가 삭제 처리 된다. (이건 맨 밑에 로직을 넣었다.)

```php
// 이미지 테이블
if(!sql_query(" DESC {$g5['new_win_image_table']} ", false)) {
    sql_query(" CREATE TABLE IF NOT EXISTS `{$g5['new_win_image_table']}` (
                      `bf_no` int(11) unsigned NOT NULL AUTO_INCREMENT,
                      `bf_source` varchar(255) NOT NULL DEFAULT '',
                      `bf_file` varchar(255) NOT NULL DEFAULT '',
                      `bf_download` int(11) NOT NULL,
                      `bf_content` text NOT NULL,
                      `bf_fileurl` varchar(255) NOT NULL DEFAULT '',
                      `bf_thumburl` varchar(255) NOT NULL DEFAULT '',
                      `bf_storage` varchar(50) NOT NULL DEFAULT '',
                      `bf_filesize` int(11) NOT NULL DEFAULT '0',
                      `bf_width` int(11) NOT NULL DEFAULT '0',
                      `bf_height` smallint(6) NOT NULL DEFAULT '0',
                      `bf_type` tinyint(4) NOT NULL DEFAULT '0',
                      `bf_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                      `bf_token_id` varchar(100) NOT NULL DEFAULT '',
                      PRIMARY KEY (`bf_no`)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8; ", true);
}
```

이게 이미지 테이블이다. 여기서 테이블 배열 변수만 바꾸면 된다.  위에 보면 bf_token_id 필드가 존재한다.

 

이제는 폼으로 접근한다. 예를 들어서 팝업 레이어 폼에서 사용하고 싶다면 거기 폼에 접근해서 form 태그 밑에 아래 코드를 넣는다.

토큰 인풋이 보이면 거기 바로 밑에 소스를 넣으면 된다.

```php
<input type="hidden" name="token_id" id="token_id" value="<?php echo $nw['nw_token_id'] ? $nw['nw_token_id'] : get_uniqid(); ?>">
```

위에 php 소스를 설명하자면 3항 연산자이고 토큰 아이디가 존재 하면 토큰 아이디 $row 배열 변수가 출력 되지만 만약에 없을 경우 유니크아이디가 생성된다. 이 유니크아이디는 영카트에 있다 (즉, 토큰 아이디는 유니크 아이디이다)

(5.4.15 버전에서는 영카트 와 통합 되서 존재 한다. 5.3 이하 면 없 을 경우가 있어서 영카트에서 소스를 떼 와야 한다.)

 

이제는 드롭존 플러그인 렌더링 할 곳에 알 맞 은 자리에 아 래 소스를 넣 어 주면 된다. (보통 맨 아 래에 넣는다.)

```php
<tr>
    <th scope="row"><label for="nw_upload">이미지 업로드<strong class="sound_only"> 필수</strong></label></th>
    <td>
        <div id="myDropzone" class="dropzone"></div>
    </td>
</tr>
```

cdn를 알 맞 은 위치에 넣 어 주면 된다.  

```
<link href='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.css' type='text/css' rel='stylesheet'>
<script src='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js' type='text/javascript'></script>
```

이게 제일 핵심 코드이다. 세팅이 다 됐으니.. 수정 할 곳 은 그냥 에이젝스 쓸 경로만 수정 하면 될 것 이다.

대충 설명 한다면 maxfiles는 최대 업로드 수 이고 이 것은 알 맞 게 수정 한다.  나머지 파라메터는 tokenid를 지정하면된다. 제이쿼리를 하던지 바닐라자스로 지정 하면된다.

(토큰 아이디는 중요 해서 빠지면 에러 생긴다.)

```php
<script>
Dropzone.options.myDropzone = {
    maxFiles: 5,
    paramName:"upload",
    params: {mode:'upload',token_id:$('#token_id').val()},
    dictDefaultMessage: "<strong>클릭하거나 파일을 여기로 옮겨주세요.</strong>",
    dictCancelUpload: "업로드 취소",
    dictRemoveFile: "파일삭제",
    url: "<?php echo G5_ADMIN_URL."/newwin_img_ajax.php"?>",
    addRemoveLinks: true,
    success: function (file, res) {
        $(file.previewElement).attr("data-bf_no", res['bf_no']);
        $(file.previewElement).find(".dz-details").click(function(){
            if(res['image']) {
                editor_instance.insertHtml(`<img src="${res['path']}" alt="${file['name']}"/>`);
            } else {
                editor_instance.insertHtml(`<a href="${res['path']}" target="_blank">${file['name']}</a>`);
            }
        });
    },
    init: function() {
        let myDropzone = this;
        $.ajax({
            method:"post",
            url: "<?php echo G5_ADMIN_URL."/newwin_img_ajax.php"?>",
            data: {mode:'upload_list',token_id:$('#token_id').val()},
            dataType: 'json',
            success: function(data){
                if(data['count']>0) {
                    data['list'].forEach(function(el){
                        const mockFile = {
                            name: el['name'],
                            size: el['size'],
                            type: el['mime'],
                            accepted: true            // required if using 'MaxFiles' option
                        };
                        const res = {'path':el['path'], 'bf_no':el['bf_no'], 'image':el['image']};
                        myDropzone.emit("addedfile", mockFile);
                        if(el['thumb']) {
                            myDropzone.emit("thumbnail", mockFile, el['thumb']);
                        } else {
                            myDropzone.emit("thumbnail", mockFile, el['path']);
                        }
                        myDropzone.emit("success", mockFile, res);
                        myDropzone.emit("complete", mockFile);
                        myDropzone.files.push(mockFile);    // add to files array
                    });
                }
            }
        });
  
        this.on("thumbnail", function(file, dataUrl) {
            $('.dz-image').last().find('img').attr({width: '100%', height: '100%'});
        })
    },
    removedfile: function (file) {
        const bf_no = $(file.previewElement).data("bf_no");
        $.ajax({
            url: "<?php echo G5_ADMIN_URL."/newwin_img_ajax.php"?>",
            method:"post",
            data: {mode:'upload_remove',token_id:$('#token_id').val(),bf_no:bf_no},
            dataType: 'json',
            success: function(data){
                if(data['success']) {
                    $(file.previewElement).remove();
                }
            }
        });
    }
}
</script>
```



밑에꺼는 ajax.php 소스이다.

여기서는 소스 분석해서 수정 해야 된다. 일단 썸네일부분이 미흡하다. 썸네일 빼고 업로드는 잘 된다.

중요한게 디렉토리 경로 수정 하고 디비 인설트 업데이트 델리트 문을 좀 변경만 하면 된다.

$mode 변수를 따로 만든것이니 직접 포스트로 만들어주면된다.

```php
<?php
  
include_once('./_common.php');
  
if($mode == "upload") {
  
    // 디렉토리가 생성
    @mkdir(G5_DATA_PATH.'/new_win_image/', G5_DIR_PERMISSION);
    @chmod(G5_DATA_PATH.'/new_win_image/', G5_DIR_PERMISSION);
  
    $tmp_file  = $_FILES['upload']['tmp_name'];
    $filesize  = $_FILES['upload']['size'];
    $filename  = $_FILES['upload']['name'];
    $filename  = get_safe_filename($filename);
    $dest_file = null;
  
    $success = false;
    $file_path = '';
    $bf_no = 0;
    $is_image = false;
  
    $chars_array = array_merge(range(0,9), range('a','z'), range('A','Z'));
  
    if (is_uploaded_file($tmp_file)) {
  
        //=================================================================\
        // 090714
        // 이미지나 플래시 파일에 악성코드를 심어 업로드 하는 경우를 방지
        // 에러메세지는 출력하지 않는다.
        //-----------------------------------------------------------------
        $timg = @getimagesize($tmp_file);
        // image type
        if (
            preg_match("/\.({$config['cf_image_extension']})$/i", $filename) ||
            preg_match("/\.({$config['cf_flash_extension']})$/i", $filename)
        ) {
            if ($timg['2'] < 1 || $timg['2'] > 16) return;
        }
        //=================================================================
  
        $upload['image'] = $timg;
  
        // 프로그램 원래 파일명
        $upload['source'] = $filename;
        $upload['filesize'] = $filesize;
  
        $upload['fileurl'] = '';
        $upload['thumburl'] = '';
        $upload['storage'] = '';
  
        // 아래의 문자열이 들어간 파일은 -x 를 붙여서 웹경로를 알더라도 실행을 하지 못하도록 함
        $filename = preg_replace("/\.(php|pht|phtm|htm|cgi|pl|exe|jsp|asp|inc)/i", "$0-x", $filename);
  
        shuffle($chars_array);
        $shuffle = implode('', $chars_array);
  
        // 첨부파일 첨부시 첨부파일명에 공백이 포함되어 있으면 일부 PC에서 보이지 않거나 다운로드 되지 않는 현상이 있습니다. (길상여의 님 090925)
        $upload['file'] = abs(ip2long($_SERVER['REMOTE_ADDR'])).'_'.substr($shuffle,0,8).'_'.replace_filename($filename);
  
        $dest_file = G5_DATA_PATH.'/new_win_image/'.$upload['file'];
  
        // 업로드가 안된다면 에러메세지 출력하고 죽어버립니다.
        $error_code = move_uploaded_file($tmp_file, $dest_file) or die($_FILES['bf_file']['error']);
  
        // 올라간 파일의 퍼미션을 변경합니다.
        chmod($dest_file, G5_FILE_PERMISSION);
  
        //썸네일 여기서 썸네일 사이즈 는 새로 적용해줘야한다. 
        $thumb_files = thumb($dest_file,$default['de_pthumb_width'],$default['de_pthumb_height']);
  
        $token_id = $_POST['token_id'];
  
        $sql = " insert into {$g5['new_win_image_table']} set  
                 bf_source = '{$upload['source']}',
                 bf_file = '{$upload['file']}',
                 bf_content = '',
                 bf_fileurl = '{$upload['fileurl']}',
                 bf_thumburl = '{$thumb_files}',
                 bf_storage = '{$upload['storage']}',
                 bf_download = 0,
                 bf_filesize = '".(int)$upload['filesize']."',
                 bf_width = '".(int)$upload['image'][0]."',
                 bf_height = '".(int)$upload['image'][1]."',
                 bf_type = '".(int)$upload['image'][2]."',
                 bf_datetime = '".G5_TIME_YMDHIS."',
                 bf_token_id = '{$token_id}'";
        sql_query($sql);
        $success = true;
        $file_path = '/data/new_win_image/'.$upload['file'];
        $mime = mime_content_type(G5_DATA_PATH.'/new_win_image/'.$upload['file']);
        if(strpos($mime,'image') !== false) {
            $is_image = true;
        }
    }
  
  
    header("Content-Type: application/json");
    echo json_encode([
        'success'=>$success,
        'bf_no'=>$bf_no,
        'image'=>$is_image,
        'path'=> $file_path
    ]);
  
}
else
if($mode == "upload_list") {
  
    $token_id = strip_tags(clean_xss_attributes($_POST['token_id']));
  
    $sql = "
         select bf_source as name, bf_file, bf_no, bf_filesize as size, bf_width as width, bf_height as height
         from {$g5['new_win_image_table']} where bf_token_id = '{$token_id}'
        ";
    $result = sql_query($sql);
  
    $list = [];
    while ($row = sql_fetch_array($result)) {
        $row['path'] = '/data/new_win_image/'.$row['bf_file'];
        $row['image'] = true;
        if(is_file(G5_DATA_PATH.'/new_win_image/'.$row['bf_file'])) {
            $row['mime'] = mime_content_type(G5_DATA_PATH.'/new_win_image/'.$row['bf_file']);
            if(strpos($row['mime'],'image') === false) {
                $ext = pathinfo($row['name'],PATHINFO_EXTENSION);
                $row['thumb'] = G5_DATA_PATH.'/new_win_image/img/extensions/'.$ext.'.svg';
                $row['image'] = false;
            }
        }
        $list[] = $row;
    }
  
    header("Content-Type: application/json");
    echo json_encode([
        'count'=>sizeof($list),
        'list'=>$list
    ]);
  
  
}
else
if($mode == "upload_remove") {
  
    $token_id = strip_tags(clean_xss_attributes($_POST['token_id']));
    $bf_no = strip_tags(clean_xss_attributes($_POST['bf_no']));
  
    $success = false;
    if($bf_no) {
        $row = sql_fetch("
                     select *
                     from {$g5['new_win_image_table']}
                     where bf_token_id = {$token_id}
                     and bf_no = '{$bf_no}'
                    LIMIT 1
                    ");
  
        $delete_file = G5_DATA_PATH.'/new_win_image/'.$row['bf_file'];
        if( file_exists($delete_file) ){
            @unlink(G5_DATA_PATH.'/new_win_image/'.$row['bf_file']);
        }
  
        sql_query("
            delete from {$g5['new_win_image_table']}
            where bf_token_id = '{$token_id}'
            and bf_no = '{$bf_no}'
        ");
        $success = true;
    }
  
  
    header("Content-Type: application/json");
    echo json_encode(['success'=>$success]);
}
```

위에 보면 썸네일 함수 보면 없던 설정 디비 필드가 보 일 것이다. 저건 직접 만들어주던지 아니면 썸네일 사이즈를 지정해주면 된다. 예를들어서 300, 300 으로 해주면된다.

이제 마지막으로 이미지 파일 삭제 소스이다.

이건 이미지 설정에서 토큰 아이디가 불일치 하거나 없으면 쓰레기값이 되는거니 만들어주면 좋다.

불필요한 이미지를 없애주는 로직이다.

 

admin.memu100.php 에 접근해서 아래 소스를 알맞는 곳에 넣어주면 된다.

 

```php
array('100930', '이미지파일 일괄삭제',G5_ADMIN_URL.'/newwin_image_delete.php',   'newwin_image_delete', 1),
```
newwin_image_delete.php 

```php
<?php
  
$sub_menu = '100930';
  
include_once('./_common.php');
  
include_once(G5_THEME_PATH.'/autoload.php');
  
  
  
if ($is_admin != 'super')
  
alert('최고관리자만 접근 가능합니다.', G5_URL);
  
  
  
$g5['title'] = '이미지파일 일괄삭제';
  
include_once('./admin.head.php');
  
?>
  
  
  
<div class="local_desc02 local_desc">
  
<p>
  
완료 메세지가 나오기 전에 프로그램의 실행을 중지하지 마십시오.
  
</p>
  
</div>
  
  
  
<?php
  
  
  
$sql = "
  
select a.bf_token_id,
  
a.bf_file,
  
a.bf_no,
  
a.bf_thumburl,
  
b.nw_token_id
  
from {$g5['new_win_image_table']} a
  
left join {$g5['new_win_table']} b
  
on a.bf_token_id = b.nw_token_id
  
where b.nw_token_id is null
  
order by a.bf_no asc
  
";
  
$list = [];
  
$result = sql_query($sql);
  
for ($i=0;$files = sql_fetch_array($result);$i++) {
  
$path = G5_DATA_PATH.'/new_win_image/';
  
if(is_file($path.$files['bf_file'])) {
  
$list[$i]['files'] = $path.$files['bf_file'];
  
$list[$i]['thumb'] = $path.$files['bf_thumburl'];
  
}
  
}
  
  
  
  
  
  
  
flush();
  
  
  
if (empty($list)) {
  
echo '<p>이미지 디렉토리를 열지 못했습니다.</p>';
  
}
  
  
  
$cnt=0;
  
echo '<ul>'.PHP_EOL;
  
  
  
foreach($list as $image) {
  
if (is_file($image['files'])) {
  
$cnt++;
  
@unlink($image['files']);
  
  
  
echo '<li>'.$image['files'].'</li>'.PHP_EOL;
  
  
  
flush();
  
  
  
if ($cnt%10==0)
  
echo PHP_EOL;
  
}
  
}
  
  
  
  
  
foreach($list as $image) {
  
if (is_file($image['thumb'])) {
  
$cnt++;
  
@unlink($image['thumb']);
  
  
  
echo '<li>'.$image['thumb'].'</li>'.PHP_EOL;
  
  
  
flush();
  
  
  
if ($cnt%10==0)
  
echo PHP_EOL;
  
}
  
}
  
  
  
  
  
  
  
// 이미지 삭제
  
  
  
$sql = "
  
select a.bf_no,a.bf_token_id,
  
a.bf_source as name,
  
a.bf_file,
  
a.bf_no,
  
a.bf_filesize as size,
  
a.bf_width as width,
  
a.bf_height as height,
  
b.nw_token_id
  
from {$g5['new_win_image_table']} a
  
left join {$g5['new_win_table']} b
  
on a.bf_token_id = b.nw_token_id
  
where b.nw_token_id is null
  
order by a.bf_no asc
  
";
  
$list = [];
  
$result = sql_query($sql);
  
while ($row = sql_fetch_array($result)) {
  
if($row['bf_no']) {
  
$sql2 = "delete from {$g5['new_win_image_table']} where bf_no = {$row['bf_no']}";
  
sql_query($sql2);
  
}
  
}
  
  
  
  
  
echo '<li>완료됨</li></ul>'.PHP_EOL;
  
echo '<div class="local_desc01 local_desc"><p><strong>이미지 '.$cnt.'건의 삭제 완료됐습니다.</strong>
프로그램의 실행을 끝마치셔도 좋습니다.</p></div>'.PHP_EOL;
  
?>
  
  
  
<?php
  
include_once('./admin.tail.php');
```

여기까지 마치겠다. 끝!!

추가적으로 함수가 새로 생겼다. 

```php
// 썸네일 간단하게 사용 할때...
  
function thumb($path, $width = 320, $height = 180) {
  
include_once(G5_LIB_PATH."/thumbnail.lib.php");
  
$filename = end(explode("/", $path));
  
$path = dirname($path);
  
return thumbnail($filename, $path, $path, $width, $height, false, true);
  
}
```






