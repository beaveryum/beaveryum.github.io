# 엑셀 파일 읽어와서 mysql db 올리기


## 레시피  

이번 주제는 엑셀에 내용을 읽어서 mysql 디비에 올리는 방법에 대해서 포스팅 글 남겨본다.


구글링으로 찾아보니까 두가지 방법을 찾게 됐는데 장단점이 있다.

첫번째는 phpexcel 1.8 버전이 있다 이건 구글링에서 자주 보게 되는 플러그인인데 흔하지만 단점이 있다.

php7이하에서 사용된다. 상위버전에서는 에러가 많다. (실제로 이걸로 썼는데 에러 투성이라서 삭제 했다.)

사용법은 금방 찾을 수 있어서 포스팅에 올리지 않는다. 

  

두번째는 phpspreadsheet 이다. 스프레드시트는 php 8이상에서도 동작을 한다.

결국엔  이걸로 채택 했다. 구글링 검색 키워드는 phpspreadsheet import excel to mysql php 로 찾아보면 자료가 많다.

 

사용법은 우선 컴포저를 설치 해야한다.

```base
composer require phpoffice/phpspreadsheet
```

아래 소스를 참고해서 응용하면된다. 

```php
<?php
require_once 'vendor/autoload.php';
require_once 'config.php';
   
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Reader\Csv;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;
   
if (isset($_POST['submit'])) {
   
    $file_mimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
       
    if(isset($_FILES['file']['name']) && in_array($_FILES['file']['type'], $file_mimes)) {
       
        $arr_file = explode('.', $_FILES['file']['name']);
        $extension = end($arr_file);
       
        if('csv' == $extension) {
            $reader = new \PhpOffice\PhpSpreadsheet\Reader\Csv();
        } else {
            $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        }
   
        $spreadsheet = $reader->load($_FILES['file']['tmp_name']);
   
        $sheetData = $spreadsheet->getActiveSheet()->toArray();
   
        if (!empty($sheetData)) {
            for ($i=1; $i<count($sheetData); $i++) { //skipping first row
                $name = $sheetData[$i][0];
                $email = $sheetData[$i][1];
                $company = $sheetData[$i][2];
  
                $db->query("INSERT INTO USERS(name, email, company) VALUES('$name', '$email', '$company')");
            }
        }
        echo "Records inserted successfully.";
    } else {
        echo "Upload only CSV or Excel file.";
    }
}
?>
```

일단 나는 1만건 이상의 디비를 업로드 했더니 약간 로딩 되고나서 정상적으로 업로드 됐다. 



## 참고 자료 :

[https://artisansweb.net/read-csv-excel-file-php-using-phpspreadsheet/](https://artisansweb.net/read-csv-excel-file-php-using-phpspreadsheet/)

[https://www.studentstutorial.com/php/Import-excel-data-php-spreadsheet.php](https://www.studentstutorial.com/php/Import-excel-data-php-spreadsheet.php)
