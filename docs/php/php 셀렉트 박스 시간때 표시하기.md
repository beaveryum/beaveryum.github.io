---
title: 'php 셀렉트 박스 시간때 표시하기'
---

# {{ $frontmatter.title }}

```php
$hour=0;
while($hour++<24)
{
$timetoprint=date('G:i:s',mktime($hour,0,0,1,1,2011));
echo$timetoprint;
}
for($t=15;$t<=1440;$t+=15)
$arr[]=sprintf("%02d:%02d",$t/60%24,$t%60);
debug($arr);
```


예시) 00:00 ~ 24:00 

```php
<selectclass=""id="shour"name="shour">
<?php
for($i=9;$i<=24;$i++){
if($i<10){$i="0".$i;}
for($k=00;$k<=24;$k+=30){
if($k==00){$k="0".$k;}
?>
<optionvalue="<?=$i.":".$k?>"><?=$i.":".$k?></option>
<?php}}?>
</select>
$range=range(strtotime("09:00"),strtotime("24:00"),30*60);
foreach($rangeas$time){
echodate("H:i",$time)."\n";
}
```

