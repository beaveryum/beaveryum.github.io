---
title: 'php file upload 할때 tmp null로 나올경우'
---

# {{ $frontmatter.title }}



파일 업로드를 하는도중에 파일이 업로드가 되지 않아서 원인을 찾아봤다.

일단 디버깅부터 해서 파일 업로드 체크 하자..

 ```php
 print_r($_FILES);
 die();
 ```


이러고 에러 6번이 나온다.

UPLOAD_ERR_NO_TMP_DIR

 
구글링하니까 tmp 파일에 임시파일 업로드가 제대로 되지 않아서 에러가 나온다.

아래 참고 자료를 확인해서 tmp 로 경로를 잡아줬더니 제대로 업로드 된다.

 
여러 원인이 많아서 해결 하려면 에러코드 부터 찾아보고 원인에 맞게 설정을 줘야한다.

upload_max_file 머시기 등등 설정을 줘야된다.



## 해결 방법 :

 ```php
upload_tmp_dir = /tmp/
```

## 참고 자료 :
 
https://blog.naver.com/PostView.nhn?blogId=shiaru&logNo=222300256531