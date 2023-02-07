const n=/[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]/,e=[{title:"eslint 관련해서 문제 생기면 참고할것",content:`
# {{ $frontmatter.title }}


일단 길게 쓰는것보다 그냥 아래꺼 참고하면된다.


\`\`\`json
"no-unused-vars": "error", // 사용하지않는 변수 error처리 하겠다.
"no-console": "off", // 콘솔로그를 사용하수 있게 꺼놓겠다.
"no-else-return": "warn",
"semi":"off",
space-unary-ops": 2

\`\`\`






완벽히 수정하면 이렇게 됨

\`\`\`js
module.exports = {
    root: true,
    env: {
      "browser": true,
      "es6": true,
      "node": true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      "prettier"
    ],
    globals: {
        "atomics": "readonly",
        "sharedarraybuffer": "readonly"
    },
    parseroptions: {
        "ecmaversion": 2018
    },
    rules: {
        // 'no-console': ({}).ci_environment === 'production' ? 'warn' : 'off',
        // 'no-debugger': ({}).ci_environment === 'production' ? 'warn' : 'off',
      "no-unused-vars": "error", // 사용하지않는 변수 error처리 하겠다.
      "no-console": "off", // 콘솔로그를 사용하수 있게 꺼놓겠다.
      "no-else-return": "warn",
      "semi": "off",
      "space-unary-ops": 2
    },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
\`\`\`




## 참고 사이트 :


https://triplexlab.tistory.com/40`,link:"/bundle/eslint 관련해서 문제 생기면 참고할것"},{title:"How to use Bootstrap 4 and jQuery with Vite v2",content:`
# {{ $frontmatter.title }}


아래 자료 참고 하기..


https://www.mapledesign.co.uk/tech-blog/vite-bootstrap-4-jquery/
`,link:"/bundle/How to use Bootstrap 4 and jQuery with Vite v2"},{title:"번들러 에러 문제 해결 방법",content:`
# {{ $frontmatter.title }}



번들러 에러 문제 해결 방법 을 기록 한다.`,link:"/bundle/index"},{title:"npm install error while use webpack, Could not resolve dependency",content:`
# {{ $frontmatter.title }}


## 원인 및 해결 방법 :

노드 패키지 설치 할적에 버전들이 레거시라서 문제 생긴것같다.

이럴때 해결 방법은 아래 꺼 참고한다.


npm@7이전 버전보다 더 엄격한 종속성 해결이 있습니다. webpack루트 프로젝트에서 의 버전을 업데이트할 수 있으면 문제가 해결될 수 있습니다. 시도할 수 있는 쉽고 빠른 대안은 npm install --legacy-peer-deps입니다. 



\`\`\`bash
npm install --legacy-peer-deps
\`\`\`


혹은 아래꺼 (근데 위에껏이 정답같다.. 혹시몰라서 남겨본다.

\`\`\`bash
npm install --verbose --force
\`\`\`



구글 키워드

dev webpack@"^4.1.1" from the root project 





## 참고 자료 :

https://stackoverflow.com/questions/67052176/npm-install-error-while-use-webpack-could-not-resolve-dependency`,link:"/bundle/npm install error while use webpack, Could not resolve dependency"},{title:"TypeError: compilation.getCache is not a function",content:`
# {{ $frontmatter.title }}


## 원인 :

typeerror: compilation.getcache is not a function 이런 에러 가 나오는 이유는 

copy-webpack-plugin 이게 문제가 버전이 높아서 그런거 같다.

typeerror: compilation.getcache is not a function at c:\\users\\maarten\\documents\\projects\\test7\\node_modules\\.....

 

## 해결방법 : 
현재 9.0.0 버전에서 마이그레이션 하면 된다.


\`\`\`bash
npm i -d copy-webpack-plugin@6.3.2
\`\`\`



## 참고 자료 :

https://github.com/framework7io/framework7/issues/3785`,link:"/bundle/TypeError: compilation.getCache is not a function"},{title:"vite ssr 관련 자료",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하기...

https://vite-plugin-ssr.com/`,link:"/bundle/vite ssr 관련 자료"},{title:"vite 번들러 관련 자료",content:`
# {{ $frontmatter.title }}


https://github.com/wp-bond/bond/blob/master/src/tooling/vite.php


php로 파일 제어 하는 소스코드`,link:"/bundle/vite 번들러 관련 자료"},{title:"vite 이용해서 구글 폰트 추가",content:`
# {{ $frontmatter.title }}



구글 폰트 추가 하는 방법을 올려본다.


vite.config.js

맨위에 임포트 폰트 를 넣어준다.

import { vitepluginfonts } from 'vite-plugin-fonts'


플러그인 구문에 추가한다.

\`\`\`js
return {
    plugins: [
     .........
       vitepluginfonts({
            google: {
                families: ['varela round'],
            },
        }),
\`\`\`



이렇게 하고 #app 에다가 추가하면됨

\`\`\`css
#app {
font-family: 'varela round', sans-serif;
}
\`\`\`



## 참고 자료 :


https://github.com/stafyniaksacha/vite-plugin-fonts`,link:"/bundle/vite 이용해서 구글 폰트 추가"},{title:'Cannot read property "tap" of undefined',content:`
# {{ $frontmatter.title }}


::: danger
[webpack] typeerror: cannot read property 'tap' of undefined
:::


이런 에러가 출력될때 위에 참고 사이트를 확인 해본다.



https://likejirak.tistory.com/319`,link:"/bundle/webpack : Cannot read property tap of undefined"},{title:"error in entry module not found error can't resolve './src' in ",content:`
# {{ $frontmatter.title }}


## 원인 :


에러의 원인은 많은데 그 중에서 웹팩에서 나오는 원인이 제일 크다.

나 같은 경우 지금 빌드를 하면서 에러가 발생하고 있다. 

webpack.config.js 에서 실행이 되는데 빌드에 필요한 옵션이 없어서 저런 에러가 나온다.

\`\`\`dander
insufficient number of arguments or no entry found. alternatively, run 'webpack(-cli) --help' for us
\`\`\`

 

## 해결방법 :
 
빌드 할때 옵션이 

entry, output 두가지가 꼭 있어야한다. 

여기 아래 참고 자료를 보면된다.

이렇게 경로와 같이 넣게 되면 빌드가 해결 된다.


\`\`\`js
entry : "./frontend/src/index.js",
\`\`\`









`,link:"/bundle/webpack-4-error-in-entry-module-not-found-error-cant-resolve-src"},{title:"빌드 할때 도메인/undefined 아웃풋 될경우",content:`
# {{ $frontmatter.title }}


## 원인 : 

env 설정파일에 url을 넣어서 쓴다. (개발자 생각에 따라 다르다. 굳이 이런 방법으로 할 필요 없다)

왜냐면 로컬서버랑 연동 하려고 그렇게 해놨다.

어쨌든 domain.com/undefined/... 이렇게 나온다 하면 해결 방법은 간단하다

​
## 해결 방법:

webpack.config.common.js 에서 접속해서

공통으로 dotenv로 쓰게 만들어놓으면된다. 그럼 문제 없이 정상적으로 작동 된다.

 

## 맺은말 :
 
nuxt를 사용하지 않기 때문에~ 어쩔 수 없이 위와 같은 방법으로 하게 됐다.


`,link:"/bundle/빌드할때 도메인 undefined 아웃풋 될경우"},{title:"ci4 설치하기",content:`
# {{ $frontmatter.title }}

`,link:"/ci4/설치하기"},{title:"cs",content:`
# {{ $frontmatter.title }}


컴퓨터 공학 기초 (전산학) 대해서 기록을 저장 합니다.`,link:"/cs/index"},{title:"컴퓨터 공학 기초 인강",content:`
# {{ $frontmatter.title }}


[![인강](http://img.youtube.com/vi/bls_gjx-4u8/0.jpg)](https://youtu.be/bls_gjx-4u8?t=0s) 



`,link:"/cs/컴퓨터 공학 기초 인강"},{title:"Apache 에서 hwp 한글문서 저장후에 글자가 깨져 보이는 경우",content:`
# {{ $frontmatter.title }}



http://www.g-it.kr/bbs/board.php?bo_table=prog_server&wr_id=68`,link:"/etc/Apache 에서 hwp 한글문서 저장후에 글자가 깨져 보이는 경우"},{title:"iTerm2 아마존 라이트 세일 접속기록 만들기",content:`
# {{ $frontmatter.title }}


다른거 보고 참고해서 다시 포스트 글 올립니다.

(맥 운영체제 빅서 이상에서 테스트한 자료입니다.)

1. 서버 아이피를 알아둔다.

https://lightsail.aws.amazon.com/ls/webapp/home/instances



2. 라이트세일에서 키를 다운받거나 생성한다.

https://lightsail.aws.amazon.com/ls/webapp/account/keys1



다운받은 펌 키의 퍼미션을 변경한다. chmod 600 xxxx.pem (절대 400 아님)

iterm2 > preferences > profiles 접근한다.

![ex_screenshot](./img/2023-01-26-001.png)


1. 왼쪽 하단 맨아래 판넬 +로 새 추가한다.

2. name에 적당한 이름을 입력!

3. command 드롭다운 메뉴에서 command 선택한다.

4. send text at start 텍스트 입력칸에 ssh -i /pem파일이 위치한 절대경로 centos@ip 입력!

(예: ssh -i /users/hof/documents/mykey.pem -p 22 bitnami@192.168.0.1 )

그리고 나서 확인!

먄약에 포트가 바뀐거면 -p 1234 로 사이에 넣어준다.



그냥 메뉴바를 확인해서 profile 누르면 아까 생성한 서버 이름을 선택하면 된다.

그러면 알아서 iterm2 새창이 띄워준다.

비밀번호 제대로 입력만하면 된다.

아래 자료 참고해서 한건데 몇가지 틀린게 있어서 다시 수정해서 올립니다.



비밀번호 자동으로 넣는 방법은 여기꺼 참고한다.

https://velog.io/@tkaqhcjstk/%eb%a7%a5%eb%b6%81-iterm2-ssh-%ec%9e%90%eb%8f%99-%eb%a1%9c%ea%b7%b8%ec%9d%b8-%ec%84%b8%ed%8c%85%ed%95%98%eb%8a%94-%eb%b2%95






## 참고 자료 :

https://velog.io/@tkaqhcjstk/%eb%a7%a5%eb%b6%81-iterm2-ssh-%ec%9e%90%eb%8f%99-%eb%a1%9c%ea%b7%b8%ec%9d%b8-%ec%84%b8%ed%8c%85%ed%95%98%eb%8a%94-%eb%b2%95

https://hof.pe.kr/8194

`,link:"/etc/iTerm2 아마존 라이트 세일 접속기록 만들기"},{title:"js 난독화 사이트",content:`
# {{ $frontmatter.title }}


사용법은 간단하다 복붙해서 난독화 시켜서 그대로 붙어넣으면된다.


https://obfuscator.io/

https://blog.naver.com/spring1a/221913221159



`,link:"/etc/js 난독화 사이트"},{title:"msa 가 무엇인가?",content:`
# {{ $frontmatter.title }}


https://velog.io/@tedigom/msa-%ec%a0%9c%eb%8c%80%eb%a1%9c-%ec%9d%b4%ed%95%b4%ed%95%98%ea%b8%b0-1-msa%ec%9d%98-%ea%b8%b0%eb%b3%b8-%ea%b0%9c%eb%85%90-3sk28yrv0e`,link:"/etc/msa 가 무엇인가"},{title:"Nginx & Apache 비교",content:`
# {{ $frontmatter.title }}


https://velog.io/@ksso730/nginx-apache-%eb%b9%84%ea%b5%90`,link:"/etc/Nginx & Apache 비교"},{title:"nginx + ssl 서버 설정",content:`
# {{ $frontmatter.title }}



ssl + nginx 하나로 할적에.. 대신에 제대로 달아지지 않는다.

그 이유는 멀티 도메인 ssl 구매를 해야된다.


https://it.tarashin.com/nginx%ec%97%90-%ec%97%ac%eb%9f%ac-%ec%84%9c%eb%b2%84-%ec%97%ac%eb%9f%ac-%eb%8f%84%eb%a9%94%ec%9d%b8subdomain-%ec%97%b0%eb%8f%99%ed%95%98%ea%b8%b0-ssl-%ec%a0%81%ec%9a%a9/`,link:"/etc/nginx + ssl 서버 설정"},{title:"nginx conf 파일",content:`
# {{ $frontmatter.title }}


옛날 회사에서 사용 했던 소스코드


\`\`\`bash
worker_processes  4;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
    multi_accept        on;
    use                 epoll;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server_tokens off;

    gzip on;
    sendfile on;

    client_max_body_size 120m;
    types_hash_max_size 2048;

    access_log off;
    keepalive_timeout  65;

    upstream php_worker {
        server localhost:9052;  # unix:/var/run/php52.socket;  # localhost:9054;
    }

    upstream php_workers5 {
        server localhost:9056; #unix:/var/run/php54.socket;  # localhost:9054;
    }

    upstream php_worker54 {
        server unix:/var/run/php54.socket;  # localhost:9054;
    }

    # http 1.1 support
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header host $http_host;
    proxy_set_header upgrade $http_upgrade;
    proxy_set_header x-real-ip $remote_addr;
    proxy_set_header x-forwarded-for $proxy_add_x_forwarded_for;

    # mitigate httpoxy attack (see readme for details)
    proxy_set_header proxy "";

    include /etc/nginx/conf.d/*.conf;
    include /mnt/extra01/nginx/*.conf;
}
\`\`\`


\`\`\`bash
worker_processes  4;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
    multi_accept        on;
    use                 epoll;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server_tokens off;

    gzip on;
    sendfile on;

    client_max_body_size 120m;
    types_hash_max_size 2048;

    access_log off;
    keepalive_timeout  65;

    upstream php_worker {
        server localhost:9052;  # unix:/var/run/php52.socket;  # localhost:9054;
    }

    upstream php_workers5 {
        server localhost:9056; #unix:/var/run/php54.socket;  # localhost:9054;
    }

    upstream php_worker54 {
        server unix:/var/run/php54.socket;  # localhost:9054;
    }

    # http 1.1 support

ser  nginx;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
    multi_accept        on;
    use                 epoll;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server_tokens off;

    gzip on;
    sendfile on;

    client_max_body_size 120m;
    types_hash_max_size 2048;

    access_log off;
    keepalive_timeout  65;

    upstream php_worker {
        server localhost:9052;  # unix:/var/run/php52.socket;  # localhost:9054;
    }

    upstream php_workers5 {
        server localhost:9056; #unix:/var/run/php54.socket;  # localhost:9054;
    }
  upstream php_worker54 {
        server unix:/var/run/php54.socket;  # localhost:9054;
    }

    # http 1.1 support
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header host $http_host;
    proxy_set_header upgrade $http_upgrade;
    proxy_set_header x-real-ip $remote_addr;
    proxy_set_header x-forwarded-for $proxy_add_x_forwarded_for;

    # mitigate httpoxy attack (see readme for details)
    proxy_set_header proxy "";

    include /etc/nginx/conf.d/*.conf;
    include /mnt/extra01/nginx/*.conf;
}
\`\`\`

\`\`\`bash
server {
        listen  80;
        server_name           klera.or.kr www.klera.or.kr klera.rcsoft.co.kr;
        root                  /mnt/extra01/home/klera/wwwhost;
        client_max_body_size  2g;
        include               /etc/nginx/conf.d/_validate_site_;


        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
                root   /usr/share/nginx/html;
        }

        location / {
                proxy_set_header   host             $host;
                proxy_set_header   x-real-ip        $remote_addr;
                proxy_set_header   x-forwarded-for  $proxy_add_x_forwarded_for;
                proxy_pass_request_headers on;
                try_files $uri $uri/ /index.php?/$request_uri;
                index  index.html index.htm index.php;
        }

        location ~ \\.(php|htm|html)$ {
                try_files $uri =404;
                include        fastcgi_params;
                fastcgi_pass   php_worker;
                fastcgi_index  index.php;
                fastcgi_param  script_filename  $document_root$fastcgi_script_name;
        }

}
\`\`\`




`,link:"/etc/nginx conf 파일"},{title:"nginx ssl 관련해서",content:`
# {{ $frontmatter.title }}


아래 링크 참고하기..


https://www.happykoo.net/@happykoo/posts/210`,link:"/etc/nginx ssl 관련해서"},{title:"upstream sent too big header while reading response header from upstre",content:`
# {{ $frontmatter.title }}


여기 사이트 참고 했더니 버퍼 문제라고 나온다.

nginx.conf 접속해서 아래 소스 추가하면된다.



\`\`\`
fastcgi_buffers 16 16k;
fastcgi_buffer_size 32k;
\`\`\`

그러고 재시작 하면 바로 동작이 잘된다..





## 참고자료 :

https://dev.jaedong.kim/nginx-upstream-sent-too-big-header-while-reading-response-header-from-upstream-error/


`,link:"/etc/nginx upstream error"},{title:"nginx 강제 종료, 테스트 하기",content:`
# {{ $frontmatter.title }}


[root@nginx ~]# /usr/local/nginx/sbin/nginx
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)
nginx: [emerg] still could not bind()





nginx 강제종료

\`\`\`bash
/usr/local/nginx/sbin/nginx -s stop
\`\`\`



nginx 구성파일 변경

\`\`\`bash
/usr/local/nginx/sbin/nginx -s reload
\`\`\`




nginx 구성파일 테스트-1

\`\`\`bash
/usr/local/nginx/sbin/nginx -t
\`\`\`
nginx 서버 설정 변경 시 -t 옵션을 입력하여 테스트를 하는 명령어 입니다


nginx 구성파일 테스트-2

\`\`\`bash
/usr/local/nginx/sbin/nginx -t -c [설정파일.conf]
\`\`\`



실제로 운영 중인 서버에 설정 파일을 조작하였을 경우 위험이 생길 수 있으니

-c 옵션과 설정을 변경하려는 파일을 옵션으로 nginx 설정파일이 이상이 없는지 확인할 수 있습니다.



## 참고 문헌 :

https://server-talk.tistory.com/302`,link:"/etc/nginx 강제 종료, 테스트 하기"},{title:"nginx 서브 호스트 config",content:`
# {{ $frontmatter.title }}



\`\`\`bash
server {
        listen  80;
        server_name            도메인
        root                  /디렉토리;
        client_max_body_size  2g;
        include               /etc/nginx/conf.d/_validate_site_;


        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
                root   /usr/share/nginx/html;
        }

        location / {
                proxy_set_header   host             $host;
                proxy_set_header   x-real-ip        $remote_addr;
                proxy_set_header   x-forwarded-for  $proxy_add_x_forwarded_for;
                proxy_pass_request_headers on;
                try_files $uri $uri/ /index.php?/$request_uri;
                index  index.html index.htm index.php;
        }

        location ~ \\.(php|htm|html)$ {
                include        fastcgi_params;
                fastcgi_pass   php_worker;
                fastcgi_index  index.php;
                fastcgi_param  script_filename  $document_root$fastcgi_script_name;
        }

}
\`\`\`


`,link:"/etc/nginx 서브 호스트 config"},{title:"nginx 설정 도중에 에러 3",content:`
# {{ $frontmatter.title }}


nginx 설정 도중에 에러가 났는데 증상과 치료법을 포스팅 글 올려본다.


## 원인 :

nginx 설정에서 문법 에러 났을 경우

nginx: [emerg] unknown directive "unix:/var/run/php-fpm/php-fpm.sock" in /etc/nginx/nginx.conf:42

nginx: configuration file /etc/nginx/nginx.conf test failed




journalctl -xe 명령어로 확인 할 수 있다. 혹은 nginx -t 명령어로 확인 할 수 있다.


## 해결 방법 :

42번째 줄 위치를 확인하면 server 문법이 빠져 있어서 나온 에러 같다.

\`\`\`bash
upstream php_worker {
    server unix:/var/run/php-fpm/php-fpm.sock;
}

nginx -t && nginx -s reload
\`\`\``,link:"/etc/nginx 설정 도중에 에러 3"},{title:"nginx 설정파일 백엔드 프론트엔드 분리",content:`
# {{ $frontmatter.title }}


아래 설정 파일은 frontend 와 backend 위주로 폴더 분리 해야된다.

소스코드

\`\`\`bash
server {

listen 80;

server_name toyci4vue.beavertech.or.kr;

client_max_body_size 2g;

access_log /var/log/nginx/ci4_toy_vue.access.log;

error_log /var/log/nginx/ci4_toy_vue.error.log;

error_page 500 502 503 504 /50x.html;

autoindex off;

charset utf-8;

root /home/ci4_toy_vue/frontend/dist;

​

location / {

try_files $uri $uri/ /index.html;

index index.html index.htm;

}

​

location /api {

root /home/ci4_toy_vue/backend/public;

rewrite ^/api/(.*)$ /$1 break;

try_files $uri $uri/ /index.php?/$request_uri;

index index.php;

}

​

location ~ \\.php$ {

set $newurl $request_uri;

if ($newurl ~ ^/api/(.*)$) {

set $newurl $1;

root /home/ci4_toy_vue/backend/public;

}

​

fastcgi_split_path_info ^(.+\\.php)(/.+)$;

include fastcgi_params;

fastcgi_pass php_worker;

fastcgi_index index.php;

fastcgi_param script_filename $document_root$fastcgi_script_name;

fastcgi_intercept_errors off;

fastcgi_buffer_size 16k;

fastcgi_buffers 4 16k;

}

​

if (!-e $request_filename ) {

rewrite ^(.*)$ /index.php last;

}

location ~ /\\. {

deny all;

}

location ~ ^/(app|system|vendor|themes|tests)/ {

return 403;

}

}
\`\`\`

여기서 추가적으로 nuxt 기준으로 한다면?

서버폴더는 내부에 따로 있음

\`\`\`bash
server {
        listen       80;
        server_name beaverbuilder.beavertech.or.kr;
        root /home/beaverbuilder/dist;
        index  index.html index.htm index.php;

        add_header x-frame-options "sameorigin";
        add_header x-xss-protection "1; mode=block";
        add_header x-content-type-options "nosniff";

        access_log /var/log/nginx/beaverbuilder.access.log;
        error_log   /var/log/nginx/beaverbuilder.error.log;

        error_page  404              /404.html;
        error_page   500 502 503 504 /50x.php;

        location = /50x.php {
            root   /etc/nginx/block;
        }


        # 접근 제한 -  업로드 디렉토리에서 php 실행 제한
        location /writable/ {
            location ~ \\.(php|html|htm|inc)$ {
              deny all;
            }
        }


        location / {
           try_files $uri $uri/ /index.html;
           index index.html index.htm;
        }


        location /api {
           root /home/beaverbuilder/server/public;
           rewrite ^/api/(.*)$ /$1 break;
           try_files $uri $uri/ /index.php?/$request_uri;
        }

        location ~ \\.php$ {
            set $newurl $request_uri;
            if ($newurl ~ ^/api/(.*)$) {
              set $newurl $1;
              root /home/beaverbuilder/server/public;
            }

            fastcgi_split_path_info ^(.+\\.php)(/.+)$;
            include fastcgi_params;
            fastcgi_pass php_worker81;
            fastcgi_index index.php;
            fastcgi_param script_filename $document_root$fastcgi_script_name;
            fastcgi_intercept_errors off;
            fastcgi_buffer_size 16k;
            fastcgi_buffers 4 16k;
        }

        if (!-e $request_filename ) {
            rewrite ^(.*)$ /index.php last;
        }

        location ~ ^/(app|system|vendor|tests)/ {
            return 403;
        }

        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }

        error_page 404 /index.php;

        location ~ /\\. {
            deny all;
        }
}
\`\`\`

이렇게 내부에 server 폴더 있어야된다.



![2023-01-26-01](./img/2023-01-26-01.png)




참고 자료 :



https://gist.github.com/mreschke/27bfafb84add38d3bab8`,link:"/etc/nginx 설정파일 백엔드 프론트엔드 분리"},{title:"nginx 설치 도중 500 에러 나올경우",content:`
# {{ $frontmatter.title }}


## 원인 :

초기 설정 도중에 갑자기 500 에러가 뜬다..



에러 확인 방법은

journalctl -xe 명령어로 확인 할 수 있다.



## 해결 방법 :

방화벽을 다시 열어주기

\`\`\`bash
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
\`\`\`

외부 방화벽도 열어줘야 한다.

만약에 아마존 서버를 쓴다면 인스턴스 상세에서 인바운드를 80, 443 추가 해준다.

`,link:"/etc/nginx 설치 도중 500 에러 나올경우"},{title:"nginx 설치 도중 에러 address already in use",content:`
# {{ $frontmatter.title }}


## 원인 :

nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use) 라고 에러가 출력된다.


dec 18 14:47:09 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)

dec 18 14:47:10 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)

dec 18 14:47:10 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)

dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: address already in use)

dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal systemd[1]: nginx.service: control process exited, code=exited status=1

dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] still could not bind()

dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal systemd[1]: failed to start nginx - high performance web server.



## 해결 방법 :

selinux를 비활성화 하면된다.

\`\`\`bash
setenforce 0
getenforce
\`\`\`

## 참고 자료 :

https://ko.stealthsettings.com/fix-nginx-start-failed-centos-7-nginx-emerg-open-path-failed-13-permission-denied.html




`,link:"/etc/nginx 설치 도중 에러 address already in use"},{title:'nginx: [error] invalid PID number "" in "/var/run/nginx…',content:`
# {{ $frontmatter.title }}


## 원인 :

nginx: [error] invalid pid number "" in "/var/run/nginx.pid"

엔진엑스가 동작하는 도중에 에러가 났을경우..



## 문제 해결 :

아래 명령어 그대로 입력하면 해결 된다.

\`\`\`bash
pkill -9 nginx nginx -c /etc/nginx/nginx.conf nginx -s reload
\`\`\`


## 참고 자료 :

https://gist.github.com/sun4lower/93bc1ae91dced5af4a445a89450b3176`,link:"/etc/nginx: [error] invalid PID number in"},{title:"php스톰 ftp 연결할때",content:`
# {{ $frontmatter.title }}


ftp 연결 할때 이거 참고할것


https://blog.naver.com/postview.naver?blogid=ldshyun2sub1&logno=221352726411&parentcategoryno=&categoryno=6&viewdate=&isshowpopularposts=true&from=search`,link:"/etc/php스톰 ftp 연결할때"},{title:"restfull api 만들때 응답코드 형식",content:`
# {{ $frontmatter.title }}


이게 맞는 방식인지는 잘은 모르겠지만..

알아서 응용해서 쓴다.



103 : 가입불가

401 : 계정 일치 불가

403 : 접근 제한 대상 ip

404 : 부정로그인 대상 (부정로그인으로 로그인이 차단됨)

405 : 비밀번호 오류 횟수 5회 초과

406: 휴먼 회원

407:휴면 회원

408: 제휴사 휴면

-장기간 미접속하여 휴먼상태입니다. 보인인증후 휴먼해제 가능

410 : 임시비밀번호 발급상태

412 : 강제차단상태

423: 소셜로그인 정보가 존재 하지 않습니다.

437 : 14세 미만은 회원가입 불가





여기거 참고해보면 되는데 나중에 좀더 구체적으로 포스팅 해야겠다.`,link:"/etc/restfull api 만들때 응답코드 형식"},{title:"ssl 사용법2",content:`
# {{ $frontmatter.title }}



ssl 사용방법에 대해서 다시 한번 남겨본다.



https://www.happykoo.net/@happykoo/posts/210

여기 사이트에 있던 소스를 가지고 하면된다.



우선 주의 사항을 좀 더 설명하자면

nginx conf에 꼭 ssl 관련된 소스코드가 있어야된다.

\`\`\`
nginx: [emerg] cannot load certificate "/etc/letsencrypt/live/beaverfactory.com/fullchain.pem": bio_new_file() failed (ssl: error:02001002:system library:fopen:no such file or directory:fopen('/etc/letsencrypt/live/beaverfactory.com/fullchain.pem','r') error:2006d080:bio routines:bio_new_file:no such file)
\`\`\`

이런 에러가 나오는 이유는 소스코드가 풀 키체인 경로가 없어서 그럴수있다.



두번째로 는 아래 처럼 에러를 나올때

\`\`\`
domain: beaverfactory.com
  type:   connection
  detail: 3.36.134.24: fetching
  http://beaverfactory.com/.well-known/acme-challenge/v8lwkiaanuc-o3q0rm9m-xxwziuba-np7u3mprodjwo:
  timeout during connect (likely firewall problem)
이거는 nginx 소스에 ssl 관련 스크립트가 없거나 해당 풀 키체인 경로를 지정 안해줘서 문제된거다
\`\`\`


마지막 아래 처럼 에러가 나올경우

\`\`\`
an unexpected error occurred:
there were too many requests of a given type :: error creating new order :: too many failed authorizations recently: see https://letsencrypt.org/docs/failed-validation-limit/
\`\`\`

이거는 5번이내 실패 하면 에러가 나온다 1시간 이후에 명령어를 입력하라는뜻이다.







결론은 첫단추부터 중요하다

1. ssl 관련 nginx에 넣기 풀 키체인이 경로에 지정 됐는지 확인해야한다.

여기서 한가지 덧붙어 설명하자면 nginx conf 설정이 없는 상태에서 ssl을 생성 했더니 정상적으로 작동하는거를 확인 했다. 실수로 설정 파일을 이름만 default.conf1로 지정 하고 ssl 명령어를 실행 했더니 정상적으로 발급된다.

이게 좀 안전빵일수있어서.. 고민해서 다시 한번 문제되면 이런 방식으로 해보길.. (안되면 1시간 있다가 해야되서.. 잘 선택하길..)



2. nginx 를 완벽히 중단시킬것 nginx -s stop << 이걸로 하면 안된다 systemctl stop nginx로 아예 종료시켜야된다.

아래처럼 메시지 문구가 나온거면 완료 됐다는 문구이다.

\`\`\`
found the following certs:
  certificate name: beaverfactory.com
    serial number: 4c8bff36034e9790942573e670597a0ca5f
    key type: rsa
    domains: beaverfactory.com
    expiry date: 2022-11-27 07:31:51+00:00 (valid: 89 days)
    certificate path: /etc/letsencrypt/live/beaverfactory.com/fullchain.pem
    private key path: /etc/letsencrypt/live/beaverfactory.com/privkey.pem
\`\`\`



이렇게 해서 갱신 명령어를 써주면될것이다. 5번이내 실패를 하면 한시간 이후에 해야되서.. 실패 없이 입력할것!



일단 여기까지 개발일지 써놓고 다음에 다시 새로 올려놓을것이다.


`,link:"/etc/ssl 사용법2"},{title:"vitepress 로 가이드 만든 방법",content:`
# {{ $frontmatter.title }}


## 1. node 설치 하기 (원래 설치 됐으면 넘긴다.)

## 2. mydoc 폴더를 하나 만들기 (응용해서 폴더명 짓는다.)

## 3. 터미널 열고 명령어 입력한다.

\`\`\`bash
cd mydoc
\`\`\`
## 4. 패키지 생성(초기화)

\`\`\`bash
npm init

yarn init
\`\`\`

## 5. 아래 명령어 입력한다. 둘중에 하나 선택

\`\`\`bash
npm install -d vitepress vue

yarn add -d vitepress vue
\`\`\`

## 6. 아래 명령어 입력한다. 폴더 docs 만들어서 index.md 파일 만든다.
\`\`\`bash
mkdir docs && echo '# hello vitepress' > docs/index.md
\`\`\`

## 7. vitepress 테스트 실행한다.
\`\`\`bash
npx vitepress dev docs
\`\`\`



## 8. 패키지 초기화 내용에 아래 소스코드 추가한다.

\`\`\`json
"docs:dev": "vitepress dev docs",
"docs:build": "vitepress build docs",
"docs:preview": "vitepress preview docs"
\`\`\`

테스트 실행할때 아래 명령어로 한다.

yarn docs:dev


## 9. vitepress 설정 에 추가한다.

아래 패키지를 선택에 따라서 설치한다.

\`\`\`json
"devdependencies": {
    "@giscus/vue": "^2.2.6",
    "deepmerge": "^4.2.2",
    "vitepress": "^1.0.0-alpha.40",
    "vitepress-tags": "^0.6.5",
    "vue": "^3.2.45"
  },
  "dependencies": {
    "vitepress-plugin-auto-sidebar": "^1.0.5",
    "vitepress-plugin-simple-search": "^1.3.3"
  }
\`\`\`



만약에 없을경우 디렉토리 새로 만든다.


docs/.vitepress/config.js

위 경로 대로 파일을 만든다.

\`\`\`js
import { getsidebar } from 'vitepress-plugin-auto-sidebar';
import gettags from 'vitepress-tags';
import { defineconfig } from 'vitepress';

const pages = gettags({
    dir: "./docs",
    pattern: "/**/*.md",
    publicmedia: ["icon", "cover"],
    ignore: ["**/public/", "**/node_modules/**/*.md"],
    mediafolder: "_media",
})

export default defineconfig({
    head: [],
    lang: 'ko_kr',
    base: "/",
    markdown: {defaulthighlightlang: 'php'},
    lastupdated: true,
    titletemplate: ':title',
    title: "비버팩토리 기술 블로그",
    themeconfig: {
        sitetitle: '비버팩토리 기술 블로그',
        nav: [
            {
                text: "info",
                items: [
                    {text: "about", link: "/about/"},
                ]
            }
        ],
        sidebar: getsidebar({
            contentroot: '/docs/',
            contentdirs: ['php', 'macos', 'ci4', 'nodejs', 'mysql', 'etc', 'js', 'server', 'vue', '그누&영카트'],
            collapsible: true,
            collapsed: true
        }),
        customdata: {
            pages: pages
        },
        docfooter: {
            prev: '이전',
            next: '다음'
        },
        footer: {
            copyright: "copyright © 2022-2023 비버팩토리 it 블로그 all rights reserved",
        }
    },
});

\`\`\`

위 설정에서 중요한것을 설명한다면?

base: "/", 이부분은 뒷주소가 /docs 로 했을경우 base: "/docs/" 로 추가 해준다.
그리고 일부 애드센스를 넣으려면 
head 배열에다가 추가해야된다.
애드센스 는 구글링으로 직접 찾아본다.

그리고 여기 사이드바 소스 코드를 보면 
contentdirs 가 보일 것이다. 이건 사이드바에 노출할 것들을 수동으로 추가 해준다.
안그럼 노출 안되어서..



docs/.vitepress/theme 

custom.css 새로 만든다.

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=noto+sans+kr:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=noto+sans+kr:wght@100;300;400;500;700;900&family=roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
    --vp-c-brand: #ff7340;
    --vp-c-brand-light: #ff5719;
    --vp-c-brand-lighter: #ff7340;
    --vp-c-brand-lighter: rgba(255, 135, 23, 0.25);
    --vp-c-brand-dark: #ff622d;
    --vp-c-brand-darker: #e23c00;

    --vp-c-sponsor: #fd1d7c;

    /* typography */
    --vp-font-family-base: "noto sans kr", "roboto" sans-serif;

    /* code snippet font */
    --vp-font-family-mono: "noto sans kr", "roboto", sans-serif;
}
\`\`\` 

index.js 파일 만든다.


\`\`\`js
import { h, watch } from 'vue';
import defaulttheme from 'vitepress/theme';
import { usedata, useroute, userouter } from 'vitepress';
import comment from './comment.vue';
import "./custom.css";

export default {
    ...defaulttheme,
    layout() {
        const { isdark } = usedata();
        const route = useroute();
        const router = userouter();

        if (({}).node_env === 'production') {
            watch(route, (path) => {
                const el = document.queryselector('giscus-widget');
                if (el) {
                    el.update();
                }

                if (window.gtag) {
                    gtag('send', 'pageview', path);
                }
            }, { immediate: true });

            watch(isdark, (dark) => {
                const el = document.queryselector('giscus-widget');
                if (el) {
                    el.theme = dark ? 'transparent_dark' : 'light';
                }
            });

            return h(defaulttheme.layout, null, {
                'doc-footer-before': () => h(comment, { theme: isdark.value ? 'transparent_dark' : 'light' })
            })
        }

        return h(defaulttheme.layout, null, {
            'doc-footer-before': () => h('p', {style: 'text-align: center; font-size: 0.625rem;'}, ['댓글 출력 위치. (docs:dev 환경에서는 댓글을 출력하지 않음)'])
        });
    }
}
\`\`\`

comment.vue 파일 만든다.
\`\`\`js
<template>
    <clientonly>
        <div style="margin-top: 3rem;">
            <giscus
                    id="comments"
                    repo="beaveryum/beaveryum.github.io"
                    repoid="r_kgdoi1lxmw"
                    category="문서 댓글"
                    categoryid="dic_kwdoi1lxm84ctxzi"
                    mapping="pathname"
                    term=""
                    strict="0"
                    reactionsenabled="1"
                    emitmetadata="0"
                    inputposition="bottom"
                    :theme="theme"
                    lang="ko"
                    loading="lazy"
            />
        </div>
    </clientonly>
</template>

<script setup>
    import giscus from '@giscus/vue';
    defineprops({
        theme: string
    })
<\/script>
\`\`\`

여기서 필요한게 giscus 이 설치 됐는지 확인후에 없으면 아래 링크 보고 설치한다.

https://giscus.app/ko

사용법은 아래꺼 참고. 

https://dev-ujin.github.io/jekyll-blog/add-comments-and-likes-with-giscus

혹은 따로 구글링 할때 giscus 사용법 찾는다.


.gitignore 파일 만든다.
 
\`\`\`bash
docs/.vitepress/cache
docs/.vitepress/dist
node_modules
.idea
deploy.sh
\`\`\`


마지막 으로 검색창을 만들려면 

vitepress-plugin-simple-search 패키지를 설치한다.

그리고나서 ./docs/vite.config.js 파일을 만든다.

\`\`\`js
import { simplesearch } from "vitepress-plugin-simple-search";
import { defineconfig } from "vite";

export default defineconfig({
    plugins: [simplesearch({partialstoignore:['about'],regexforcontentstripping:''})],
});
\`\`\`

이렇게 소스코드를 넣어준다.

여기서 플러그인을 설명하자면 
partialstoignore 제외대상을 배열로 추가해준다.

regexforcontentstripping 정규식을 추가해준다.

한글,숫자,영문(대소문자) 로 추가해준다.

여기서 정규식을 추가 안하면 한글이 검색이 안된다. 

아래 링크 참고 하자..

https://github.com/stuyk/vitepress-plugin-simple-search


## 참고 자료 :

[매뉴얼](https://vitepress.vuejs.org/guide/getting-started) 

https://dev-ujin.github.io/jekyll-blog/add-comments-and-likes-with-giscus

https://giscus.app/ko


https://github.com/stuyk/vitepress-plugin-simple-search


`,link:"/etc/vitepress 가이드만들기"},{title:"깃헙 페이지에 등록하기",content:`
# {{ $frontmatter.title }}



## 1. 깃헙 주소를 하나 만든다.

예를들어서 "아이디.github.io" 라고 만든다.

커밋을 공개로 설정한다.

그리고 저장소를 생성한다.
 
여기 보고 참고한다.

https://phodobit.kr/49

참고는 대신에 저장소만 만들어 놓은다. 다른거 말고.. 



## 2. 아래 명령어로 main 에 등록해 놓은다.

\`\`\` base
git init
git add -a
git commit -m "feature: github action 자동배포"
git branch -m main
git remote add origin https://github.com/[:userid]/[:userid].github.io.git
git push -f origin main
\`\`\`


## 3. 빌드 해서 배포물 만든다.

\`\`\` base
# build
yarn docs:build
\`\`\`


## 4. 배포 후에 깃헙 등록하기 

배포 폴더 접근 후 
\`\`\` base
cd docs/.vitepress/dist
\`\`\`

깃헙에 등록한다. 아래 명령어 그대로 따라하면된다.

\`\`\` base
git init
git remote add origin https://github.com/[:userid]/[:userid].github.io.git
git pull origin gh-pages
git checkout -b gh-pages
git add -a
git commit -m 'deploy with vitepress'
git push -f origin gh-pages
cd -
\`\`\`


























`,link:"/etc/vitepress 깃헙등록하기"},{title:"깃헙에 등록 할때 에러문제",content:`
# {{ $frontmatter.title }}



만약에 깃헙을 새로 가입해서 만들었다고 치자 

그러면 깃헙 올릴때 에러 하나쯤 생긴다.


support for password authentication was removed on january 24, 2023. please use a personal access token instead. ... the requested url returned error: 403


아래 링크 참고한다.

https://leveloper.tistory.com/211 


여기서 한가지 덧붙여서 설명하자면 

::: danger
5. personal access token 생성 할때 

repo 는 최상위 체크 하고

workflow 도 같이 추가 한다.

user 도 추가한다.
:::

비밀번호는 토큰이라서 꼭 복붙해서 메모 해둔다. (중요해서..) 




깃헙 토큰 인증후 로그인 할때는 아래 처럼 한다.

::: info
$ git clone https://github.com/username/repo.git

username: your_username

password: your_token
::: 



만약에 맥os 일때 키체인이 등록 됐다면 

키체인 들어가서 github 검색 후 종류가 인터넷 암호인 항목을 수정 하던지

삭제 한다.


키 체인이 중복 될 수 없어서 원래 기록이 있었으면 삭제 후에 새로 만들던지 아니면 항목만 수정한다.


## 참고 자료 :


https://velog.io/@shin6949/github-token-%eb%b0%a9%ec%8b%9d%ec%9c%bc%eb%a1%9c-%eb%a1%9c%ea%b7%b8%ec%9d%b8%ed%95%98%ea%b8%b0-ch3ra7vc


[[github] refusing to allow a personal access token to create or update workflow 에러 해결](https://coding-nyan.tistory.com/61)






















`,link:"/etc/vitepress 깃헙에러문제"},{title:"vscode 툴 에러 Delete prettier/prettier",content:`
# {{ $frontmatter.title }}



eslint와 prettier를 같이 사용하면서 작업을 하는 도중 갑자기 delete \`␍\` prettier/prettier 라는 에러가 발생하였다.



\`\`\`
rules: { "prettier/prettier": ["error", { "endofline": "auto" }], },
\`\`\`





## 자료 출처:

https://mine-it-record.tistory.com/601`,link:"/etc/vscode 툴 에러 Delete prettier"},{title:"구글 봇 사용법",content:`
# {{ $frontmatter.title }}



구글링 크롤링 안되게하려면..

user-agent: *
disallow: /숨기고싶은uri경로/



모든 봇들에게 적용된다.

url에 "/"라는 디렉토리는 못긁어가지만

allow: /$
allow: /w/
allow: /orphanedpages
allow: /uncategorizedpages
allow: /shortestpages
allow: /longestpages
allow: /recentchanges
allow: /recentdiscuss

이거는 예외적으로 허용해주겠다


/ <= 이렇게쓰면 하위디렉토리 전부 포함이라는 뜻인거고요`,link:"/etc/구글 봇 사용법"},{title:"구글 애널리틱스 추적 코드 찾기",content:`
# {{ $frontmatter.title }}


위 자료를 참고 해도 안나와서 겨우야 찾았다.





캡쳐 이미지 참고하길..


우선 데이터 스트림을 누른다. (만약에 스트림이 없으면 추가버튼 누른다.)

![2023-01-26-0001](./img/2023-01-26-0001.png)
![2023-01-26-0001](./img/2023-01-26-0002.png)



여기서 태그설정 구성을 누른다. 그리고 오른쪽에 화살표를 누른다.
![2023-01-26-0001](./img/2023-01-26-0003.png)


관리 버튼 누르고 밑에 태그 설치를 누르면 모달창이 나옵니다.
![2023-01-26-0001](./img/2023-01-26-0004.png)

![2023-01-26-0001](./img/2023-01-26-0005.png)

그리고 인스톨 매뉴어리 를 누르면 됩니다.`,link:"/etc/구글 애널리틱스 추적 코드 찾기"},{title:"그누보드용 https nginx 설정",content:`
# {{ $frontmatter.title }}


엔진엑스 전용 설정

\`\`\`bash
server {
    listen 80;
    listen [::]:80;
    server_name  beaverfactory.com;
    root   /home/beaverfactory;
    return      301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name beaverfactory.com;
    root /home/beaverfactory;
    index  index.html index.htm index.php;
    access_log /var/log/nginx/beaverfactory.access.log;
    error_log   /var/log/nginx/beaverfactory.error.log;

     # ssl sessions
    ssl_session_cache shared:ssl:40m;
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    ssl_certificate /etc/letsencrypt/live/beaverfactory.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/beaverfactory.com/privkey.pem;

    error_page  404              /404.html;
    error_page   500 502 503 504 /50x.php;
    location = /50x.php {
        root   /etc/nginx/block;
    }

    #### 그누보드5 nginx rules begin #####
    if (!-e $request_filename){
        rewrite ^/content/([0-9a-za-z_]+)$ /bbs/content.php?co_id=$1&rewrite=1 break;
        rewrite ^/content/([^/]+)/$ /bbs/content.php?co_seo_title=$1&rewrite=1 break;
        rewrite ^/rss/([0-9a-za-z_]+)$ /bbs/rss.php?bo_table=$1 break;
        rewrite ^/orderform$ /theme/factory/orderform.php?item_code=$1&rewrite=1 break;
        rewrite ^/order_confirm$ /theme/factory/order_confirm.php?order_code=$1&rewrite=1 break;
        rewrite ^/mypage$ /theme/factory/mypage.php?mode=$1&rewrite=1;
        rewrite ^/list/([^/]+)/$ /theme/factory/list.php?cate_id=$1&rewrite=1 break;
        rewrite ^/detail/([^/]+)/$ /theme/factory/detail.php?item_code=$1&rewrite=1 break;
        rewrite ^/([0-9a-za-z_]+)$ /bbs/board.php?bo_table=$1&rewrite=1 break;
        rewrite ^/([0-9a-za-z_]+)/write$ /bbs/write.php?bo_table=$1&rewrite=1 break;
        rewrite ^/([0-9a-za-z_]+)/([^/]+)/$ /bbs/board.php?bo_table=$1&wr_seo_title=$2&rewrite=1 break;
        rewrite ^/([0-9a-za-z_]+)/([0-9]+)$ /bbs/board.php?bo_table=$1&wr_id=$2&rewrite=1 break;
    }
    #### 그누보드5 nginx rules end #####
    location = /favicon.ico { log_not_found off; access_log off; }
    location = /robots.txt { log_not_found off; access_log off; allow all; }

    location ~ \\.(gif|jpg|png)$ {
        add_header vary "accept-encoding";
        add_header cache-control "public, no-transform, max-age=31536000";
    }

    # 업로드시 파일+내용 최대 크기.  php.ini 의 post_max_size 값과 동일하게 설정.
    client_max_body_size 30m;

    # 브라우저에 캐싱을 위해, 리소스 만료일 지정
    location ~*.(mp4|ogg|ogv|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf|cur)$ {
           add_header cache-control "max-age=31536000";
           access_log off;
    }

    ### 주의) 접근 제한 설정은 php fastcgi 설정보다 먼저 선언되어야 합니다. ###
    # 접근 제한 - .htaccess 와 버전관리 시스템들
    location ~ /(\\.ht|\\.git|\\.svn) {
        access_log off;
        log_not_found off;
        deny  all;
    }


    # 접근 제한 - 그누보드 업로드 디렉토리에서 php 실행 제한
    location /data/ {
        location ~ \\.(php|html|htm|inc)$ {
          deny all;
        }
    }

    # 접근 제한 - 그누보드 파일 세션
    location /data/session/ {
       deny all;
    }

    # 접근 제한 - 캡챠
    location /bbs/fonts/ {
       deny all;
    }

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \\.php$ {
      fastcgi_split_path_info ^(.+\\.php)(/.+)$;
#     fastcgi_pass php_worker56;
     fastcgi_pass php_worker74;
#      fastcgi_pass php_worker81;
     fastcgi_index index.php;
     include fastcgi_params;
     fastcgi_param script_filename $document_root$fastcgi_script_name;
    }
}
\`\`\`


`,link:"/etc/그누보드용 https nginx 설정"},{title:"그누보드전용 nginx 일반설정",content:`
# {{ $frontmatter.title }}


그누보드 전용 일반 설정

\`\`\`bash
server {
    listen       80;
    server_name pension.beavertech.or.kr;
    root /home/pension;
    index  index.html index.htm index.php;

    access_log /var/log/nginx/pension.access.log;
    error_log   /var/log/nginx/pension.error.log;

    error_page  404              /404.html;
    error_page   500 502 503 504 /50x.php;
    location = /50x.php {
        root   /etc/nginx/block;
    }

    #### 그누보드5 nginx rules begin #####
    if (!-e $request_filename){
#        rewrite ^/content/([0-9a-za-z_]+)$ /bbs/content.php?co_id=$1&rewrite=1 break;
#        rewrite ^/content/([^/]+)/$ /bbs/content.php?co_seo_title=$1&rewrite=1 break;
#        rewrite ^/rss/([0-9a-za-z_]+)$ /bbs/rss.php?bo_table=$1 break;
#        rewrite ^/orderform$ /theme/factory/orderform.php?item_code=$1&rewrite=1 break;
#        rewrite ^/mypage$ /theme/factory/mypage.php?mode=$1&rewrite=1 break;
         rewrite ^/reservation/([^/]+)$ /theme/bv_pension/reservation/index.php?mode=$1&rewrite=1 break;
         rewrite ^/room/([^/]+)$ /theme/bv_pension/room/index.php?code=$1&rewrite=1 break;
         rewrite ^/room_content/([^/]+)$ /theme/bv_pension/room_content/index.php?code=$1&rewrite=1 break;
#        rewrite ^/([0-9a-za-z_]+)$ /bbs/board.php?bo_table=$1&rewrite=1 break;
#        rewrite ^/([0-9a-za-z_]+)/write$ /bbs/write.php?bo_table=$1&rewrite=1 break;
#        rewrite ^/([0-9a-za-z_]+)/([^/]+)/$ /bbs/board.php?bo_table=$1&wr_seo_title=$2&rewrite=1 break;
#        rewrite ^/([0-9a-za-z_]+)/([0-9]+)$ /bbs/board.php?bo_table=$1&wr_id=$2&rewrite=1 break;
    }
    #### 그누보드5 nginx rules end #####

    location = /favicon.ico { log_not_found off; access_log off; }
    location = /robots.txt { log_not_found off; access_log off; allow all; }
    location ~ \\.(gif|jpg|png)$ {
        add_header vary "accept-encoding";
        add_header cache-control "public, no-transform, max-age=31536000";
    }

    # 업로드시 파일+내용 최대 크기.  php.ini 의 post_max_size 값과 동일하게 설정.
    client_max_body_size 30m;

    # 브라우저에 캐싱을 위해, 리소스 만료일 지정
    location ~*.(mp4|ogg|ogv|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf|cur)$ {
           add_header cache-control "max-age=31536000";
           access_log off;
    }

    ### 주의) 접근 제한 설정은 php fastcgi 설정보다 먼저 선언되어야 합니다. ###
    # 접근 제한 - .htaccess 와 버전관리 시스템들
    location ~ /(\\.ht|\\.git|\\.svn) {
        access_log off;
        log_not_found off;
        deny  all;
    }

    # 접근 제한 - 그누보드 업로드 디렉토리에서 php 실행 제한
    location /data/ {
        location ~ \\.(php|html|htm|inc)$ {
          deny all;
        }
    }

    # 접근 제한 - 그누보드 파일 세션
    location /data/session/ {
       deny all;
    }

    # 접근 제한 - 캡챠
    location /bbs/fonts/ {
       deny all;
    }

   location / {
        try_files $uri $uri/ =404;
   }

   location ~ \\.(php|html)$ {
      fastcgi_split_path_info ^(.+\\.php)(/.+)$;
#     fastcgi_pass php_worker56;
     fastcgi_pass php_worker74;
#      fastcgi_pass php_worker81;
     fastcgi_index index.php;
     include fastcgi_params;
     fastcgi_param script_filename $document_root$fastcgi_script_name;
   }
}
\`\`\`




`,link:"/etc/그누보드전용 nginx 일반설정"},{title:"깃허브 파일 모두 삭제 후 초기 상태로 되돌리기",content:`
# {{ $frontmatter.title }}



일단 깃 을 삭제 한다.

(깃을 삭제 하려면 폴더 내부에 숨겨져 있다. 숨김 해제부터 해야된다.)

\`\`\`
rm -rf .git
\`\`\`



깃헙을 다시 생성 한다.

\`\`\`bash
git init
git add .
git commit -m 'initial commit'
git remote add origin <깃헙 레포지토리 url>
# 한번 지웠다 다시 하면 에러가 발생한다. force push 명령어를 추가하여 강제 업로드 한다!
git push origin master -f
\`\`\`



`,link:"/etc/깃허브 파일 모두 삭제 후 초기 상태로 되돌리기"},{title:"깃헙 브랜치로 업로드, 폴더 제외하기",content:`
# {{ $frontmatter.title }}


1. find or create a branch 여기서 브랜치 이름을 입력 한다.

2. create a branch 라는 링크가 만들어지면 클릭하면 된다.

![ex_screenshot](./img/2023-01-26-002.png)



브랜치 에 등록하면 된다.

아래 명령어로 활용하면 된다.

\`\`\`bash
git init git remote add origin https://github.com/~.git
git pull origin 브런치이름
git checkout -b 브런치이름
git add . git commit -m "어쩌구"
git push origin 브런치이름
\`\`\`


문제 해결 방법

q : 프로젝트 구조가 달라서 푸시에 문제가 발생 될 경우

a : .git 을 먼저 삭제 한다 (숨겨진 파일이라서 운영체제에 맞게 보이는파일로 변경 해야 된다.)



그리고 위에 브랜치 등록하는 방법을 그대로 사용한다. (명령어 그래도 사용함)



푸시 명령어만 따로 써주자

\`\`\`bash
git push -u origin +<브런치명>
\`\`\`

위에 명령어는 강제로 푸시한다는 뜻이다.



q. 브랜치를 삭제 하고 싶다면?

리모트에서 삭제

\`\`\`bash
git push origin --delete 브랜치명
\`\`\`

로컬에서 삭제

\`\`\`bash
git branch -d 브랜치명
\`\`\`



q. 여기서 해당 폴더를 제외 시키고 싶다면?

1. 프로젝트의 최상단 경로에 '. gitignore' 파일을 하나 생성해준다.





2. 내용은 node_modules 라고 만든다.

명령어를 입력한다.


\`\`\`bash
git rm -r --cached . git add . git commit -m "now .gitignore is working" git push
\`\`\`



여기서 아래 처럼 경고 메시지 나온다면?



fatal: the current branch final1_1 has no upstream branch. to push the current branch and set the remote as upstream, use

\`\`\`bash
git push --set-upstream origin final1_1
\`\`\`

위에 명령어 대로 똑같이 입력하면 된다.

\`\`\`bash
git push --set-upstream origin final1_1
\`\`\`



깃 연결 끊기

\`\`\`bash
git remote remove origin
\`\`\`




`,link:"/etc/깃헙 브랜치로 업로드, 폴더 제외하기"},{title:"깃헙 저장소 삭제하기",content:`
# {{ $frontmatter.title }}



저장소 확인한다.

\`\`\`
git remote -v
\`\`\`


저장소 삭제 명령어

\`\`\`
git remote set-url origin <저장소주소> git remote remove origin
\`\`\``,link:"/etc/깃헙 저장소 삭제하기"},{title:"깃헙 퍼미션 에러 문제",content:`
# {{ $frontmatter.title }}



https://maliceit.tistory.com/51


여기 자료 그대로 따라하면 된다.

참고로 깃허브 계정이 필수!!

`,link:"/etc/깃헙 퍼미션 에러 문제"},{title:"깃헙 해당 파일 제외 시키기",content:`
# {{ $frontmatter.title }}


아래 명령어 참고한다.

\`\`\`bash
git rm -r --cached .

git add .

git commit -m "git ignore add"

git push

혹은 아래꺼

git push --set-upstream origin 브랜치명
\`\`\`



명령어로 업로드 하면 된다.

루트 위에다가 파일 하나를 만든다.

\`\`\`
.gitignore
\`\`\`



파일 작성하기

여기서 아래 소스에서 제외 할 것들 추가 하면 된다.

\`\`\`
# directories #

/build/

/bin/

target/

.idea

classes/

meta-inf/

​

# os files #

.ds_store

​

*.class

​

# package files #

*.jar

*.war

*.ear

*.db

​

######################

# windows

######################

​

# windows image file caches

thumbs.db

​

# folder config file

desktop.ini

​

######################

# osx

######################

​

.ds_store

.svn

​

# thumbnails

._*

​

# files that might appear on external disk

.spotlight-v100

.trashes

​

​

######################

# eclipse

######################

​

*.pydevproject

.project

.metadata

bin/**

tmp/**

tmp/**/*

*.tmp

*.bak

*.swp

*~.nib

.classpath

.settings/

.loadpath

/src/main/resources/rebel.xml

# external tool builders

.externaltoolbuilders/

​

# locally stored "eclipse launch configurations"

*.launch

​

# cdt-specific

.cproject

​

# pdt-specific

.buildpath

​

# created by https://www.gitignore.io/api/intellij

​

### intellij ###

# covers jetbrains ides: intellij, rubymine, phpstorm, appcode, pycharm, clion, android studio and webstorm

# reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

​

# user-specific stuff:

.idea/**/workspace.xml

.idea/**/tasks.xml

.idea/dictionaries

​

# sensitive or high-churn files:

.idea/**/datasources/

.idea/**/datasources.ids

.idea/**/datasources.xml

.idea/**/datasources.local.xml

.idea/**/sqldatasources.xml

.idea/**/dynamic.xml

.idea/**/uidesigner.xml

​

# ci4

backend/writable/

frontend/node_modules

​

​

# gradle:

.idea/**/gradle.xml

.idea/**/libraries

​

# cmake

cmake-build-debug/

​

# mongo explorer plugin:

.idea/**/mongosettings.xml

​

## file-based project format:

*.iws

​

## plugin-specific files:

​

# intellij

/out/

​

# mpeltonen/sbt-idea plugin

.idea_modules/

​

# jira plugin

atlassian-ide-plugin.xml

​

# cursive clojure plugin

.idea/replstate.xml

​

# crashlytics plugin (for android studio and intellij)

com_crashlytics_export_strings.xml

crashlytics.properties

crashlytics-build.properties

fabric.properties

​

### intellij patch ###

# comment reason: https://github.com/joeblau/gitignore.io/issues/186#issuecomment-215987721

​

# *.iml

# modules.xml

# .idea/misc.xml

# *.ipr

​

# sonarlint plugin

.idea/sonarlint
\`\`\`

`,link:"/etc/깃헙 해당 파일 제외 시키기"},{title:"다른분이 만든 토이프로젝트 구경하기",content:`
# {{ $frontmatter.title }}


https://devfolio.kr/`,link:"/etc/다른분이 만든 토이프로젝트 구경하기"},{title:"레디스 설치",content:`
# {{ $frontmatter.title }}


https://devlog-wjdrbs96.tistory.com/374`,link:"/etc/레디스 설치"},{title:"메일 발송에 대해서",content:`
# {{ $frontmatter.title }}



## 잡담 :

메일 발송 하면 스팸으로 보내지는 경우가 허다하다. 왜냐하면 화이트 도메인이 아니라서 스팸 처리가 되는데 카카오, 구글, 네이버에 제공되는 smtp 서버 를 이용하던지.. (이것도 간혹가다 스팸 처리 된다.) 메일 플랫폼을 쓰면 된다.


메일 플랫폼은 구글 클라우드 메일 플랫폼, 메일건, 메일젯 등이 있다. 메일건은 한달 8000 ~ 12000건의 메일은 무료이다 소규모에서 쓸수 있다고 하고 직접 메일 서버를 구축하려면 아마존 서버 같은경우 25 포트가 차단되어서 따로 풀어달라고 요청해야된다.


어쨌든 메일 도메인 쓰려면 호스팅 업체에 있는것도 있지만.. 플랫폼을 이용해서 써보는게 좋을것 같다. 아! 하나 빼먹은게 있는데 다음에서 스마트 워크로 사용 하면 된다! 근데 조건이 있어서 잘 보고 선택 해야한다. 무료 일때만 해당 된다. (참고로 나는 스마트워크로 쓴다.) 그리고 호스팅 마다 메일서버가 존재해서 호스팅 조건을 자세히 읽어봐야한다.`,link:"/etc/메일 발송에 대해서"},{title:"아이디어 메모",content:`
# {{ $frontmatter.title }}


펜션 시스템


https://acm.homz.co.kr/docs/

`,link:"/etc/아이디어"},{title:"엔진엑스 설정 (최종 원본)",content:`
# {{ $frontmatter.title }}


참고해서 응용하면 된다.


\`\`\`bash
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# load dynamic modules. see /usr/share/doc/nginx/readme.dynamic.
#include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
    multi_accept       on;
    use                epoll;
}

http {
#    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
#                      '$status $body_bytes_sent "$http_referer" '
#                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log;

    server_tokens off;
    gzip on;

    client_max_body_size 120m;
    fastcgi_buffers 8 16k;
    fastcgi_buffer_size 32k;
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;


    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    upstream php_worker {
        server unix:/var/run/php-fpm/php-fpm.sock;
    }

    # http 1.1 support
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header host $http_host;
    proxy_set_header upgrade $http_upgrade;
    proxy_set_header x-real-ip $remote_addr;
    proxy_set_header x-forwarded-for $proxy_add_x_forwarded_for;

    # mitigate httpoxy attack (see readme for details)
    proxy_set_header proxy "";

    # load modular configuration files from the /etc/nginx/conf.d directory.
    # see http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

}
\`\`\``,link:"/etc/엔진엑스 설정 (최종 원본)"},{title:"엔진엑스 설정 에러 - Access denied",content:`
# {{ $frontmatter.title }}


## 원인 :

갑자기 'access denied.' 라고 브라우저에서 이런 에러가 출력 됐다.






## 해결 방법 :

\`\`\`bash
vi /etc/php-fpm.d/www.conf

security.limit_extensions = .php .html
\`\`\`

공백으로 해두고 저장 한다.



재 시작 하기

\`\`\`bash
sudo service php-fpm restart
\`\`\``,link:"/etc/엔진엑스 설정 에러 - Access denied"},{title:"의뢰 받을때 알아야 할것들",content:`
# {{ $frontmatter.title }}


ftp 접속할때 비밀번호가 틀릴경우가 있어서 이럴때 휴대폰 인증 다시 받아야함..


의뢰자분한테 연락해서 문자 받아야된다~ 그래서 소통을 잘해야되는데 의뢰인 마다 성격이 달라서.. 귀찮게 해서 결국엔 받아 와야 한다~ 호스팅비 호스팅 비용이 거의 4만원 이상이다.


도메인 2 / 호스팅 2 정도 된다 1년 마다 갱신 하는거라서.. 그리고 네이버에 검색 노출할때 어디 마케팅 측에서 전화온다.


돈만 주면 따로 홍보까지 해주는데 이건 필수가 아니라서.. 구글 노출하면 2주정도 기간을 잡아야한다고 얘기하면된다.`,link:"/etc/의뢰 받을때 알아야 할것들"},{title:"카페24 사용 주의사항 및 홈피 필수 자료",content:`
# {{ $frontmatter.title }}


우선 카페 24 쓸때 회원가입을 할때 사업자등록증이 필요하다 아니면 그냥 일반 회원 하면 되긴한데..

가입을 할때 이메일에 공백이 생기면 안된다.

그것도 모르고 공백 생겨서.. 문제 생기고 문의글 남겼더니 겨우야 해결 했는데.. 답장이 좀 늦어서..

그리고 휴대폰번호 인증 번호가 필요해서 인증번호 알려달라고 여쭤야됨..



그리고 계정 같은거 카카오,네이버,구글,줌 등 포탈사이트 계정 받아와야한다

왜냐면 검색 노출때문에 알아야한다.`,link:"/etc/카페24 사용 주의사항"},{title:"프리랜서 세금 관련",content:`
# {{ $frontmatter.title }}


![ex_screenshot](./img/2023-01-26-00001.jpeg)


![ex_screenshot](./img/2023-01-26-00002.png)


![ex_screenshot](./img/2023-01-26-00003.png)


![ex_screenshot](./img/2023-01-26-00004.png)


![ex_screenshot](./img/2023-01-26-00005.png)


![ex_screenshot](./img/2023-01-26-00006.png)


![ex_screenshot](./img/2023-01-26-00007.png)


![ex_screenshot](./img/2023-01-26-00008.png)`,link:"/etc/프리랜서 세금 관련"},{title:"호스팅케이알 도메인 연결",content:`
# {{ $frontmatter.title }}


https://world9604.kr/entry/%ed%98%b8%ec%8a%a4%ed%8c%85%ec%bc%80%ec%9d%b4%ec%95%8c-%ed%8b%b0%ec%8a%a4%ed%86%a0%eb%a6%ac-%ea%b0%9c%ec%9d%b8-%eb%8f%84%eb%a9%94%ec%9d%b8-%ec%97%b0%ea%b2%b0-%eb%b0%a9%eb%b2%95`,link:"/etc/호스팅케이알 도메인 연결"},{title:"다트 언어 배우기 : 변수에 대한 몇가지 약속",content:`
# {{ $frontmatter.title }}


다트언어 인강보면서 내가 잘못 이해를 했엇나..

아까는 선언 이렇게 하면 안된다고 하길래 ..



어쨌든 다시 설명하자면


\`\`\`
string test = 'dasdad';

string test = 'dasdad213123';
\`\`\`


이렇게 하면 안된다.

\`\`\`
string test = 'dasdad';

test = 'dasdad213123';
\`\`\`


이렇게 해야됨



int test = 1;

타입이 같던 똑같던 같은 이름에 변수 선언은 할 수 없다.





그리고 변수명 지을때 캐멀 케이스로 하면됨

또는 앞에 언더바를 넣고 _test 해도 된다. (근데 클래스에서 쓸때.. 알아두기만하면됨)



즉, 소문자, 언더스코어 를 할때 가능함

만약에 여러개로 하게되면 캐멀 케이스로 변수명을 지정함



여기서 첫번째 문자가 대문자는 클래스에서만 사용하게됨



이름 중복은 안됨..`,link:"/flutter/다트 언어 배우기 : 변수"},{title:"다트 언어 배우기10 - 함수형 프로그래밍",content:`
# {{ $frontmatter.title }}


\`\`\`
void main() {

  list<string> blackpink = ['로제','지수','제니','리사'];

//   print(blackpink.asmap());
//   print(blackpink.tostring());

//   map blackpinkmap = blackpink.asmap();

//   print(blackpinkmap.keys.tolist());
//   print(blackpinkmap.values.tolist());

  final newblackpink = blackpink.map((x){
    return '$x';
  });

  final newblackpink2 = blackpink.map((x) => '$x');

//   print(blackpink);
  print(newblackpink2);

}
\`\`\`

리스트에서 쓰던것을 맵에서 루프로 돌려서 출력하면 값이 변한다

그러고 다음에 .tolist();를 같이 붙어서 쓰게되면 리스트 그대로 나옴


\`\`\`
final newblackpink2 = blackpink.map((x) => '$x').tolist();
\`\`\`


그냥 위에서 맵으로 지정하면 맵으로 자료형이 출력되고 투리스트로 하게되면 리스트로 자료형이 변환하게됨

\`\`\`
void main() {

  list<map<string,string>> idol = [
    {
      'name' : '로제',
      'group' : '블핑',
    },
     {
      'name' : '지수',
      'group' : '블핑',
    },
     {
      'name' : '뷔',
      'group' : '비티에스',
    },
     {
      'name' : '알엠',
      'group' : '비티에스',
    }
  ];

//   print(idol);

  final blackpink = idol.where((x) => x['group'] == "블핑").tolist();

  final bts = idol.where((x) => x['group'] == "비티에스").tolist();


  print(blackpink);
  print(bts);

//   [{name: 로제, group: 블핑}, {name: 지수, group: 블핑}]
// [{name: 뷔, group: 비티에스}, {name: 알엠, group: 비티에스}]

}
\`\`\`

// 캐스케이팅 오퍼레이터
\`\`\`
list<int> even = [
  2,
  4,
  6,
  8
];

list<int> odd = [
  1,
  3,
  5,
  7
];

print([...even,...odd]);
\`\`\`


## 참고 영상 :

[![video label](http://img.youtube.com/vi/fwh27a_d-20/0.jpg)](https://youtu.be/fwh27a_d-20?t=0s)`,link:"/flutter/다트 언어 배우기 11"},{title:"다트 언어 배우기1",content:`
# {{ $frontmatter.title }}


https://www.dartpad.dev/


[![video label](http://img.youtube.com/vi/-o53_9mh-co/0.jpg)](https://youtu.be/-o53_9mh-co?t=0s)`,link:"/flutter/다트 언어 배우기1"},{title:"다트 언어 배우기10 - 제너릭",content:`
# {{ $frontmatter.title }}


다트에서 제너릭이란 ?



타입을 외부에서 받을때 사용

\`\`\`
void main() {

  generic<int,string> gen = generic(1,'방가');
  gen.printid;

}

class generic<t, x> {
  final t id;
  final x name;

  generic(this.id,this.name);

  void printid() {
    print(id.runtimetype);
  }
}
\`\`\`

모든 클래스 최상위는 object이다..

`,link:"/flutter/다트 언어 배우기10"},{title:"다트 언어 배우기2",content:`
# {{ $frontmatter.title }}



변수 선언


여기 밑에 있는 레퍼런스 자료 참고하면됨

https://blockdmask.tistory.com/393



다트언어 공식문서

https://dart.dev/guides



문자열에서..



문자열 출력 할적에

print ('$name1$name2');

이렇게 딸라 표시가 있으면 변수로 인식이 된다고함

글자가 아닌 변수로 인식됨



int count = 5;

string txt = " 가나다라 $count ";



이렇게 하면 txt문자열 변수가 출력을 하게되면

가나다라 5 라고 나옴





var 와 dynamic



바 같은경우는 한번 선언하면 자료형이 자동으로 선언된다.

그리고 선언한 변수는 값이 변경 할수 없다.. (약간 콘스트 나 파이널 같은?)



그래서 결국엔 다이나믹으로 선언하면 값을 재 할당 할수있다..



그러나~ 바를 선언하고 var name; 값만 선언을 안할 경우에는 문자열이나 인트를 할당할경우

자동으로 자료형이 선언된다고한다.





근데 여기서 바 타입은 왠만하면 자주 활용하면 안된다.

왜냐면 유지보수를 하게된다면 어떤 변수에 자료형이 선언된건지 알수없기 때문에...

개발 규칙을 통해서 자료형을 직접 선언해주면 좋다.

아래 영상 참고하면된다.


[![video label](http://img.youtube.com/vi/8m89hkbobym/0.jpg)](https://youtu.be/8m89hkbobym?t=0s)


`,link:"/flutter/다트 언어 배우기2"},{title:"다트 언어 배우기3",content:`
# {{ $frontmatter.title }}


리스트 에 대해서..



리스트는 배열 이다..?




\`\`\`
list txt = [] << 이렇게 선언

list test = new list(); << 둘다 동일하다.
\`\`\`




추가 할적에는

\`\`\`
txt.add('홍길동');
\`\`\`


인덱스 >> 순서


삭제할경우
\`\`\`
txt.removeat(0); << 여기서 파라메터가 인덱스..
\`\`\`




그리고 여기서 리스트에 넣은 값을 출력하고 싶다면



txt[0] 이렇게 하면 0번째에 순서로 출력이된다.

txt[3] 이러면 3번째로..



여기서 리스트에 새로 값을 할당 하려면


\`\`\`
txt[0] = '부처님';
\`\`\`


이렇게 하면 됨



자 여기서

리스트에서 타입 선언도 가능하다.


\`\`\`
list<string> test = [];
\`\`\`
여기서는 당연히 문자열 타입만 넣어야한다.





그래블 리스트 :

사이즈를 자유롭게 늘리거나 줄일수있는 리스트

메모리 한도까지 계속 늘릴수있다.









픽시드 랭스 리스트 :

선언한 길이를 정해줘서 리스트가 더이상 늘어날수없다.

\`\`\`
list<string> test = new list(5);
\`\`\`


이렇게 하게되면 5까지만 늘려줌 더이상 늘어날수없다.



그래서 추가와 삭제는 할수가 없다. add, remove 로 처리 할수없다.

그래서 값 변경을 하려면 위에서 배웠던 방법대로 하면된다.


\`\`\`
test[0] = '홍길동';

test[1] = '홍길동2';

test[2] = '콩순이';
\`\`\`




리스트에 값을 넣은 상태에서 선언하기


\`\`\`
list test = ['누구1','누구2','홍길동'];



list test = new list.from(['누구1','누구2','홍길동']);
\`\`\`


여기서 길이를 세려면

\`\`\`
test.length
\`\`\`




## 느낀점 :

php 만 하다보니까.. 자료형 해봐야 배열이나 오브젝트, 문자열 이런것만 써봤다.

그렇다고 자료형이 아예 없는건 아닌데~ 데이터 가공할적에 배열 혹은 오브젝트 위주로만 하다 보니..

그래서 자료형 선언이 생소하게 느껴진다.

자바나 파이썬, 스위프트 잠깐 배웠을때 느낌이랄까.. 나도 이런걸 극복 해서 메인 언어를 바꿔야겠다

지금은 서브 언어로 생각중이지만.. 전문적으로 깊게 배워야겠다.





`,link:"/flutter/다트 언어 배우기3"},{title:"다트 언어 배우기4",content:`
# {{ $frontmatter.title }}



맵 배우기



맵은 키와 밸류, 페어 로 이루어진다.

배열 과 비슷하지만 여기서 페어가 추가됐다고함


\`\`\`
map test = {};
\`\`\`

(이런식인데 꼭 오브젝트 선언하는 느낌이네.. 자스에서는 오브젝트 선언할때 이런식으로 했던기억..)


\`\`\`
map test = {

'사과' : '달다',

'바나나': '달달다'

};
\`\`\`




원하는 값을 빼올때
\`\`\`
test['사과']; << 키값을 넣으면 됨
\`\`\`

\`\`\`
map test = {}; 이렇게 빈 맵을 선언하고
\`\`\`


값을 넣고싶다면


\`\`\`
test.addall({

'사과' : '달다',

'바나나': '달달다'

});
\`\`\`




삭제한다면?


\`\`\`
test.remove('사과');
\`\`\`




값 변경하고싶다면?

\`\`\`
test['바나나'] = '길다';
\`\`\`






맵 선언할적에 두가지 방법


\`\`\`
map test = {};

map test = new map();
\`\`\`




맵에서 값을 넣은 상태에서 선언한다면?

\`\`\`
map test = new map.from({

'사과 ' : '맛나',

'바나나':'길다'

})
\`\`\`




키값만 출력하다면?


\`\`\`
test.keys.tolist();
\`\`\`




값만 출력한다면?

\`\`\`
test.values.tolist();
\`\`\`








맵에다가 자료형을 선언한다면?


\`\`\`
map<string,int> test = {

......

};
\`\`\`


자료형을 좀더 구체화 시켜야지 좋은 코드? 이다.



혹시 몰라서 아래 강의 주소를..

[![video label](http://img.youtube.com/vi/3crsvczpxuu/0.jpg)](https://youtu.be/3crsvczpxuu?t=0s)`,link:"/flutter/다트 언어 배우기4"},{title:"다트 언어 배우기5 - final, const",content:`
# {{ $frontmatter.title }}


final, const

파이널은 한번 타입을 선언하면 값을 바꿀수가 없다

콘스트도 똑같이 한번만 선언하면 값을 바꿀수없다.



파이널과 콘스트 차이점은


파이널은 final은 실행 단계에서 값이 대입되고,

const는 컴파일 단계에서 값이 대입된다.

따라서 속도 측면에서는 const가 더 빠르다.



결국엔 구글링으로 레퍼런스 찾아보니까 여기 블로그 자료가 확실히 도움된다.


https://blog.naver.com/postview.nhn?blogid=chandong83&logno=222300450966&categoryno=131&parentcategoryno=0&viewdate=&currentpage=1&postlisttopcurrentpage=1&from=postview




`,link:"/flutter/다트 언어 배우기5"},{title:"다트 언어 배우기6 - 오버레이터",content:`
# {{ $frontmatter.title }}


오버레이터

[![video label](http://img.youtube.com/vi/cieuev7rez4/0.jpg)](https://youtu.be/cieuev7rez4?t=0s)`,link:"/flutter/다트 언어 배우기6"},{title:"다트 언어 배우기7 - 클래스 oop",content:`
# {{ $frontmatter.title }}



클래스 oop


클래스 명은 첫자는 무조건 대문자



인스턴스화

\`\`\`
void main() {
  tree trees = new tree(
      '소나무',
      100);

    print(trees.getname);
    trees.setname = '팽나무';

    print(trees.getname);
}


class tree {
    string name;
    int age;

    tree(this.name,this.age);

    string get getname {
      return this.name;
    }

    set setname(string name) {
      this.name = name;
    }
}
\`\`\`


여기서 프라이빗을 선언하려면

_ 언더스코어를 넣게되면 된다.

\`\`\`
class _tree {
    string name;
    int age;

    _tree(this.name,this.age);

    string get getname {
      return this.name;
    }

    set setname(string name) {
      this.name = name;
    }
}
\`\`\`
이렇게 하면 같은 파일 내부에서만 쓸수있다.



상속소스코드

\`\`\`
void main() {
  tree trees = new tree(
    name: 'hello',
    age : 100
  );

  trees.sayname();


  sonamoo teum = sonamoo(
  '튼튼이',
    120
  );
  teum.sayname();

}


class tree {
   string name;
   int age;

   tree({
     required this.name,
     required this.age
   });

  void sayname() {
    print ("\${this.name}");
  }

}


class sonamoo extends tree {

  sonamoo(
    string name,
    int age
  ) : super(
    name : name,
    age : age
  );

}
\`\`\`

같은 자식 클래스 내부에 있는 메서드는 같은 다른 클래스에서 사용하지못한다.

예를들어서 sonamoo 클래스에서 나무 흔들기 메서드가 있다고 치자 그러면

tree 부모 클래스에서 적용해서 나무 클래스를 할당이 불가하다.

여기서 tree 클래스 를 파생한 오동나무 클래스에서 나무흔들기 메서드를 할당해서 쓴다해도 불가능하다.

꼭 부모 트리 클래스에서 나무 흔들기 메서드를 추가후에 상속 받은경우만 가능하다.


[![video label](http://img.youtube.com/vi/7e80il_7z70/0.jpg)](https://youtu.be/7e80il_7z70?t=0s)`,link:"/flutter/다트 언어 배우기7"},{title:"다트 언어 배우기8 - 오버라이딩",content:`
# {{ $frontmatter.title }}


\`\`\`
void main() {
  tree trees = new tree(
    'hello',
    100
  );

  print(trees.agecalc());

  sonamoo strong = sonamoo(
    '튼튼이',
    10
  );

  print(strong.agecalc());
}


class tree {
   final string name;
   final int age;

   tree(
     this.name,
     this.age
   );

  int agecalc() {
    return this.age * 10;
  }
}


class sonamoo extends tree {
  sonamoo(
    string name,
    int age
  ) : super(name,age);

  @override
  int agecalc() {
    return super.agecalc() * 120;
  }


}
\`\`\`

[![video label](http://img.youtube.com/vi/7e80il_7z70/0.jpg)](https://youtu.be/7e80il_7z70?t=0s)
`,link:"/flutter/다트 언어 배우기8"},{title:"다트 언어 배우기9 - 인터페이스",content:`
# {{ $frontmatter.title }}

:::info
인터페이스는

특수한 구조를  설계만 하고 이런 형태로 받아서 사용한다고 생각 하면된다.
:::


\`\`\`
void main() {
  tree tree = tree("소나무");
  tree.sayname();
}

abstract class treeinterface {
  string name;

  treeinterface(
    this.name
  );

  void sayname();

}


class tree implements treeinterface {

  string name;

  tree(this.name);

  void sayname() {
    print("나무의 이름은 $name 이다.");
  }

}
\`\`\`



## 느낀점 :

자바를 생각하면된다. 자바에서 사용한것을 다트에서도 문법만 좀 다르게 쓰이는것이다

영상을 보고 따라하는거라서.. 모르면 영상 참고하면된다.

[![video label](http://img.youtube.com/vi/7e80il_7z70/0.jpg)](https://youtu.be/7e80il_7z70?t=0s)


`,link:"/flutter/다트 언어 배우기9"},{title:"웹뷰앱 자료",content:`
# {{ $frontmatter.title }}



https://velog.io/@gyodaesaeng/%ed%94%8c%eb%9f%ac%ed%84%b0-%ed%95%98%ec%9d%b4%eb%b8%8c%eb%a6%ac%eb%93%9c-%ec%95%b1-%eb%a7%8c%eb%93%a4%ea%b8%b0-webview-%ec%9b%b9%ec%84%9c%eb%b2%84`,link:"/flutter/웹뷰앱 자료"},{title:"플러터 공부 다트 언어",content:`
# {{ $frontmatter.title }}


플러터 공부 하려면 다트 언어를 기본으로 공부 해야 된다.



https://www.tutorialspoint.com/dart_programming/index.htm


`,link:"/flutter/플러터 공부 다트 언어"},{title:"플러터 설치 방법",content:`
# {{ $frontmatter.title }}


요약 제대로 안했음..

플로터를 왜?

:::info
- 플로터를 왜 공부 하게 됐냐면? 앱을 만들때 안드랑 애플 앱 둘다 만들기 위해서 하이브리드로 할지 뭘로 할지 모르기 때문에 무작정 부딧혀 보기로 했다.
:::




사전에 미리 준비 해야될 것들

안드로이드 스튜디오 프로그램 툴

엑스코드 프로그램 툴



위에 툴을 설치하려면 여기 레퍼런스 참고 해서 설치 한다.



https://puzzle-puzzle.tistory.com/entry/flutter-플러터-설치하기-install-flutter-for-mac


https://spiralmoon.tistory.com/entry/flutter-mac에-flutter-개발환경-설치하기


sdk 설치 하기

https://flutter.dev/docs/get-started/install/macos


혹시나 플러터 설치가 제대로 안됐을경우..

https://island-developer.tistory.com/78


위에 레퍼런스 보고 설치 하면된다.

\`\`\`
vi .zshrc

export path=$path:~/flutter/bin

source ~/.zshrc
\`\`\`



여기서 중요한게 경로는 알아서 지정 해야한다.

~ 물결 표시는 /users/사용자/ 해당 경로를 나타내는거다

혹시 모르면 터미널에 pwd를 입력해서 확인해본다.



나머지 플러터 닥터로 나머지 설치 해야된 부분을 알수있다.

\`\`\`
flutter doctor
\`\`\`

플로터 닥터를 입력하면 플로터에 문제가 되는부분이 출력된다.

일단 안드로이드 스튜디오 와 엑스코드 둘다 설치를 해둔다.

그리고 밑에 코코어패드? 를 미리 설치한다. 이게 엑스코드 설치 후에 이것도 설치 하라고 나와서 미리 설치 한다.

\`\`\`
sudo gem install cocoapods
\`\`\`


![ex_screenshot](./img/flutter_01.png)



여기 위에 사진을 보면 xcode 에 문제가 된 부분이 있다 여기서 once installed, run : 이렇게 써있다

아래 소스를 복붙해서 하나씩 붙어 넣기 하면된다.

\`\`\`
sudo xcode-select --switch /applications/xcode.app/contents/developer
sudo xcodebuild -runfirstlaunch
\`\`\`

만약에 안드로이드에서 문제가 되면...
![ex_screenshot](./img/flutter_02.png)


아래 명령어 를 입력 하면 된다.

\`\`\`
flutter doctor --android-licenses
\`\`\`

이후에 전체 동의를 하면된다 귀찮지만 y를 눌러서... 쭈우욱...

이러고 마지막에 다시 flutter doctor 로 입력을 하면 문제가 없다고 출력된다.
![ex_screenshot](./img/flutter_03.png)
이렇게 하면 모든 설치가 완료 됐었다.

나머진 알아서 구동하면된다.
`,link:"/flutter/플러터 설치 방법"},{title:":not 과 nth-child 선택자",content:`
# {{ $frontmatter.title }}


not 은 특정선택자가 제외 된 경우를 뜻함 

nth-child로 넣어서 짝수를 제외 시키려면 #### 반대로 홀수면 odd 

응용해서 찾아보면 자료들이 많이 나온다. 

\`\`\`css
.test:not(:nth-child(odd)) {color:red} 
\`\`\``,link:"/html&css/:not 과 nth-child 선택자"},{title:"css flex 2 컬럼 나누기",content:`
# {{ $frontmatter.title }}


플렉스로 2 컬럼 나누기 

 \`\`\`css
ol { display:flex; flex-wrap:wrap; flex-direction:row; max-height: 30px}
ol li { flex:1 1 auto; width:40%; }
 \`\`\`

제일 쉬운방법이다 


## 참고 자료 :

https://stackoverflow.com/questions/51971417/two-column-vertical-numbered-lists-with-flexbox`,link:"/html&css/css flex 2 컬럼 나누기"},{title:"og 태그 카카오미리보기",content:`
# {{ $frontmatter.title }}


오지 태그 만들때.. 

이미지 사이즈 800 x 400 정도 해야하고 png가 좋다 svg로 하면 더 좋다. (이미지 사이즈 큰게 좋다) 

그리고 카카오톡 같은 경우는 개발자 센터에서 오지태그 캐싱 삭제 하는거 있어서 주소 넣고 초기화 버튼 누르면 바로 적용된다. 


https://gemma2ee.tistory.com/11`,link:"/html&css/og 태그 카카오미리보기"},{title:"vite ci 4 연동",content:`
# {{ $frontmatter.title }}


아래 자료 참고 하자..

https://github.com/firtadokei/codeigniter-vitejs`,link:"/html&css/vite ci 4 연동"},{title:"갤럭시 삼성 브라우저 글씨 정렬",content:`
# {{ $frontmatter.title }}


갤럭시 삼성 브라우저는 좀 까다로운가 아이폰 사파리랑 다르게 글씨가 쭈욱 정렬 됐다가 한쪽만 밑으로 내려가는 경우가 있는데 

이건 계속 어떻게 맞춰야할지 생각하다가 간단한 방법을 알게 됐다 line-height 

이걸로 했더니 바로 정렬이 되었다.. 아주 간단한거지만 혹시 몰라서 설명 글 남긴다. 


## 참고 자료 :

https://www.codingfactory.net/10639`,link:"/html&css/갤럭시 삼성 브라우저 글씨 정렬"},{title:"별 만들기",content:`
# {{ $frontmatter.title }}


참고하자..


https://codepen.io/jamesbarnett/pen/najzyk https://codepen.io/jsdev/pen/kqvaqw`,link:"/html&css/별 만들기"},{title:"부트스트랩 폰트 세로 방향으로 내려가는 현상",content:`
# {{ $frontmatter.title }}


폰트쪽에다가 css 를 추가하면된다.

\`\`\`css
white-space: nowrap;
\`\`\`


## 참고 자료 : 

https://tm-im.tistory.com/158`,link:"/html&css/부트스트랩 폰트 세로 방향으로 내려가는 현상"},{title:"사파리 css 관련해서 주의사항",content:`
# {{ $frontmatter.title }}


일단 사파리브라우저에서는 전처럼 float css가 잘 안먹힐때가 있다.

크롬이나 파폭은 아무 문제 없이 잘되는데.. 사파리만 유독 안먹힌다.. 

그래서 display:flex로 해서 justify-content: right; 이걸로 정렬을 해야된다. 이렇게 해도 안먹힌다면 

-webkit-align-items: flex-end;

justify-content: flex-end; 으로 한다. 앞에 웹킷 이라고 따로 추가하면 먹힌다.

그리고 가로로 쭈욱 나열되다가 밑으로 꺽여서 줄 바꿈이 생기는데 line-height로 해서 균형을 맞춰야된다. 

이것도 문제가 된다면 white-space:nowrap 을 주게 되면 먹힌다.



`,link:"/html&css/사파리 css 관련해서 주의사항"},{title:"스크롤 이동 감지가 안되는 원인",content:`
# {{ $frontmatter.title }}


## 원인 : 

스크롤 내려갔을때 고정 되는 메뉴를 구현 하고 있는데 스크롤 감지가 안된다.


## 해결 방법 : 

보통 body 에서 overflow-y:hidden 으로 잡혀 있어서 내려가도 동작 하지 않것이다. 

이걸 없애 버리면 감지 된다. 




### 맺은말 : 

이건 상황에 따라서 다르다~ 내가 경험 한걸 토대로 했을때는 그런거 같은데.. 

구글 신한테 다시 여쭤봐야한다.`,link:"/html&css/스크롤 이동 감지가 안되는 원인"},{title:"비버팩토리 기술 블로그",content:"",link:"/index"},{title:"[iOS]WKWebView를 이용한 하이브리드 앱(Hybrid App) 제작하기",content:`
# {{ $frontmatter.title }}


https://jingyu.tistory.com/2`,link:"/ios/[iOS]WKWebView를 이용한 하이브리드 앱(Hybrid App) 제작하기"},{title:"ios 하이브리드앱 만들기",content:`
# {{ $frontmatter.title }}



https://twih1203.medium.com/ios-%ed%95%98%ec%9d%b4%eb%b8%8c%eb%a6%ac%eb%93%9c-%ec%95%b1-%eb%a7%8c%eb%93%a4%ea%b8%b0-2e7a7dcc7aa5`,link:"/ios/ios 하이브리드앱 만들기"},{title:"The operation couldn’t be completed. Unable to log in with account",content:`
# {{ $frontmatter.title }}


## 원인 :

xcode 로 앱 빌드시 아래와 같은 오류 메시지가 출력되었다면

the operation couldn’t be completed. unable to log in with account 'xxx@xxx.com'. the login details for account 'xxx@xxx.com' were rejected.

아래와 같이 문제를 해결할 수 있는 것 같습니다.






## 해결 방법 :

* "xcode -> preferences..." 메뉴를 클릭한다.

* accounts 탭을 클릭한다. * 앱 빌드시에 사용하는 계정을 선택한 후, 다시 로그인한다.



## 참고자료 :

https://blog.naver.com/websearch/221986308033`,link:"/ios/The operation couldn’t be completed. Unable to log in with account"},{title:"axios 오류 처리",content:`
# {{ $frontmatter.title }}




에러 코드 확인 할때 아래 소스코드 참고하기



\`\`\`js
console.log(error.response.data);
console.log(error.response.status);
console.log(error.response.headers);
\`\`\`


https://yamoo9.github.io/axios/guide/error-handling.html`,link:"/js/axios 오류 처리"},{title:"chartjs 사용법",content:`
# {{ $frontmatter.title }}


이전에 구글차트 사용법을 올렸다가.. 사용법은 대충 알겠는데

제이슨형식이 좀 까다롭다.

자유성이 없어서.. 그냥 부트스트랩에서 자주사용하는 차트 라이브러리를 올려본다.

 
http://microbuilder.io/blog/2016/01/10/plotting-json-data-with-chart-js.html


위에 자료 참고하면된다 쉽게 나와서 금방 터득할수있다. `,link:"/js/chartjs 사용법"},{title:"js",content:`
# {{ $frontmatter.title }}


자바스크립트 공부 및 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/js/index"},{title:"jquery validate plugin 2",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자...


https://gracefullight.dev/2016/12/21/jquery-validation-custom-methods/`,link:"/js/jquery validate plugin 2"},{title:"jquery validate plugin",content:`
# {{ $frontmatter.title }}


제이쿼리 검증 플러그인 정규식 포함 


\`\`\`js
$.validator.addmethod("koreanletters", function(value, element){
   return this.optional(element) || value.match("/^[가-힣]+$/");
}, "한글로 입력 해주세요.");

$.validator.addmethod("pw_regexp",  function( value, element ) {
   return this.optional(element) || value.match("/^.*(?=.*\\\\d)(?=.*[a-za-z])(?=.*[!@#$%^&+=]).*$/");
},'영문 대 소문자, 숫자, 특수문자를 사용하세요.');


$.validator.addmethod("phone_regexp", function(phone_number, element) {
   phone_number = phone_number.replace(/\\s+/g, "");
   return this.optional(element) || phone_number.length > 9 &&
       phone_number.match(/^(?:(010-\\d{4})|(01[1|6|7|8|9]-\\d{3,4}))-(\\d{4})$/)
       || this.optional(element) || phone_number.length > 9 &&
       phone_number.match(/^\\d{2,3}-\\d{3,4}-\\d{4}$/);
}, "정확한 형식을 입력하여 주세요.");


$.extend( $.validator.messages, { required: "필수 항목입니다.", remote: "항목을 수정하세요.", email: "유효하지 않은 e-mail주소입니다.", url: "유효하지 않은 url입니다.", date: "올바른 날짜를 입력하세요.", dateiso: "올바른 날짜(iso)를 입력하세요.", number: "유효한 숫자가 아닙니다.", digits: "숫자만 입력 가능합니다.", creditcard: "신용카드 번호가 바르지 않습니다.", equalto: "같은 값을 다시 입력하세요.", extension: "올바른 확장자가 아닙니다.", maxlength: $.validator.format( "{0}자를 넘을 수 없습니다. " ), minlength: $.validator.format( "{0}자 이상 입력하세요." ), rangelength: $.validator.format( "문자 길이가 {0} 에서 {1} 사이의 값을 입력하세요." ), range: $.validator.format( "{0} 에서 {1} 사이의 값을 입력하세요." ), max: $.validator.format( "{0} 이하의 값을 입력하세요." ), min: $.validator.format( "{0} 이상의 값을 입력하세요." ) } );

$.validator.setdefaults({
   highlight: function (element) {},
   errorelement: 'span',
   errorclass: 'error'
});

$("#fregisterform").validate({
   rules: {
       mb_id: {
           required : true
       },
       mb_name : {
           required: true,
           minlength: 2,
           koreanletters:true
       },
       mb_email : {
           required: true,
           email : true
       },
       mb_password:{
           pw_regexp : true,
           minlength : 8,
           maxlength : 20
       },
       mb_password_re:{
           equalto : '#mb_password',
           required: true,
       },
       mb_nick : {
           required: true,
           minlength : 2,
           maxlength : 12
       },
       mb_hp: {
           required : true,
           phone_regexp : true
       }
   },
   messages: {
       mb_id: "필수 입력 사항입니다.",
       mb_name : {
           required: "필수 입력 사항입니다.",
           minlength: "{0} 이내 입력하세요.",
       },
       mb_email : {
           required: "필수 입력 사항입니다.",
       },
       mb_password: {
           required: "필수 입력 사항입니다.",
           minlength : '{0}자 이내 입력하세요.',
           maxlength : '{0}자 이상 입력하세요.',
       },
       mb_password_re: {
           equalto: "이전 비밀번호를 다시 입력하세요.",
       },
       mb_nick : {
           required: "필수 입력 사항입니다.",
           minlength: "{0}자 이내 입력하세요.",
           maxlength : '{0}자 이상 입력하세요.'
       },
       mb_hp: {
           required: "필수 입력 사항입니다."
       }
   },
   submithandler: function(form) {
       form.submit();
   }
});

\`\`\`



`,link:"/js/jquery validate plugin"},{title:"json 오브젝트에 중간에 콤마가 있을때..",content:`
# {{ $frontmatter.title }}


에러 출력 하는걸 만드는데.. 

제이슨 오브젝트로 출력하는데 콤마가 있어서.. 

별것도 아닌데 엄청 삽질 했네..

 

하는 방법은..

\`\`\`js
"message": {
    "reply_username": "이름을 입력해주세요.",
    "reply_msg": "내용을 입력해주세요."
},
\`\`\`

대충 이런식으로 나온거를 에러로 뿌려줘야할 상황이 생긴다면.. 

\`\`\`js
let newarr = object.values(response.message).map(item => item+'
').join('');
$(this).find('#error_msg').html(newarr);
\`\`\`



위에 처럼 하면 결과가 이렇게 나온다.

 
가나다 (엔터)

마바사아 



`,link:"/js/json 오브젝트에 중간에 콤마가 있을때"},{title:"momentjs 날짜 계산",content:`
# {{ $frontmatter.title }}


날짜 이용해서 조회 하는 기능을 만드는데 주문 조회에 보면 날짜가 3일 정도 추가 되서 나온다

그래서 날짜 계산 해보니까 맞게 나왔다. 

https://heavenly-appear.tistory.com/264

위에 링크 보면 날짜 계산 저걸 이용해서 확인하면 된다.

그리고 아래주소 보면서 해결 하면된다.

https://john015.netlify.app/moment-js%eb%a5%bc-day-js%eb%a1%9c-%eb%8c%80%ec%b2%b4%ed%95%98%ea%b8%b0


혹시 몰라서 cdn 주소를 가져왔다. 

\`\`\`html
<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js'><\/script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js'><\/script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/ko.min.js'><\/script>
\`\`\`

아래 형식을 참고해서 풀면 된다.

대충 설명 하자면 개월 수를 계산 할때는 day로 계산하는거 같다. 3개월은 90일 이고 6개월은 180일 등 이렇게 하면됨

\`\`\`js
const date = new date();
             
let today = moment(date).format('yyyy-mm-dd');
let week1 = moment(date).subtract(7,'d').format('yyyy-mm-dd');
let month1 = moment(date).subtract(1, 'months').format('yyyy-mm-dd');
let month3 = moment(date).add(-90, 'day').format('yyyy-mm-dd');
let month6 = moment(date).add(-180, 'day').format('yyyy-mm-dd');
let year = moment(date).add('-1','y').format('yyyy-mm-dd');
\`\`\`



`,link:"/js/momentjs 날짜 계산"},{title:"sly.js Unable to preventDefault inside passive",content:`
# {{ $frontmatter.title }}


## 원인 : 

sly.js 를 사용하게 되면서 에러 발생 했다. 터치 드래그 옵션을 추가 하면서 아래 처럼 에러가 나온다.



unable to preventdefault inside passive event listener due to target being treated as passive




## 해결 방법 : 


css 에서 예를들어서 .slide-container 클래스 내부에서 추가 하면된다. 


\`\`\`js
-ms-touch-action: pan-y; touch-action: pan-y;
\`\`\`
`,link:"/js/sly.js Unable to preventDefault inside passive"},{title:"네이버처럼 스와이프 메뉴 구현 ",content:`
# {{ $frontmatter.title }}


네이버처럼 스와이프 메뉴 구현  

\`\`\`htm
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>swiper demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  
    <!-- link swiper's css -->
    <link rel="stylesheet" href="./swiper.css">
  
    <!-- demo styles -->
    <style>
    body {
        background: #eee;
        font-family: helvetica neue, helvetica, arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    ul, li {list-style-type:none;margin:0;padding:0;}
    .tabs > li { width: 20%; }
    .tabs > li > a { color: #666; padding: 22px 0 20px 0; display: block; background: #fff; text-align: center; text-decoration: none; font-size: 15px; line-height: 20px; border-bottom: 2px solid transparent; -webkit-transition: all .2s ease-in-out; transition: all .2s ease-in-out; }
    .tabs > li.active > a { border-bottom: 2px solid #cc0066; color: #cc0066; }
     
    /* 2016-05-13 수정 */
    .swiper-container-2 { padding: 30px 0; overflow: hidden; }
    .swiper-container-2 .swiper-slide { background:#fff; border:1px dashed #ccc; padding: 20px 15px; font-size: 20px; box-sizing: border-box; }
    /* //2016-05-13 수정 */
  
    #footer{background:pink;padding:20px 15px;font-size:16px;}
    </style>
</head>
<body>
    <!-- swiper -->
    <div class="swiper-container">
        <ul class="swiper-wrapper tabs">
            <li class="swiper-slide active"><a href="#">뉴스</a></li>
            <li class="swiper-slide"><a href="#">연예</a></li>
            <li class="swiper-slide"><a href="#">스포츠</a></li>
            <li class="swiper-slide"><a href="#">웹툰뿜</a></li>
            <li class="swiper-slide"><a href="#">차테크</a></li>
            <li class="swiper-slide"><a href="#">쇼핑</a></li>
            <li class="swiper-slide"><a href="#">동영상</a></li>
            <li class="swiper-slide"><a href="#">리빙푸드</a></li>
            <li class="swiper-slide"><a href="#">20pick</a></li>
            <li class="swiper-slide"><a href="#">추가메뉴-1</a></li>
            <li class="swiper-slide"><a href="#">추가메뉴-2</a></li>
            <li class="swiper-slide"><a href="#">추가메뉴-3</a></li>
            <li class="swiper-slide"><a href="#">추가메뉴-4</a></li>
        </ul>
    </div>
  
    <div class="swiper-container-2">
        <div class="swiper-wrapper">
            <div class="swiper-slide">뉴스</div>
            <div class="swiper-slide">내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
</div>
            <div class="swiper-slide">스포츠</div>
            <div class="swiper-slide">웹툰뿜</div>
            <div class="swiper-slide">내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
</div>
            <div class="swiper-slide">쇼핑 내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
</div>
            <div class="swiper-slide">동영상</div>
            <div class="swiper-slide">리빙푸드</div>
            <div class="swiper-slide">내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
</div>
            <div class="swiper-slide">추가메뉴-1</div>
            <div class="swiper-slide">내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
</div>
            <div class="swiper-slide">추가메뉴-3</div>
            <div class="swiper-slide">내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
내용이 긴부분
</div>
        </div>
    </div>
    <div id="footer">
        footer 영역
    </div>
  
    <!-- swiper js -->
    <script src="https://code.jquery.com/jquery-1.11.3.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swiper/7.0.7/swiper-bundle.min.js"><\/script>
  
    <!-- initialize swiper -->
    <script>
    var swiper_1 = new swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesperview: 5,
        paginationclickable: true,
        spacebetween: 0,
        freemode: true,
        pagination: false
    });
  
    $('.tabs > li > a').on('click', function(e){
        $(this).parent().addclass('active').siblings().removeclass('active');
        var tabidx = $(this).parent().index();
        swiper_2.slideto(tabidx+1, 300);
        e.preventdefault();
    });
  
    var tablen = $('.tabs > li').length;
  
    /* 2016-05-13 수정 */
    var swiper_2 = new swiper('.swiper-container-2', {
        autoheight: true,
        slidesperview: 1,
        spacebetween: 0,
        pagination: false,
        loop: true,
        oninit: function(swiper){
             
        },
        onslidechangestart: function(swiper){
            var idx = swiper.activeindex-1;
            if( idx < 0 ) { 
                idx = tablen - 1;
            } else if( idx == tablen ){
                idx = 0;
            }
            $('.tabs > li').removeclass('active').eq(idx).addclass('active');
            if( idx < tablen ) {
                swiper_1.slideto(idx-1, 300);
            }
        }
    });
    /* //2016-05-13 수정 */
  
    <\/script>
</body>
</html>
\`\`\`

\`\`\`css
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
  
.swiper-container-no-flexbox .swiper-slide {
    float: left;
}
  
.swiper-container-vertical>.swiper-wrapper {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
}
  
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}
  
.swiper-container-android .swiper-slide,.swiper-wrapper {
    -webkit-transform: translate3d(0px,0,0);
    -moz-transform: translate3d(0px,0,0);
    -o-transform: translate(0px,0px);
    -ms-transform: translate3d(0px,0,0);
    transform: translate3d(0px,0,0);
}
  
.swiper-container-multirow>.swiper-wrapper {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}
  
.swiper-container-free-mode>.swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
}
  
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}
  
.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide {
    height: auto;
}
  
.swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-transition-property: -webkit-transform,height;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform,height;
}
  
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
  
.swiper-wp8-horizontal {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
}
  
.swiper-wp8-vertical {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
}
  
.swiper-button-prev,.swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
}
  
.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
}
  
.swiper-button-prev,.swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20viewbox%3d'0%200%2027%2044'%3e%3cpath%20d%3d'm0%2c22l22%2c0l2.1%2c2.1l4.2%2c22l19.9%2c19.9l22%2c44l0%2c22l0%2c22l0%2c22z'%20fill%3d'%23007aff'%2f%3e%3c%2fsvg%3e");
    left: 10px;
    right: auto;
}
  
.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20viewbox%3d'0%200%2027%2044'%3e%3cpath%20d%3d'm0%2c22l22%2c0l2.1%2c2.1l4.2%2c22l19.9%2c19.9l22%2c44l0%2c22l0%2c22l0%2c22z'%20fill%3d'%23000000'%2f%3e%3c%2fsvg%3e");
}
  
.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20viewbox%3d'0%200%2027%2044'%3e%3cpath%20d%3d'm0%2c22l22%2c0l2.1%2c2.1l4.2%2c22l19.9%2c19.9l22%2c44l0%2c22l0%2c22l0%2c22z'%20fill%3d'%23ffffff'%2f%3e%3c%2fsvg%3e");
}
  
.swiper-button-next,.swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20viewbox%3d'0%200%2027%2044'%3e%3cpath%20d%3d'm27%2c22l27%2c22l5%2c44l-2.1-2.1l22.8%2c22l2.9%2c2.1l5%2c0l27%2c22l27%2c22z'%20fill%3d'%23007aff'%2f%3e%3c%2fsvg%3e");
    right: 10px;
    left: auto;
}
  
.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20viewbox%3d'0%200%2027%2044'%3e%3cpath%20d%3d'm27%2c22l27%2c22l5%2c44l-2.1-2.1l22.8%2c22l2.9%2c2.1l5%2c0l27%2c22l27%2c22z'%20fill%3d'%23000000'%2f%3e%3c%2fsvg%3e");
}
  
.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20viewbox%3d'0%200%2027%2044'%3e%3cpath%20d%3d'm27%2c22l27%2c22l5%2c44l-2.1-2.1l22.8%2c22l2.9%2c2.1l5%2c0l27%2c22l27%2c22z'%20fill%3d'%23ffffff'%2f%3e%3c%2fsvg%3e");
}
  
.swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    z-index: 10;
}
  
.swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
}
  
.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
}
  
.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
}
  
button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}
  
.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
}
  
.swiper-pagination-white .swiper-pagination-bullet {
    background: #fff;
}
  
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
}
  
.swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff;
}
  
.swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000;
}
  
.swiper-container-vertical>.swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0px,-50%,0);
    -moz-transform: translate3d(0px,-50%,0);
    -o-transform: translate(0px,-50%);
    -ms-transform: translate3d(0px,-50%,0);
    transform: translate3d(0px,-50%,0);
}
  
.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5px 0;
    display: block;
}
  
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
}
  
.swiper-pagination-progress {
    background: rgba(0,0,0,0.25);
    position: absolute;
}
  
.swiper-pagination-progress .swiper-pagination-progressbar {
    background: #007aff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
}
  
.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
    -webkit-transform-origin: right top;
    -moz-transform-origin: right top;
    -ms-transform-origin: right top;
    -o-transform-origin: right top;
    transform-origin: right top;
}
  
.swiper-container-horizontal>.swiper-pagination-progress {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
}
  
.swiper-container-vertical>.swiper-pagination-progress {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
}
  
.swiper-pagination-progress.swiper-pagination-white {
    background: rgba(255,255,255,0.5);
}
  
.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {
    background: #fff;
}
  
.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {
    background: #000;
}
  
.swiper-container-3d {
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -o-perspective: 1200px;
    perspective: 1200px;
}
  
.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
  
.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
}
  
.swiper-container-3d .swiper-slide-shadow-left {
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(right,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -moz-linear-gradient(right,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(right,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: linear-gradient(to left,rgba(0,0,0,0.5),rgba(0,0,0,0));
}
  
.swiper-container-3d .swiper-slide-shadow-right {
    background-image: -webkit-gradient(linear,right top,left top,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(left,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -moz-linear-gradient(left,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(left,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0));
}
  
.swiper-container-3d .swiper-slide-shadow-top {
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -moz-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0));
}
  
.swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -moz-linear-gradient(top,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(top,rgba(0,0,0,0.5),rgba(0,0,0,0));
    background-image: linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0));
}
  
.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper {
    -ms-perspective: 1200px;
}
  
.swiper-container-cube,.swiper-container-flip {
    overflow: visible;
}
  
.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
}
  
.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none;
}
  
.swiper-container-cube .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}
  
.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
}
  
.swiper-container-cube .swiper-slide {
    visibility: hidden;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
}
  
.swiper-container-cube.swiper-container-rtl .swiper-slide {
    -webkit-transform-origin: 100% 0;
    -moz-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
}
  
.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide {
    pointer-events: auto;
    visibility: visible;
}
  
.swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    z-index: 0;
}
  
.swiper-container-fade.swiper-container-free-mode .swiper-slide {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
  
.swiper-container-fade .swiper-slide {
    pointer-events: none;
    -webkit-transition-property: opacity;
    -moz-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity;
}
  
.swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none;
}
  
.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}
  
.swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0,0,0,0.1);
}
  
.swiper-container-horizontal>.swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%;
}
  
.swiper-container-vertical>.swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%;
}
  
.swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
}
  
.swiper-scrollbar-cursor-drag {
    cursor: move;
}
  
.swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-animation: swiper-preloader-spin 1s steps(12,end) infinite;
    -moz-animation: swiper-preloader-spin 1s steps(12,end) infinite;
    animation: swiper-preloader-spin 1s steps(12,end) infinite;
}
  
.swiper-lazy-preloader:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20viewbox%3d'0%200%20120%20120'%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20xmlns%3axlink%3d'http%3a%2f%2fwww.w3.org%2f1999%2fxlink'%3e%3cdefs%3e%3cline%20id%3d'l'%20x1%3d'60'%20x2%3d'60'%20y1%3d'7'%20y2%3d'27'%20stroke%3d'%236c6c6c'%20stroke-width%3d'11'%20stroke-linecap%3d'round'%2f%3e%3c%2fdefs%3e%3cg%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(30%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(60%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(90%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(120%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(150%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.37'%20transform%3d'rotate(180%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.46'%20transform%3d'rotate(210%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.56'%20transform%3d'rotate(240%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.66'%20transform%3d'rotate(270%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.75'%20transform%3d'rotate(300%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.85'%20transform%3d'rotate(330%2060%2c60)'%2f%3e%3c%2fg%3e%3c%2fsvg%3e");
    background-position: 50%;
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
}
  
.swiper-lazy-preloader-white:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3csvg%20viewbox%3d'0%200%20120%20120'%20xmlns%3d'http%3a%2f%2fwww.w3.org%2f2000%2fsvg'%20xmlns%3axlink%3d'http%3a%2f%2fwww.w3.org%2f1999%2fxlink'%3e%3cdefs%3e%3cline%20id%3d'l'%20x1%3d'60'%20x2%3d'60'%20y1%3d'7'%20y2%3d'27'%20stroke%3d'%23fff'%20stroke-width%3d'11'%20stroke-linecap%3d'round'%2f%3e%3c%2fdefs%3e%3cg%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(30%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(60%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(90%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(120%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.27'%20transform%3d'rotate(150%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.37'%20transform%3d'rotate(180%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.46'%20transform%3d'rotate(210%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.56'%20transform%3d'rotate(240%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.66'%20transform%3d'rotate(270%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.75'%20transform%3d'rotate(300%2060%2c60)'%2f%3e%3cuse%20xlink%3ahref%3d'%23l'%20opacity%3d'.85'%20transform%3d'rotate(330%2060%2c60)'%2f%3e%3c%2fg%3e%3c%2fsvg%3e");
}
  
@-webkit-keyframes swiper-preloader-spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
  
@keyframes swiper-preloader-spin {
    100% {
        transform: rotate(360deg);
    }
}
\`\`\`














`,link:"/js/네이버처럼 스와이프 메뉴 구현"},{title:"모바일 스와이프 참고할것",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자...

https://thestorybook.tistory.com/24


https://codepen.io/lee85114/pen/goaqwzv`,link:"/js/모바일 스와이프 참고할것"},{title:"쇼핑몰에서 스크롤 내릴시 상세정보가 고정시키기",content:`
# {{ $frontmatter.title }}


쇼핑몰에서 스크롤 내릴시 상세정보가 고정 됨



https://codepen.io/jamesdarren/pen/aajkkg


https://www.phpschool.com/gnuboard4/bbs/board.php?bo_table=qna_html&wr_id=289335&page=3`,link:"/js/쇼핑몰에서 스크롤 내릴시 상세정보가 고정시키기"},{title:"스와이퍼 페이징 스크롤",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://lpla.tistory.com/168


https://jsfiddle.net/kangyoo80/vhpmg3qa/3/`,link:"/js/스와이퍼 페이징 스크롤"},{title:"스크립트 호출할때 주의사항",content:`
# {{ $frontmatter.title }}


defer 이거를 꼭 적용해야 동기화가 되어서 head 태그에서도 사용가능`,link:"/js/스크립트 호출할때 주의사항"},{title:"안드로이드 제이쿼리 keypress 버그",content:`
# {{ $frontmatter.title }}


제이쿼리로 버그가 발생했는데.. 

주소가 누락된다고해서  keypress 이벤트로 했는데 안드로이드에서는 안먹히는 버그? 가 있어서..

다른 이벤트 keydown으로 바꿨더니 잘 된다.. 

대신에 글자 수가 자음수 1개만 하면 빼먹는거 같은데 단어로 만들어진 1개 이상이면 누락 안된거 같다.. 

안드랑 아이폰은 왜이리 서로 다른지.. 불편하다..`,link:"/js/안드로이드 제이쿼리 keypress 버그"},{title:"JavaScript 유용한 Array API",content:`
# {{ $frontmatter.title }}



자바스크립트에서 유용한 array api에 대해 알아보도록 하겠습니다.
 
## map()

메서드는 배열 내의 모든 요소 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.


\`\`\`js
const numbers = [1, 2, 3, 4, 5, 6, 7];
 
const result = numbers.map((number) => number * 2);
 
console.log(result); // [2, 4, 6, 8, 10, 12, 14]
\`\`\`


## some()

메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 합니다.

\`\`\`js
const fluits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
 
const result = fluits.some((fluit) => fluit === "수박");
 
console.log(result); // true
\`\`\`


## every()

메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트 합니다.

\`\`\`js
const fluits = ["수박", "수박", "배", "수박", "수박", "수박"];
 
const result = fluits.every((fluit) => fluit === "수박");
 
console.log(result); // false
\`\`\`


## filter()

메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

\`\`\`js
// 짝수만 필터링 하기
const numbers = [1, 2, 3, 4, 5, 6, 7];
 
const result = numbers.filter((number) => number % 2 === 0);
 
console.log(result); // [2, 4, 6]

\`\`\`


## reduce()


메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
 
리듀서 함수
리듀서 함수는 네 개의 매개변수를 갖습니다.

- 누적 값 (acc)

- 현재 값 (cur)

- 현재 인덱스 (idx)

- 원본 배열 (src)

리듀서 함수의 반환 값은 누적 값에 할당되고 최종 결과는 이 누적 값이 됩니다.

\`\`\`js
// 누적합 구하기
const numbers = [1, 2, 3, 4, 5, 6, 7];
 
const result = numbers.reduce((acc, cur) => acc + cur);
 
console.log(result);
// 중복된 과일 제거하기
const fluits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
const result = fluits.reduce((arr, cur) => {
  if (arr.includes(cur) === false) {
    arr.push(cur);
  }
  return arr;
}, []);
console.log(result);
\`\`\`



## 참고 자료 :

https://www.gymcoding.co/javascript-array-api#f3d8359a5fec42ff83fa769733b34b6e




`,link:"/js/유용한 array"},{title:"자바스크립트 사파리 혹은 아이폰 기준",content:`
# {{ $frontmatter.title }}


아래 소스코드 참고 하자..


\`\`\`js
var ua = window.navigator.useragent; if(ua.indexof('iphone') !== -1 && ua.indexof('safari') !== -1) { }
\`\`\`



`,link:"/js/자바스크립트 사파리 혹은 아이폰 기준"},{title:"자바스크립트 유용한 Array APIs | map, reduce, filter, some, every",content:`
# {{ $frontmatter.title }}


아래 유툽 영상 보고 공부 하자..


[![자바스크립트 유용한 array apis | map, reduce, filter, some, every](http://img.youtube.com/vi/wdsqk72g7tw/0.jpg)](https://youtu.be/wdsqk72g7tw?t=0s)`,link:"/js/자바스크립트 유용한 Array APIs | map, reduce, filter, some, every"},{title:"제이쿼리 ajax 사용시 li 삭제 처리 후에 div 메시지 띄워주기",content:`
# {{ $frontmatter.title }}



제이쿼리 에이젝스로 내부에서 

ul li 리스트가 삭제 후에 메시지 처리 하는 방법

여기 예시를 보면 밑에 이런 코드가 있을것이다.

\`\`\`js
if($('.sch_item_list').is(":empty")) {
\`\`\`



처음에는 이거랑 다르게 이렇게 했더니

\`\`\`js
if($('.sch_item_list li').length == 0)) {
\`\`\`

도저히 안먹히고.. 콘솔로 찍어서 보니까 0 아니면 1 이상한 숫자만 나온다.

제대로 안먹혀서.. 하는수 없이 empty 셀렉터가 있다고해서 구글링으로 참고해서 했더니 잘 된다!

이유는 잘 모르겠으나 제이쿼리에선 좀 버그 같이 저렇게 안될수있어서.. vuejs에서는 다른방법이 있는데.. 

 
\`\`\`js
// 한줄 낱개로 삭제
$(document).on('click','.sch_content_del',function () {
    let element = $(this);
    let name = element.closest('.item').find('.keyword').children().data('name');

    $.ajax({
        url:주소,
        type:'post',
        datatype:'json',
        context:this,
        cache: false,
        async: true,
        success:function(data){
            element.closest('.item').remove();
            
            if($('.sch_item_list').is(":empty")) {
                .....
            }
        }
    });
});

\`\`\`



## 맺은말 : 

이 방법도 도저히 안 먹힐 때가 있다.. 이럴땐 고유아이디를 이용해서 #test_1 이렇게 셀렉트를 잡아서 해야 된다.

별거 아닌데 이런 짜잘 한것때문에 하루 이틀 시간만 날라가 버린다.

특히나 제이쿼리 비동기로 써서 하면 조건이 success 일때 한줄이 없어지고 내용이 없습니다 가 생성 되야하는데

몇번이나 해도 안먹힌다.. 고유아이디만 이용해서 paseint(data.id) == 0 조건문 주고 이러면 이게 먹힐때도 있다.

다양한 방법으로 연구를 해보자..`,link:"/js/제이쿼리 ajax 사용시 li 삭제 처리 후에 div 메시지 띄워주기"},{title:"제이쿼리 ajax 사용시 li 삭제하기",content:`
# {{ $frontmatter.title }}


## 원인 :

에이젝스 사용 할때 li를 삭제 하는데 여기서 fadeout 이벤트를 적용해서 삭제 처리가 안된다.

 

 

## 해결 방법 :

여기서 fadeout 이벤트를 쓰면 자동으로 display none 처리가 된다. 그래서 삭제는 안되고 상품이 없습니다 메시지가 안뜨는것이다.


\`\`\`js
$(document).on("click", ".del_item", function() {
    var element = $(this);
    var re_id = $(this).closest('li').find('.re_id').val();
    var p_id = $(this).closest('li').find('.re_id').data('p_id');
    var del_id = element.closest('li').attr('id').replace(/[^0-9]/g, '');

    $.ajax({
        type:'post',
        url : 주소,
        data:{w:'d',it_id:re_id,p_id:p_id},
        context: this,
        datatype:'json',
        success:function (data) {
            $('#reg_ele'+del_id).remove();

            if($('#reg_relation li').length == 0) {
                $('#reg_relation').children('ul').remove();
                $("#reg_relation").html("<p>선택된 상품이 없습니다.</p>");
            }

        }
    });
});
\`\`\`

위에 처럼 사용하면된다.


여기서 다른 방법 으로는 아래 소스코드 참고하면 된다.


\`\`\`js
$(document).on("click", ".del_item", function() {
    var element = $(this);
    var re_id = element.closest('li').find('.re_id').val();
    var p_id = element.closest('li').find('.re_id').data('p_id');

    $.ajax({
        type:'post',
        url : 주소,
        data:{w:'d',it_id:re_id,p_id:p_id},
        context: this,
        datatype:'json',
        success:function (data) {
            element.closest('li').remove();
            if($('#reg_relation li').length == 0) {
               .....
            }
        }
    });
});

\`\`\`



## 맺은말 :

꼭 이 방법이 올바른 방법 이라고 할 수 없다 그냥 응용 해서 써야 된다.. 

안되면 고유아이디로 이용해서 쓰는게 좋다.



`,link:"/js/제이쿼리 ajax 사용시 li 삭제하기"},{title:"제이쿼리 data 속성 값 변경하기",content:`
# {{ $frontmatter.title }}


제이쿼리에서 data 속성을 바꾸려면 빡세게 해야된다.

아래 방법 처럼 하면된다.

이벤트는 클릭하면 속성값 변경하는 방법이다..

\`\`\`js
$(document).on("click", ".btn-toggle-expand", function() {
 $('.filter-category').attr('data-expand',$('.filter-category').attr('data-expand')==='true'?'false':'true');
});
\`\`\`



`,link:"/js/제이쿼리 data 속성 값 변경하기"},{title:"제이쿼리 databases 사용법",content:`
# {{ $frontmatter.title }}


## 설명 :

여기꺼 소스 참고하면 됨

설명하자면 post keyword만 나옴 


\`\`\`js
$(document).ready(function () {
    $('#tablelist').datatable({
        'processing': true,
        'serverside': false,
        'ajax': {
            "type" : "post",
            'url':admin_url + '/addon/fetch_data',
            "datatype": "json",
            'data': function(data){
                data.csrf_token_name = $("meta[name=x-csrf-token]").attr('content');
                data.keyword = $('#search').val();
            },
            // columns: [
            //     { data: "sortordr" },
            //     { data: "nttsj" },
            //     { data: "ntcrnm" },
            //     { data: "frstregisterpnttm" },
            //     { data: "inqireco" }
            // ]
        },
        'order': [],
        "paging": true,
        "lengthchange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autowidth": false,
        "language": {
            "zerorecords" : "검색된 정보가 없습니다.",
            "emptytable":     "데이터가 없습니다.",
            "info":           "현재 데이터 : 처음 _start_  ~ _end_ 전체 _total_ 수",
            "infoempty":      "전체수 : 0",
            "search": "검색",
            "paginate": {
                "previous": "이전",
                "next" : "다음"
            }
        }
    });
});

function enter(e){
    if (e.keycode == 13) {
        fn_search();
    }
}


function fn_search(){
    $("#tablelist").datatable().ajax.reload();
}

\`\`\`



## 참고 자료 : 


https://blog.naver.com/eyenein12/220323961369
`,link:"/js/제이쿼리 databases 사용법"},{title:"제이쿼리 DataTable 검색 후에 초기화 하기",content:`
# {{ $frontmatter.title }}


우선 검색 창 하날 만든다.

그러고 버튼 두개를 추가 한다. 하나는 검색 하기 또 하나는 초기화 버튼 만들어준다.
​
그러고 아래 소스 를 넣어서 사용하면 된다.
 
\`\`\`js
var config1 = {
  
"ajax": {
  
"url": '주소',
  
"type": 'post'
  
},
  
"bdestroy": true,
  
"searching": false,
  
"lengthchange": false,
  
"paging": true,
  
"processing": false,
  
"serverside": true,
  
'servermethod': 'post',
  
'columns': [
  
{ 'data': 'ip_address' },
  
{ 'data': 'path' },
  
{ 'data': 'browser' },
  
{ 'data': 'os' },
  
{ 'data': 'device' },
  
{ 'data': 'created_at' }
  
],
  
"columndefs": [
  
{"classname": "dt-center", "targets": "_all"}
  
],
  
"language": {
  
"zerorecords" : "검색된 정보가 없습니다.",
  
"emptytable": "데이터가 없습니다.",
  
"info": "현재 데이터 : 처음 _start_ ~ _end_ 전체 _total_ 수",
  
"infoempty": "전체수 : 0",
  
"search": "검색",
  
"paginate": {
  
"previous": "이전",
  
"next" : "다음"
  
}
  
}
  
};
  
​
  
var config2 = {
  
"ajax": {
  
"url": '주소',
  
"type": 'post',
  
"data" : function(data) {
  
data.from = $("#from").val();
  
data.to = $("#to").val();
  
}
  
},
  
"destroy": true,
  
"searching": false,
  
"lengthchange": false,
  
"paging": true,
  
"processing": false,
  
"serverside": true,
  
'servermethod': 'post',
  
'columns': [
  
{ 'data': 'ip_address' },
  
{ 'data': 'path' },
  
{ 'data': 'browser' },
  
{ 'data': 'os' },
  
{ 'data': 'device' },
  
{ 'data': 'created_at' }
  
],
  
"columndefs": [
  
{"classname": "dt-center", "targets": "_all"}
  
],
  
"language": {
  
"zerorecords" : "검색된 정보가 없습니다.",
  
"emptytable": "데이터가 없습니다.",
  
"info": "현재 데이터 : 처음 _start_ ~ _end_ 전체 _total_ 수",
  
"infoempty": "전체수 : 0",
  
"search": "검색",
  
"paginate": {
  
"previous": "이전",
  
"next" : "다음"
  
}
  
}
  
};
  
  
​
  
$('#tablelist').datatable(config1);
  
  
$('#cancel').click(function(){
  
$('#tablelist').datatable(config1);
  
});
  
​
  
$('#search').click(function(){
  
$('#tablelist').datatable(config2);
  
});​

\`\`\``,link:"/js/제이쿼리 DataTable 검색 후에 초기화 하기"},{title:"제이쿼리 datepicker 달력 2개",content:`
# {{ $frontmatter.title }}


제이쿼리 달력 2개 이상 띄워주기



https://stackoverflow.com/questions/38004019/pick-date-range-in-jquery-ui-datepicker


https://jsfiddle.net/m_tanzi/3examhwg/
	

여기 소스 참고해서 하면 된다.


`,link:"/js/제이쿼리 datepicker 달력 2개"},{title:"제이쿼리 다이얼로그 팝업",content:`
# {{ $frontmatter.title }}



제이쿼리 다이얼로그 예시


\`\`\`js
$(".popup").dialog({
autoopen:false, //자동으로 열리지않게
position:{
    my:"center",
    at:"center",
    of:"section"
},
modal:true,
resizable:false,
dialogclass: 'no-close success-dialog',
buttons: [
    {
        text: "확인",
        type: "submit",
        class:'popup_ok',
        click: function() {
            $('#frm_order').attr('action',g5_theme_url+'/orderform.php?item_code='+item_code);
            $('#frm_order')[0].submit();
        }
    },
    {
        text: "취소",
        class: 'popup_cancel',
        click: function() {
            $(this).dialog("close");
        }
    }
]
});

$('.popup').dialog("open");

\`\`\`



\`\`\`html
<div class="popup">
   서비스 요청을 하시겠습니까?
</div>
\`\`\`


\`\`\`css
.ui-widget.success-dialog {font-family: verdana,arial,sans-serif;font-size: .8em;}
.ui-widget-content.success-dialog {background: #f9f9f9;border: 1px solid #3261f6;color: #222222;}
 
.ui-dialog.success-dialog {left: 0;outline: 0 none;padding: 0 !important;position: absolute;top: 0;}
 
.ui-dialog.success-dialog .ui-dialog-content {background: #fff!important;border: 0 none!important;overflow: auto;position: relative;padding: 0 !important;margin: 0;text-align: center;font-size: 15px;line-height: 4rem;}
.ui-dialog .ui-dialog-buttonpane {border: none !important;background: #fff!important;margin-top: 0!important;}
.ui-dialog.success-dialog .ui-widget-header {background: #3261f6;border: 0;color: #fff;font-weight: normal;}
 
.ui-dialog.success-dialog .ui-dialog-titlebar {padding: 10px;position: relative;font-size: 1em;border-radius: 0;}
 
.popup_ok {background: #3361f6 !important;border: 0!important;color: #fff!important;font-size: 13px!important;}
.popup_cancel {background: #f1364c !important;border: 0!important;color: #fff!important;font-size: 13px!important;}
 
.ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-close {display: none;}

\`\`\`



다이얼로그 쓰는데 갑자기 서브밋이 안되는 이유는 

$(셀렉터)[0].submit 방법으로 하니까 잘먹히네..

이 버그 해결 되면 딱일텐데.. 이러고 문제 해결 하자..

여기 참고자료 보면 이해가 잘된다. 


## 참고 자료 :

https://forum.jquery.com/topic/using-jquery-dialog-to-submit-a-form-on-clicking-yes-button-and-cancel-form-submission-on-pressing-no-button











`,link:"/js/제이쿼리 다이얼로그 팝업"},{title:"제이쿼리 메뉴 액티브",content:`
# {{ $frontmatter.title }}



제이쿼리 메뉴에 보면 액티브 혹은 온 처리 하는 방법은 

아래 소스 참고 하면 된다. 

 

\`\`\`js
$('#topnavbar li a').each(function (ele,val) {
    let path = window.location.href.replace(/\\/+$/, '');
    if($(val).attr('href') === decodeuricomponent(path)) {
        $(this).parent().addclass('active');
    }
});
\`\`\`

여기서 path 조건문이 문제가 된다면 이렇게 하면된다.

\`\`\`js
let something_url;

if(g5_bo_table) {
    something_url = '/'+g5_bo_table;
}else {
    something_url = window.location.pathname;
}
\`\`\`



게시판 조건문을 넣어주면된다. 이건 그누보드에만 해당 된다.`,link:"/js/제이쿼리 메뉴 액티브"},{title:"제이쿼리 바텀 네비 펼침 숨김처리",content:`
# {{ $frontmatter.title }}


\`\`\`js
$(window).scroll(function() {
    if($(window).scrolltop() + $(window).height() > $(document).height() - 200) {
        $('#bottomnav').hide();
    } else {
        $('#bottomnav').show();
    }
});
\`\`\`


바텀으로 내려갈수록 숨김처리 올라가면 보임처리`,link:"/js/제이쿼리 바텀 네비 펼침 숨김처리"},{title:"제이쿼리 버튼 온앤오프",content:`
# {{ $frontmatter.title }}


제이쿼리 버튼 두개가 나란히 있는데 한가지는 on이고 한가지는 off로 한다면?

\`\`\`js
$('.bo_base_btn').click(function () {
   $(this).addclass('bo_on_btn').siblings().removeclass("bo_on_btn");
});
\`\`\`



`,link:"/js/제이쿼리 버튼 온앤오프"},{title:"제이쿼리 쇼핑몰 심쿵할인 탭버튼 구현",content:`
# {{ $frontmatter.title }}


쇼핑몰에서 심쿵 할인에보면 상세페이지에서 탭버튼 똑같이 구현했다!!

일단 맞는지는 모르겠지만.. 이걸로 대처 했다.

 
\`\`\`js
$('a[href*="#"]:not([href="#"])').click(function(event) {

    if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {

        $('#dtabmenu li').removeclass('selected');
        $(".detail_tab_content .detail_content").removeclass('selected');

        $(this).parent().addclass('selected');
        $(this.hash).addclass('selected');

        var tabmenuheight = $('.detail_tabmenu').height() + 52;

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        var offset = $(target).offset().top;
        $('html, body').animate({scrolltop : offset - tabmenuheight}, 400);

        return false;
    }
});

\`\`\`
`,link:"/js/제이쿼리 쇼핑몰 심쿵할인 탭버튼 구현"},{title:"제이쿼리 자동검색 만들기",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://lts0606.tistory.com/469


https://minaminaworld.tistory.com/104`,link:"/js/제이쿼리 자동검색 만들기"},{title:"제이쿼리 체크박스 선택 3개이상 선택하는 방법",content:`
# {{ $frontmatter.title }}


체크 박스 3개까지만 선택 하는 방법은 아래꺼 참고하면 된다. 


\`\`\`js
$('input:checkbox[name=employmenttype]').click(function(){ 
  var cnt = $('input:checkbox[name=employmenttype]:checked').length;
  if(cnt>3){
   alert('최대 3개까지 선택 가능합니다.')
   $(this).prop('checked', false);
  }
 });
\`\`\``,link:"/js/제이쿼리 체크박스 선택 3개이상 선택하는 방법"},{title:"제이쿼리 카운트다운 스크립트",content:`
# {{ $frontmatter.title }}



## 사용법 :


https://yeshtml5.com/jquery-countdown


https://www.epochconverter.com/`,link:"/js/제이쿼리 카운트다운 스크립트"},{title:"제이쿼리 탭버튼 모바일 포털 사이트 메뉴 처럼",content:`
# {{ $frontmatter.title }}


여기 자료 참고하자..


https://shubamba.tistory.com/52`,link:"/js/제이쿼리 탭버튼 모바일 포털 사이트 메뉴 처럼"},{title:"제이쿼리 테이블 컨트롤하기",content:`
# {{ $frontmatter.title }}


## 소스코드 :
 

\`\`\`js
$('#btn_add').on('click',function () {
    let cnt = $('#tbl_price tbody tr').length;
    let max = 5;
    if(cnt < max) {
        var lastitemno = $("#tbl_price > tbody > tr:last").attr("class").replace("item", "");
        console.log(lastitemno);
        var newitem = $("#tbl_price > tbody > tr:last").clone();
        newitem.removeclass();
        newitem.find("td:eq(0)").attr("rowspan", "1");
        newitem.addclass("item"+(parseint(lastitemno)+1));
        $("#tbl_price").append(newitem);
    }else {
        alert("최대 "+max+"개까지만 가능합니다.");
        return false;
    }
});
 \`\`\`

 

응용한 소스코드1 
 

\`\`\`js
$('#btn_add').on('click',function () {
    let cnt = $('#tbl_price tbody tr').length;
    let max = 5;
    if(cnt < max) {
        let lastitemno = $("#tbl_price > tbody > tr:last").attr("class").replace(/[^0-9]/g, "");
        let newitem = $("#tbl_price > tbody > tr:last").clone();
         $("#tbl_price").append(newitem);
        lastitemno++
        $("#tbl_price tbody tr").last().attr("class","item"+parseint(lastitemno));
        $('.item'+lastitemno).find('select:first-child').val('');
        $('.item'+lastitemno).find('input[type=text]').val('0');
        $('.item'+lastitemno).find('input[type=checkbox]').attr('checked',false);
    }else {
        alert("최대 "+max+"개까지만 가능합니다.");
        return false;
    }
});
\`\`\`


 

테이블 병합 rowspan 응용 소스

\`\`\`js
$(document).on('click','#btn_add',function () {
    let cnt = $('#tbl_form > tbody > tr.extra_tr').length;
    let max = 10;
    let add_cnt = $('.extra_tr').length;
 
    if(max > add_cnt) {
        cnt++;
        add_cnt ++;
        $('#extra_field').attr('rowspan',cnt);
             
        let newitem = \`
            <tr class="extra_tr">
                <td>
                    <input type="text" name="cs_\${add_cnt}[]" value="" class="frm_input" size="100" maxlength="255">
                </td>
            </tr>
            \`;
        $("#tbl_form tbody tr:last").after(newitem);
    }else {
        alert("최대 "+max+"개까지만 가능합니다.");
        return false;
    }
});
\`\`\`


## 참고 자료 :

https://stove99.tistory.com/93
	
https://baessi.tistory.com/109
	






`,link:"/js/제이쿼리 테이블 컨트롤하기"},{title:"제이쿼리 풀다운 새로고침",content:`
# {{ $frontmatter.title }}


https://www.jqueryscript.net/blog/best-pull-to-refresh.html`,link:"/js/제이쿼리 풀다운 새로고침"},{title:"제이쿼리 플로팅 메뉴 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

플로팅 메뉴는 따라다니는 메뉴를 말한다.


\`\`\`html
<html>
<head>
    <script type="text/javascript" src="jquery-1.7.1.min.js"><\/script>
    <script type="text/javascript" src="jquery.scrollfollow.js"><\/script>
      
    <script>
        $(document).ready(function(){
            $("#testbanner").scrollfollow({
                speed : 800,    // 꿈지럭 거리는 속도
                offset : 200     // 웹페이지 상단에서 부터의 거리(바꿔보면 뭔지 안다)
            });
        });
    <\/script>
      
    <style>
        #testbanner{
            position: absolute;
            border: 3px solid #f00;
  
            left : 100px;
            top : 30px;
            width: 150px;
            height: 300px;
        }
    </style>
</head>
  
<body>
    <div id="testbanner">
        봉봉 배너 테스트
 
        <a href="/">홈으로</a>
    </div>
</body>
</html>
\`\`\`





\`\`\`html
<script type="text/javascript" src="jquery-1.7.1.min.js"><\/script>
<script type="text/javascript" src="jquery-ui-1.8.20.custom.min.js"><\/script>
<script type="text/javascript" src="jquery.scrollfollow.js"><\/script>
      
<script>
    $(document).ready(function(){
        $("#testbanner").scrollfollow({
            easing : "easeinoutback"
        });
    });
<\/script>
\`\`\`



## 참고 자료 :

https://stove99.tistory.com/124
	






`,link:"/js/제이쿼리 플로팅 메뉴 만들기"},{title:"코드 미러 사용방법",content:`
# {{ $frontmatter.title }}



코드 미러 이거 하나 땜에 진짜 빡돈줄 알았다 ㅋㅋㅋ

이게 이렇게 간단한줄 몰랐다..

vuejs 소스만 보이고.. 일반적인방법은 보이지 않아서.. 어쨌든 어렵사리 알아냈다.

 

일단 cdn으로 세팅은 먼저 해놓고

 

사용법은 아래 소스처럼 하면됨

\`\`\`js
var textarea = document.getelementbyid('modal_edit');
var editor = codemirror.fromtextarea(textarea, {
   linenumbers: true,
   linewrapping: true,
   styleactiveline: true,
   autoclosetags: true,
   scrollbarstyle: "null",
   mode: "text/html",
   theme: "eclipse",
   matchbrackets: true,
   matchtags: {bothtags: true},
   extrakeys: {
       "ctrl-space": "autocomplete"
   }
});
\`\`\`

위에 먼저 이게 존재 해야한다. 이것은 먼저 텍스트박스를 코드미러로 만들어 놓은 소스이다.

\`\`\`js
$(document).on('show.bs.modal','#editmodal', function () {
    let skin = $(this).find('[name=skin_selected]').val();
    $.ajax({
        type : "post",
        url : admin_url+"/theme/skin_selected",
        data: {csrf_token_name:$("meta[name=x-csrf-token]").attr('content'),skin:skin},
        context:this,
        datatype:"html",
        success : function(response){
            editor.setvalue(response);
            $('#modal_edit').val(editor.getvalue());
        }
    });
});
\`\`\`

이건 제이쿼리 아작스에 넣은방법이다. 위에 editer를 전역변수로 해놓고 받아와서 아작스에 데이터를 텍스트박스에 매칭시키는 기능.. 

\`\`\`js
$(document).on('click','#modal_save', function () {
    editor.save();
    $.ajax({
        url: admin_url+"/theme/skin_save",
        type: "post",
        data: {
            csrf_token_name:$("meta[name=x-csrf-token]").attr('content'),
            content:editor.getvalue(),
            skin:$('[name=skin_selected]').val()
        },
        datatype: 'json',
        success: function(response){
            if(response.status === 200) {
                window.location.reload();
            }
        }
    });
    return false;
});
\`\`\`


이거는 폼 서브밋하게되면 데이터를 아작스 통해서 저장되고 리프레시로 동작한다.

(원래는 spa면 리프레시가 아니라 일일히 매칭하는 작업까지 해야한데.. 귀찮아서 이렇게 해놓았다.

 

여기서 백단은 php로 작업했고 fopen 함수관련된걸로 해결 했다. 

이 완료된 작업 들은 블로그 제작쪽에 참고하면 된다. 





`,link:"/js/코드 미러 사용방법"},{title:"탭 버튼 온앤오프2",content:`
# {{ $frontmatter.title }}


\`\`\`php
<ul class="sub_bo_ul">
    <li class="sub_bo_item"><a href="<?=get_pretty_url('보테이블','','sca='.urlencode('1'))?>"><span class="game_icon_off"></span><em class="uname">1</em></a></li>
    <li class="sub_bo_item"><a href="<?=get_pretty_url('보테이블','','sca='.urlencode('2'))?>"><span class="game_icon_off"></span><em class="uname">2</em></a></li>
    <li class="sub_bo_item"><a href="<?=get_pretty_url('보테이블','','sca='.urlencode('3'))?>"><span class="game_icon_off"></span><em class="uname">3</em></a></li>
    <li class="sub_bo_item"><a href="<?=get_pretty_url('보테이블','','sca='.urlencode('4'))?>"><span class="game_icon_off"></span><em class="uname">4</em></a></li>
</ul>
\`\`\`


그누로 홈피 제작하다보면 할 수 없이 레거시로 하게되는데.. 

약간 spa 같이 구현 해야되는 기능이 있어서 일단 만들어봄..

브라우저 주소랑 탭버튼에 남겨 있는 링크가 동일 하면 on 클래스를 준다.



\`\`\`js
var full_path = window.location.href;
$('.sub_bo_ul .sub_bo_item a').each(function (ele,val) {
   let href = decodeuricomponent($(val).attr('href'));
   if(href === decodeuricomponent(full_path)) {
       $(this).parent().addclass('active');
       $(this).find('span').removeclass("brand_icon_off").addclass("brand_icon_on");
   }
});
\`\`\`

`,link:"/js/탭 버튼 온앤오프2"},{title:"현재 주소에서 파라메터 없애기",content:`
# {{ $frontmatter.title }}


## 설명 :

현재 브라우저 주소에 겟 파라메터를 없애는 방법이 있다.

페이지가 이동되지 않고 바로 해당 파라미터를 삭제 되는 소스이다.

참고하면 된다.


\`\`\`js
$(document).ready(function(){
 
    var uri = window.location.tostring();
 
    if (uri.indexof("?") > 0) {
 
        var clean_uri = uri.substring(0, uri.indexof("?"));
 
        window.history.replacestate({}, document.title, clean_uri);
 
    }
 
});
\`\`\`





구글링으로 서치 단어는 

jquery history pushstate remove params

이걸로 엄청 찾아보면된다.



## 참고 자료 :

https://onlinecode.org/how-to-remove-query-string-from-url-using-jquery/










`,link:"/js/현재 주소에서 파라메터 없애기"},{title:"Laravel + Vue + Inertia 프로젝트에서 서버 측 렌더링 구성하기",content:`
# {{ $frontmatter.title }}



여기 자료 참고 하자..

https://osmianski.com/configuring-server-side-rendering-in-a-laravel-vue-inertia-project`,link:"/laravel/Laravel + Vue + Inertia 프로젝트에서 서버 측 렌더링 구성하기"},{title:"Command not found yarn mac",content:`
# {{ $frontmatter.title }}



yarn 설치 해도 잡히지 않을경우 아래 처럼 따라 하면된다.

주의) 맥 환경이 많기 때문에 나 같은 경우 빅서 이고 옛날꺼 그대로 쓰고 있다.

환경에 다르면 안될 수 도 있고 해서 일단 참고한다.


\`\`\`bash
export path=~/.yarn/bin:$path into .profile !**
\`\`\`


or


try: if you are on the bash try adding alias

\`\`\`bash
yarn=~/.yarn/bin/yarn.js
\`\`\`

we no longer support global installation of create react app.

please remove any global installs with one of the following commands:
- npm uninstall -g create-react-app
- yarn global remove create-react-app

the latest instructions for creating a new app can be found here:

create-react-app.dev/docs/getting-started


@github ;)



위에 자료 보면서 문제 해결 하면된다.

그래도 설치가 안되면 삭제 후 제 설치 해야된다고 한다.


## 참고 자료 :

https://stackoverflow.com/questions/66637032/bash-yarn-command-not-found-even-after-installing-it-globally


`,link:"/macos/Command not found yarn mac"},{title:"command not found: express 에러",content:`
# {{ $frontmatter.title }}



## 원인 :

zsh: command not found: expres

설치는 했는데 맥 환경설정에 제대로 동작되지 않는다.


해결 방법 :

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally


\`\`\`bash
npm config set prefix '~/.npm-global'

export path=~/.npm-global/bin:$path

source ~/.profile

npm install -g jshint
\`\`\`



1. 커맨드창을 열어서 cd ~ 여기로 접근한다.

2. open .zshrc 열어준다 혹은 없으면 vi .zshrc 새로 만든다.

3. 파일안에 이렇게 쓰고 저장 한다. export path=~/.npm-global/bin:$path

환경설정을 여기까지 해줘야됨

4. source .bash_profile 이렇게 적용시켜주면 됨

5. echo $path 로 찍어줘서 확인하면 등록된것이 보임



위에 방법이 잘 안되면 아래 주소 참고 한다.

`,link:"/macos/command not found: express 에러"},{title:"macos",content:`
# {{ $frontmatter.title }}


macos 서버 방법과 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/macos/index"},{title:"iTerm2로 터미널 커스텀하기",content:`
# {{ $frontmatter.title }}


자료 참고 하자..

https://ooeunz.tistory.com/21`,link:"/macos/iTerm2로 터미널 커스텀하기"},{title:"m1 환경에서 홈브로 이용해서 설치하기",content:`
# {{ $frontmatter.title }}



cannot install under rosetta 2 in arm default prefix (/opt/homebrew)!

to rerun under arm use:

    arch -arm64 brew install ...

to install under x86_64, install homebrew into /usr/local.



인스톨러 명령어

arch -arm64 brew install [pacakge name]



https://velog.io/@16min99/m1-brew-%ec%98%a4%eb%a5%98`,link:"/macos/m1 환경에서 홈브로 이용해서 설치하기"},{title:"macos php 재시작",content:`
# {{ $frontmatter.title }}



재시작 하는방법 아래 명령어 입력 :



\`\`\`bash
brew services restart php@7.2
\`\`\`



설치 한지 확인 하기 :

\`\`\`bash
brew services list
\`\`\``,link:"/macos/macos php 재시작"},{title:"macos 개발 환경 구축할때 참고하기",content:`
# {{ $frontmatter.title }}


우선 맥에서는 개발 환경을 만들려면 일시적으로 하는 방법과 영구적으로 설치하는 방법이 있다.

일시적인 방법은 그냥 터미널에서 해당 경로를 시스템 환경 변수에 등록 해서 사용하면 되는데 단, os를 재 시작 하면 초기화가 되서 문제 될 경우가 있다.

(아래 명령어는 예시로 만든거다 테스트 할때 경로를 제대로 지정하길..)

\`\`\`bash
export path="$path:~/downloads/....."
\`\`\`

반대로 영구적으로 하는 방법은 아래 설명을 보면 된다.

현재 사용 중인 쉘을 알아 보자

\`\`\`bash
echo $shell
\`\`\`



결과 bash이면 ~/.bash_profile 이나 ~/.bashrc를 수정하면 되고
bin/zsh이면 ~/.zshrc 파일을 수정하면 된다.



내껀 bin/zsh 으로 나왔다. ~/.zshrc 로 편집 하면된다.

\`\`\`bash
vi ~/.zshrc
\`\`\`


\`\`\`bash
export path="$path:~/downloads/...."
\`\`\`



이후에 설정 파일을 새로 고침 하면 된다. (중요하다)

\`\`\`bash
source ~/.zshrc
\`\`\`


설치가 됐는지 확인 하려면 아래 명령어로...

\`\`\`bash
echo $path
\`\`\`



## 참고 자료 :


https://velog.io/@taelee/%ed%99%98%ea%b2%bd-%eb%b3%80%ec%88%98-%ec%84%a4%ec%a0%95-mac










`,link:"/macos/macos 개발 환경 구축할때 참고하기"},{title:"macos 몬테리아 환경에서 php 설치 하기",content:`
# {{ $frontmatter.title }}



php 모듈 설치하기

\`\`\`bash
brew tap shivammathur/php

arch -arm64 brew tap shivammathur/php
\`\`\`

php 버전 별로 설치하기 현재 8.2까지 출시됨

\`\`\`bash
brew install shivammathur/php/php@7.4

arch -arm64 brew install shivammathur/php/php@7.4
\`\`\`

경로 잡아주기

\`\`\`bash
brew link --overwrite --force php@7.4

arch -arm64 brew link --overwrite --force php@7.4
\`\`\`



편집기 열기

\`\`\`bash
vi ~/.zshrc
\`\`\`





마지막에 변경 한 내용 적용

\`\`\`bash
source ~/.zshrc
\`\`\`

재 시작하기

\`\`\`bash
brew services restart php
\`\`\`

여기서 버전별로 시작하려면?

\`\`\`bash
brew services restart php@7.4
\`\`\`

버전 확인하기

\`\`\`bash
php -v
\`\`\`


여기서 실습하면서 알게된 사실은

한개씩 버전을 잡아주면 된다.
나중에 이거 말고 다른 프로그램도 이런식으로 하면된다.

\`\`\`bash
brew link --overwrite --force php@8.0
\`\`\`


이것도 참고 해본다.
제대로 설치가 안될경우


https://getgrav.org/blog/macos-monterey-apache-multiple-php-versions



만약에 버전별로 설치를 원한다면 아래 주소 참고하자.

https://kevdees.com/macos-12-monterey-nginx-setup-multiple-php-versions/





## 참고 자료 :

https://wpbeaches.com/updating-to-php-versions-7-4-and-8-on-macos-12-monterey`,link:"/macos/macos 몬테리아 환경에서 php 설치 하기"},{title:"macos 위치 찾기",content:`
# {{ $frontmatter.title }}


예를들어서 php로 설명한다.

위치를 찾으려면 일단 홈브로우로 찾아야한다.

\`\`\`bash
brew info php
\`\`\`

혹은 이런 방법 :
\`\`\`bash
which php
\`\`\`


혹은 아래 위치로 이동하면 된다.

\`\`\`bash
cd  /usr/local/etc/php/8.1/
\`\`\`


`,link:"/macos/macos 위치 찾기"},{title:"macos 홈브로 설치",content:`
# {{ $frontmatter.title }}




맥에서 제일 편리성 있게 설치하는 방법 중 홈브로가 있다.

이걸 설치해서 사용하면 아주 편하다

홈브로 설치

\`\`\`bash
/usr/bin/ruby -e "$(curl -fssl https://raw.githubusercontent.com/homebrew/install/master/install)"
\`\`\`





설치 도중에 문제가 생겼을때

\`\`\`bash
error: the ruby homebrew installer is now disabled and has been rewritten in
bash. please migrate to the following command:
/bin/bash -c "$(curl -fssl https://raw.githubusercontent.com/homebrew/install/head/install.sh)"
\`\`\`



이럴 경우 혹시 몰라서 xcode를 설치 해야된다.

\`\`\`bash
gcc --version

ruby -e "$(curl -fssl https://raw.githubusercontent.com/homebrew/install/master/install.sh)"

brew doctor

brew update
\`\`\`

혹은 아래 내용을 참고한다.

homebrew를 위해 mac을 설정하는 방법

1단계 :

이미 xcode를 설치했는지 확인하십시오. 터미널에서 아래 명령을 실행하십시오.

\`\`\`bash
/usr/bin/xcodebuild -version
\`\`\`
xcode 12.3 빌드 버전 12c33



2단계 :

이제 xcode를 엽니다.

- 기본 설정 선택
- 위치 탭 선택
- 이제 명령줄 도구의 드롭다운 메뉴에서 xcode 버전을 선택합니다.

3단계 :

터미널에서 아래 명령을 실행합니다.

\`\`\`bash
/bin/bash -c "$(curl -fssl https://raw.githubusercontent.com/homebrew/install/head/install.sh)"
\`\`\`

참고: m1 chip mac이 있는 경우 아래 명령을 실행하고 터미널을 닫았다가 다시 엽니다.

\`\`\`bash
echo "export path=/opt/homebrew/bin:$path" >> ~/.zshrc
\`\`\`


\`\`\`bash
code ~/.zshrc

export path=/usr/local/bin:/usr/local/sbin:$path​
\`\`\`



brew -- version 을 입력해봤는데, brew 명령어가 아직 먹히지 않는데요,
warning: /opt/homebrew/bin is not in your path에 나와 있듯이, 아직 path 에 등록이 되지 않아서 그렇습니다.
vim 에디터에 들어가서 수정해주면 되지만, 아래 한줄 입력으로 더 간단하게 등록할 수 있습니다.

\`\`\`bash
echo 'export path=/opt/homebrew/bin:$path' >> ~/.zshrc
\`\`\`

참고로 m1 환경에서는 다르게 적용해야된다. (아래 명령어 한줄 입력한다.)

\`\`\`bash
eval $(/opt/homebrew/bin/brew shellenv)
\`\`\`



혹시나 제대로 설치가 안 됐을 경우 이걸로 하면된다.

https://shanepark.tistory.com/45





## 참고 자료 :


https://stackoverflow.com/questions/20381128/installing-homebrew-on-macos

`,link:"/macos/macos 홈브로 설치"},{title:"mysql 데몬이 죽을경우..",content:`
# {{ $frontmatter.title }}


## 원인 :

error! the server quit without updating pid file 갑자기 mysql 데몬이 죽어 있을경우



macbookpro:~ root# mysql.server start starting mysql . error! the server quit without updating pid file (/usr/local/var/mysql/bibeoyum-ui-macbookpro.local.pid). macbookpro:~ root# mysql.server restart error! mysql server pid file could not be found! starting mysql



이렇게 데몬이 죽어 있다면 아래꺼 참고한다.






## 해결방법 :


첫번째 방법

\`\`\`bash
sudo chown -r mysql:mysql /usr/local/var/mysql
\`\`\`

두번째 방법

\`\`\`bash
sudo chmod -r 777 /usr/local/var/mysql
\`\`\`

이렇게 둘중에 하나 권한을 주면 정상적으로 실행된다.




## 참고 자료 :


https://rayner.tistory.com/2`,link:"/macos/mysql 데몬이 죽을경우"},{title:"mysql 서버 시작 또는 재시작 하기(MAC)",content:`
# {{ $frontmatter.title }}



1. mac

mysql 서버 시작

\`\`\`
mysql.server start
\`\`\`

mysql 서버 재시작

\`\`\`
mysql.server restart
\`\`\`





2. linux

mysql 서버 시작

\`\`\`
service mysql start systemctl start mysql.service
\`\`\`

mysql 서버 재시작

\`\`\`
service mysql restart systemctl restart mysql.service
\`\`\`



여기 자료 참고할것



https://heytech.tistory.com/207


https://velog.io/@taelee/mysql-%ec%84%9c%eb%b2%84-%ec%8b%9c%ec%9e%91-%eb%98%90%eb%8a%94-%ec%9e%ac%ec%8b%9c%ec%9e%91-%ed%95%98%ea%b8%b0mac`,link:"/macos/mysql 서버 시작 또는 재시작 하기"},{title:"phpstrom 단축키",content:`
# {{ $frontmatter.title }}



여기 참고하면된다.



https://webclub.tistory.com/42`,link:"/macos/phpstrom 단축키"},{title:"[MacOS] 맥os에서 npm 명령어 이슈 zsh: command not found: npm",content:`
# {{ $frontmatter.title }}


아래 자료 참고 하자..


https://lifefun.tistory.com/10`,link:"/macos/zsh: command not found: npm"},{title:"맥 단축키",content:`
# {{ $frontmatter.title }}

맥 단축키

|단축키|역할|
|----|---|
|[command]+[a]|finder 창, 또는 바탕화면에서 모든 파일을 선택합니다.|
|[command]+[shift]+[a]|	응용 프로그램 폴더를 엽니다.|
|[command]+[c]|	선택한 파일이나 텍스트를 복사합니다.|
|[command]+[d]|	선택한 파일을 복제합니다.|
|[command]+[shift]+[d]|	[데스크탑] 폴더를 엽니다.|
|[command]+[i]|	선택한 항목의 정보를 가져옵니다.|
|[command]+[option]+[i]|	선택한 다수 항목의 속성을 봅니다.|
|[command]+[j]|	finder 창의 보기 옵션을 표시합니다.|
|[command]+[m]|	활성화된 창을 dock으로 축소합니다.|
|[command]+[n]|	새로운 finder 창을 생성합니다.|
|[command]+[shift]+[n]|	새 폴더를 만듭니다.|
|[command]+[o]|	선택한 파일을 엽니다.|
|[command]+[v]|	복사된 파일이나 텍스트를 붙입니다.|
|[command]+[w]|	활성화된 창을 닫습니다.|
|[command]+[x]|	오려두기|
|[command]+[z]|	방금 작업했던 내용을 취소합니다.|
|[command]+[1]~[4]|	finder 보기 형식을 전환합니다.|
|[command]+[\`]|	열려 있는 finder 창 순환|
|[command]+ [|	이전 폴더로 이동합니다.|
|[command]+ ]|	다음 폴더로 이동합니다.|
|[command]+ [위쪽 화살표]|	폴더를 엽니다.|
|[command]+[아래쪽 화살표]|	선택된 파일을 열거나 실행합니다.|
|[command]+[delete]|	선택한 파일을 휴지통에 버립니다.|
|[command]+[shift]+[delete]|	휴지통을 비웁니다.|
|[space bar] 또는 [command]+[y]|	훑어보기|
|[command]+파일 드래그|	다른 디스크로 파일을 드래그할 때 복사하지 않고 이동합니다.|
|[option]+파일 드래그|	같은 디스크로 파일을 드래그할 때 이동하지 않고 복사합니다.|
|


<br />




여기 아래 사이트 참고할것


https://firetoad.me/mac/%ec%b4%88%eb%b3%b4%ec%9e%90%eb%a5%bc-%ec%9c%84%ed%95%9c-%eb%a7%a5-%ed%95%84%ec%88%98-%eb%8b%a8%ec%b6%95%ed%82%a4-%eb%aa%a8%ec%9d%8c-mac-shortcut/




`,link:"/macos/맥 단축키"},{title:"맥에서 하드디스크 포맷하는방법",content:`
# {{ $frontmatter.title }}

디스크 유틸리티에서 해당 외장 하드를 지우기 누르면 아래처럼 알림 메시지가 나옵니다.

디스크를 마운트 해제 할 수 없습니다 69888



이럴때 포맷을 아예 못하는게 아니라 저처럼 따라 하면 됩니다.

(참고로 윈도우를 열 필요 없습니다.)



finder 창을 열어주시고 왼쪽에 보면 위치에 보면 분리된 외장하드가 보입니다.

여기서 전부다 추출을 해주세요 (오른쪽 버튼 눌러서 추출을 누르면 외장하드가 안보입니다.)



그러고나서 다시 한번 디스크 유틸리티로 접근합니다.

아래 이미지 처럼 나옵니다. 왼쪽에 세모 표시▼ 외장 버튼 누르면 상위랑 하위가 나누게 된걸 볼수있습니다. 여기서 상위에 있는것을 눌러주세요




그러고 나서 지우기 버튼 누릅니다. 포맷 형식을 아래처럼 맞춰줍니다.

<img src="./img/11.png" />


<br /><br />


<img src="./img/22.png" />

근데 여기서 파티션으로해서 분리를 하고싶다면 설계에서 guid 파티션 맵으로 선택해줍니다. 그러면 완료됩니다.

`,link:"/macos/맥에서 하드디스크 포맷하는방법"},{title:"한자 단축키",content:`
# {{ $frontmatter.title }}


예를 들어 아래와 같이,

한 글자 입력후 단축키(option+enter),

단어 입력후 바로 단축키(option+enter)로 한자 변환이 가능합니다.

메모장 키고 글자 단어 입력 후에 옵션키 + 엔터 누르면 누르면된다.



https://im74.tistory.com/111

`,link:"/macos/한자 단축키"},{title:"Column ' cannot be null 필드 값이 널로 들어간다면",content:`
# {{ $frontmatter.title }}


## 원인 :



column 'mn_new_open' cannot be null


이렇게 컬럼 값이 널 값으로 간다면




## 문제 해결 :



mysql 해당 테이블에서 필드 디폴트에 0으로 입력을 하면된다.











`,link:"/mysql/Column cannot be null 필드 값이 널로 들어간다면"},{title:"mysql",content:`
# {{ $frontmatter.title }}



mysql 공부 방법과 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/mysql/index"},{title:"Mariadb 5.5 my.cnf 설정",content:`
# {{ $frontmatter.title }}



설정환경 : centos 7.0

설치 : yum


0. 설명

/usr/share/mysql에 보면 cnf파일들이 있다. 자신에게 맞는 적당한 녀석으로 골라서 사용하면 된다.

기본적으로 charset이 설정되어 있지 않기 때문에 charset은 기본적으로 추가해주어야한다.

그룹	상세
[mysqld]	mysqld 프로그램을 위한 설정 옵션
[mysql]	mysql 명령 클라이언트를 위한 설정 옵션
[client]	client 접속 환경 설정
[mysqldump]	dump 사용시 설정 옵션
[myisamchk]	myisamchk 복구 설정 옵션
[mysqlhotcopy]	mysqlhotcopy 백업 설정 옵션


myisamchk : check와 복구 기능

mysqlhotcopy : perl로 작성된 백업툴.



1. my.cnf

/usr/share/mysql/my-huge.cnf를 /etc/my.cnf로 복사한다. 그 후에 파란색으로 표시된 문자셋을 설정해준다. ( utf8에 utf8_general_ci로 설정한 것이다. )

# cp /usr/share/mysql/my-huge.cnf /etc/my.cnf

[client]

default-character-set=utf8

#password       = your_password

port            = 3306

socket          = /var/lib/mysql/mysql.sock



# server : mysqld라는 프로세스 데몬 ( 실제 구동되는 서버 프로그램을 위한 설정 )

[mysqld]

collation-server = utf8_general_ci

init-connect='set names utf8'

character-set-server=utf8

port            = 3306

socket          = /var/lib/mysql/mysql.sock

skip-external-locking

key_buffer_size = 384m

max_allowed_packet = 1m

table_open_cache = 512

sort_buffer_size = 2m

read_buffer_size = 2m

read_rnd_buffer_size = 8m

myisam_sort_buffer_size = 64m

thread_cache_size = 8

query_cache_size = 32m

# try number of cpu's*2 for thread_concurrency

thread_concurrency = 8



#tmpdir         = /tmp/

#skip-networking

log-bin=mysql-bin

server-id       = 1



# dump 사용시 설정값

[mysqldump]

default-character-set=utf8

quick

max_allowed_packet = 16m



[mysql]

default-character-set=utf8

no-auto-rehash

#safe-updates



[myisamchk]

key_buffer_size = 256m

sort_buffer_size = 256m

read_buffer = 2m

write_buffer = 2m



[mysqlhotcopy]

interactive-timeout





혹시 몰라서 아래 자료도 참고 해 본다.







# mysql 또는 root 계정으로 작업을 권장합니다.

vi /etc/my.cnf



# client 부분밑에 추가

[client]

default-character-set = utf8



# mysqld 부분밑에 추가

[mysqld]

init_connect = set collation_connection = utf8_general_ci

init_connect = set names utf8

character-set-server = utf8

collation-server = utf8_general_ci



# mysqldump 부분밑에 추가

[mysqldump]

default-character-set = utf8



# mysql 부분밑에 추가

[mysql]

default-character-set = utf8



[저장후 나가기]



# mysql 재시작

service mysqld restart 또는 /etc/init.d/mysqld restart



# utf8 확인하기

# mysql 접속

mysql -u root -p [엔터]



# 현재 캐릭터셋 확인

show variables like 'c%'; [엔터]

+--------------------------+-----------------------------------------+

| variable_name            | value                                   |

+--------------------------+-----------------------------------------+

| character_set_client     | utf8                                    |

| character_set_connection | utf8                                    |

| character_set_database   | utf8                                    |

| character_set_filesystem | binary                                  |

| character_set_results    | utf8                                    |

| character_set_server     | utf8                                    |

| character_set_system     | utf8                                    |

| character_sets_dir       | /usr/local/server/mysql/share/charsets/ |

| collation_connection     | utf8_general_ci                         |

| collation_database       | utf8_general_ci                         |

| collation_server         | utf8_general_ci                         |

| completion_type          | no_chain                                |

| concurrent_insert        | auto                                    |

| connect_timeout          | 10                                      |

+--------------------------+-----------------------------------------+



# 위와 같은 형태로 나오면 변경 완료









마지막 줄이 정확한 자료 같다.





[ centos 7 ]



1. 현재 설정된 상태

[root@localhost ~]# mysql --version

mysql  ver 15.1 distrib 10.2.12-mariadb, for linux (x86_64) using readline 5.1



[root@localhost ~]# mysql -uroot -p

enter password:

welcome to the mariadb monitor.  commands end with ; or \\g.

your mariadb connection id is 4

server version: 10.2.12-mariadb mariadb server



copyright (c) 2000, 2017, oracle, mariadb corporation ab and others.



type 'help;' or '\\h' for help. type '\\c' to clear the current input statement.



mariadb [(none)]> show variables like "%character%"; show variables like "%collation%";

+--------------------------+----------------------------+

| variable_name            | value                      |

+--------------------------+----------------------------+

| character_set_client     | utf8                       |

| character_set_connection | utf8                       |

| character_set_database   | latin1                     |

| character_set_filesystem | binary                     |

| character_set_results    | utf8                       |

| character_set_server     | latin1                     |

| character_set_system     | utf8                       |

| character_sets_dir       | /usr/share/mysql/charsets/ |

+--------------------------+----------------------------+

8 rows in set (0.00 sec)



+----------------------+-------------------+

| variable_name        | value             |

+----------------------+-------------------+

| collation_connection | utf8_general_ci   |

| collation_database   | latin1_swedish_ci |

| collation_server     | latin1_swedish_ci |

+----------------------+-------------------+

3 rows in set (0.01 sec)



mariadb [(none)]> exit

bye

[root@localhost ~]#





2. server.cnf 설정

[root@localhost ~]# vi /etc/my.cnf.d/server.cnf

[client]

default-character-set=utf8mb4



[server]

character-set-server=utf8mb4

log-bin=mariadb-bin

event-scheduler=on



[mysqld]

character-set-client-handshake = false

collation-server = utf8mb4_unicode_ci

#init-connect='set names utf8mb4'

character-set-server = utf8mb4

max_allowed_packet = 32m

slow_query_log

long_query_time = 2



[mariadb-10.1]

innodb_file_format=barracuda

innodb_large_prefix=on





3. client.cnf 생성

[root@localhost ~]# vi /etc/my.cnf.d/client.cnf

[client]

default-character-set=utf8mb4`,link:"/mysql/Mariadb 5.5 my.cnf 설정"},{title:"mysql - Invalid default value for '~' DATETIME",content:`
# {{ $frontmatter.title }}


## 설명 :

1. default 로 속성 datetime 을 이용하여 현재 시간으로 설정하려고하니 아래와 같은 에러가 발생했다

\`\`\`
error code: 1067. invalid default value for 'create_date'
\`\`\`

2. 데이터 타입을 datetime에서 timestamp 으로 변경후,



3. 아래와 같이 default 타입을 수정해주니 정상작동이 되었다.

\`\`\`
alter table user_info modify create_date timestamp not null default current_timestamp
\`\`\`



위에 내용대로 해결이 안되서 다르게 했음



\`\`\`
set sql_mode='allow_invalid_dates';
\`\`\`

위에 있는 코드로 하면 '0000-00-00' 년도 처리가 된다.



## 참고 자료 :

https://stackoverflow.com/questions/35565128/mysql-incorrect-datetime-value-0000-00-00-000000`,link:"/mysql/mysql - Invalid default value for DATETIME"},{title:"mysql - n개월 건수 구 할때",content:`
# {{ $frontmatter.title }}



## 문제 :


디비 테이블 에는 날짜(condate)와 건수(cnt)가 있습니다.

예들 들어 올해 월별 건수를 구할 때

4월부터는 아직 데이터가 없으니까 0으로 표시되게 하고 싶은데요



1월   2월  3월  4월 ..... 12월

10    15    10     0............0





## 해결 방법 :

아래 sql 쿼리를 참고하면 된다.


\`\`\`sql
select ifnull(sum(case mm when '01' then cnt end), 0) "01"

     , ifnull(sum(case mm when '02' then cnt end), 0) "02"

     , ifnull(sum(case mm when '03' then cnt end), 0) "03"

     , ifnull(sum(case mm when '04' then cnt end), 0) "04"

     , ifnull(sum(case mm when '05' then cnt end), 0) "05"

     , ifnull(sum(case mm when '06' then cnt end), 0) "06"

     , ifnull(sum(case mm when '07' then cnt end), 0) "07"

     , ifnull(sum(case mm when '08' then cnt end), 0) "08"

     , ifnull(sum(case mm when '09' then cnt end), 0) "09"

     , ifnull(sum(case mm when '10' then cnt end), 0) "10"

     , ifnull(sum(case mm when '11' then cnt end), 0) "11"

     , ifnull(sum(case mm when '12' then cnt end), 0) "12"

  from (select date_format(condate, '%m') mm

             , sum(cnt) cnt

          from t

         where condate >= '2017-01-01'

           and condate <  '2018-01-01'

         group by date_format(condate, '%m')

        ) a

\`\`\`



`,link:"/mysql/mysql - n개월 건수 구 할때"},{title:"mysql - 금액 관련 혹은 숫자 문제",content:`
# {{ $frontmatter.title }}


금액 단위를 1 부터 10까지 한다고 예를들면..

\`\`\`
where ( price >= 1000000 and price <= 10000000 )
\`\`\`

이렇게 하는데

절대 따옴표를 넣지 말고 숫자만 입력 해야한다.

만약에 숫자 안에 다가 소수점이 존재 하면 자릿 수 를 생각해서 round 함수를 쓰면 된다.



그리고 위에 비교 함수 말고 between 함수를 쓰면서

\`\`\`
where field between '시작' and '종료'
\`\`\`

이렇게 하면됨 비트윈 함수를 안 하면 무조건 숫자로만 표현해야 된다.



만약에 셀렉트 박스에서 100단위부터 1천단위 혹은 1억 단위로 하게 되면

100 >> 1000000 백만원으로 표현해야됨 (* 10000) 곱하기 1만을 넣어줘서 100만원으로 맞춰야 한다.`,link:"/mysql/mysql - 금액 관련 혹은 숫자 문제"},{title:"mysql - 월별 조회 해서 없으면 0으로 표시",content:`
# {{ $frontmatter.title }}


## sql 사용 방법 :

설명하자면 1일부터 30일까지 총합 표시 (없으면 0으로 표시)


\`\`\`sql
select ifnull(sum(case dd when '01' then cnt end), 0) "01"
     , ifnull(sum(case dd when '02' then cnt end), 0) "02"
     , ifnull(sum(case dd when '03' then cnt end), 0) "03"
     , ifnull(sum(case dd when '04' then cnt end), 0) "04"
     , ifnull(sum(case dd when '05' then cnt end), 0) "05"
     , ifnull(sum(case dd when '06' then cnt end), 0) "06"
     , ifnull(sum(case dd when '07' then cnt end), 0) "07"
     , ifnull(sum(case dd when '08' then cnt end), 0) "08"
     , ifnull(sum(case dd when '09' then cnt end), 0) "09"
     , ifnull(sum(case dd when '10' then cnt end), 0) "10"
     , ifnull(sum(case dd when '11' then cnt end), 0) "11"
     , ifnull(sum(case dd when '12' then cnt end), 0) "12"
     , ifnull(sum(case dd when '13' then cnt end), 0) "13"
     , ifnull(sum(case dd when '14' then cnt end), 0) "14"
     , ifnull(sum(case dd when '15' then cnt end), 0) "15"
     , ifnull(sum(case dd when '16' then cnt end), 0) "16"
     , ifnull(sum(case dd when '17' then cnt end), 0) "17"
     , ifnull(sum(case dd when '18' then cnt end), 0) "18"
     , ifnull(sum(case dd when '19' then cnt end), 0) "19"
     , ifnull(sum(case dd when '20' then cnt end), 0) "20"
     , ifnull(sum(case dd when '21' then cnt end), 0) "21"
     , ifnull(sum(case dd when '22' then cnt end), 0) "22"
     , ifnull(sum(case dd when '23' then cnt end), 0) "23"
     , ifnull(sum(case dd when '24' then cnt end), 0) "24"
     , ifnull(sum(case dd when '25' then cnt end), 0) "25"
     , ifnull(sum(case dd when '26' then cnt end), 0) "26"
     , ifnull(sum(case dd when '27' then cnt end), 0) "27"
     , ifnull(sum(case dd when '28' then cnt end), 0) "28"
     , ifnull(sum(case dd when '29' then cnt end), 0) "29"
     , ifnull(sum(case dd when '30' then cnt end), 0) "30"
  from (select date_format(vi_datetime, '%d') dd
             , count(*) as cnt
          from mainsite.bv_visitor
          where month(vi_datetime) = month(now())
         group by date_format(vi_datetime, '%d')
        ) a
\`\`\`



## 맺은말 :

이 방법은 역시나 통계를 할때 사용 된다~ 구루비 커뮤니티 글을 참고하면 된다. 도움 될게 많다.




## 참고 자료 :

http://www.gurubee.net/

`,link:"/mysql/mysql - 월별 조회 해서 없으면 0으로 표시"},{title:"MySQL 1분전, 하루전, 한시간전, 하루전, 한달전 데이터 조회",content:`
# {{ $frontmatter.title }}


## 설명 :

\`\`\`
// 1분전 데이터 조회
select * from 테이블명
where 시간칼럼명 >= date_add(now(), interval -1 minute)

// 10분전 데이터 조회
select * from 테이블명
where 시간칼럼명 >= date_add(now(), interval -10 minute);

// 한시간전 데이터 조회
select * from 테이블명
where 시간칼럼명 >= date_add(now(), interval -1 hour);

// 하루전 데이터 조회
select * from 테이블명
where 시간칼럼명 >= date_add(now(), interval -1 day);

// 한달전 데이터 조회
select * from 테이블명
where 시간칼럼명 >= date_add(now(), interval -1 month);
\`\`\`



- 시간 (-) 전 시간대

- 시간 (+) 이후 시간대
`,link:"/mysql/mysql 1분전 하루전 한시간전 하루전 한달전 데이터 조회"},{title:"mysql 8.0.26 접속하기",content:`
# {{ $frontmatter.title }}


현재 8이상 mysql으로 설치 되어서 아래 방법대로 접근해야된다.



https://velog.io/@jwoo/db-%eb%b0%8f-%ea%b3%84%ec%a0%95-%ec%83%9d%ec%84%b1%ea%b3%bc-%ea%b6%8c%ed%95%9c-%eb%b6%80%ec%97%ac-ver.8.0.26



루트로 접근 할때는 아래 자료 참고하기

\`\`\`
select host,user,plugin,authentication_string from mysql.user;

create user 'root'@'%' identified by '비번';

grant all privileges on *.* to 'root'@'%'; flush privileges;
\`\`\`




https://1mini2.tistory.com/87



여기 밑에가 더 정리 잘되어 있다.



일반관리, 관리자 관리 설정 방법 다 나왔다.



https://hyandmj.asuscomm.com/hblog/?p=766`,link:"/mysql/mysql 8 접속하기"},{title:"mysql error 1045 'root@localhost' (using password yes) 에러",content:`
# {{ $frontmatter.title }}


## 원인 :

error 1045 'root@localhost' (using password yes)







## 해결 방법 :

버전 5.7 이상 해결방법이다.

처음 설치 이후에 비밀번호가 디폴트 이기 때문에 직접적 으로 비밀번호를 바꿔야 한다.

\`\`\`
mysqladmin -u root password [new password]
\`\`\`

위에 명령어로 비번을 바꾸면 됨.`,link:"/mysql/mysql error 1045 root@localhost using password yes 에러"},{title:"MySQL Incorrect datetime value: '0000-00-00 00:00:00'",content:`
# {{ $frontmatter.title }}


## 사용 방법 :



mysql 5.7 이후 버전에서 사용 하려면 아래 명령어를 입력 하면 된다.

\`\`\`sql
set sql_mode='allow_invalid_dates';
\`\`\`

이후 버전에는 따로 타임스탬프로 이용해서 한다고 들었다~ 그건 구글링으로 찾아보자~`,link:"/mysql/MySQL Incorrect datetime value: 0000-00-00 00:00:00"},{title:"mysql safe mode",content:`
# {{ $frontmatter.title }}



세이프 모드 쿼리

\`\`\`
set sql_safe_updates = 0;
\`\`\`


## 참고자료 :

https://hello-bryan.tistory.com/278`,link:"/mysql/mysql safe mode"},{title:"mysql 공부하기",content:`
# {{ $frontmatter.title }}


인프런에서 인강 시청 하면 된다.

미리 구매 해 둔 것이 있어서 이거 참고하면서 공부 했다.

많이 도움이 됐다!

(링크 참고 하면 된다.)





## 참고 자료 :

https://www.inflearn.com/course/sql-%ec%98%88%ec%a0%9c-%ea%b8%b0%ec%b4%88

https://www.mysqltutorial.org/mysql-basics/`,link:"/mysql/mysql 공부하기"},{title:"mysql 깔끔하게 삭제하기",content:`
# {{ $frontmatter.title }}


https://hhseong.tistory.com/217`,link:"/mysql/mysql 깔끔하게 삭제하기"},{title:"mysql 더미 데이터 다운받기",content:`
# {{ $frontmatter.title }}



더미 데이터를 이용해서 공부 하면 된다.

샘플 데이터베이스를 받아오려면

구글링으로 download classicmodels 검색 한다.

사이트 접속하면 주황색 버튼이 보인다. 클릭 해서 다운 받아서 mysql워크벤치 혹은 heidisql 툴로 임포트 하면 된다.





여기 주소 접속 해서 다운 받으면 된다.


https://www.mysqltutorial.org/mysql-sample-database.aspx/`,link:"/mysql/mysql 더미 데이터 다운받기"},{title:"mysql 비밀번호 설정",content:`
# {{ $frontmatter.title }}


https://velog.io/@dong3789/centos-mysql-%eb%b9%84%eb%b0%80%eb%b2%88%ed%98%b8-%ec%84%a4%ec%a0%95`,link:"/mysql/mysql 비밀번호 설정"},{title:"mysql 시작일 종료일 비교하기",content:`
# {{ $frontmatter.title }}


## 설명 :


- 자주 헷깔리는 쿼리이기에 정리

- 컬럼 기간 : 컬럼시작일, 컬럼종료일

- 조회 기간 : 조회시작일, 조회종료일

\`\`\`
select * from table where 컬럼종료일 >= 조회시작일 and 컬럼시작일 <= 조회종료일
\`\`\`



## 자료 출처:



https://rocabilly.tistory.com/318



http://gnujava.com/board/article_view.jsp?article_no=1570&menu_cd=29&board_no=16&table_cd=epar06&table_no=06`,link:"/mysql/mysql 시작일 종료일 비교하기"},{title:"mysql 카운팅 처리",content:`
# {{ $frontmatter.title }}



count 쓰실때는 count(*) 이렇게 말고 count(idx) 이런식으로 컬럼명을 적는 습관을 들이시는게 좋습니다


레코드가 적을땐 *으로 해도 속도 차이가 딱히 안나지만 레코드가 많을때는 차이가 납니다


단, 컬럼명을 넣을때 pk컬럼명을 넣어야함, where절이 없을땐 count(*)가 빠르다.`,link:"/mysql/mysql 카운팅 처리"},{title:"mysql 쿼리 생년월일 순서대로",content:`
# {{ $frontmatter.title }}


\`\`\`
select <별칭>.*

from <테이블명> <별칭>

order by (별칭.created_at = '0000-00-00') asc,

별칭.created_at asc
\`\`\`

`,link:"/mysql/mysql 쿼리 생년월일 순서대로"},{title:"mysql 특정시간 이후에 출력 안되게 하는 방법",content:`
# {{ $frontmatter.title }}


mysql 특정시간 지나면 출력 안되게 하려면 아래 쿼리를 활용하면 된다.

\`\`\`
select * from 테이블 where 필드 >= now()
\`\`\`

간단하다. 필드 값은 데이터타임으로 해서 '0000-00-00 00:00:00' 기본값을 넣으면 된다.`,link:"/mysql/mysql 특정시간 이후에 출력 안되게 하는 방법"},{title:"mysql 평점 표시하기",content:`
# {{ $frontmatter.title }}



## sql 사용방법 :


select avg(평점) from 평점테이블 where id='가져올아이디'

이런식으로 해당 아이디의 평점을 하나하나 가져오겠죠... 한꺼번에 가져오고 싶으면

select id,avg(평점) from 평점테이블 group by id





4.00 표시됨



\`\`\`sql
select  user_id  /* 사용자 아이디 */
,category /* 항목 카테고리 */
,round(avg(score), 2) as avg_score  /* 평균을 구하고 소수점 셋째자리에서 반올림 하여 둘째까지 표시 */

from     tb_result

where  user_id = '유저아이디'

group   by category
\`\`\`





## 느낀점 :


역시나 응용해서 써야 한다. 이 방법으로 안 풀릴때는 구글링으로 찾아본다.`,link:"/mysql/mysql 평점 표시하기"},{title:"mysql 한달 이후 혹은 n일 이후에",content:`
# {{ $frontmatter.title }}


아래 쿼리 를 사용하면 된다.


\`\`\`
select * from 테이블 where date(필드) >= date(now()-interval 30 day)
\`\`\``,link:"/mysql/mysql 한달 이후 혹은 n일 이후에"},{title:"mysql8 권한 생성하기",content:`
# {{ $frontmatter.title }}


## 설명 :


아무래도 검색만으로 레퍼런스 찾아서 복붙하느라 정신 없어서

그냥 정리해 놓기로 했다.





관리자 계정하고 루트 계정은 따로 분리 해놓은게 해킹에 대비해서 좋다고한다.

루트 비번 따로 만들고 나면 그걸로 사용하지 말고 접속할때만 사용한다.

(즉 터미널에서 접속 할 경우에만 사용한다. 디비툴에서는 관리자 계정이나 루트계정으로 접속한다..)







유저 조회를하려면 아래 명령어로..

\`\`\`
select user,plugin,host from mysql.user;
\`\`\`

관리자 생성 및 권한 주기

\`\`\`
create user 'myaccount'@'%' identified by 'mypasswd';
grant all privileges on *.* to 'myaccount'@'%';
\`\`\`



왠만한건 여기 일반 계정 및 디비 생성하기로 하게될것이다.



일반 생성 및 권한주기

\`\`\`
create user 'abcd'@'localhost' identified by 'efgh';

create database abcd_db;

grant all privileges on adcd_db.* to 'abcd'@'localhost';
\`\`\`

권한 변경하기

\`\`\`
flush privileges;
\`\`\`

계정 권한 보기

\`\`\`
show grants for 'abcd'@'localhost';
\`\`\`



## 참고 자료 :

https://hyandmj.asuscomm.com/hblog/?p=766



https://velog.io/@nari120/mysql8-%eb%b9%84%eb%b0%80%eb%b2%88%ed%98%b8-%eb%b6%84%ec%8b%a4-%eb%b0%8f-%eb%b3%80%ea%b2%bd`,link:"/mysql/mysql8 권한 생성하기"},{title:"mysql8 비밀번호 초기화",content:`
# {{ $frontmatter.title }}


## 설명 :

일단 아래 참고 사이트 보면서 그대로 따라 했다.

버전 마다 차이 있습니다.

5.7부터 8까지 는 그대로 따라하는데 비밀번호 변경 하는 문법이 8 기준에서만 동작됩니다.

\`\`\`
systemctl stop mysqld // mysql 중단 mysqld --skip-grant-tables --user=mysql & // 비활성화시키기


mysql flush privileges;

select user, host, plugin from user;

// 계정 조회부터하고

alter user 'root'@'localhost' identified by 'new_passowrd';

// 비번 바꾸기

flush privileges;

exit;
\`\`\`







## 참고 문헌 :



https://ko.linux-console.net/?p=61#gsc.tab=0



https://blog.jiniworld.me/72`,link:"/mysql/mysql8 비밀번호 초기화"},{title:"mysql8 유저 생성,수정,삭제",content:`
# {{ $frontmatter.title }}




https://lifeinprogram.tistory.com/22`,link:"/mysql/mysql8 유저 생성 수정 삭제"},{title:"MySQL로 2단계 계층형 댓글, 답글 구현하기",content:`
# {{ $frontmatter.title }}



https://namn.tistory.com/8



라라벨 댓글

https://xerar.tistory.com/44

`,link:"/mysql/MySQL로 2단계 계층형 댓글, 답글 구현하기"},{title:"phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다.",content:`
# {{ $frontmatter.title }}


phpmysqladmin에서는 좀 약간 바꿔서 입력해야된다.

위에 메시지가 뜰경우 아래 처럼 명령어 몇줄 더 추가하면된다.

\`\`\`
set sql_mode = "no_auto_value_on_zero";
set time_zone = "+00:00";

alter table \`테이블명\`
change \`date\` \`datetime\`
datetime not null default '0000-00-00 00:00:00'
\`\`\``,link:"/mysql/phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다"},{title:"예제로 배우는 기초 SQL",content:`
# {{ $frontmatter.title }}



인프런에서 인강 시청 하면 된다. 미리 구매 해 둔 것이 있어서 이거 참고하면서 공부 했다. 많이 도움이 됐다.. (링크 참고 하면 된다.)



https://www.inflearn.com/course/sql-%ec%98%88%ec%a0%9c-%ea%b8%b0%ec%b4%88


https://www.mysqltutorial.org/mysql-basics/`,link:"/mysql/예제로 배우는 기초 SQL"},{title:"평점 기준을 조회해서 랭킹 구하는 방법",content:`
# {{ $frontmatter.title }}


mysql 평점 기준으로 조회해서 랭킹 구할때 한가지 주의 할게 있다.

테이블이 하난데 조건문이 wr_is_comment = 1 이면 댓글 기준으로 하면 중복된 결과 값이 나온다.

그래서 중복 제외한 결과를 조회 한다면 아래 처럼 쿼리를 짜면된다.

\`\`\`
select min(wr_id) as wr_id, wr_subject,
round(avg(wr_1),1) as score, wr_datetime
from 테이블명
where wr_is_comment = 1 group by wr_subject
\`\`\`

min wr_id로 하면 고유번호 따로 조회된다. 중복되지 않고 따로 조회됨`,link:"/mysql/평점 기준을 조회해서 랭킹 구하는 방법"},{title:"nodejs",content:`
# {{ $frontmatter.title }}


nodejs 공부 방법과 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/nodejs/index"},{title:"Node.js 시작하기 (feat. node.js 디자인 패턴 바이블)",content:`
# {{ $frontmatter.title }}


정대리 유투버가 추천하는 책


아래 유툽 영상 보고 공부 하자..


[![node.js 시작하기 (feat. node.js 디자인 패턴 바이블)](http://img.youtube.com/vi/wikazgha5pes/0.jpg)](https://youtu.be/ikazgha5pes?t=0s)`,link:"/nodejs/node.js 시작하기"},{title:"nodejs ajax 사용법",content:`
# {{ $frontmatter.title }}


아래 모듈을 설치 한다.

 
\`\`\`bash
npm install cors --save
\`\`\`

 

[소스명 : form.html]
\`\`\`html
<!doctype html>
  
<html>
  
  <head>
  
      <meta charset="utf-8">
  
      <title>email form</title>
  
  </head>
  
  <body>
  
    <form action="/email_post" method="post">
  
      email : <input type="text" name="email">
 
  
      <input type="submit">
  
    </form>
  
    <button class="ajaxsend">ajaxsend</button>
  
    <div class="result"></div>
  
    <script>
  
      document.queryselector('.ajaxsend').addeventlistener('click',function() {
  
        var inputdata = document.forms[0].elements[0].value;
  
        sendajax('/ajax_send_email', inputdata);
  
      })
  
      function sendajax(url, data) {
  
        var data = {'email' : data};
  
        data = json.stringify(data);
  
        var xhr = new xmlhttprequest();
  
        xhr.open('post',url);
  
        xhr.setrequestheader('content-type', "application/json");
  
        xhr.send(data);
  
        xhr.addeventlistener('load', function() {
  
          console.log(xhr.responsetext);
  
      //  var result = xhr.responsetext;
  
          var result = json.parse(xhr.responsetext);
  
      // document.queryselector(".result").innerhtml="dsfds";
  
          if(result.result !== "ok") return;
  
          document.queryselector(".result").innerhtml=result.email;
  
        });
  
      }
  
    <\/script>
  
  </body>
  
</html>
\`\`\`


[소스명 : app.js]

\`\`\`js
var express = require('express')
  
var app = express()
  
var bodyparser = require('body-parser')
  
var cors = require('cors')
  
app.listen(3000, function() {
  
 console.log("start, express server on port 3000");
  
});
  
app.use(express.static('public'))
  
app.use(bodyparser.json())
  
app.use(bodyparser.urlencoded({extended:true}))
  
app.set('view engine', 'ejs')
  
app.use(cors())
  
//url routing
  
app.get('/', function(req,res) {
  
  console.log('test');
  
  res.sendfile(__dirname+"/public/main.html")
  
});
  
app.get('/main', function(req,res) {
  
  res.sendfile(__dirname+"/public/main.html")
  
})
  
app.post('/email_post', function(req,res) {
  
  console.log(req.body.email)
  
//  res.send("post response")
  
//res.send("<h1>welcome " + req.body.email + "</h1>")
  
res.render('email.ejs', {'email' : req.body.email})
  
})
  
app.post('/ajax_send_email', function(req, res) {
  
 console.log(req.body.email)
  
 var responsdata = {'result' : 'ok', 'email' : req.body.email};
  
 res.json(responsedata);
  
})
\`\`\`  `,link:"/nodejs/nodejs ajax 사용법"},{title:"nodejs get 라우터",content:`
# {{ $frontmatter.title }}



\`\`\`js
var express = require('express')
var app = express()
app.listen(3000,fuction() {
console.log('시작 노드!')
});
  
app.get('/',function(req,res) {
//res.send(' 반가워 ');
res.sendfile(__dirname + "/public/main.html")
});
\`\`\`



이렇게하고 저장하면됨

그러고 public 디렉토리를 만든다

내부에서 main.html 파일을 만든다
`,link:"/nodejs/nodejs get 라우터"},{title:"nodejs mysql 설치 및 사용법",content:`
# {{ $frontmatter.title }}

일단 mysql을 설치한다.

\`\`\`bash
npm install mysql --save
\`\`\`

 

여기 아래 소스를 넣고 실행한다.

\`\`\`js
var mysql = require('mysql')
  
const connection = mysql.createconnection({
  host     : 'localhost',
  user     : 'root',
  password : '비번',
  database : '디비명'
});
\`\`\`

여기서 에러가 생김 

어떤 문제 냐면 바로 되는게 아니라 

만약 ‘er_not_supported_auth_mode’ 에러가 발생하면 아래 sql을 실행하고 다시 접속해보자.

::: info
alter user 'root'@'localhost' identified with mysql_native_password by '< mysql password >';
flush privileges;
:::

 

## 참고자료 : 

https://poiemaweb.com/nodejs-mysql
	

https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
	
`,link:"/nodejs/nodejs mysql 설치 및 사용법"},{title:"nodejs post 메서드",content:`
# {{ $frontmatter.title }}


nodejs post 메서드를 하는 방법에 대해서 포스팅 글 남겨본다.

 
\`\`\`js
var express = require('express')
var app = express()
var bodyparser = require('body-parser') >> 추가됨
  
app.listen(3000,fuction() {
console.log('시작 노드!')
});
\`\`\`

스태틱 디렉토리 설정

이미지 나 스크립트 등 디렉토리 설정을 해야되서 

따로 지정해야됨

\`\`\`js
app.use(express.static('public'))
app.use(bodyparser.json()) >> 추가됨
app.use(bodyparser.urlencoded({extended:true}) >> 추가됨
\`\`\` 

\`\`\`js
app.get('/',function(req,res) {
//res.send(' 반가워 ');
res.sendfile(__dirname + "/public/main.html")
});
\`\`\`

form 에서 이메일 포스트를 넘겨 받아와야 하는 상황

\`\`\`js
app.post('/email_post',function(req,res) {
console.log(req.body.email) 
});
\`\`\`



포스트 값은 따로 모듈을 설치해서 사용할수있다.

\`\`\`bash
npm install body-parser --save
\`\`\`

여기서 -- save는 패키지 제이슨 내부에 기록되게 한다는 뜻...


`,link:"/nodejs/nodejs post 메서드"},{title:"nodejs sequelize",content:`
# {{ $frontmatter.title }}


\`\`\`bash
npm install --save sequelize npm install --save 
sequelize-cli npx sequelize init
\`\`\`
`,link:"/nodejs/nodejs sequelize"},{title:"nodejs static 디렉토리 설정",content:`
# {{ $frontmatter.title }}


\`\`\`js
var express = require('express')
var app = express()
app.listen(3000,fuction() {
console.log('시작 노드!')
});
\`\`\`





스태틱 디렉토리 설정

이미지 나 스크립트 등 디렉토리 설정을 해야되서 

따로 지정해야됨 

 
\`\`\`js
app.use(express.static('public'))
  
app.get('/',function(req,res) {
//res.send(' 반가워 ');
res.sendfile(__dirname + "/public/main.html")
});
\`\`\`


`,link:"/nodejs/nodejs static 디렉토리 설정"},{title:"nodejs view engine 템플릿 사용하기",content:`
# {{ $frontmatter.title }}


esj 템플릿 설치 

 
\`\`\`bash
npm install ejs --save
\`\`\`

설치후에

디렉토리 / 하위에서 views라고 폴더를 만든다. 

/public

/views

이런식으로 디렉토리 구성됨  

/views/email.ejs 파일을 만든다.

 

email.ejs

html 템플릿을 만들고

내부에 따로 이메일을 확인하려면 

<%= email %>

이렇게 템플릿 문법으로 하면됨 

\`\`\`js
var express = require('express')
var app = express()
var bodyparser = require('body-parser') >> 추가됨
  
  
app.listen(3000,fuction() {
  
console.log('시작 노드!')
  
});
\`\`\`

스태틱 디렉토리 설정

이미지 나 스크립트 등 디렉토리 설정을 해야되서 

따로 지정해야됨 

 

\`\`\`js
app.use(express.static('public'))
  
app.use(bodyparser.json()) >> 추가됨
  
app.use(bodyparser.urlencoded({extended:true}) >> 추가됨
  
app.set('view engine','ejs')
  
app.set('views', path.join(__dirname,'views')) >> 이렇게 해줘야 인식된다고함 
  
  
app.get('/',function(req,res) {
  
res.sendfile(__dirname + "/public/main.html")
  
});
  
  
  
app.post('/email_post',function(req,res) {
  
res.render('email.esj',{'email' : 'req.body.email'})
  
});
\`\`\`

 

여기까지 마치겠다!`,link:"/nodejs/nodejs view engine 템플릿 사용하기"},{title:"nodejs 모듈 공부",content:`
# {{ $frontmatter.title }}



글로벌 모듈  global

 

전역객체이다.

 

어느곳에서도 쓸수있어서 사용된다.

 

콘솔 모듈

 

console.dir >> 오브젝트 에서만 출력됨

console.time >> 시간 출력만됨 

console.trace >> 에러 위치 알려줌 

 

타이머 모듈

타이머는 기본 자바스크립트에서 제공되는게 있어서 딱히 메모하지 않음

기본적인거 사용하면됨

 

 

__filename, __dirname

 

파일 이름 혹은 디렉토리명 

 

process 는 스레드 최상이라서 전체적으로 볼수있다고함

 

process.version 이렇게 명령어 치면

노드버전을 볼수있다 

 

확인하려면 

우선적으로

node 치고나서

process.version이라 치면됨 

 

 

 

내장 모듈

os 모듈

이것도 프로세스와 비슷함

프로세스는 노드가 시작되서 설정 정보를 볼수있는데

os 는 os 모듈이 시작되면서 볼수있다.

운영체제와 관련된 모듈을 볼수있다.

 

 

path 모듈

 

path.sep : 디렉토리 경로 단위? \\\\로 윈도에서나오고 맥에서는 // 로나옴

 

path.dirname(__filename) >> 디렉토리명

path.extname(__filename) >> 확장자

path.basename(__filename) >> 파일명 

 

path.parse(__filename) >> 이건 전체적으로 나온다. 디렉토리 부터 파일명까지 정보가

나옴

 

path.normalize >> 이건 풀 경로를 칠때 올바른 경로로 잡아준다

경로를 제대로 잡아줌 

 

경로 

./ 현재경로 ../부모경로  /루트 절대 경로

 

path.relative  경로가 올바르면 참이 나옴

 

중요함

path.join(__dirname,'..','파일이름') 

경로를 조각내서 원하는 경로랑 합해서 출력됨 

- 절대 경로 무시하고 합침

 

path.resolve

- 절대 경로 고려하고 합침

 

 

url 모듈 

기본 내장 함수라서 검색해서 찾아보면 됨

 

쿼리 스트링 모듈 

패스

암호화 모듈

`,link:"/nodejs/nodejs 모듈 공부"},{title:"nodejs 세션 설치",content:`
# {{ $frontmatter.title }}


설치 명령어


\`\`\`bash
npm install passport passport-local express-session connect-flash --save-dev
\`\`\`

`,link:"/nodejs/nodejs 세션 설치"},{title:"nodejs 초기설정",content:`
# {{ $frontmatter.title }}

초기설정


\`\`\`bash
npm init
\`\`\`
이렇게 하면 패키지 생성 과정으로 나온다

\`\`\`bash
name : node server
  
desc : node server test
\`\`\`

나머진 엔터 치면서 넘어간다

(나중에 수정도 할 수 있다)

package.json으로 확인하면됨 에디터에서 확인할 수 있다.

 

\`\`\`bash
npm install express --save
\`\`\`

설치하면됨 

그러면 디렉토리에 node_modules 이 설치 된다.

`,link:"/nodejs/nodejs 초기설정"},{title:"nodejs 테스트하기",content:`
# {{ $frontmatter.title }}


편집기를 열어서 아래 소스를 넣는다.

\`\`\`js
var express = require('express')
  
var app = express()
  
app.listen(3000,fuction() {
  
console.log('시작 노드!')
  
});
 
\`\`\` 


저장 하고 터미널에서 명령어를 입력한다.

 
\`\`\`bash 
node app.js
\`\`\`

모듈 설치

 

\`\`\`bash
sudo npm install nodemon -g
npm install nodemon --save-dev
\`\`\`

이건 자동으로 알아서 서버를 실행되면서 저장된다.

 

package.js 열어두고 스크립트 추가한다.

 
\`\`\`js
"scripts": {
    "start": "nodemon app.js"
}
\`\`\`

시작하기

\`\`\`bash
npm start
\`\`\`

 

 `,link:"/nodejs/nodejs 테스트하기"},{title:"count(): Argument #1 ($value) must be of type Countable|array, string",content:`
# {{ $frontmatter.title }}

## 원인 :

카운트 에러 날때 해결 방법 

php8 에서는 아래 방법을 써서 에러를 해결 하면된다.

\`\`\`php
count((array)$test) 
혹은 
count([$test])
\`\`\`

8이하 버전에서는 이렇게 예외처리를 통해서 처리 해야된다.

\`\`\`php
$aa = is_array($aa) ? count($aa) : 0 ;
\`\`\`


## 참고 자료 :

https://stackoverflow.com/questions/66671269/fatal-error-uncaught-typeerror-count-argument-1-var-must-be-of-type-cou`,link:"/php/count() : Argument ($value) must be of type Countable|array, string"},{title:"curl 와 file_get_contents 활성화 방법",content:`
# {{ $frontmatter.title }}


우선은 php 에서 오픈 됐는지 확인해야한다.



php.ini 로 접속해서 확인해본다. phpinfo(); 함수로도 확인 가능하다.

\`\`\`
vi /etc/opt/remi/php74/php.ini
\`\`\`

allow_url_fopen 옵션이 on 으로 활성화 됐는지 확인한다. 



그리고 

curl 은 disable_functions = curl_exec  관련된게 있는지 있으면 지운다.

(전부 다 지우면 문제 되어서 잘 보고 지워야 한다.)




## 참고 자료 : 

https://seoneu.tistory.com/25`,link:"/php/curl 와 file_get_contents 활성화 방법"},{title:"php",content:`
# {{ $frontmatter.title }}


php 공부 및 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/php/index"},{title:"jquery php 구글 포토 를 이용해서 이미지 업로드 하기",content:`
# {{ $frontmatter.title }}



https://github.com/googleapis/google-api-php-client/tree/main/examples


https://stackoverflow.com/questions/49726542/how-to-access-google-photos-using-api-in-php 



https://www.jqueryscript.net/gallery/full-featured-image-viewer-gallery.html 



구글 포토 를 이용해서 이미지 업로드 하기


`,link:"/php/jquery php 구글 포토 를 이용해서 이미지 업로드 하기"},{title:"mmap() failed: [12] Cannot allocate memory",content:`
# {{ $frontmatter.title }}

## 원인 : 

컴포저 설치 하고나서 패키지 다운 받으려 하니까 에러가 생겼다.

mmap() failed: [12] cannot allocate memory


## 해결 방법 : 

php.ini 에서 따로 메모리 리미트를 -1로 하면 된다. 명령어로 하는 방법도 있어서 아래꺼로 입력 한다.

\`\`\`php
/bin/dd if=/dev/zero of=/var/swap.1 bs=1m count=1024 /sbin/mkswap /var/swap.1 /sbin/swapon /var/swap.1
\`\`\`



`,link:"/php/mmap() failed: [12] Cannot allocate memory"},{title:"path 프레임워크",content:`
# {{ $frontmatter.title }}


일단 참고만한다.

여기 보면 이양반이 프레임워크 만들려고 고생했는데 업데이트가 없어서.. 망한것 같은데 

일단 깃헙 주소만 남겨본다.


https://github.com/wharley01/path
`,link:"/php/path 프레임워크"},{title:"php file upload 할때 tmp null로 나올경우",content:`
# {{ $frontmatter.title }}



파일 업로드를 하는도중에 파일이 업로드가 되지 않아서 원인을 찾아봤다.

일단 디버깅부터 해서 파일 업로드 체크 하자..

 \`\`\`php
 print_r($_files);
 die();
 \`\`\`


이러고 에러 6번이 나온다.

upload_err_no_tmp_dir

 
구글링하니까 tmp 파일에 임시파일 업로드가 제대로 되지 않아서 에러가 나온다.

아래 참고 자료를 확인해서 tmp 로 경로를 잡아줬더니 제대로 업로드 된다.

 
여러 원인이 많아서 해결 하려면 에러코드 부터 찾아보고 원인에 맞게 설정을 줘야한다.

upload_max_file 머시기 등등 설정을 줘야된다.



## 해결 방법 :

 \`\`\`php
upload_tmp_dir = /tmp/
\`\`\`

## 참고 자료 :
 
https://blog.naver.com/postview.nhn?blogid=shiaru&logno=222300256531`,link:"/php/php file upload 할때 tmp null로 나올경우"},{title:"php meta og 태그 정보 가져오는 자료",content:`
# {{ $frontmatter.title }}



깃헙 주소 남겨본다.

https://github.com/baj84/metadata`,link:"/php/php meta og 태그 정보 가져오는 자료"},{title:"php timezone 문제",content:`
# {{ $frontmatter.title }}



개발 하다가 알게 된 사실인데 

타임존 설정을 함수를 이용해서 수정을 해도 안먹힐때가 있다.. 

그럴경우 php.ini에서 수정하는게 훨 낫다~ 

아무리 타임존 함수 해도 변경이 안될때가 있다니..`,link:"/php/php timezone 문제"},{title:"디자인 패턴 참고 문헌",content:`
# {{ $frontmatter.title }}


아래 링크 참고한다.

https://codingtalk.tistory.com/category/design%20pattern`,link:"/php/php 디자인 패턴 공부"},{title:"랜덤 함수 이용해서",content:`
# {{ $frontmatter.title }}


guest00~99 문자열 표시하기 

\`\`\`
echo "guest".str_pad(rand(0,99), 2, "0", str_pad_left)."~".str_pad(rand(0,99), 2, "0", str_pad_left);
\`\`\`

`,link:"/php/php 랜덤 함수"},{title:"php 백일로 표시하기 생후 000일",content:`
# {{ $frontmatter.title }}

아래 소스코드 참고한다.

\`\`\`php
echo "생후 " . (int)((time() - strtotime("2019-4-14")) / (24 * 60 * 60) + 1) . "일";
\`\`\``,link:"/php/php 백일로 표시하기 생후 000일"},{title:"php 서버 없이 실행하기",content:`
# {{ $frontmatter.title }}


일단 파일 구조가 

public/index.php 로 있어야된다.

없으면 퍼블릭 내부에 인덱스 파일 만든다.





파일을 만든다

파일명 : run.sh

아래 소스코드 추가한다.

\`\`\`php
#!/usr/bin/env bash
php -s localhost:8000 -t public
\`\`\`

이러고 명령어 한줄 치면 된다.

\`\`\`base
./run.sh

혹은 

sh run.sh
\`\`\`


`,link:"/php/php 서버 없이 실행하기"},{title:"php 세션 에러 해결하기",content:`
# {{ $frontmatter.title }}


## 원인 : 


서버 설치 후에 php 세션 문제가 생겼다.
 


## 해결 방법 : 

\`\`\`
chcon -r -t httpd_sys_rw_content_t /var/lib/php/session 
chown -r nginx:nginx /var/lib/php/session
\`\`\`



## 참고 자료 : 

[https://www.lesstif.com/pages/viewpage.action?pageid=35356911](https://www.lesstif.com/pages/viewpage.action?pageid=35356911)`,link:"/php/php 세션 에러 해결하기"},{title:"php 셀렉트 박스 시간때 표시하기",content:`
# {{ $frontmatter.title }}

\`\`\`php
$hour=0;
while($hour++<24)
{
$timetoprint=date('g:i:s',mktime($hour,0,0,1,1,2011));
echo$timetoprint;
}
for($t=15;$t<=1440;$t+=15)
$arr[]=sprintf("%02d:%02d",$t/60%24,$t%60);
debug($arr);
\`\`\`


예시) 00:00 ~ 24:00 

\`\`\`php
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
echodate("h:i",$time)."\\n";
}
\`\`\`

`,link:"/php/php 셀렉트 박스 시간때 표시하기"},{title:"php 시작일 종료일 비교하기",content:`
# {{ $frontmatter.title }}


php start date end date compare 

키워드 검색하면된다.



\`\`\`
if (strtotime( $rent->endcontract ) >= strtotime( $request->startcontract ) ||
    strtotime( $rent->startcontract ) <= strtotime( $request->endcontract ) ) {
 
}
\`\`\`



## 참고 문헌 :

https://stackoverflow.com/questions/56185321/php-compare-start-and-end-dates-between-two-dates`,link:"/php/php 시작일 종료일 비교하기"},{title:"php 암호화처리",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자..

https://www.happyjung.com/lecture/3063?sca=php&sst=wr_good&sod=desc&sop=and&page=3&device=pc`,link:"/php/php 암호화처리"},{title:"php 에러 로그 보는 법",content:`
# {{ $frontmatter.title }}


아래 소스코드 참고 하자 

\`\`\`php
error_reporting(e_all); 
ini_set('display_errors', '1');
\`\`\``,link:"/php/php 에러 로그 보는 법"},{title:"php 컴포저 업데이트 에러",content:`
# {{ $frontmatter.title }}


컴포저 패키지 업데이트 할때 메모리 에러 뜬다면

아래 명령어로 하면 된다. 

\`\`\`php
composer_memory_limit=-1 composer update
\`\`\`



## 참고 자료 : 

https://stackoverflow.com/questions/36107400/composer-update-memory-limit`,link:"/php/php 컴포저 업데이트 에러"},{title:"ssr 패키지 주소",content:`
# {{ $frontmatter.title }}


깃헙 주소 남겨본다.


https://github.com/spatie/server-side-rendering



`,link:"/php/ssr 패키지 주소"},{title:"Warning: curl_exec() has been disabled for security reasons",content:`
# {{ $frontmatter.title }}


## 원인 : 

warning: curl_exec() has been disabled for security reasons in
 
hp에서 curl 및 curl_exec를 활성화하는 방법
 
자세히 알아보는방법은 아래 소스코드를 index.php에 넣어서 확인해보면 true로 나온다.

\`\`\`
var_dump(extension_loaded("curl"));
\`\`\`


## 해결 방법 : 

php 확장 "curl"은 php.ini에서 (보통 기본적으로) 활성화되어 있습니다 

extension=php_curl.dll

그러나 php.ini ( "disable_functions"는 virtualhost 또는 .htaccess 파일에서 설정할 수 없음) 와 같은 개별 기능 을 비활성화curl_exec() 할 수도 있습니다.

예를 들어, php.ini는 사용 disable_functions하지 못하도록 사용 중일 수 있습니다 curl_exec()-

disable_functions =  ...,curl_exec,...

이 경우 웹 사이트의 php 및 http 오류 로그 파일에이 경고가 포함됩니다.

경고 : curl_exec ()가 보안상의 이유로 비활성화되었습니다.

"disable_functions"값을 편집하여 "curl_exec"를 제거하고 php.ini를 저장 한 다음 apache를 다시 시작하십시오.
 
즉 php.ini 에서 disable_functions =  ...,curl_exec,… 찾아서 curl관련된 보안을 제거 하면됨 그리고 리스타트!!



구체적으로 다시 설명을 하자면 

disable_functions = exec, passthru, shell_exec, system, proc_open, curl_exec, curl_multi_exec, parse_ini_file, show_source

 

여기서 curl 관련된 단어 다 지워야한다.

안그럼 에러는 그대로 나오는걸로.. 



참고자료 :

[https://sir.kr/g5_tip/849](https://sir.kr/g5_tip/849)`,link:"/php/Warning: curl_exec() has been disabled for security reasons"},{title:"그누보드 메타 태그 추가 함수",content:`
# {{ $frontmatter.title }}



어떤분이 그누보드를 이용해서 메타태그를 함수화로 만들어서 추가 하는 방법을 올려놨다. 

소스코드를 직접 만들어서 올린거라서 이거 참고해서 내가 만든 블로그 솔루션에 추가 해놨다. 

혹시 몰라서 주소를 올려본다. 

http://chongmoa.com/gnuboard/19720`,link:"/php/그누보드 메타 태그 추가 함수"},{title:"금액 원화 만단위부터 경까지 표시하기",content:`
# {{ $frontmatter.title }}


금액을 만단위로해서 표시하기

예시 ) 199만9,990원

\`\`\`php
function price_format($price){
    $memey_arr = ["", "만", "억", "조", "경"];
    $str = "";
    for($i = count($memey_arr) - 1; $i >= 0; --$i){
        $unit = pow(10000, $i);
        $part = floor($price / $unit);
        if($part > 0){
            $str .= number_format($part) . $memey_arr[$i];
        }
        $price %= $unit;
    }
    return $str."원";
}
\`\`\`
 

## 참고 자료 : 

https://gist.github.com/presentkim/b37a05cf41624ce4432b47ecbbe2dad4`,link:"/php/금액 원화 만단위부터 경까지 표시하기"},{title:"디비 사용량 과 용량 구하기",content:`
# {{ $frontmatter.title }}

아래 소스코드 참고하자.


\`\`\`php
// 그누보드 전체 디비용량 구하기
$result = sql_query("show table status from ".g5_mysql_db." like 'g5%'");
$db_size = 0;
while($dbdata=sql_fetch_array($result)){
$db_size += $dbdata['data_length']+$dbdata['index_length'];
}
printf("%0.2f mb",$db_size / (1024*1024));
 
계정 사용량
// 계정 용량 구하기
$du = \`du -csk\`;
printf("%0.2f mb",$du / 1024);
\`\`\`
`,link:"/php/디비 사용량"},{title:"마스킹 처리 하기",content:`
# {{ $frontmatter.title }}


사업자 번호 마스킹

\`\`\`php
/**
 * 사업자 번호 마스킹
 */
if(!function_exists('bn_marking')) {
    function bn_marking($string = '')
    {
        return preg_replace('/^[0-9]{3}(-?)[0-9]{2}(-?)[0-9]{5}$/', '**********', $string);
    }
}
\`\`\`



휴대폰번호 마스킹

\`\`\`php
/**
 * 휴대폰번호 마스킹
 * @param string $phone
 * @return null|string|string[]
 */
if(!function_exists('phone_marking')) {
    function phone_marking($phone = '')
    {
        return preg_replace('/^(\\d{3,4})(-?)(\\d{3,4})(\\w*)(-?)(\\d*)/','010 - **** - ****',$phone);
    }
}
\`\`\`


이름 마스킹

\`\`\`php
/**
 * 이름 마스킹
 * @param string $name
 * @return null|string|string[]
 */
if(!function_exists('name_marking')) {
    function name_marking($name = '')
    {
        return preg_replace('/.(?=.$)/u', '*', $name);
    }
}
\`\`\`

https://koreanred.tistory.com/90


이메일 마스킹

\`\`\`php
/**
 * 이메일 마스킹
 * @param $str
 * @return null|string|string[]
 */
if(!function_exists('email_marking')) {
    function email_marking($email = '')
    {
        return preg_replace('/(\\w+)(\\w{3})(@.{1})([\\w*?]+)(.+)/i', '\\1***\\3*\\5', $email);
    }
}
\`\`\`


문자열 마스킹 


\`\`\`php
if(!function_exists('strlenname')) {
    /**
     * 문자열 마스킹
     * @param $name
     * @return string
     */
    function strlenname($name)
    {
        $name_length = mb_strlen($name, "utf-8");
        $sung = mb_substr($name, 0, 1, "utf-8");
        $name_star = '';
        for ($i = 1; $i < $name_length; $i++) {
            $name_star .= "*";
        }
 
        return $sung . $name_star;
    }
}
\`\`\`



`,link:"/php/마스킹처리"},{title:"배열을 12개씩 내부에 4개씩 묶어서 출력할경우",content:`
# {{ $frontmatter.title }}


배열이 1부터 12개까지 출력하는데 1배열에 4개씩 묶어서 출력하려면 어떻게 하는지 찾아보니까..

이렇게 하면된다.

\`\`\`php
$list = [];
// 리뷰글 가져오기
$sql = " select * from \`{$g5['g5_shop_item_use_table']}\` where is_confirm = '1' order by is_time desc limit 0,12";
$result = sql_query($sql);
for ($i=0; $rows = sql_fetch_array($result); $i++) {
$list[$i]['subject'] = conv_subject($rows['is_subject'],12,"…");
$list[$i]['content'] = conv_content($rows['is_content'],2);
$list[$i]['score'] = get_star($rows['is_score']);
$list[$i]['writer'] = mb_substr(get_text($rows['is_name']), 0, 1, 'utf-8') . "***" . mb_substr($rows['is_name'], -1, 0, 'utf-8');
$list[$i]['datetime'] = date('y-m-d',strtotime($rows['is_time']));
}

$output = array_chunk($list,4,true);
\`\`\`


여기서 중요한게 array_chunk 함수를 이용해서 4개씩 묶어서 출력한다. `,link:"/php/배열을 12개씩 내부에 4개씩 묶어서 출력할경우"},{title:"순차번호할때 디비에서는",content:`
# {{ $frontmatter.title }}


## 설명 :

순서대로 증가하는 거라면 해당 db컬럼에 uniq 속성을 부여하시고 공란으로 insert 하기 그러면 절대 중복되지 않는 순차번호가 생긴다
`,link:"/php/순차번호할때 디비에서는"},{title:"엑셀 파일 읽어와서 mysql db 올리기",content:`
# {{ $frontmatter.title }}


## 레시피  

이번 주제는 엑셀에 내용을 읽어서 mysql 디비에 올리는 방법에 대해서 포스팅 글 남겨본다.


구글링으로 찾아보니까 두가지 방법을 찾게 됐는데 장단점이 있다.

첫번째는 phpexcel 1.8 버전이 있다 이건 구글링에서 자주 보게 되는 플러그인인데 흔하지만 단점이 있다.

php7이하에서 사용된다. 상위버전에서는 에러가 많다. (실제로 이걸로 썼는데 에러 투성이라서 삭제 했다.)

사용법은 금방 찾을 수 있어서 포스팅에 올리지 않는다. 

  

두번째는 phpspreadsheet 이다. 스프레드시트는 php 8이상에서도 동작을 한다.

결국엔  이걸로 채택 했다. 구글링 검색 키워드는 phpspreadsheet import excel to mysql php 로 찾아보면 자료가 많다.

 

사용법은 우선 컴포저를 설치 해야한다.

\`\`\`base
composer require phpoffice/phpspreadsheet
\`\`\`

아래 소스를 참고해서 응용하면된다. 

\`\`\`php
<?php
require_once 'vendor/autoload.php';
require_once 'config.php';
   
use phpoffice\\phpspreadsheet\\spreadsheet;
use phpoffice\\phpspreadsheet\\reader\\csv;
use phpoffice\\phpspreadsheet\\reader\\xlsx;
   
if (isset($_post['submit'])) {
   
    $file_mimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
       
    if(isset($_files['file']['name']) && in_array($_files['file']['type'], $file_mimes)) {
       
        $arr_file = explode('.', $_files['file']['name']);
        $extension = end($arr_file);
       
        if('csv' == $extension) {
            $reader = new \\phpoffice\\phpspreadsheet\\reader\\csv();
        } else {
            $reader = new \\phpoffice\\phpspreadsheet\\reader\\xlsx();
        }
   
        $spreadsheet = $reader->load($_files['file']['tmp_name']);
   
        $sheetdata = $spreadsheet->getactivesheet()->toarray();
   
        if (!empty($sheetdata)) {
            for ($i=1; $i<count($sheetdata); $i++) { //skipping first row
                $name = $sheetdata[$i][0];
                $email = $sheetdata[$i][1];
                $company = $sheetdata[$i][2];
  
                $db->query("insert into users(name, email, company) values('$name', '$email', '$company')");
            }
        }
        echo "records inserted successfully.";
    } else {
        echo "upload only csv or excel file.";
    }
}
?>
\`\`\`

일단 나는 1만건 이상의 디비를 업로드 했더니 약간 로딩 되고나서 정상적으로 업로드 됐다. 



## 참고 자료 :

[https://artisansweb.net/read-csv-excel-file-php-using-phpspreadsheet/](https://artisansweb.net/read-csv-excel-file-php-using-phpspreadsheet/)

[https://www.studentstutorial.com/php/import-excel-data-php-spreadsheet.php](https://www.studentstutorial.com/php/import-excel-data-php-spreadsheet.php)
`,link:"/php/엑셀 파일 읽어와서 mysql db 올리기"},{title:"요일별 방문자수",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자 

https://chicpro.dev/%ec%9a%94%ec%9d%bc%eb%b3%84-%eb%b0%a9%eb%ac%b8%ec%9e%90%ec%88%98-%ea%b5%ac%ed%95%98%ea%b8%b0/`,link:"/php/요일별 방문자수"},{title:"원 화폐 단위를 한글로 표시",content:`
# {{ $frontmatter.title }}


\`\`\`php
function num_to_han($mny,$st=0,$t=0){
//숫자를 완벽하게 한글로 바꿔준다.
//num_to_han('123456789') -> 1억2천3백4십5만6천7백8십9
//num_to_han('123456789',0,0) -> 1억2천3백4십5만6천7백8십9
//num_to_han('123456789',6,0) -> 1억2천3백만
//num_to_han('123456789',0,1) -> 일억이천삼백사십오만육천칠백팔십구
//num_to_han('123456789',6,1) -> 일억이천삼백만
 
    if (ereg("[^0-9]",$mny)) return false;
    $mny=(string)$mny;
 
    $sepss=array("","십","백","천");
    $sepsl=array("","만","억","조","경","해","자","양","구","간","정","재","극");
    $nums=array("","일","이","삼","사","오","육","칠","팔","구");
    
    $return_txt = array(); // 반환되는 값
 
    $arr = array_reverse(str_split($mny));
    if ($st==0) $idx=0;
    else $idx=$st;
    
    $zero_cnt=0;
    for($i=$idx; $i<count($arr); $i++) {
        if ($i%4==0) {
            if ($zero_cnt==4) array_pop($return_txt);
            $zero_cnt=0;
            $return_txt[] = $sepsl[(int)($i/4)] ;
        }
        
        if ($arr[$i] != "0") {
            if ($t==0) $return_txt[] = $arr[$i] . $sepss[($i%4)];
            else if ($t==1) $return_txt[] = $nums[(int)$arr[$i]] . $sepss[($i%4)];
            else return false;
        }
        else $zero_cnt++;
    }
    if ($idx!=0) array_unshift($return_txt, $sepsl[(int)($idx/4)]) ;
    
    $return_txt=array_reverse($return_txt);
 
    $r_txt="";
    for($i=0;$i<count($return_txt);$i++)
        if ($return_txt[$i] != "") $r_txt .= $return_txt[$i];
 
    return $r_txt;
}
\`\`\`



결과 값은 1억2천3백 이런식으로 숫자, 한글 단위로 표시 된다.
`,link:"/php/원 화폐 단위를 한글로 표시"},{title:"좋아요 버튼 ",content:`
# {{ $frontmatter.title }}


아래 주소 접근하면된다.

이거 참고해서 제작하면 된다.

https://steemit.com/utopian-io/@faad/php-tutorial-how-to-develop-like-button-in-php-using-ajax

`,link:"/php/좋아요 버튼 참고 자료"},{title:"a 태그 사용시 나타나는 오류 해결하기",content:`
# {{ $frontmatter.title }}

## 원인 및 해결방법 :

::: info 
" react the href attribute requires a valid value to be accessible. " 
:::

결론은 아래처럼 사용하면 된다. 

둘중에 하나 사용하면 된다.


\`\`\`html
href="#!"
 
href="{() => false}"
\`\`\`
`,link:"/reactjs/a 태그 사용시 나타나는 오류 해결하기"},{title:"Target container is not a DOM element",content:`
# {{ $frontmatter.title }}


여기 자료 참고하기

https://javappo.tistory.com/278`,link:"/reactjs/Target container is not a DOM element"},{title:"useMemo 와 useCallback",content:`
# {{ $frontmatter.title }}


리액트 usememo 와 usecallback


위에 사이트 참고하면 된다. 


https://leehwarang.github.io/2020/05/02/usememo&usecallback.html`,link:"/reactjs/useMemo 와 useCallback"},{title:"리액트 네비게이션 페이지 이동시 닫기",content:`
# {{ $frontmatter.title }}


아래 자료 참고하자..

https://dev.to/nicm42/closing-a-navigation-menu-in-react-8ad`,link:"/reactjs/리액트 네비게이션 페이지 이동시 닫기"},{title:"리액트 모달 영역 밖에 클릭시 닫기",content:`
# {{ $frontmatter.title }}



여기 사이트 참고하면 된다.



https://rrecoder.tistory.com/146`,link:"/reactjs/리액트 모달 영역 밖에 클릭시 닫기"},{title:"리액트 상태관리",content:`
# {{ $frontmatter.title }}



여기 자료 참고하자..

https://maeng2418.github.io/react/state_management/
`,link:"/reactjs/리액트 상태관리"},{title:"리액트 탭 버튼 만들기",content:`
# {{ $frontmatter.title }}


아래 자료 참고 하자..

https://www.devaradise.com/react-tabs-tutorial`,link:"/reactjs/리액트 탭 버튼 만들기"},{title:"리액트 토스트 ui",content:`
# {{ $frontmatter.title }}


여기 참고 하자


https://react-hot-toast.com/`,link:"/reactjs/리액트 토스트 ui"},{title:"리액트 폼 검증하기",content:`
# {{ $frontmatter.title }}


아래 자료 참고 하자..


https://tlundberg.com/blog/2021-03-06/redwoodjs-signup-form/
`,link:"/reactjs/리액트 폼 검증하기"},{title:"리액트훅 러덕스 툴킷 로그인 소스",content:`
# {{ $frontmatter.title }}


아래 자료 참고하자...

https://dev.to/ganeshmani/modern-react-redux-toolkit-login-user-registration-tutorial-and-example-7h0


https://github.com/ganeshmani/redux-toolkit-user-flow`,link:"/reactjs/리액트훅 러덕스 툴킷 로그인 소스"},{title:"aws lightsail ssh 접속 불가 문제",content:`
# {{ $frontmatter.title }}


센토환경에서 ssh 접속 불가 문제 생길 경우

## 원인 :

루트 비밀번호를 잊어버려서 접속을 못하거나 텀키를 잊어버려서 접속 못하는 상황이다.


## 해결 방법 :

1 . 해당 인스턴스에서 스냅샷를 하나 만든다.

![111.png](./img/2023-01-26-001.png "111.png")


2. 홈으로 접근해서 스냅샷을 접근한다.

![222.png](./img/2023-01-26-002.png "222.png")

3. 새 인스턴스 만들기

![333.png](./img/2023-01-26-003.png "333.png")


여기서 중요한게 펌키가 있는지 없는지를 확인해야됩니다. 펌키 없으면 새 인스턴스만들때 새로 생성하면됩니다.

만약에 펌키를 새로 생성하려면 맨 위에 메뉴바에 계정 ▼ 를 누릅니다.

그리고 계정 눌러서 접근하면 되고 여기서 프로필 및 연락처 옆에 ssh키 를 눌러서 접근합니다.

키페어 생성하기를 눌러주면 됩니다.

중요한게 펌키를 꼭 필수로 가지고 있어야됩니다.

여기서 새로 만들면 되지만 자주 만들면 보안에 취약할 수 있어서 주의해야됩니다.

4. 시작 스크립트에 추가한다.

![444.png](./img/2023-01-26-004.png "444.png")

\`\`\`bash
sudo yum -y remove openssh-server openssh-clients openssh-askpass
sudo yum -y install openssh-server openssh-clients openssh-askpass
\`\`\`

위에 명령어를 그대로 넣으면 된다.

그리고나서 인스턴스 명을 지정하고 인스턴스 생성 하기 누르면 된다.

(새 인스턴스 만들때 가격때랑 옵션 같은거는 변경 해도 되는데 필자 같은 경우에는 그냥 그대로 적용했습니다.)

스크립트쪽에만 넣었고 나머진 바뀐게 없이 그대로 적용 했습니다.

5. 브라우저 터미널을 접근한다.

이게 바로 되지 않아서 처음에 접근하고
"오류가 발생하여 인스턴스에 연결하거나 연결 상태를 유지할 수 없습니다. 이 인스턴스가 방금 시작된 경우 1~2분 후에 다시 시도하십시오."

이런 메시지가 뜬다면

1~3번정도 재부팅 을 하다보면 "로그인에 실패했습니다. 이 인스턴스가 방금 시작된 경우 1~2분 후에 다시 시도하십시오." 이 메시지가 나온다. 메시지가 분명히 나옵니다.

이때 putty 혹은 terminal로 접근해서 계정 로그인 하면 접속 됩니다.

포트번호는 당연히 22 포트로 하면 되고 비밀번호는 필요 없이 그냥 펌키만 적용해주면 됩니다.

참고로 요금은 그대로 나옵니다. 하루정도만 소요했기 때문에..`,link:"/server/aws lightsail ssh 접속 불가 문제"},{title:"aws lightsail 새 프라이빗 키 만들기",content:`
# {{ $frontmatter.title }}


새 텀키를 만드는 방법에 대해서 설명 하겠습니다.

방법은 간단합니다. 그림 보고 따라 하면 된다.

## 1. 위에 보면 계정이라고 클릭하면 된다.

![11.png](./img/11.png "11.png")


## 2. 계정을 누르면 이동됩니다.

여기서 ssh 키라고 탭버튼 누른다.

![22.png](./img/22.png "22.png")


여기서 새로 생성이라고 저걸 누르면 된다.

ssh 키 페어 리전 이라고 뜨는데 당연히 한국 서울 누르면 된다.

여기선 알아서 응용해서 새로 만들면 된다.`,link:"/server/aws lightsail 새 프라이빗 키 만들기"},{title:"aws 아마존 메일 제한 해지하기",content:`
# {{ $frontmatter.title }}


아마존 메일 서버 오픈 해당 주소 참고 하면된다.


## 참고 자료 :


https://kimbongjun.github.io/web/2020/05/26/aws-%eb%9d%bc%ec%9d%b4%ed%8a%b8%ec%84%b8%ec%9d%bc-%eb%a9%94%ec%9d%bc-%ec%a0%9c%ed%95%9c-%ed%95%b4%ec%a0%9c/


https://console.aws.amazon.com/support/contacts?#/rdns-limits`,link:"/server/aws 아마존 메일 제한 해지하기"},{title:"centos - mysql5.7 설치하기",content:`
# {{ $frontmatter.title }}



## 시스템 환경 정보 보기

\`\`\`bash
cat /etc/redhat-release
\`\`\`
명령어로 센토 버전 확인 가능!



wget 설치

\`\`\`bash
yum -y install wget
\`\`\`



mysql 다운로드

\`\`\`bash
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
\`\`\`



 mysql 설치

\`\`\`bash
sudo rpm -ivh mysql57-community-release-el7-11.noarch.rpm

sudo yum install mysql-server
\`\`\`



서비스 시작

\`\`\`bash
sudo systemctl start mysqld
sudo systemctl enable mysqld
sudo systemctl status mysqld
\`\`\`


비밀번호 찾는방법 2가지
설치 후에 루트 비밀번호를 아예 모를 경우 명령어로 알수있다.

(근데 잃어버릴경우는 찾을수가 없기에… 다른방법을…)

\`\`\`bash
sudo grep 'temporary password' /var/log/mysqld.log
[note] a temporary password is generated for root@localhost: 패스워드
\`\`\`

이런식으로 맨 뒤에 비밀번호가 나온다.



그리고 mysql5.7 일경우 비밀번호 제한이 있다.



mysql 5.7 버전으로 넘어오면서 password validation에 대한 강도가 높아졌다. 하나 이상의 대문자, 숫자, 특수 문자가 포함 된 12자리의 암호를 요구한다.

암호를 입력하면 암호 강도에 대한 피드백을 받게 되며, 익명의 사용자의 삭제 및 루트의 리모트 로그인을 막을 것인지 대한 질문들을 한다.



비밀번호 제한을 없애자~

\`\`\`bash
$ vi /etc/my.cnf



[mysqld]

##password policy

validate_password_policy=low

#validate_password_policy=medium
\`\`\`

:::info
validate_password_policy=low << 이 소스 코드를 입력하면 길이 제한을 늘릴 수 있다.

짧게하면 위험이 있어서 왠만하면 보안상 좀 길고 복잡하게 해 놔야 한다.
:::

\`\`\`bash
systemctl restart mysqld
\`\`\`

재 시작 한다.



보안 스크립트 실행

\`\`\`bash
sudo mysql_secure_installation

the existing password for the user account root has expired. please set a new password.

new password:
\`\`\`
 (이전에 비번 찾기 명령어로 알아왔기때문에 바로 진행됨)

<7ahoocwyayg  이건 예비 비밀번호 이다. (매번 다르게 생성 되서 접근 할 수 없다.)

아래 처럼 진행을 하면 된다. (y 대문자 와이를 했더니 넘어갔음)

\`\`\`bash
estimated strength of the password: 50

do you wish to continue with the password provided?(press y|y for yes, any other key for no) : y

by default, a mysql installation has an anonymous user,

allowing anyone to log into mysql without having to have

a user account created for them. this is intended only for

testing, and to make the installation go a bit smoother.

you should remove them before moving into a production

environment.



remove anonymous users? (press y|y for yes, any other key for no) : y

success.





normally, root should only be allowed to connect from

'localhost'. this ensures that someone cannot guess at

the root password from the network.



disallow root login remotely? (press y|y for yes, any other key for no) : y

success.



by default, mysql comes with a database named 'test' that

anyone can access. this is also intended only for testing,

and should be removed before moving into a production

environment.





remove test database and access to it? (press y|y for yes, any other key for no) : y

 - dropping test database...

success.



 - removing privileges on test database...

success.



reloading the privilege tables will ensure that all changes

made so far will take effect immediately.



reload privilege tables now? (press y|y for yes, any other key for no) : y

success.
\`\`\`


mysql 접속한다.

\`\`\`bash
mysql -u root -p
enter password:


welcome to the mysql monitor.  commands end with ; or \\g.

your mysql connection id is 5

server version: 5.7.28 mysql community server (gpl)



copyright (c) 2000, 2019, oracle and/or its affiliates. all rights reserved.



oracle is a registered trademark of oracle corporation and/or its

affiliates. other names may be trademarks of their respective

owners.



type 'help;' or '\\h' for help. type '\\c' to clear the current input statement.

mysql>
\`\`\`

여기까지가 mysql 접근 한 것이다.



두번째는 비밀번호를 잊었을 때~


mysql 정지

\`\`\`bash
systemctl stop mysqld
\`\`\`

mysql 환경 옵션 설정

\`\`\`bash
systemctl set-environment mysqld_opts="--skip-grant-tables"
\`\`\`

mysql 시작

\`\`\`bash
systemctl start mysqld
\`\`\`

mysql 로그인

비밀번호 없이 로그인 가능!

\`\`\`bash
mysql -u root
\`\`\`

루트 비밀번호 변경

5.7부터는 비밀번호 컬럼이 password 에서 authentication_string으로 변경됨

\`\`\`sql
update mysql.user set authentication_string = password('새로운 비밀번호') where user = 'root' and host = 'localhost';
flush privileges;
\`\`\`

mysql 정지

\`\`\`bash
systemctl stop mysqld
\`\`\`

mysql 환경 옵션 설정 해제

\`\`\`bash
systemctl unset-environment mysqld_opts
\`\`\`

mysql 시작

\`\`\`bash
systemctl start mysqld
\`\`\`

mysql 로그인

\`\`\`bash
mysql -u root -p
\`\`\`

접속해서 쿼리를 입력 했을 때 문제가 생겼다고 하면?

\`\`\`sql
you must reset your password using alter user statement before executing this statement.
\`\`\`

mysql 접속 후  password validation을 삭제 했음

\`\`\`bash
mysql -u root -p
mysql> uninstall plugin validate_password;
\`\`\`



사용자 추가

\`\`\`sql
create user '사용자'@'localhost' identified by '비밀번호';
\`\`\`



권한 부여

모든 권한을 부여함

\`\`\`sql
grant all privileges on *.* to '사용자'@'%';
\`\`\`


외부접속 허용

\`\`\`bash
vi /etc/my.cnf bind-address 0.0.0.0
\`\`\`
없으면 추가해준다.





## 참고사이트 :



https://sybd.tistory.com/216



https://blog.eomsh.com/25



https://cherrypick.co.kr/how-to-install-mysql5-7-in-centos7/







`,link:"/server/centos - mysql5.7 설치하기"},{title:"centos - php 7.x 버전 설치하기",content:`
# {{ $frontmatter.title }}



## 1. 외부 저장소 추가

\`\`\`bash
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
\`\`\`





## remi  설치

\`\`\`bash
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
\`\`\`





## 2. 유틸 설치하기

yum-utils 설치

\`\`\`bash
yum -y install yum-utils
\`\`\`


php 7.x 선택해서 설치하기

\`\`\`bash
yum-config-manager --enable remi-php71   [install php 7.1]
yum-config-manager --enable remi-php72   [install php 7.2]
yum-config-manager --enable remi-php73   [install php 7.3]
yum-config-manager --enable remi-php74   [install php 7.4]
\`\`\`


\`\`\`bash
yum -y install php php-mcrypt php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinfo
yum -y install php php-bcmath php-common php-dba php-fpm php-gd php-mbstring php-mysql php-pear php-xml
\`\`\`





추가 모듈이 있으면 확인 할수있음

\`\`\`bash
yum search php
\`\`\`



php 설정

\`\`\`bash
vi /etc/php.ini

[php]

date.timezone = asia/seoul


cgi.fix_pathinfo=0

open_basedir = /home

display_errors = off

allow_url_fopen = off

expose_php = off

short_open_tag=on

\`\`\`





php-fpm 설정 변경

\`\`\`bash
vi /etc/php-fpm.d/www.conf

user = nginx

group = nginx


listen.owner = nginx

listen.group = nginx

listen.mode = 0660



listen = /var/run/php-fpm/php-fpm.sock
\`\`\`


nginx 설정


nginx의 runtime user:group을 설정합니다.

nginx.conf 파일의 user 부분을 찾아서 다음과 같이 변경합니다.


\`\`\`bash
# vi /etc/nginx/nginx.conf

user   nginx nginx;
\`\`\`


## 참고자료:


http://bong8nim.com/post/programming/etc/centos-nginx-php-fpm-socket-%ec%84%a4%ec%a0%95/



`,link:"/server/centos - php 7.x 버전 설치하기"},{title:"centos7 selinux 보안해제",content:`
# {{ $frontmatter.title }}


:::info
selinux

인터넷에 연결된 리눅스라면 selinux를 사용하는 게 좋다고 하지만, 설정이 어렵습니다.

위험을 감수하고서라도 편하게 사용하고 싶다면 selinux를 끌 수 있습니다. selinux를 끄는 두 가지 방법을 포스팅 글 남겨봅니다.
:::






## 방법 1
다음과 같이 명령하면 selinux가 꺼집니다. 재부팅하면 다시 selinux가 켜집니다.

\`\`\`bash
setecforce 0
\`\`\`

만약 다시 selinux를 사용하고 싶다면 다음과 같이 명령합니다.

\`\`\`bash
setecforce 1
\`\`\`

## 방법 2
/etc/selinux/config에 다음과 같은 코드가 있습니다.

\`\`\`bash
selinux=enforcing
\`\`\`

다음과 같이 바꿉니다.

\`\`\`bash
selinux=disabled
\`\`\`

시스템을 재부팅하면 적용됩니다.

방법 1과는 달리 재부팅해도 설정이 유지됩니다.



selinux가 활성화상태인지 확인한다. 활성화상태라면 비활성화하여야 한다.

\`\`\`bash
vi /etc/selinux/config

selinux=disabled
\`\`\`



## 자료 출처 :

https://simjaejin.tistory.com/13?category=668180`,link:"/server/centos - selinux 보안해제"},{title:"centos7 php 여러 버전 설치하기",content:`
# {{ $frontmatter.title }}



php 버전별로 설치 하기 주제로 포스팅 글을 남겨봅니다.

우선 각 버전 마다 설치를 합니다.





## 준비물

- 설치 해야 될 버전 : 5.6, 7.4, 8







## 1. 외부 저장소 추가하기

\`\`\`bash
sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
\`\`\`



## 2. php 버전 마다 설치하기

- 5.6 설치하기

\`\`\`bash
yum install -y --enablerepo=remi, remi-php56 php php-bcmath php-cli php-common php-dba php-dbg php-devel php-embedded php-enchant php-fpm php-gd php-gmp php-imap php-interbase php-intl php-ldap php-litespeed php-mbstring php-mcrypt php-mysqlnd php-odbc php-opcache php-pdo php-pgsql php-process php-pspell php-recode php-snmp php-soap php-tidy php-xml php-xmlrpc php-curl
\`\`\`



버전 확인

\`\`\`bash
php -v
\`\`\`



- 7.4 설치하기

\`\`\`bash
sudo yum-config-manager --enable remi-php74
sudo yum -y install php php-common php-opcache php-mcrypt php-cli php-gd php-curl php-mysqlnd
\`\`\`


버전 확인

\`\`\`bash
php -v
\`\`\`






- 8 버전 설치 하기

\`\`\`bash
sudo yum -y install yum-utils
sudo yum-config-manager --disable 'remi-php*'
sudo yum-config-manager --enable remi-php80
sudo yum -y install php php-{cli,fpm,mysqlnd,zip,devel,gd,mbstring,curl,xml,pear,bcmath,json}
\`\`\`bash



버전 확인

\`\`\`bash
php -v
\`\`\`




세 가지를 설치합니다.



## 3. php fpm 설정

\`\`\`bash
vi /etc/php-fpm.d/www.conf   [php 7.1]
vi /opt/remi/php56/root/etc/php-fpm.d/www.conf  [php 5.6]
\`\`\`

위에 경로는 다를수 있다보니 일단 경로 부터 찾아본다.



주의 : php을 시작하는 동안 오류가 발생하는 경우 selinux 정책이 시작을 차단할 수 있습니다. ""selinux가 강제 모드 인 경우 허용 모드로 설정 한 다음 서비스를 다시 시작하십시오."

\`\`\`bash
getenforce
setenforce 0
\`\`\`



여기서 liten 을 로컬호스트 포트 로 지정한다.

\`\`\`bash
listen = 127.0.0.1:9000 [php56-php-fpm]
listen = 127.0.0.1:9001 [php74-php-fpm]
listen = 127.0.0.1:9002 [php8-php-fpm]
\`\`\`

\`\`\`bash
systemctl enable php56-php-fpm
systemctl start php56-php-fpm


systemctl enable php74-php-fpm
systemctl start php74-php-fpm


systemctl enable php8-php-fpm
systemctl start php8-php-fpm

\`\`\`




## 4. nginx 에 설정에 접근합니다.

\`\`\`bash
vi /etc/nginx/nginx.conf


upstream php_worker56 {
    server  localhost:9000;
}

upstream php_workers74 {
    server localhost:9001;
}

upstream php_worker8 {
    server localhost:9002
}

\`\`\`



중간 쯤에 위에 소스를 넣어준다.

그러고 해당 경로에 있는지 확인한다.

\`\`\`bash
ls -l /var/run/php-fpm
\`\`\`



## 5. 모든 디렉토리에 적절한 소유권 권한을 설정한다.

\`\`\`bash
chown -r root:nginx /var/www/html/example1.com/
chmod -r 755 /var/www/html/example1.com/
chown -r root:nginx /var/log/nginx/example1.com/
chmod -r 660 /var/log/nginx/example1.com/
\`\`\`

아래 방법 처럼 권한을 주면 된다.

\`\`\`bash
find ./ -type f -exec chmod 0644 {} \\;
find ./ -type d -exec chmod 0755 {} \\;

chcon -t httpd_sys_content_t /data/www/html/sites/mysite -r
chcon -t httpd_sys_rw_content_t /data/www/html/sites/mysite/logs -r
\`\`\`



해당 경로로 접근해서 phpinfo 함수를 넣어준다.

\`\`\`bash
vi index.php

<?php phpinfo();
\`\`\`





## 6. nginx 서브 호스트 설정 추가하기

\`\`\`bash
vi /etc/nginx/conf.d/example1.com.conf

server {
        listen 80;
        server_name example1.com www.example1.com;

        root   /var/www/html/example1.com/;
        index index.php index.html index.htm;

        #charset koi8-r;
        access_log /var/log/nginx/example1.com/example1_access_log;
        error_log   /var/log/nginx/example1.com/example1_error_log   error;

       location / {
                try_files $uri $uri/ /index.php?$query_string;
        }

       # pass the php scripts to fastcgi server listening on 127.0.0.1:9000
        location ~ \\.php$ {

                root    /var/www/html/example1.com/;
                fastcgi_pass   php_worker56;    #set port for php-fpm to listen on
                fastcgi_index  index.php;
                fastcgi_param  script_filename  $document_root$fastcgi_script_name;
                include         fastcgi_params;
                include /etc/nginx/fastcgi_params;

        }
}
\`\`\`



여기서 중효한게 fastcgi_pass 에 로컬 호스트 와 포트를 적절 하게 설정 해야한다.

각 php 버전마다 설정을 해야되서.. 판단을 잘해서 설정 해주면 된다.

그러나면 재 시작 을 해주면된다.

\`\`\`bash
nginx -t
systemctl restart nginx php56-php-fpm php74-php-fpm php8-php-fpm
\`\`\`




## 참고 자료 :

https://ko.linux-console.net/?p=2310



## 맺음말 :


레시피대로 해서 버전별로 설치 하면 된다 하지만 시스템 구축하다보면 잘 안되는게 다반사인데..

구글링으로 알아서 찾아 봐야 한다. 증상은 다양해서 치료법은.. 구글링으로..


`,link:"/server/centos7 - php 여러 버전 설치하기"},{title:"centos7 - vsftp 설치하기",content:`
# {{ $frontmatter.title }}


설치 됐는지 확인하기

\`\`\`bash
yum list installed vsftpd rpm -qa vsftpd
\`\`\`


vsftpd를 설치하기

\`\`\`bash
yum install -y vsftpd
\`\`\`


vsftpd를 업데이트

\`\`\`bash
yum update vsftpd
\`\`\`

#### 설정 변경

\`\`\`bash
vi /etc/vsftpd/vsftpd.conf

anonymous_enable=no

local_enable=yes

write_enable=yes

local_umask=022

dirmessage_enable=yes

xferlog_enable=yes

connect_from_port_20=yes

xferlog_file=/var/log/xferlog

xferlog_std_format=yes

chroot_local_user=yes

listen=yes

pam_service_name=vsftpd

userlist_enable=yes

tcp_wrappers=yes
\`\`\`


구동하기

\`\`\`bash
service vsftpd start service vsftpd enable
\`\`\`

동작 중인지 확인하기

\`\`\`bash
netstat --tcp -anp | grep vsftpd
\`\`\`

방화벽 열기

\`\`\`bash
sudo firewall-cmd --permanent --zone=public --add-port=21/tcp
sudo firewall-cmd --permanent --zone=public --add-port=20/tcp
sudo firewall-cmd --reload
\`\`\`

에러 해결 하기

530 permission denied 오류를 찾아보니, vsftpd에 기본적으로 접속거부 리스트에 root 계정이 포함되어 있다고 한다.

\`\`\`bash
vi /etc/vsftpd/ftpusers
vi /etc/vsftpd/user_list
\`\`\`

수정하기 (두곳에 루트만 빼면 된다)

[root@localhost vsftpd]

vi /etc/vsftpd/ftpusers

users that are not allowed to login via ftp root bin daemon adm lp sync shutdown halt mail news uucp operator games nobody

여기서 루트만 주석처리한다.

서비스 재 시작하기

\`\`\`bash
service vsftpd restart
\`\`\`

에러 해결 하기 500 oops: vsftpd: refusing to run with writable root inside chroot()

\`\`\`bash
vi /etc/vsftpd/vsftpd.conf allow_writeable_chroot=yes
\`\`\`

마지막줄에서 추가한다.

\`\`\`bash
pasv_enable=yes pasv_max_port=40000 pasv_min_port=40000
\`\`\`


방화벽 열어주기

\`\`\`bash
firewall-cmd --permanent --add-port=40000/tcp
firewall-cmd --reload service vsftpd restart
\`\`\`

최종 /etc/vsftpd/vsftpd.conf 파일 내용

\`\`\`bash
anonymous_enable=no
local_enable=yes
write_enable=yes
local_umask=022
dirmessage_enable=yes
xferlog_enable=yes
connect_from_port_20=yes
xferlog_file=/var/log/xferlog
xferlog_std_format=yes
chroot_local_user=yes
listen=yes
pam_service_name=vsftpd
userlist_enable=yes
tcp_wrappers=yes
allow_writeable_chroot=yes
pasv_enable=yes
pasv_max_port=40000
pasv_min_port=40000
\`\`\`


여기서 아래 에러가 나온다면... 500 oops: run two copies of vsftpd for ipv4 and ipv6

아래처럼 yes 에서 no로 설정한다.

listen_ipv6=no

마지막으로 중요한걸 빠졌다.

외부에 방화벽을 열어줘야한다.

아마존 서버 같은경우는 인스턴스에서 인바운드를 열면 된다.

500 oops: unrecognised variable in config file: userlist_eniable

이렇게 에러가 나올경우 해당 변수가 없다고 나온다.

userlist_eniable 찾아서 주석처리나 문법을 제거 하면된다.`,link:"/server/centos7 - vsftp 설치하기"},{title:"centos7 - 사용자 상위폴더 접근 제한",content:`
# {{ $frontmatter.title }}


 처음 리눅스 설치 후에 상위로 디렉토리 접근 되는데 접근 못하게 제한 을 줄 수 있다.

 1. 상위 폴더 접근은 퍼미션 조정으로 접근을 막는 방법

 2. sftp에서 chroot 기능을 이용하여 사용자의 홈 폴더를 root 폴더로 지정하는 방법 (단, ssh 사용불가)


 - 퍼미션으로 접근 막기

 \`\`\`bash
 chmod 711 /
 chmod 711 /home
 chmod 711 /etc
 chmod 711 /bin
 chmod 711 /boot
 chmod 711 /dev
 chmod 711 /mnt
 chmod 711 /opt
 chmod 711 /proc
 chmod 711 /usr
 chmod 711 /usr/local
 chmod 711 /var
 \`\`\``,link:"/server/centos7 - 사용자 상위폴더 접근 제한"},{title:"centos7 - 웹서비스 사용자 설정하기",content:`
# {{ $frontmatter.title }}





웹 서버는 원격에서 접속하는 서비스이기 때문에 root를 사용하지 않도록 합니다.



보안에 따라 여러 가지 설정이 있지만, 본 문서는 웹 서비스를 사용할 수 있는 user를 추가하고,

웹 서버 서비스인 nginx를 user의 group에 추가합니다.





웹 서비스를 사용할 user를 추가합니다.

\`\`\`bash
useradd user
passwd user
\`\`\`


웹 서비스 사용자의 기본 파일 생성 권한에서 other 에 대한 부분을 설정하여, 권한이 없는 사용자에 대한 접근을 제한합니다.

\`\`\`bash
echo "umask 0027" >> /home/user/.bash_profile
\`\`\`


웹 서비스를 사용할 user의 group에 nginx 를 추가합니다.

\`\`\`bash
usermod -a -g user nginx
\`\`\`


생성한 user의 디렉토리의 권한을 설정합니다.

\`\`\`bash
chmod 750 /home/user/
\`\`\`


`,link:"/server/centos7 - 웹서비스 사용자 설정하기 "},{title:"centos7 locale 변경",content:`
# {{ $frontmatter.title }}



1. locale 확인

\`\`\`bash
locale
\`\`\`

2. locale 변경
명령어로 locale 변경

\`\`\`bash
localectl set-locale lang=ko_kr.utf8
\`\`\`



vi /etc/locale.conf  직접 편집

\`\`\`bash
lang=ko_kr.utf8
\`\`\`



혹시나 제대로 실행 안됐을경우?
서버를 재부팅 해야한다.



\`\`\`bash
reboot
\`\`\`





## 참고 문헌 :

https://cloud-information.tistory.com/3`,link:"/server/centos7 locale 변경"},{title:"centos7 nodejs 삭제 후에 재설치하기",content:`
# {{ $frontmatter.title }}


센토 os 환경에서 노드 를 업데이트 하는데 문제가 생겼다.

아래 처럼 에러가 뜬다..

npm does not support node.js v10.24.0 you should probably upgrade to a newer version of node as we can't make any promises that npm will work with this version. you can find the latest version at https://nodejs.org/ /root/.npm-global/lib/node_modules/npm/lib/npm.js:32


최신버전인데 불안정하는가.. 결국엔 삭제후에 재설치 하기로 했다.

일단 삭제 한다.

\`\`\`bash
rm -rf /usr/lib/node_modules/
yum remove nodejs
npm -y
\`\`\`

그러고 구글링으로 찾아서 재 설치를 하는데 똑같이 문제가 생긴다..

결국엔 안정된 버전으로 설치 해야할것 같다. [https://webdoli.tistory.com/57](https://webdoli.tistory.com/57)

여기 이 방법대로 했더니 결국엔 설치 완료!!

여기서 다시 설명하자면 아래 모듈을 설치후에 원하는 버전을 확인하면...

\`\`\`bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash nvm ls-remote
\`\`\`

쭈루룩 버전이 어마어마하게 많다 근데 여기서 좀 적당한걸 찾아보니까 v16.14.0 (latest lts: gallium)

이게 딱일것같다.

\`\`\`bash
nvm install 16.14.0
\`\`\`

근데 여기서 설치하면 에러가뜬다..

에러 메시지 보면 해결 방법이 있다.

\`\`\`bash
nvm use --delete-prefix v16.14.0
\`\`\`


이러고 npm -v 와 node -v로 버전을 확인하면 된다.


여기서 또 다시 문제가 생겼다.

/usr/bin/env: node: permission denied


구글링으로 다시 찾아보니까

https://www.google.com/search?newwindow=1&rlz=1c5chfa_enkr892kr892&sxsrf=apq-wbs1503fez-j7ldqh_s8hgxohfuo3g:1645118295339&q=usr/bin/env:+node:+permission+denied&sa=x&ved=2ahukewjilo2cn4f2ahvqz94khzekaaeq1qj6bagjeae&biw=1680&bih=853&dpr=2

https://ngdeveloper.com/usr-bin-env-node-permission-denied/



위에꺼 보고 하는데 진짜 잘보고 심볼릭링크를 설정해야한다 그대로 복붙했다가는..

문제 될 수 있다.

끝!`,link:"/server/centos7 nodejs 삭제 후에 재 설치"},{title:"centos7 php 세션 문제",content:`
# {{ $frontmatter.title }}


## 원인 :

서버 설치 후에 php 세션 문제가 생겼다.


## 해결 방법 :

\`\`\`bash
chcon -r -t httpd_sys_rw_content_t /var/lib/php/session
chown -r nginx:nginx /var/lib/php/session
\`\`\``,link:"/server/centos7 php 세션 문제"},{title:"centos7 pstree 설치하기",content:`
# {{ $frontmatter.title }}



프로세스 트리 설치

\`\`\`bash
yum -y install psmisc
\`\`\`



`,link:"/server/centos7 pstree 설치하기"},{title:"centos7 SSH 키 페어 연결 해제하기(비밀번호로 접속)",content:`
# {{ $frontmatter.title }}


현재 centos7 기준으로 설명 한다.

ssh 가 있는지 체크한다.

\`\`\`bash
rpm -qa | grep openssh-server
\`\`\`

없으면 설치한다.

\`\`\`bash
yum install -y openssh-server
\`\`\`

\`\`\`bash
vi /etc/ssh/sshd_config

:set nu

port 22 >> 2222
permirootlogin yes >> no : 루트로그인 접근 하지 못하게~
permitemptypasswords no : passwrod가 없는 계정으로 ssh 로그인이 불가능 하도록
maxauthtries 6 >> : 루트로 6번이상 시도 실패시 차단
usedns=yes >> no : 접속 지연 현상 문제 해결 됨
passwordauthentication no >> yes : 비밀번호 허용해서 접근하게

systemctl restart sshd
\`\`\`

방화벽 확인하기

\`\`\`bash
firewall-cmd --zone=public --list-port
\`\`\`

없으면 방화벽 추가하기

\`\`\`bash
sudo firewall-cmd --permanent --zone=public --add-port=2222/tcp
sudo firewall-cmd --reload
\`\`\`

만약에 selinux 설치 되어 있지 않다면..

최소 설치를 하면 "semanage" 명령어가 실행되지 않는데 (아마존서버에선 존재 해서 패스)

\`\`\`bash
yum install -y policycoreutils-python
\`\`\`

selinux 포트 확인하기
\`\`\`bash
semanage port -l | grep [포트번호]
\`\`\`

없으면 포트 추가하기

\`\`\`bash
semanage port -a -t ssh_port_t -p tcp 2222
\`\`\`

포트 확인하기

\`\`\`bash
netstat -an | grep :2222
\`\`\`
그리고 더 중요한게 서버 외부 인스턴스 방화벽에 보면 새로 바뀐 포트를 입력해줍니다.
`,link:"/server/centos7 SSH 키 페어 연결 해제하기(비밀번호로 접속)"},{title:"centos7 tmp 임시파일 문제",content:`
# {{ $frontmatter.title }}



linux 또는 unix 계열 시스템에서 문제를 어떻게 해결합니까?
 
이 오류는 mysql 서버가 / tmp 디렉토리에 액세스하여 임시 파일을 작성하고 작성할 수 없음을 의미합니다. 

루트 사용자가 / tmp 디렉토리를 소유하고 / tmp 디렉토리에 고정 비트가 설정되어 있는지 확인하면된다.

루트 사용자로 로그인하고 다음을 입력해야 한다.


\`\`\`bash
chown root:root /tmp
  
chmod 1777 /tmp
  
/etc/init.d/mysqld start
\`\`\`





`,link:"/server/centos7 tmp 임시파일 문제"},{title:"centos7 방화벽 설정하기",content:`
# {{ $frontmatter.title }}


방화벽 설정

\`\`\`bash
sudo firewall-cmd --permanent --zone=public --add-port=<port>/tcp

sudo firewall-cmd --permanent --zone=public --add-service=http

sudo firewall-cmd --reload
\`\`\`

방화벽 확인

\`\`\`bash
sudo firewall-cmd --zone=public --list-port
\`\`\`

`,link:"/server/centos7 방화벽 설정하기"},{title:"centos7 소유자 권한 퍼미션 방법",content:`
# {{ $frontmatter.title }}


파일 및 폴더 권한 주기

\`\`\`bash
cd /home/user/domains/domain.com/public_html
find . -type d -exec chmod 0755 {} \\;
find . -type f -exec chmod 0644 {} \\;
\`\`\`

\`\`\`bash
chmod -r 755 *  // all files and folders to 755.
chmod -r 644 *.*  // all files will be 644.
\`\`\`



소유자권한 주기

\`\`\`bash
chown -r root:nginx /var/www/html/example1.com/
chmod -r 755 /var/www/html/example1.com/
chown -r root:nginx /var/log/nginx/example1.com/
chmod -r 660 /var/log/nginx/example1.com/
\`\`\`

\`\`\`bash
chcon -t httpd_sys_content_t /data/www/html/sites/mysite -r
chcon -t httpd_sys_rw_content_t /data/www/html/sites/mysite/logs -r
\`\`\``,link:"/server/centos7 소유자 권한 퍼미션 방법"},{title:"centos7 웹서버 구축 - mysql8 설치",content:`
# {{ $frontmatter.title }}




## 1. 외부 저장소 추가하기

\`\`\`bash
sudo yum install -y https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
\`\`\`



저장소 확인 하기

\`\`\`bash
yum repolist enabled | grep "mysql.*"
\`\`\`



패키지 확인하기

\`\`\`bash
yum search mysql
\`\`\`



## 2. 설치하기

\`\`\`bash
yum install -y mysql-server
\`\`\`



버전 확인 하기

\`\`\`bash
mysqld -v
\`\`\`



방화벽 열기

\`\`\`bash
firewall-cmd --permanent --zone=public --add-port=3306/tcp
firewall-cmd --permanent --zone=public --add-port=33060/tcp
firewall-cmd --reload
\`\`\`



구동하기

\`\`\`bash
systemctl enable mysqld && systemctl start mysqld && systemctl status mysqld
\`\`\`



8.0 은 임시비밀번호를 발급 해준다 명령어로 확인 하면 된다.

\`\`\`bash
grep 'temporary password' /var/log/mysqld.log
\`\`\`



mysql 접속한다.

\`\`\`bash
mysql -u root -p
\`\`\`



루트 비번 변경하기

\`\`\`bash
alter user 'root'@'localhost' identified by '바꿀비번';
\`\`\`



생성한 계정 확인 하기

\`\`\`bash
use mysql;
select host, user, password from user;
\`\`\`





해당 계정 비밀번호 와 권한 주는 방법

\`\`\`mysql
create user 'root'@'localhost' identified by '비번';

grant all privileges on *.* to 'root'@'%' identified by '비번';

flush privileges;
\`\`\`



만약에 해당 디비에만 권한을 준다면?

\`\`\`mysql
grant all privileges on db명.* to 계정아이디@locahost identified by '비밀번호';
\`\`\`



권한 부여 할때 어느 수준까지 가능한가?

모든 권한 부여

\`\`\`mysql
grant all privileges on
\`\`\`



조회, 추가, 삭제, 수정 만 부여

\`\`\`mysql
grant select, insert, update on
\`\`\`



사용 권한 부여 확인

\`\`\`mysql
show grants for test@localhost;

show grants for test@'%';
\`\`\`



사용 권한 제거

\`\`\`mysql
revoke all on db명.테이블명 from 사용자id;
\`\`\`



사용자 삭제

\`\`\`mysql
drop user userid@'%';
drop user userid@localhost;
\`\`\`





## 참고 자료 :


https://1mini2.tistory.com/86


https://velog.io/@inhalin/mysql-error-1410-42000


https://nickjoit.tistory.com/144


https://gofnrk.tistory.com/15










`,link:"/server/centos7 웹서버 구축 - mysql8 설치"},{title:"centos7 웹서버 구축 - php 8 설치",content:`
# {{ $frontmatter.title }}



이번의 php 8 와 mysql 8 최신 버전을 설치 한다.


## 1. net tools 설치하기

\`\`\`bash
yum install net-tools
\`\`\`



## 2. 웹서버의 시간정보를 동기화 해주는 패키지를 설치

\`\`\`bash
yum -y install rdate
rdate -s time.bora.net
\`\`\`



## 3. yum 저장소 추가하기

\`\`\`bash
yum -y install epel-release
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
\`\`\`



## 4. php 8 설치

\`\`\`bash
sudo yum -y install yum-utils
sudo yum-config-manager --enable remi-php80
\`\`\`



필수 패키지 설치하기

\`\`\`bash
yum install -y php php-cli php-fpm php-mysqlnd php-mysql php-mysqli php-devel php-zip php-gd php-curl php-xml php-json php-intl php-mbstring php-mcrypt php-posix php-shmop php-soap php-sysvmsg php-sysvsem php-sysvshm php-xmlrpc php-opcache
\`\`\`



php fpm 동작하기

\`\`\`bash
service php-fpm start
sudo systemctl enable php-fpm
\`\`\`



php fpm 설정

\`\`\`bash
vi /etc/php-fpm.d/www.conf

;user = apache //변경전
user = nginx

;group = apache //변경전
group = nginx

;listen.owner = nobody //변경전
listen.owner = nginx

;listen.group = nobody //변경전
listen.owner = nginx

;listen.mode = 0660 //변경전
listen.mode = 0660

;listen = 127.0.0.1:9000 //변경전
listen = /var/run/php-fpm/php-fpm.sock

;pm.max_children = 50 //변경전
pm.max_children = 130

;pm.start_servers = 5 //변경전
pm.start_servers = 30

;pm.min_spare_servers = 5 //변경전
pm.min_spare_servers = 30

pm.max_spare_servers = 35 //변경전
pm.max_spare_servers = 100

;pm.max_requests = 500 //변경전
pm.max_requests = 500

:wq
\`\`\`





## 5. nginx 설정 변경하기


vi /etc/nginx/nginx.conf

\`\`\`bash
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

events {
    worker_connections 1024;
    multi_accept       on;
    use                epoll;
}


http {

     access_log  /var/log/nginx/access.log;

     server_tokens off;
     gzip on;

     include /etc/nginx/mime.types;
     default_type application/octet-stream;

     types_hash_max_size 4096;
     keepalive_timeout   65;
     tcp_nodelay         on;
     tcp_nopush          on;
     sendfile            on;

     client_body_buffer_size 128k;
     client_header_buffer_size 1m;
     client_max_body_size 2000m;

     server_names_hash_bucket_size 64;
     server_names_hash_max_size 2048;

     large_client_header_buffers 8 8k;

     output_buffers 1 32k;
     postpone_output 1460;

     fastcgi_buffers 8 16k;
     fastcgi_buffer_size 32k;
     fastcgi_connect_timeout 300;
     fastcgi_send_timeout 300;
     fastcgi_read_timeout 300;

     client_header_timeout 3m;
     client_body_timeout 3m;
     send_timeout 3m;

     log_format main '$remote_addr - $remote_user [$time_local] "$request" '
     '$status $body_bytes_sent "$http_referer" '
     '"$http_user_agent" "$http_x_forwarded_for"';


    upstream php_worker {
        server unix:/var/run/php-fpm/php-fpm.sock;
    }


    # http 1.1 support
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header host $http_host;
    proxy_set_header upgrade $http_upgrade;
    proxy_set_header x-real-ip $remote_addr;
    proxy_set_header x-forwarded-for $proxy_add_x_forwarded_for;

    # mitigate httpoxy attack (see readme for details)
    proxy_set_header proxy "";

    include /etc/nginx/conf.d/*.conf;


}

:wq

\`\`\`


여기서 이부분이 중요하다

\`\`\`bash
upstream php_worker {
        server unix:/var/run/php-fpm/php-fpm.sock;
}
\`\`\`



이건 php-fpm 이랑 연동이 되야한다.

만약에 해당 경로에서 php-fpm 파일이 없다면 어떻게든 꼭 설치를 해야한다.

해당 경로 확인 한다.

\`\`\`bash
ls -l /var/run/php-fpm/
\`\`\`



만약에 동작이 하지 않는다면 selinux 보안을 해제 해본다.

\`\`\`bash
getenforce
setenforce 0
\`\`\`



그러고나서 php-fpm 재 시작 한다.  혹시나 재시작이 되지 않으면 삭제 후 다시 설치 하면 된다.

\`\`\`bash
yum -y remove php-fpm
yum -y install php-fpm
\`\`\`

\`\`\`bash
sysctemctl start php-fpm
sysctemctl enable php-fpm
\`\`\`

여기서 왜 php-fpm이 경로에 나오지 않냐면?

php fpm 설정 에서 listen 주석 처리가 되었거나 경로가 존재 하지 않아서 그렇다. 위에 php fpm 설정 을 다시 체크해본다.





nginx 서브 호스트 설정


\`\`\`bash
server {
        listen 80;
        server_name 도메인;

        client_max_body_size  2g;

        access_log /var/log/nginx/도메인명.access.log;

        error_log /var/log/nginx/도메인명.error.log;

        error_page 500 502 503 504 /50x.html;

        autoindex off;

        charset utf-8;

        index index.html index.htm index.php;

        root /home/developers;

        location / {
            try_files $uri $uri/ /index.php?$args;
        }

        location ~ \\.php$ {
            fastcgi_split_path_info ^(.+\\.php)(/.+)$;
            fastcgi_pass   php_worker;
            fastcgi_index  index.php;
            fastcgi_param script_filename $document_root$fastcgi_script_name;
            include        fastcgi_params;

            # 아래부터 버그 해결을 위해 추가해 주실 옵션입니다.
            # 502 에러를 없애기 위한 proxy 버퍼 관련 설정입니다.
            proxy_buffer_size               128k;
            proxy_buffers                   4 256k;
            proxy_busy_buffers_size         256k;

            # 502 에러를 없애기 위한 fastcgi 버퍼 관련 설정입니다.
            fastcgi_buffering               on;
            fastcgi_buffer_size             16k;
            fastcgi_buffers                 16 16k;

            # 최대 timeout 설정입니다.
            fastcgi_connect_timeout         600s;
            fastcgi_send_timeout            600s;
            fastcgi_read_timeout            600s;

            # 이 아래 설정은 php 성능 향상을 위한 옵션입니다. 추가해 주시면 좋습니다.
            sendfile                        on;
            tcp_nopush                      off;
            keepalive_requests              0;
        }
}
\`\`\`



## 참고자료 :

https://www.burndogfather.com/237

https://wlsvud84.tistory.com/16




## 맺음말 :

구글링으로 찾아본 자료들을 토대로 설치 했는데 아주 정상적으로 작동 됀다.

위에 블로그 덕분에 잘 해결됐다!

`,link:"/server/centos7 웹서버 구축 - php 8 설치"},{title:"centos7 파일 찾아서 삭제하기",content:`
# {{ $frontmatter.title }}


제일 쉬운 방법이

which [파일명]

whereis [파일명]



이렇게 해서 경로를 찾아야한다.

그리고 rm -rf 로 삭제 처리



그러고 삭제가 되지 않은것 같더라면 캐시삭제를 해야됨



\`\`\`bash
yum clean all sudo

rm -rf /var/cache/yum/*
\`\`\`



`,link:"/server/centos7 파일 찾아서 삭제하기"},{title:"centos7 한국 시간 설정",content:`
# {{ $frontmatter.title }}



\`\`\`bash
timedatectl list-timezones | grep seoul
sudo timedatectl set-timezone asia/seoul
\`\`\`



확인 방법 :

\`\`\`
date
\`\`\``,link:"/server/centos7 한국 시간 설정"},{title:"centos7 환경에서 node 설치",content:`
# {{ $frontmatter.title }}





1. 노드가 있는지 확인 한다.

\`\`\`bash
yum list installed | grep node
\`\`\`

만약에 epel 저장소가 없으면 따로 설치 해야된다. ( 저장소가 있는 과정하에 설명함)



2. 노드 특정 버전 설치하기

\`\`\`bash
yum install -y gcc-c++ make
\`\`\`

# 8점대 버전을 다운 받으려는 경우

curl -sl https://rpm.nodesource.com/setup_8.x | sudo -e bash -

# 9점대 버전을 다운 받으려는 경우

curl -sl https://rpm.nodesource.com/setup_9.x | sudo -e bash -

# 12점대 버전을 다운 받으려는 경우

curl -sl https://rpm.nodesource.com/setup_12.x | sudo -e bash -


현재 16 버전이 안정적이다.

curl -sl https://rpm.nodesource.com/setup_16.x | sudo -e bash -



3. 노드 설치한다.

\`\`\`bash
yum -y install nodejs
\`\`\`


4. 버전 확인하기

\`\`\`bash
node -v
npm -v
\`\`\`










## 참고 문헌 :

https://nirsa.tistory.com/193

`,link:"/server/centos7 환경에서 node 설치"},{title:"centos7 환경에서 php 컴포저 설치",content:`
# {{ $frontmatter.title }}


센토 환경에서 컴포저 설치 하는 방법에 대해서 포스팅 올린다.

아래 명령어 그대로 입력 하면 된다.


\`\`\`bash
curl -ss https://getcomposer.org/installer | php

전역사용을 위하여 bin에 등록.
sudo mv composer.phar /usr/bin/composer
\`\`\`


`,link:"/server/centos7 환경에서 php 컴포저 설치"},{title:"centos8 No URLs in mirrorlist",content:`
# {{ $frontmatter.title }}


## 원인 :

인스턴스 생성후에 서버 접근하고 프로그램설치 할때 마다 밑에 에러가 자꾸 나온다..

:::dander
error: failed to download metadata for repo 'appstream': cannot prepare internal mirrorlist: no urls in mirrorlist
:::

## 해결 방법 :

루트 사용권한을 풀어야한다고 단서를 발견했다..

일단 해보니까 설치는 된다!

아래 사이트 에꺼 명령어 따라하면된다.

https://jootc.com/p/202202273852


여기서 하다가 경험담...

스트림 버전 사용하도록 풀고나서 부터 바로 업그레이드 시작해야된다.

\`\`\`bash

sudo sed -i -e "s|mirrorlist=|#mirrorlist=|g" /etc/yum.repos.d/centos-* sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/centos-*

\`\`\`

이후에 밑에 배포판으로 교체하면 될것같다..

\`\`\`bash
sudo dnf -y upgrade
\`\`\`

\`\`\`bash
sudo dnf install centos-release-stream -y
sudo dnf swap centos-{linux,stream}-repos -y
sudo dnf distro-sync -y
\`\`\`

바로 했더니 서버 도중에 멈추고 아주 난리도 아니다..

근데 여기서 위에 배포판 설치하는게 맞는지는 모르겠다

패키지 설치 도중에 kmod-kvdo-6.2.6.14-83.el8.x86_64 패키지 이거 347번째 설치 도중에서 멈춰있고..

기다리다가..

안되겠어서 하나 넘기고 설치 이어가게 했는데..

애초에 안하고 그냥 서버 세팅 하는게 좋을지도 모르겠다는 생각이..

괜히 시간 낭비만 한거 같다..`,link:"/server/centos8 No URLs in mirrorlist"},{title:"centos8 permission denied(public key) 원인 및 해결",content:`
# {{ $frontmatter.title }}


## 원인 :

permission denied(public key) 업로드할때 마다 파일에서 퍼미션 디나인 에러가 나온다.

phpstorm 툴에서 연결 해서 (private key 연결 하니까) 에러 생긴다..

알아보니까 문제가 퍼미션 에러 인줄 알았는데 아니었네..? 한참동안 구글링해보니까 ssh 설정에서 문제가 있어서 그렇다네?

## 해결 방법 :

\`\`\`bash
sudo vi /etc/ssh/sshd_config passwordauthentication을 yes로 변경
:wq
\`\`\`

이렇게 수정하면 된다.


## 참고 자료 :

https://blog.naver.com/whapkj303/221572086785
`,link:"/server/centos8 permission denied(public key) 원인 및 해결"},{title:"centos8 php8 설치하고 버전 숨기기",content:`
# {{ $frontmatter.title }}


php 버전 정보 숨기기

php.ini 파일 경로 찾기

\`\`\`bash
php --ini | egrep "loaded configuration file"
loaded configuration file: /etc/php.ini
\`\`\`



php 버전 숨기기

\`\`\`bash
sed -i "s/expose_php = on/expose_php = off/g" /etc/php.ini
\`\`\`


## 참고 자료 :

https://scbyun.com/1206`,link:"/server/centos8 php8 설치하고 이거 쓰면 쓸만할것같음"},{title:"centos8 php8 최신버전 설치하기",content:`
# {{ $frontmatter.title }}


여기 블로그 참고하면 된다..


https://www.linuxcapable.com/ko/how-to-install-php-8-1-on-centos-8-stream/`,link:"/server/centos8 php8 최신버전 설치하기"},{title:"centos8 에서 최신 nginx 설치",content:`
# {{ $frontmatter.title }}


https://hoing.io/archives/12138`,link:"/server/centos8 에서 최신 nginx 설치"},{title:"ceontos7 웹서버 구축 - 기본 설정 및 엔진엑스 설치",content:`
# {{ $frontmatter.title }}


centos 7 환경에서 웹서버 구축에 대해서 포스팅 글 남겨 봅니다.



## 1. 시스템 환경 확인

\`\`\`bash
cat /etc/redhat-release
\`\`\`

## 2. 최고 관리자로 전환하기 (루트 계정으로 바뀐다.)

\`\`\`bash
sudo -i
\`\`\`



## 3. 시스템 업데이트 하기

- 업데이트 를 통해서 패키지 최신으로 설치 하면 됩니다.

\`\`\`bash
yum -y update
\`\`\`



## 4. 외부 저장소 추가하기

\`\`\`bash
yum -y install epel-release
rpm -uvh https://dl.fedoraproject.org/pub/epel/7/x86_64/packages/e/epel-release-7-11.noarch.rpm
\`\`\`

둘다 설치 한다.



설치 했는지 확인하기

\`\`\`bash
rpm -qa | grep epel
\`\`\`

## 5. nginx 설치하기

설치하기전에 nginx 작동을 하기 위한 패키지를 설치한다.

\`\`\`bash
yum -y install pcre-devel libxml2-devel zlib zlib-devel openssl openssl-devel gcc g++ cpp gcc-c++ libxslt libxslt-devel php-gd libgd-dev gd gd-devel perl perl-extutils-embed geoip-devel
\`\`\`

nginx 설치 한다.

\`\`\`bash
yum install -y nginx
\`\`\`



버전 확인 하기

\`\`\`bash
nginx -v
\`\`\`



nginx 구동하기

\`\`\`bash
systemctl enable nginx
systemctl start nginx
\`\`\`



상태 확인 하기

\`\`\`bash
systemctl status nginx
\`\`\`

## 6. 방화벽 설정 하기

방화벽 설치 됐는지 확인하기

\`\`\`bash
rpm -qa | grep firewalld
\`\`\`

방화벽 열기

\`\`\`bash
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
\`\`\`

방화벽 확인 하기

\`\`\`bash
firewall-cmd --zone=public --list-port
\`\`\`

만약에 yum 패키지가 제대로 설치가 되지 않는다면?

\`\`\`bash
yum clean all
\`\`\``,link:"/server/ceontos7 웹서버 구축 - 기본 설정 및 엔진엑스 설치"},{title:"composer 패키지 삭제",content:`
# {{ $frontmatter.title }}


\`\`\`bash

composer remove firebear/importexportfree << 패키지명

to remove a package using composer command composer remove to install a package using composer command composer require to install all packages which are mentioned in composer.json composer install to update packages composer update

 \`\`\`
`,link:"/server/composer 패키지 삭제"},{title:"ipconfig 사용 하기",content:`
# {{ $frontmatter.title }}



## 사용 방법 :

\`\`\`bash
yum install -y net-tools
\`\`\`

net-tools의 설치가 완료되면

ifconfig의 사용이 가능해집니다.`,link:"/server/ipconfig 사용 하기"},{title:"mysql 설치 에러 - service mysqld start Starting mysqld (via systemctl)",content:`
# {{ $frontmatter.title }}


## 원인 :

:::info
service mysqld start starting mysqld (via systemctl): job for mysqld.service failed because the control process exited with error code. see "systemctl status mysqld.service" and "journalctl -xe" for details.
:::

centos7 환경에서 서버를 재 시작 후 mysql을 실행 하려고 명령어를 치면 에러날 상황이 있습니다.



journalctl -xe 입력 후에 확인한다.




## 해결 방법  :

치료법은 아래 방법 처럼 일단 해보자!

\`\`\`bash
mkdir -p /var/run/mysqld/

chown mysql.mysql /var/run/mysqld/

systemctl start mysqld
\`\`\`

이렇게 하면 실행이 됩니다.



mysql의 소유주가 변경되서 그렇다.





## 맺음말 :

상황에 따라서 응용을 하면 된다. 꼭 처방 전을 따라 한다고 해서 해결 된다는 보장이 없다.

하지만 이와 같은 증상 처방전에 대해서 포스팅 글 남길 거 라서 비슷한 증상이 있으면 바로 바로 포스팅 할 것 이다.`,link:"/server/mysql 설치 에러 - service mysqld start Starting mysqld (via systemctl)"},{title:"nginx 설치 도중 에러 address already in use 2",content:`
# {{ $frontmatter.title }}


nginx 에러 중에서 address already in use 라고 나오면 프로세스를 끄면 된다.

80포트를 끄면 해결 될수도 있다.. 추측이다..

\`\`\`bash
sudo fuser -k 80/tcp
\`\`\``,link:"/server/nginx 설치 도중 에러 address already in use 2"},{title:"nginx, php, ssl, mariadb 자동 세팅",content:`
# {{ $frontmatter.title }}


아래 자료 참고하기


https://github.com/php79/stack`,link:"/server/nginx, php, ssl, mariadb 자동 세팅"},{title:"php7부터 8까지 모듈 설치 방법",content:`
# {{ $frontmatter.title }}


일단은 아래 소스코드 보면서 따라하면된다.


모듈에서 빼먹은게 있는지 확인한다.

\`\`\`bash
php -m
\`\`\`

혹시나 버전별로 설치 한경우에는

\`\`\`bash
php80 -m
php74 -m
\`\`\`

이런식으로 확인하면 된다.





그러면 쭈르륵 나오는데 버전별로 확인하려면 아래 명령어로 찾으면 된다.

\`\`\`bash
yum list installed | grep php
\`\`\`



센토 7 패키지  (이거는 따로 패키지가 등록되지 않거나 내부에 해당 패키지가 없는경우 최신껄로 설치해야된다.)

\`\`\`bash
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
\`\`\`

센토 8 패키지

\`\`\`bash
sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
\`\`\`

8버전인데 여기서 숫자만 바꾸면된다.

\`\`\`bash
sudo yum install php80 php80-php-intl php80-php-mbstring php80-php-gd php80-php-xml php80-php-imap php80-php-zip php80-php-curl php80-php-json php80-php-ldap php80-php-mysqlnd php80-php-opcache -y
\`\`\`



혹시 몰라서 이것도 참고하면된다.

\`\`\`bash
yum-config-manager --enable remi-php80
yum -y install php80 php80-php-common \\
php80-php-fpm php80-php-gd \\
php80-build php80-php php80-php-devel php80—intl \\
php80-php-mysqlnd php80-php-opcache \\
php80-php-mbstring php80-php-pdo \\
php80-php-pecl-imagick php80-php-soap \\
php80-php-pecl-imagick-devel php80-php-pecl-mcrypt \\
php80-php-pecl-zip php80-php-bcmath \\
curl curl-devel php80-php-xml \\
libpng libpng-devel libwebp libwebp-devel \\
libxpm libxpm-devel openssl openssl-devel \\
autoconf zlib zlib-devel freetype freetype-devel \\
gd gd-devel libmcrypt libmcrypt-devel \\
libtool-ltdl-devel libxml2-devel \\
libxml2 libcurl libcurl-devel \\
php80-php-pecl-crypto php80-php-pecl-mysql
\`\`\`

그러고 재시작 하면된다.

\`\`\`bash
systemctl restart php74-php-fpm php56-php-fpm php81-php-fpm
\`\`\`





## 참고 자료 :


https://www.linuxpanda.com/how-to-install-php-8-on-centos-8-7/


https://www.burndogfather.com/237


`,link:"/server/php7부터 8까지 모듈 설치 방법"},{title:"SSH 무작위 로그인 시도 막기 ( Fail2Ban )",content:`
# {{ $frontmatter.title }}


linux 서버를 공개망에서 사용하면서 방화벽을 사용하지 않는 경우 ssh 로그인을 지속적으로 시도하는 로그를 볼 수 있습니다.

대부분 외국 ip 대역에서 지속적으로 ssh 로그인을 시도하는데 무작위 비밀번호를 대입하는 것입니다.

당연히 방화벽을 설정하는 것이 당연하나 특수한 목적으로 인해 접속 ip 대역을 제한할 수 없는 경우도 있을 수 있습니다.

이런 경우에 보안을 조금이나마 강화하기 위해 사용할 수 있는 것이 fail2ban 입니다.


1-1. ssh 로그인 시도 ip를 확인

[root@localhost ~]# ls /var/log/secure | xargs grep -e "[[:digit:]]+\\.[[:digit:]]+\\.[[:digit:]]+\\.[[:digit:]]+" -o | sort | uniq
공개망에 연결된 서버라면 생각보다 많은 ip가 나와 놀랄수도 있습니다.
ip들 중 자신이 아는 ip를 제외하면 대부분이 위에 언급한 공격일 확률이 높습니다.


1-2. 최근 로그인 실패 기록을 확인

[root@localhost ~]# last -f /var/log/btmp | more

20 linux log files that are located under /var/log directory에 보면 /var/log/btmp에 대한 설명을 확인 할 수 있습니다.
fail2ban은 지정된 시간 내에 지정된 횟수 이상으로 ssh 로그인을 실패하면 해당 ip에서의 접근을 지정된 시간만큼 차단하는 역할을 합니다.


2. fail2ban 살펴보기

아래는 fail2ban를 설치하면 생성되는 fail2ban 디렉토리들입니다.

/etc/fail2ban/
  ├ action.d
  │     계정 접속에 실패할 경우 사용할 수 있는 action 파일들이 있습니다. 방화벽으로 ip차단을 할 수 있는 firewallcmd-new.conf 파일도 여기에 있습니다.
  │
  │     기본 action 파일내용은 아래와 같습니다.
  │     [definition]
  │     actionstart = fail2ban 시작시 실행할 명령
  │     actionstop = fail2ban 중단시 실행할 명령
  │     actioncheck = action 시작을 확인할 명령
  │     actionban = 차단행위 발생시 실행할 차단 명령
  │     actionunban = 차단시간 초과시 실행할 차단해제 명령
  │
  ├  fail2ban.d
  │     사용자설정 디렉토리
  │
  ├  filter.d
  │     fail2ban는 접속 로그파일을 분석하여 비밀번호 실패기록을 근거로 ip 차단하는 원리입니다.
  │     접속 로그파일를 분석할때는 /etc/fail2ban/filter.d 에 있는 서비스 필터를 사용하게 됩니다.
  │     예를 들면 sshd.conf 파일은 sshd 서비스 로그필터 파일입니다.
  │
  ├ jail.d
  │    fail2ban 사용자 설정을 넣을 수 있는 디렉토리입니다.
  │    fail2ban 은 실행시 jail.d 디렉토리있는 모든파일들에 있는 설정들을 적용하도록 되어있습니다.
  │  │
  │  ├  00-firewalld.conf  - fail2ban-firewalld 패키지를 설치할 경우
  │  └  00-systemd.conf  - fail2ban-systemd 패키지를 설치할 경우
  │          관련 패키지를 설치할 경우 그 셋팅파일이 생성됩니다.
  │
  ├ jail.conf
  │   기본설정 파일이며, 사용자 설정파일이 jail.d 디렉토리에 존재할 경우 그 사용자 설정이 기본설정보다 우선 적용됩니다.
  │
  ├ fail2ban.conf
  │   fail2ban 로그파일에 대한 설정을 할 수 있습니다. (loglevel, logtarget )
  │


3.  epel-release 추가

[root@localhost ~]# rpm -uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm


retrieving https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm


preparing...                          ################################# [100%]
        package epel-release-7-10.noarch is already installed


4.  fail2ban 설치

[root@localhost ~]# yum install -y fail2ban

loaded plugins: fastestmirror
base                                                                                                                           | 3.6 kb  00:00:00
epel/x86_64/metalink                                                                                                           | 4.2 kb  00:00:00
epel                                                                                                                           | 4.3 kb  00:00:00
extras                                                                                                                         | 3.4 kb  00:00:00
mariadb                                                                                                                        | 2.9 kb  00:00:00
updates                                                                                                                        | 3.4 kb  00:00:00
webtatic                                                                                                                       | 3.6 kb  00:00:00
(1/2): epel/x86_64/updateinfo                                                                                                  | 810 kb  00:00:00
epel/x86_64/primary_db         failed
http://repos.fedoralinux.ir/pub/epel/7/x86_64/repodata/2d654b9fec87d6b6e15258552458b0e18b470ebad3bc11f4178bc4b6fa518c4b-primary.sqlite.xz: [errno 14] http error 404 - not found
trying other mirror.
to address this issue please refer to the below knowledge base article

https://access.redhat.com/articles/1320623

[errno 14] yum fails with http/https error 404 - red hat customer portal
abstract field is required.
1


if above article doesn't help to resolve this issue please create a bug on https://bugs.centos.org



(2/2): epel/x86_64/primary_db                                                                                                  | 4.8 mb  00:00:00
loading mirror speeds from cached hostfile
 * base: ftp.riken.jp
 * epel: mirror.premi.st
 * extras: ftp.riken.jp
 * updates: ftp.riken.jp
 * webtatic: sp.repo.webtatic.com
package fail2ban-0.9.6-3.el7.noarch already installed and latest version
nothing to do


centos 7에서 설치시 fail2ban-firewalld 패키지가 같이 필수로 설치됩니다.
firewalld 말고, iptables을 계속 사용한다면 /etc/fail2ban/jail.d/00-firewalld.conf 파일을 제거해야 iptables를 통한 차단이 이루어집니다.


5. 재부팅시 자동실행되도록 fail2ban 서비스를 활성화

[root@localhost ~]# systemctl enable fail2ban
created symlink from /etc/systemd/system/multi-user.target.wants/fail2ban.service to /usr/lib/systemd/system/fail2ban.service.


6. fail2ban-systemd 설치 (centos 7)

fail2ban는 접속로그 기록을 분석해서 실패기록을 근거로 차단하는 원리로 동작합니다.

레드헷 계열 (red hat/centos/fedora)에서 접근 로그파일은 /var/log/secure 이였습니다. 그래서 이전에는 /var/log/secure 로그파일에 의존해서 동작했습니다.
하지만 centos 7부터는 시스템 로그들을 systemd에서 통합 관리하게 되었습니다.
때문에  /var/log/secure 로그파일은 더 이상사용하지않는 파일이 되었습니다.
그러나 로그파일이 없으면 fail2ban가 동작할 수 없습니다.

대체방안으로 간단하게 fail2ban-systemd를 설치해주면 해결됩니다.

[root@localhost ~]# yum install fail2ban-system
loaded plugins: fastestmirror
loading mirror speeds from cached hostfile
 * base: www.ftp.ne.jp
 * epel: mirror01.idc.hinet.net
 * extras: www.ftp.ne.jp
 * updates: www.ftp.ne.jp
 * webtatic: sp.repo.webtatic.com
no package fail2ban-system available.
error: nothing to do


7. fail2ban 기본 설정

fail2ban의 기본 설정파일은 /etc/fail2ban/jail.conf 입니다.
이 기본설정 파일을 직접 수정하지않고, 기본 설정파일을 참조하여 새로 생성한 사용자 설정파일에서 설정해주는 방법으로 하면 yum 업데이트가 되더라도 사용자가 설정한 파일을 덮어쓰지않게 됩니다.

[root@localhost ~]# vi /etc/fail2ban/jail.d/local.conf
[default]
# common
ignoreip  = 127.0.0.1/8
bantime   = 86400
findtime  = 86400
maxretry  = 3
banaction = firewallcmd-new

# mail
destemail = 알림 수신메일 주소
sender    = 알림 발신메일 주소

# action
action_mw = %(banaction)s[name=%(__name__)s, bantime="%(bantime)s", port="%(port)s", protocol="%(protocol)s", chain="%(chain)s"]
            %(mta)s-whois[name=%(__name__)s, sender="%(sender)s", dest="%(destemail)s", protocol="%(protocol)s", chain="%(chain)s"]

action    = %(action_mw)s

[sshd]
enabled = true


옵션설명
* ignoreip
관리자 ip를 입력하면 됩니다. 여기 입력한 ip는 절대 차단되지않습니다.

* bantime
인증 실패시 차단할 차단시간입니다. -1이면 영구차단입니다. (단위 : 초)
@ 영구차단을 하거나 차단시간을 많이 주면 재부팅시 fail2ban 다시 ip차단 리스트를 읽어오기때문에 그것이 많으면 느려집니다.

* findtime
입력한 시간안에 허용횟수를 초과하여 실패시 차단됩니다. (단위 : 초)

* maxretry
차단되기전까지 인증시도를 위한 허용횟수입니다. 허용횟수를 초과하여 실패할 경우 차단됩니다.

* banaction
ip 차단 방법입니다. /etc/fail2ban/action.d 디렉토리에 있는 action을 입력할 수 있습니다.
firewalld 을 사용한다면 "firewallcmd-new" 값 입력.
iptables 을 사용한다면 "iptables-multiport" 값 입력.

* action
action에 "%(action_mw)s" 값을 입력하면 ip차단시 알림메일이 전송됩니다. 알림메일을 받지않으려면 "%(action_)s" 값으로 변경하면 됩니다.


8. 로그레벨 조정

fail2ban 로그파일( /var/log/fail2ban.log )에 로그가 너무 많이 생성된다면 로그레벨(loglevel)을 error으로 조정하면 됩니다.
/etc/fail2ban/fail2ban.d 디렉토리에 사용자 설정파일( local.conf )을 생성하고, 로그레벨 설정을 넣으면 됩니다.

[root@localhost ~]# vi /etc/fail2ban/fail2ban.d/local.conf
[definition]
loglevel = error


9. fail2ban 서비스 시작

[root@localhost ~]# systemctl start fail2ban.service


10. fail2ban 상태 확인

[root@localhost ~]# fail2ban-client status sshd

status for the jail: sshd
|- filter
|  |- currently failed: 1
|  |- total failed: 153
|  \`- file list:    /var/log/secure
\`- actions
   |- currently banned: 0
   |- total banned: 2
   \`- banned ip list:


11. ipset에 설정(차단)된 내용 확인

[root@localhost ~]# ipset --list

name: fail2ban-sshd
type: hash:ip
revision: 1
header: family inet hashsize 1024 maxelem 65536 timeout 3600
size in memory: 16656
references: 1
members:


12. fail2ban 로그 확인

[root@localhost ~]# cat /var/log/fail2ban.log | more
2017-08-12 00:48:50,511 fail2ban.server         [32725]: info    changed logging target to /var/log/fail2ban.log for fail2ban v0.9.6
2017-08-12 00:48:50,512 fail2ban.database       [32725]: info    connected to fail2ban persistent database '/var/lib/fail2ban/fail2ban.sqlite3'
2017-08-12 00:48:50,515 fail2ban.database       [32725]: warning new database created. version '2'
2017-08-12 00:48:50,516 fail2ban.jail           [32725]: info    creating new jail 'sshd'
2017-08-12 00:48:50,538 fail2ban.jail           [32725]: info    jail 'sshd' uses systemd {}
2017-08-12 00:48:50,566 fail2ban.jail           [32725]: info    initiated 'systemd' backend
2017-08-12 00:48:50,567 fail2ban.filter         [32725]: info    set maxretry = 3
2017-08-12 00:48:50,568 fail2ban.filter         [32725]: info    set jail log file encoding to utf-8
2017-08-12 00:48:50,569 fail2ban.actions        [32725]: info    set bantime = 86400
2017-08-12 00:48:50,570 fail2ban.filter         [32725]: info    set findtime = 86400
2017-08-12 00:48:50,570 fail2ban.filter         [32725]: info    set maxlines = 10
2017-08-12 00:48:50,660 fail2ban.filtersystemd  [32725]: info    added journal match for: '_systemd_unit=sshd.service + _comm=sshd'
2017-08-12 00:48:50,677 fail2ban.filter         [32725]: info    [sshd] found 59.63.166.83
2017-08-12 00:48:50,679 fail2ban.jail           [32725]: info    jail 'sshd' started
2017-08-12 00:48:50,681 fail2ban.filter         [32725]: info    [sshd] found 59.xx.166.83
...


14. 차단 ip 목록

설치하고 몇분동안 차단된 아이피가 벌써 5개나 ...
[root@localhost ~]# awk '($(nf-1) = /ban/){print $nf}' /var/log/fail2ban.log | sort | uniq -c | sort -n
      1 116.xx.116.41
      1 2.xx.93.91
      1 39.xx.93.107
      1 59.xx.166.83
      1 61.xx.172.66

[root@localhost ~]# firewall-cmd --direct --get-rules ipv4 filter f2b-sshd
1000 -j return
0 -s 61.xx.172.66 -j reject --reject-with icmp-port-unreachable
0 -s 59.xx.166.83 -j reject --reject-with icmp-port-unreachable
0 -s 116.xx.116.41 -j reject --reject-with icmp-port-unreachable
0 -s 2.xx.93.91 -j reject --reject-with icmp-port-unreachable
0 -s 39.xx.93.107 -j reject --reject-with icmp-port-unreachable


15. ip 차단해제

[root@localhost ~]# firewall-cmd --direct --remove-rule ipv4 filter f2b-sshd 0 -s [해제할 ip주소]  -j reject --reject-with icmp-port-unreachable



## 참고 자료 :

http://www.joshi.co.kr/index.php?mid=board_szhe52&document_srl=305384`,link:"/server/SSH 무작위 로그인 시도 막기"},{title:'SSH-Keygen "no such file or directory"',content:`
# {{ $frontmatter.title }}



ssh 연결 하려고 밤새도록 찾아도 다 옛날 레퍼런스 글 밖 에 안보인다..

결국엔 스텍오버플로우에서 힌트를 얻어왔다!!

터미널에서 연결 되는거 보고 환호성이 터진다!!!!!



일단 하는 방법은 이렇다~



ssh -i aws 도메인 ...... 이렇게 입력하면 아래 에러가 뿜는다...

\`\`\`bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@       warning: possible dns spoofing detected!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
the ecdsa host key for ***.com has changed,
and the key for the corresponding ip address ***.***.***.***
is unknown. this could either mean that
dns spoofing is happening or the ip address for the host
and its host key have changed at the same time.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    warning: remote host identification has changed!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
it is possible that someone is doing something nasty!
someone could be eavesdropping on you right now (man-in-the-middle attack)!
it is also possible that a host key has just been changed.
the fingerprint for the ecdsa key sent by the remote host is
sha256:bs3yvx************************************
please contact your system administrator.
add correct host key in /users/******/.ssh/known_hosts to get rid of this message.
offending ed25519 key in /users/******/.ssh/known_hosts:37
ecdsa host key for seoirim.com has changed and you have requested strict checking.
host key verification failed.
\`\`\`

그러면 아래 명령어로 해결 하면 된다고들 하는데..

레퍼런스 찾아보면 다들 이렇게 해서 해결 했다고 하는데...

사용법이 틀렸다..


ssh-keygen -r [ ip or domainname]

다시 정의 한다면 아래처럼 해야된다.



일단 아마존에서 펌키를 가져다가 다운 받는데 적절한 경로로 담아둔다.



파일 권한을 줘야한다. (디렉토리가 절대아니고 파일만...)

\`\`\`bash
chmod 600 /users/..... /test.pem
\`\`\`

그리고 다시 명령어를 입력한다.

\`\`\`bash
ssh-keygen -t rsa -b 4096 -c "아무개이메일" -f /path/to/key
\`\`\`

이렇게 하면 아무거나 이메일을 넣어주고 /path/to/key는 당연히 펌키 위치를 넣어준다.



그럼 뭐라고 영문으로 나온데 yes로 해준다.

...... (y/n)? y

그러고 나머진 엔터 두번 치면 된다.




\`\`\`bash
sha256:/secipwccuhnjsr4kx4asasclplc51msqxkv3nyp2pm “아무개이메일”

the key's randomart image is:

+---[rsa 4096]----+

|o*.* .           |

|*=oo. o o        |

|*o* .+.+ =       |

|+=.o..+...=      |

|+o+o + .s oe.    |

|o.  * o  . o .   |

|   o o      .    |

|      .          |

|                 |

+----[sha256]-----+
\`\`\`




이러면 끝난다!!!



다시 ssh로 아마존 서버 접속하면된다.





## 참고 자료 :

https://stackoverflow.com/questions/32910928/ssh-keygen-no-such-file-or-directory`,link:'/server/SSH-Keygen "no such file or directory"'},{title:"ssl 갱신할때 참고할 것",content:`
# {{ $frontmatter.title }}



​갱신할때 한도초과되니까 잘보고 한두시간 후에 다시 해야된다. 이런불편한게 있어서.. 잘보고 해야 된다.



https://nhj12311.tistory.com/m/604`,link:"/server/ssl 갱신할때 참고할 것"},{title:"ssl 사용법",content:`
# {{ $frontmatter.title }}


우선 기본적인 certbot 이런건 기본적인거라서 멀티 도메인 ssl 기능은 안된다 그래서 직접 찾아야된다.

밑에 참고 자료 봐서 ssl 달면 된다.

일단 기본적인 사용법 명령어를 남겨본다.


\`\`\`bash
certbot --version

# 새로 설치하기
yum install -y certbot python2-certbot-nginx

# 로그 보기
cat /var/log/letsencrypt/letsencrypt.log

# 생성하기
certbot --standalone -d pension.beaverfactory.com certonly

# 리뉴얼하기 (이전에 있던거 새로 달기)
sudo certbot renew --cert-name pension.beaverfactory.com--dry-run

certbot certonly -d pension.beaverfactory.com

certbot certonly  -d pension.beaverfactory.com -d beaverfactory.com

# 삭제하기
certbot delete -d *.beaverfactory.com


# 생성된거 확인하기
certbot certificates


# 생성하기 이런 방법도 있음
sudo certbot certonly --agree-tos --email judith6290@naver.com --webroot -w /var/lib/letsencrypt/ -d pension.beaverfactory.com
\`\`\`



## 참고 자료 :


https://www.sslcert.co.kr/products/ads?g_matchtype=b&g_device=c&g_network=g&g_c=526526969511


https://yellowit.co.kr/%ea%b2%80%ec%83%89%ec%97%94%ec%a7%84-%ec%b5%9c%ec%a0%81%ed%99%94/%eb%ac%b4%eb%a3%8c-ssl-%eb%b3%b4%ec%95%88-%ec%9d%b8%ec%a6%9d%ec%84%9c-%eb%b0%9c%ea%b8%89-https-free-ssl-certificate/


https://www.sslforfree.com/`,link:"/server/ssl 사용법"},{title:"ssl 재 갱신 하는방법",content:`
# {{ $frontmatter.title }}


진짜로 쉽다!!!


하는방법 아래 처럼 하면 된다.


우선 nginx 웹서버를 중단한다.

nginx 를 완벽히 중단시킬것 nginx -s stop << 이걸로 하면 안된다



강제 종료시켜야된다.

\`\`\`bash
systemctl stop nginx
\`\`\`

재 갱신 시작하기

\`\`\`bash
certbot renew
\`\`\`

웹서버 재 시작하기

\`\`\`bash
systemctl start nginx
\`\`\`



## 주의 사항:

5번 넘으면 안된다 1~2 시간 지나서 명령어가 실행된다.


끝!!!!`,link:"/server/ssl 재 갱신 하는방법"},{title:"공개키 충돌 문제 해결",content:`
# {{ $frontmatter.title }}



## 원인 :

server public key has changed. it means either you're under attack or the administrator has changed the key.

ssh 설정 이후에 위에 같이 에러가 표시 됐다.

그래서 구글링 해서 보니까..

public key가 충돌 됐다고 한다.



## 해결 방법 :

/root/.ssh/ 폴더 접속해서 여기서 있던것들 싹디 지우면된다.

맥 환경에서는 단축키 쉬프트 + 커맨트 + 닷(.) 을 누르면 나온걸로 알고 있다.

[숨은 파일 보기 바로가기 ](https://macnews.tistory.com/5286 "숨은 파일 보기 바로가기 ")

그렇다고 .ssh 비공개 폴더를 없애면 안된다.

공개키 설정 한것들 지워줬더니 mysql 워크벤치 접속이 됐다.`,link:"/server/공개키 충돌 문제 해결"},{title:"로컬에서 아마존 서버로 파일 이동 하는 방법",content:`
# {{ $frontmatter.title }}


ftp 사용 안하고도 파일을 옮길 수 있다.

## 사용 방법 :

scp -i 키파일 -r 옮길파일(경로포함)

centos@도메인:/home/유저 [옮길경로] scp -i test.pem -r index.html centos@127.0.0.1:/home/centos`,link:"/server/로컬에서 아마존 서버로 파일 이동 하는 방법"},{title:"리눅스 실시간 에러 확인",content:`
# {{ $frontmatter.title }}



사용 예제



\`\`\`bash
tail -f /var/log/nginx/error.log
\`\`\`


터미널 툴 에서 빠져 나오려면

control + z`,link:"/server/리눅스 실시간 에러 확인"},{title:"리눅스에서 특정 포트를 사용하는 프로세스 확인하기",content:`
# {{ $frontmatter.title }}


사용법 :

\`\`\`bash
lsof -i:8080
kill -9 $(lsof -t -i:8080)
\`\`\`
`,link:"/server/리눅스에서 특정 포트를 사용하는 프로세스 확인하기"},{title:"서버관련 지식",content:`
# {{ $frontmatter.title }}



저번주에 ddos를 두건 처리하고 나서 생각을 정리해봅니다.



1. 클라우플레어는 정말 좋은 서비스

 - 보통 이걸 붙혀두면, 만사형통임.

 - 사이트가 공격 당하고 계신가요? --> under attack..

 -  under attack 는 요금제에 따라서 커스텀 가능.

     (클플에서 제공하는 기본 페이지는 사용자를 놀라게 하니 꼭 변경)



2. 사이트가 어느정도 버텨야 함.

 - 사이트 최적화로 평소 트래픽보다 50% ~  100% 들어오는건 사이트에서 소화가능해야 함.

- 특히 db쪽을 최적화 해야 함.



3. 좀비 pc는 국내외를 가리지 않음.

 - 국외인경우, 해외 트래픽을 막으면 해결됨.

 - 국내인경우는 좀더 복잡함.



4. 손으로 아이피 차단하는건 사람이 할짓이 못됨

 - fail2ban 등의 모듈을 이용해 자동 차단이 가능하나,

 - 잘못 적용하면 일반 사용자를 대량으로 차단할수도 있어 조심스럽게 써야함



5. apache 보다는 nginx를 쓰는 경우 ddos 방어가 쉬움.

 - 일단 apache 는 자체 성능이 떨어지는것 같음

 - 아이피 요청수를 제한하는 limit_zone 도 쓰기에 따라 방어하는데 도움이 됨



6. limit_zone

 -  zone을 하나 이상을 만들어서 상황별 적용

 - 국내아이피/국외아이피에 따라서 burst 를 조정

 - 페이지별로 burst를 조정. php 페이지에 php가 아닌페이지



7. 알림서비스가 필요함

 - 사이트가 느려지거나, 갑자기 요청수가 늘어나는걸 감지하는 기능이 필요

 - 유료서비가 많지만, 유료서비스는 너무 비쌈. 직접 설정하여 만드는게 좋음.



8. 정적 페이지(html), 동적페이지(php)

 - nginx 를 사용하는 경우 정적 페이지는 cdn에서 서비스 되어 충분히 버틸만함

 - php 와 같은 동적 페이지는 요청수가 많은 경우, mysql까지 느리게 만듬

    (그누보드는 기본적으로 모든 php페이지가 db접속을 하게됨)

  - ddos는 대부분 / index.php 를 공격하게 되는데, 회피해야함.

  - 그누보듸 index.php 는 느린편에 속함(캐시를 활성화 하는경우 일부개선)

  - 공격이 들어오면, index.php 보다는 index.html로 접속시킨 다음 index.php 로 이동시킴

    (이때 index.html에서 bypass cookie를 만들어 검증하는 방식이 클라우드 플레어 under attack 모드)



9. 결론

  - 최근 사이트의 ddos공격 및 취약점 공격이 많아지고 있음.

  - 대규모의 ddos공격이 아니라면 충분히 방어가능

  - 대규모의 공격은 클라우드플레어를 쓰는걸 추천(서비스 안되는것보다는 서비스가 조금 느린게 나은 선택)

  - 자체 ddos/dos 방어 체계를 갖추는 게 중요





ps) 혼자 회고하다가 공유하면 좋을것 같아 게시물로 남깁니다.

 자체적으로 under attack  을 한번 구현해보았습니다. 한번 테스트해보세요.

 http://141.164.61.26

 - 최초 접속시 under attack 페이지 노출.

 - 5초(변경가능) bypass cookie 생성을 합니다.

 - bypass cookie  가 있는 경우, 바로 index 페이지를 노출합니다.


https://sir.kr/g5_tip/10956


그누보드에서 솔그루님이 방어하는 방법을 조언글을 올려둬서 한번씩 참고하면된다.


따로 쪽지 남겼는데 친절하게 설명해줬다.



1. 프론트 spa인 경우 자바스크립트를 해석하지 않은 공격은 백엔드와 통신하지 않게 됩니다.

  - 일반적인 ddos라면, 타격이 적을것입니다.



2. limit zone은 동일 아이피에서 요청수를 감소시키는 기능입니다.

  - ddos가 들어오는 경우, 동일 아이피의 요청수가 많습니다. 이를 감소시켜야 서버가 어느정도 버틸수 있습니다.



3. 평소 트래픽 2배정도는 무리없이 버틸수 있어야 한다고 봅니다.

  - ddos가 들어오는 경우, 클플을 쓰더라도 트래픽이 어느정도 넘어오게 됩니다.



나머지는 답하기 애매하다고함..`,link:"/server/서버 관리 지식"},{title:"centos7 외부 저장소에 미러가 실행 되지 않을때",content:`
# {{ $frontmatter.title }}


## 원인 :

레포지트리를 추가한 후에 실행 되다가 마지막 중간 쯤에서 멈추는 현상이 생겼을때..

loaded plugins: fastestmirror loading mirror speeds from cached hostfile

* base: mirror.kakao.com * epel: ftp.iij.ad.jp

* extras: mirror.kakao.com * updates: mirror.kakao.com package proftpd-1.3.5e-8.el7.x86_64 already installed and latest version package 1:openssl-1.0.2k-19.el7.x86_64 already installed and latest version package proftpd-utils-1.3.5e-8.el7.x86_64 already installed and latest version nothing to do


## 해결방법 :

레포지트리를 삭제하고 다시 설치하면 된다.

\`\`\`bash
rm -f /var/lib/rpm/__*
rpm --rebuilddb -v -v
yum clean all
\`\`\`


\`\`\`bash
yum -y install epel-release
\`\`\`

다른 방법은 클리어 명령어로 주면 된다.

\`\`\`bash
yum clean all
\`\`\`

## 맺음말 :

역시나 이건 상황에 따라서 응용 해야 된다.

꼭 처방전을 했다고 해서 풀리는것이 아니기 때문에..



`,link:"/server/외부 저장소에 미러가 실행 되지 않을때"},{title:"카페24 데이터 백업 후에 문제될때",content:`
# {{ $frontmatter.title }}


카페24를 데이터 백업 시도 했다가 갑자기 ftp 접속 이 안될경우

특정아이피 아이피 다시 새로 등록해야된다.

이미 등록 된 아이피가 있지만 카페24 시스템을 개선 시키지 않는이상.. 다시 아이피 등록해주면 정상적으로 ftp 접속 할 수 있다.



`,link:"/server/카페24 데이터 백업 후에 문제될때"},{title:"터미널 사용법",content:`
# {{ $frontmatter.title }}



프로그램 위치 아는법

엔진엑스 경로 보기

which nginx 하면 경로가 나온다.



cd = 해당 경로로 이동 합니다. - cd /<경로명>

pwd = 현제 경로를 표시합니다.

ls = 조건 검색어 - ls st 파일 이름 중간에 st 를 포함한 모든 파일을 표시합니다.

cp = 원본복사 - cp web /bin "web"폴더를 /bin에 복사합니다.

mv = 원본이동 - mv web /bin "web"폴더를 /bin으로 이동합니다.

rm = 원복삭제 - rm web or rm -r web "web"폴더를 삭제 합니다.

mkdir = 폴더 생성 - mkdir web "web" 폴더를 현제 경로에 생성합니다.

rmdir = 폴더삭제 - rmdir web "web" 폴더를 현제 경로에서 삭제합니다.

touch = 파일생성 - touch web "web"의 무용량 파일을 생성 합니다.

grep = 파일안 내용찾기 - grep head index.php "index.php" 에서 head 가 포함된 낱말을 찾어 냅니다.

ln = 링크 - ln -s /bin/web/ apath main "/bin/web/" 의 해당경로를 apath main 으로 링크합니다.

who = 현제 접속 또는 로그인중인 모든 사용자를 찾어줍니다.

ps = ps(옵션) - 현제 실행중인 모든 프로세서 표시합니다.

kill = kill ichat - ichat 프로세서를 강제 종료 합니다.

find = 조건검색어 - find /root/ -name password 파일이름에 password 를 포함한 파일을 /root 폴더에서 검색합니다.

whereis = whereis ichat "ichat 가 있는 프로세서 경로를 표시합니다.

sudo = sudo vi /etc/php.ini root 권한으로 /etc/ 폴더에 php.ini 파일을 vi로 편집합니다.`,link:"/server/터미널 사용법"},{title:"호스팅케이알 도메인 연동후 불안정하면",content:`
# {{ $frontmatter.title }}



호스팅케이알로 도메인 연동 후에 불안정 한다면?

일단 네임서버 연결이 제대로 됐는지 확인한다

그러고 확인 됐으면 기다려봐야된다.

이래도 계속 불안정하면 문의한번 하면 거기측에서 체크해서 연동 해줄것이다..


:::info
안녕하세요. ###고객님.

호스팅케이알입니다.

문의주신 도메인의 네임서버는 정상변경이 되었습니다.

일반적으로 네임서버 변경 후 네트워크 상의 반영시간은 최대 24시간 내외로, 그 시간동안은 일시적으로 접속이 불안정할 수 있으니 이점 참고부탁드립니다.
:::




라고 문의 답변 왔다..`,link:"/server/호스팅케이알 도메인 연동후 불안정하면"},{title:"vue.$NextTick이란?",content:`
# {{ $frontmatter.title }}


데이터를 가지고 화면을 그리기 전에 dom이 먼저 생성되며 원하는 트리(태그)를 찾지 못하는 오류를 막을 수 있다.   


## 사용법 : 

\`\`\`js
created : function() {
    this.$nexttick(function(){
        var item = document.getelementbyid('textbox');
        item.style.backgroundcolor = 'green';
    });
}

\`\`\`


## 참고 자료:

https://kku-jun.tistory.com/13`,link:"/vue2/$NextTick"},{title:"Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders",content:`
# {{ $frontmatter.title }}



## 원인 :

뷰를 공부하면서 아래 처럼 에러가 출력된다.

::: danger
avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders
:::




## 해결 방법 : 

이벤트 버스를 이용해서 프롭스를 전달하면 된다.
 


## 참고 자료 : 

https://juntcom.tistory.com/103`,link:"/vue2/Avoid mutating a prop directly since the value will be overwritten whe"},{title:"Avoided redundant navigation to current location:",content:`
# {{ $frontmatter.title }}


## 원인 :

일단 원인은 현재 경로로 재이동하면 이러한 에러가 나온다.


avoided redundant navigation to current location: 


## 해결방법 :

그래서 문제 해결을 하려면 아래 코드로 하면된다.

\`\`\`js
this.$router.push("/admin").catch(()=>{});
\`\`\`




## 참고 자료 :


https://sso-feeling.tistory.com/706`,link:"/vue2/Avoided redundant navigation to current location"},{title:"Because a cookie’s SameSite attribute was not set or is invalid",content:`
# {{ $frontmatter.title }}


## 원인 : 

작업 하다보면 에디터에서 아이프레임 유투브가 실행되는 부분이 있는데 여기서 쿠키 샘 사이트 문제가 있다.

크롬에서 나오는 에러인데  크롬에서 새로운 정책이라고 알면 될것 같다.


그래서 혹시 몰라서 따로 자료 남긴다.


## 해결 방법 : 


해당 페이지에서 아래 소스코드 넣으면된다.

\`\`\`js
document.cookie = "safecookie1=foo; samesite=lax"; 
document.cookie = "safecookie2=foo"; 
document.cookie = "crosscookie=bar; samesite=none; secure";
\`\`\`




여기서 백단에서도 샘사이트 쿠키 를 samesite=none; secure 로 바꿔주면된다.

백단 마다 문법이 다르기 때문에 구글링으로 먼저 찾봐서 설정을 변경하면 된다.

​
## 참고 자료 :

https://ifuwanna.tistory.com/223`,link:"/vue2/Because a cookie’s SameSite attribute was not set or is invalid"},{title:"ci4 vuejs2 json 적용할때",content:`
# {{ $frontmatter.title }}


## 경험담 :

json 을 적용할때는 

json.strongify 로 변환해서 백단(서버)으로 넘기고

받아올때는 json.parse로 하면되고

그리고 백단에서는 따로 json 변환해서 넣지 말기..

왜냐면 변환해서 넣으면 다시 받아올때 다시 형변환해야되는데

여기서 빡세다.. 그냥 배열로 넣어버리면 된다.

`,link:"/vue2/ci4 vuejs2 json 적용할때"},{title:"data 사용법",content:`
# {{ $frontmatter.title }}


data 문법에서 헷갈리는 것이 있을것이다.

1. data () { return { } } 
 
2. data:() => ({ })

둘중에 어떤게 더 좋을까?


1번은 es5 문법이다.

2번은 es6 문법이다 둘중에 es5를 선호 한다. 에로우 펑션은 일부 에러가 생길 수 있어서...

data() { return { ....} }

위 소스 코드 처럼 하는게 낫다.


## 참고자료 : 

https://hj-tilblog.tistory.com/78`,link:"/vue2/data 사용법"},{title:"error ' is defined but never used no-unused-vars",content:`
# {{ $frontmatter.title }}



eslint 문제에서 추가하면 된다.


https://godffs.tistory.com/3504`,link:"/vue2/error is defined but never used no-unused-vars"},{title:'"esbuild-linux-64" 패키지를 찾을 수 없으며 esbuild #1646 에 필요합니다.',content:`
# {{ $frontmatter.title }}


## 원인 :

error: the package "esbuild-linux-64" could not be found, and is needed by esbuild


이게 인텔에서 amd로 바뀌니까 생긴것같은데 저거 깃헙에서 자세히 읽어보니까 별거 없다.

그냥 node_modules 를 삭제 하고 재설치 했더니 완벽하게 실행된다.


## 문제 해결 :

https://github.com/evanw/esbuild/issues/1646 `,link:"/vue2/Error: The package esbuild-linux-64 could not be found, and is needed by esbuild"},{title:"getters 내부에 파라메터 있을때 사용법",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://dev.to/coderdal/how-to-pass-arguments-to-the-vuex-getters-1dkk`,link:"/vue2/getters 내부에 파라메터 있을때 사용법"},{title:"input checkbox checked",content:`
# {{ $frontmatter.title }}


## 설명 :


체크박스 체키드 로 하는 방법



아래 소스코드 넣어주면 된다.

\`\`\`
true-value="1"
false-value="0"
\`\`\`



최근에 개발하면서 위에 방법으로 하다가 좀 뭔가 아닌것 같다.

바인딩으로 했더니 이게 맞는것 같다. 

일단 상황이 컴포넌트로 체크박스 하나를 만들었는데

컴포넌트 내부에서 체키드가 안되어서..



컴포넌트 내부

\`\`\`vue
<input type="checkbox" value="1"
v-bind:checked="this.value == 1 ? 'checked' : ''"
\`\`\`


프롭스는 이렇게

\`\`\`\`js
props: {
           label:string,
           value:string,

\`\`\`\`




외부에서는 이렇게...

\`\`\`vue
<customcheckboxfield
        v-bind:label="menu_open_label"
        v-bind:value="edit.new_open"
        v-model="edit.new_open"
/>
\`\`\`






## 마지막으로 다시 덧 붙이자면 

불린으로 형변환해서 하는게 훨씬 낫다..

그냥 형변환 해서 바꿀수있다면 0이나 1이 아닌 직접 바꾼게 좋다.







`,link:"/vue2/input checkbox checked"},{title:'Invalid prop: type check failed for prop "data". Expected Object, got Array',content:`
# {{ $frontmatter.title }}



## 원인 :

invalid prop: type check failed for prop "data". expected object, got array.

이런 에러가 뜨는 경우는 오브젝트 혹은 배열로 프롭스를 변환 하는데 문제 생기는 에러다..



## 해결 방법 :

엑시오스로 list 변수 받아오는 부분을 오브젝트로 해야된다.

\`\`\`js
list:{}
\`\`\`

그리고 컴포넌트 내부에 프롭스를 넣어준다.

\`\`\`js
props: {
data: [array, object]
}
\`\`\`

이렇게 하면 에러가 없어진걸 확인 할 수 있다.


## 참고 자료 :


https://github.com/gilbitron/laravel-vue-pagination/issues/18`,link:'/vue2/Invalid prop: type check failed for prop "data". Expected Object, got Array'},{title:"jwt 활용해서 로그인 만들기",content:`
# {{ $frontmatter.title }}




## 사용법 설명
 
몇가지 설명을 덧붙이자면 여기서 핵심이 네비게이션 가이드쪽이 핵심이라 생각한다 엑시오스 인터셉터도 그 역할을 하지만

토큰 재발급 하는과정이 네이게이션 가이드를 통해서 재 발급이 된다 이거 때문에 한 일주일 넘도록 고생했다. 

백단은 일단 firebase/jwt 활용했다 여기서 토큰 만료 되는 시간하고 쿠키랑 같아야된다 

억세스 토큰은 5분씩 해줬고 리프레시토큰은 2주정도 했다. 

리프레시 토큰은 디비에 저장 하거나 레디스에 저장하면된다. 

백단 라우트는 로그인, 로그아웃 리프레시토큰, 어덴티케이션 만 있으면 된다. 

설명을 하자면 로그인 메서드에서 억세스와 리프레시토큰이 발급 된다. 

리프레시토큰 메서드는 http 헤더의 리프레시토큰이 존재하면 억세스 발급을 해준다. 

즉 억세스 토큰이 http 401 상태가 되면 리프레시토큰에 의해서 새 발급을 해준다 그것도 5분 간격으로 발급해준다. 

어덴티케이션 메서드는 여기서 토큰을 base64 디코더로 해독해서 이메일을 받아온것을 회원 정보 테이블로 조회해서 가져온다. 

완성 시키면 깃헙에 올릴것이다. 참고하면 된다.
 

## 참고 자료 :

https://kdinner.tistory.com/60


https://jasonwatmore.com/post/2018/07/06/vue-vuex-jwt-authentication-tutorial-example`,link:"/vue2/jwt 활용해서 로그인 만들기"},{title:"require is not defined for img src",content:`
# {{ $frontmatter.title }}



## 원인 : 

이미지 태그가 비워 있어서 나온 에러다.



## 해결 방법 : 

그냥 # 해시를 넣어준다.

이건 임시로 하는 방법이고 no image 로 하는게 훨 낫다.

​
\`\`\`html
<img src='#' />
\`\`\`


​
이걸로 하면 대처 될수있다.
​

\`\`\`html
<img src='https://via.placeholder.com/300/09f/fff.png%20c/o%20https://placeholder.com/' />
\`\`\`




`,link:"/vue2/require is not defined for img src"},{title:"select box 1 부터 10까지",content:`
# {{ $frontmatter.title }}


가장 간단한 대답은 선택한 옵션을 true 또는 false로 설정하는 것입니다.

\`\`\`vue
<option :selected="selectedday === 1" value="1">1</option>
\`\`\`


여기서 데이터 개체는 다음과 같습니다:

\`\`\`js
data() {
    return {
        selectedday: '1',
        // [1, 2, 3, ..., 31]
        days: array.from({ length: 31 }, (v, i) => i).slice(1)
    }
}
\`\`\`

다음은 선택한 월 일을 설정하는 예입니다:

\`\`\`vue
<select v-model="selectedday" style="width:10%;">
    <option v-for="day in days" :selected="selectedday === day">{{ day }}</option>
</select>
\`\`\`


데이터 세트 :

\`\`\`js
{
    data() {
        selectedday: 1,
        // [1, 2, 3, ..., 31]
        days: array.from({ length: 31 }, (v, i) => i).slice(1)
    },
    mounted () {
        let selectedday = new date();
        this.selectedday = selectedday.getdate(); // sets selectedday to the today's number of the month
    }
}
 \`\`\`




## 참고 자료 :


https://stackoverflow.com/questions/43839066/how-can-i-set-selected-option-selected-in-vue-js-2

`,link:"/vue2/select box 1 부터 10까지"},{title:'This "v-if" should be moved to the wrapper element',content:`
# {{ $frontmatter.title }}


## 원인 :

v-for과 v-if문을 같이 쓰면 생기는 에러


this 'v-if' should be moved to the wrapper element 



## 해결 방법

린트에서 해당 문법을 추가하면된다.

\`\`\`js
"vue/no-use-v-if-with-v-for": "off"
\`\`\`



## 참고 자료 :

https://thewayitwas.tistory.com/163`,link:'/vue2/This "v-if" should be moved to the wrapper element'},{title:"투두 리스트",content:`
# {{ $frontmatter.title }}



투두 리스트 여기꺼 참고 하길..

다른거 다 찾아봐도 정리가 잘 안된것만 나와서...



https://haneunbi.github.io/2020/05/08/vue-todolist/

https://github.com/haneunbi/vue-todolis`,link:"/vue2/todolist"},{title:"unknown custom element : did you register the component correctly?",content:`
# {{ $frontmatter.title }}



## 원인 : 

::: danger
unknown custom element: < navbar > - did you register the component correctly? for recursive components, make sure to provide the "name" option. 
:::


이런 에러가 계속 뜬다면 원인이 컴포넌트 선언을 오타가 나거나 잘못 입력 했을 경우가 백프로이다.

아래 문법대로 했는지 확인한다.


## 해결방법 :

\`\`\`js
components: {}
\`\`\`







`,link:"/vue2/Unknown custom element: - did you register the component correctly"},{title:'v-on handler: "TypeError: Cannot read properties of undefined',content:`
# {{ $frontmatter.title }}


이런 에러가 뜨는건 부모 인스턴스를 잘 보면서 methods가 아니라 method 라고 오타가 있는지 확인해야한다.

아니면 빼먹거나 없을경우 에러가 생긴다.



## 참고 링크 :

https://heewon26.tistory.com/89`,link:'/vue2/v-on handler: "TypeError: Cannot read properties of undefined'},{title:"v-table2 내부 새로고침하기",content:`
# {{ $frontmatter.title }}


## 사용법 :

새로고침할때 이렇게 하면된다.


컴포넌트에다가 $ref 로 지정해준다.

\`\`\`html
ref="table"
\`\`\`


핸들러 함수를 넣고 거기다가 아래 소스를 넣어준다.

엑시오스 then 내부에다가 성공일때..

\`\`\`js
this.$refs.table.refresh();
\`\`\`

`,link:"/vue2/v-table 2 내부 새로고침하기"},{title:"v-table2 테이블 컬럼 사이즈 조절",content:`
# {{ $frontmatter.title }}



사실상 뷰2 내부 페이지에서 컴포넌트 렌더링한게 style 태그에 있던게 안먹힌다.

그래서 제이쿼리나 바닐라 자스로 조절하면된다.





예시는 이걸로 보면 된다.

## 해결방법 :

\`\`\`vue
created() {
    this.$nexttick(function(){
        $(".table thead th:nth-child(1)").css("width","5%");
        $(".table thead th:nth-child(2)").css("width","10%");
        $(".table thead th:nth-child(3)").css("width","10%");
        $(".table thead th:nth-child(4)").css("width","40%");
        $(".table thead th:nth-child(5)").css("width","10%");
        $(".table thead th:nth-child(6)").css("width","10%");
        $(".table thead th:nth-child(7)").css("width","10%");
    });
}
\`\`\`




그리고 v-table2 옵션에다가 하나 추가하면된다.

\`\`\`js
table : {
       tableclass:'table table-bordered table-hover'
   },
\`\`\`

`,link:"/vue2/v-table2 테이블 컬럼 사이즈 조절"},{title:"vite 번들러 설명",content:`
# {{ $frontmatter.title }}


vite.config.js

vite 명령어로 dev 서버를 실행할 때 프로젝트 루트의 vite.config.js 파일 확인을 시도합니다. 

그리고 내부에 설정된 값을 참고합니다.

\`\`\`js
import { fileurltopath, url } from 'url'
 
import { defineconfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
// https://vitejs.dev/config/
export default defineconfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileurltopath(new url('./src', import.meta.url))
    }
  }
})
\`\`\`

alias : 파일 시스템의 경로에 별칭을 만들 때 사용합니다. 미리 설정된 '@' 기호를 통하여 './src' 디렉토리에 절대경로로 쉽게 접근할 수 있습니다.

package.json

npm 으로 관리하기 위한 프로젝트 정보를 갖고 있는 파일






`,link:"/vue2/vite 번들러"},{title:"vite 이미지 불러올때",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..

https://github.com/vitejs/vite/issues/5701`,link:"/vue2/vite 이미지 불러올때"},{title:"vue cookie",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자.

https://github.com/cmp-cc/vue-cookies`,link:"/vue2/vue cookie"},{title:"vue express ssr 사이트 제작",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자

https://ezcode.kr/board/vuessr/read/1`,link:"/vue2/vue express ssr 사이트 제작"},{title:"vue html 변환 할때",content:`
# {{ $frontmatter.title }}


# 경험담 :

html 태그 나오게 변환 할때 백단에서는 그냥 뿌려주기만 하면된다

그러니까 백엔드에서 html 변환 함수 이런거 필요 없고 그냥 내용물 그대로 출력하면된다.

그러면 v-html 으로 써서 뷰에서 해결 하면된다.


`,link:"/vue2/vue html 변환 할때"},{title:"vue 세션 사용법",content:`
# {{ $frontmatter.title }}

여기 자료 참고하면 된다.

https://sjwiq200.tistory.com/37`,link:"/vue2/vue 세션 사용법"},{title:"vue 프로젝트 구조",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자 

https://velog.io/@seulgea/vue-%ed%8f%b4%eb%8d%94-%ea%b5%ac%ec%a1%b0`,link:"/vue2/vue 프로젝트 구조"},{title:"vue-quill-editor 사용법",content:`
# {{ $frontmatter.title }}


일단 블로그 보면서 참고했는데 여기 자료애서 좀 수정을 거쳐야된다.

커스텀 컴포넌트로 만들려고 했더니 약간의 난이도가 있다.

여기 소스코드 그대로 사용하면된다.



editor.vue
\`\`\`vue
<template>
  <div>
    <quill-editor
            class="editor"
            ref="mytexteditor"
            :disabled="false"
            :content="editorvalue"
            v-model="editorvalue"
            :options="editoroption"
            @change="oneditorchange"
            @blur="oneditorblur($event)"
            @focus="oneditorfocus($event)"
            @ready="oneditorready($event)"
    />
  </div>
</template>

<script>
export default {
  name: "editors",
  props: {content:{ type:string }},
  data() {
      return {
          editoroption: {
              placeholder: "내용을 입력해주세요.",
              modules: {
                  toolbar: [
                      ["bold", "italic", "underline", "strike"], // <strong>, <em>, <u>, <s>
                      ["blockquote", "code-block"], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
                      [{ header: 1 }, { header: 2 }], // <h1>, <h2>
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ script: "sub" }, { script: "super" }], // <sub>, <sup>
                      [{ indent: "-1" }, { indent: "+1" }], // class제어
                      [{ direction: "rtl" }], //class 제어
                      [{ size: ["small", false, "large", "huge"] }], //class 제어 - html로 되도록 확인
                      [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
                      [{ font: [] }], // 글꼴 class로 제어
                      [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
                      [{ align: [] }], // class
                      // ["clean"],
                      ["link", "image", "video"],
                  ]
              },
          },
      }
  },
  methods: {
      oneditorchange({ quill, html, text }) {
         // console.log('editor change!', quill, html, text)
          //this.content = html
      },
      oneditorblur(editor) {
          //console.log("editor blur!", editor);
      },
      oneditorfocus(editor) {
          //console.log("editor focus!", editor);
      },
      oneditorready(editor) {
         // console.log("editor ready!", editor);
      },
  },
  computed: {
    editor() {
        return this.$refs.myquilleditor.quill
    },
    editorvalue: {
        get() {
            return this.content
        },
        set(val){
            this.$emit('input', val)
        }
    }
  },
  mounted() {}
};
<\/script>
 
<style>
  .ql-container, .ql-editor {
    min-height: inherit!important;
  }
  .ql-container {
    height: 300px!important;
  }
</style>
\`\`\`

 







## 사용법 :

\`\`\`vue
<editors v-model="form.mp_content" v-bind:content="form.mp_content" />
\`\`\`

적절한 곳에 아래 크롬 이슈 방지 소스를 넣어준다.

\`\`\`js
created(){
    // 20230103 크롬 80 이슈 문제
    document.cookie = "safecookie1=foo; samesite=lax";
    document.cookie = "safecookie2=foo";
    document.cookie = "crosscookie=bar; samesite=none; secure";
},
\`\`\`


## 참고 자료 :

https://hjh0827.tistory.com/76


https://laracasts.com/discuss/channels/general-discussion/using-v-model-with-nested-compoennts-in-vue`,link:"/vue2/vue-quill-editor 사용법"},{title:"Vue.js 개발을 위한 조언",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://han-um.tistory.com/18`,link:"/vue2/Vue.js 개발을 위한 조언"},{title:"vue2 cli service dotenv 설정",content:`
# {{ $frontmatter.title }}


일단 패키지에 소스를 넣는다.

\`\`\`
"scripts": { "dev":"vue-cli-service serve --open --mode deveplopment", }
\`\`\`



아래 처럼 경로를 이렇게 잡는다 

/frontend/ 

ㄴ .env.deveplopment



src에서 넣지말고 외부에 넣어야 한다. 

그리고 prefix 변수를 vue_app_ 

이렇게 하면된다.



`,link:"/vue2/vue2 cli service dotenv 설정"},{title:"vue2 config sass-loader 사용법",content:`
# {{ $frontmatter.title }}


위에 사이트 접속해서 제일 맨 마지막에 있는걸 쓰면 된다..


웹팩을 그대로 가져다 쓰면되는데 

혹시 모르고 지웠으면 이걸로 쓰면 된다. 



https://stackoverflow.com/questions/46963043/sass-file-from-npm-package-not-found-when-importing-in-vue-application`,link:"/vue2/vue2 config sass-loader 사용법"},{title:"vue2 draggable 자료들",content:`
# {{ $frontmatter.title }}


여기 링크 참고하기..

https://stackoverflow.com/questions/63433028/vue-draggable-how-to-only-replace-item-chosen-to-prevent-shifting-all-other-it`,link:"/vue2/vue2 draggable 자료"},{title:"vue2 moment 라이브러리",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자..

https://mishka.kr/21`,link:"/vue2/vue2 moment 라이브러리"},{title:"vue2 router 사용법",content:`
# {{ $frontmatter.title }}


아래 링크 참고 할것.


https://sunny921.github.io/posts/vuejs-router-03/`,link:"/vue2/vue2 router 사용법"},{title:"vue2 ssr 관련 자료",content:`
# {{ $frontmatter.title }}

아래 링크 참고 하자

https://github.com/lincenying/mmf-blog-vue2-pwa-ssr`,link:"/vue2/vue2 ssr 관련 자료"},{title:"vue2 vite 번들러에서 img 를 require is not defined",content:`
# {{ $frontmatter.title }}


vite 번들러 쓰면 문제인지 몰라도 import 에서만 되고 require 가 안먹힐때 아래꺼 소스코드 쓰면된다.

 
\`\`\`vuejs
window.require = (name) => new url(name, import.meta.url).href;
\`\`\`

내부에서 위에다가 쓴다.

아래 data 변수에다가 오브젝트나 배열 내부에다가 넣어준다.

\`\`\`vuejs
{id:1,image:require('./img/thumb_layout01.gif')},
\`\`\`




`,link:"/vue2/vue2 vite 번들러에서 img 를 require is not defined"},{title:"vuex axios todo list",content:`
# {{ $frontmatter.title }}


일단 어제 했던 공부를 포스팅으로 남겨본다. 이전에도 이런 실수 있어서 포스팅 올렸는데

자료가 섞이고 섞이다보니 어디론가 사라져서 다시 올려본다. 반복 실수 하지 않기 위해서..


일단 스토어에서는 이렇게 짜야된다.

\`\`\`js
const state = () => ({
    menu_data: [],
});
 
const mutations = {
    setmenu(state, payload) {
        state.menu_data = payload;
    },
    addmenu (state, customer) {
        state.menu_data.push(customer)
    }
};
 
const actions = {
    list({commit}) {
        return getapi(\`/admin/design/menu/list\`)
        .then((res) => {
            commit('setmenu', res.result);
            return res;
        }).catch((res) => {
            throw res;
        })
    },
    save({commit}, {id,form}) {
        if(typeof id == "undefined") {
            return getpost(\`/admin/design/menu/write\`, form)
                .then((res) => {
                    commit('addmenu', res.result);
                    return res;
                }).catch((res) => {
                    throw res;
                });
        }else {
            return getpost(\`/admin/design/menu/update/\${id}\`, form)
        }
    },
}
 
 
const getters = {
    getmenu: state => state.menu_data
}
 
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
\`\`\`


자! 이걸 설명하자면 여기서 중요한게 커밋하는부분이랄까?

리스트에서 setmenu는 바로 세터로 적용하면 목록에 보이는데

여기서 글쓰기는 커밋을 배열 푸시를 써서 올려주면 된다.

그러면 알림과 동시에 바로 쌓이는걸 볼수있다.

그리고 사용법은 아래 처럼 하면된다.

\`\`\`js
computed: {
            ...mapgetters('menu',['getmenu']),
            draggablelist: {
                get() {
                    return this.$store.state.menu.menu_data;
                },
                set(value) {
                    this.$store.commit("menu/setmenu", value);
                },
            },
        },

methods : {
           ...mapmutations('menu',['setmenu']),
\`\`\`


드래그리스트는 드래그드롭 패키지 때문에 한거고

맵겟터랑 맵뮤테이션으로 추가 하면 된다.



그리고 삭제 기능을 추가한다면 이렇게 하면된다.

\`\`\`js
const mutations = {
    setmenu(state, payload) {
        state.menu_data = payload;
    },
    addmenu (state, payload) {
        state.menu_data.push(payload)
    },
    removemenu(state, payload){
        let todos = state.menu_data;
        todos.splice(todos.indexof(payload), 1)
    }
};
\`\`\`


뮤테이션은 이렇게 쓰면된다.

\`\`\`js
const actions = {
delete({commit},id) {
        return getpost(\`/admin/design/menu/delete/\${id}\`)
            .then((res) => {
                commit('removemenu', res.result);
                return res;
            }).catch((res) => {
                throw res;
            });
    },
}
\`\`\`

액션스에 삭제 고유번호만 넣으면된다. 그럼 커밋이 작동되어서 알아서 삭제처리됨.


이거 한 라인에서 수정 버튼 누르면 나머지 부분 숨기고 

해당 라인만 보임 처리 하는 방법을 올려본다.

이거는 그냥 상황에 맞게 구현하면된다.


\`\`\`js
data() {
            return {
              selectedlistitem: [],
           }
}
\`\`\`

이렇게 오브젝트 변수를 추가한다. 


\`\`\`js
edithandler(param) {
    this.selectedlistitem = param.mn_id;

    this.iseditinputshow = !this.iseditinputshow;
    this.iseditshow = !this.iseditshow;
    this.iseditbtnshow = !this.iseditbtnshow;
    this.isdraggble = !this.isdraggble;

    this.edit.title = param.mn_title;
    this.edit.url = param.mn_url;
},
\`\`\`

여기서 새로 추가된 부분이 this.$set 이건데 세터로 방금 생성한 오브젝트 변수에다가 고유번호를 추가한 부분이다.

이 부분이 제일 중요하다.



그대로 save펑션에도 스토어 디스패치 이후에 then((res) => ..... 성공일때 

\`\`\`js
this.selectedlistitem = id
\`\`\`


위에 한줄만 코드 넣으면 된다.

그리고 숨김 보임 변수를 밑에 있으면된다. (아래 코드 넣어준다.)

\`\`\`js
this.iseditinputshow = !this.iseditinputshow;
this.iseditshow = !this.iseditshow;
this.iseditbtnshow = !this.iseditbtnshow;
this.isdraggble = !this.isdraggble;
\`\`\`



`,link:"/vue2/vue2 vuex axios todo list"},{title:"vue2 webpack 에 대해서",content:`
# {{ $frontmatter.title }}



아래 참고 주소 보면서 공부 하자..


https://github.com/wonwookang/vue-and-vuex


http://labs.brandi.co.kr/2019/04/30/kangww.html


http://labs.brandi.co.kr/2018/12/13/kangww.html`,link:"/vue2/vue2 webpack 에 대해서"},{title:"vue2 레이아웃 설정",content:`
# {{ $frontmatter.title }}


레이아웃 설정 방법 아래 링크 참고하면된다.


https://ospace.tistory.com/788`,link:"/vue2/vue2 레이아웃 설정"},{title:"vue2 설치하기",content:`
# {{ $frontmatter.title }}


아래 링크 참고하기

https://carrotweb.tistory.com/108`,link:"/vue2/vue2 설치하기"},{title:"vue2 에서 미들웨어 추가하기",content:`
# {{ $frontmatter.title }}



미들웨어 사용법 블로그 

https://blog.logrocket.com/vue-middleware-pipelines/


깃헙 소스코드 

https://github.com/dotunj/vue-middleware-pipelines`,link:"/vue2/vue2 에서 미들웨어 추가하기"},{title:"vue2 초보들의 흔한 에러",content:`
# {{ $frontmatter.title }}



흔한 에러 참고하길..

https://joshua1988.github.io/web-development/vuejs/common-error-cases/`,link:"/vue2/vue2 초보들의 흔한 에러"},{title:"vue2 페이지네이션",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://vuejsexamples.com/pagination-component-for-vue-js-2/`,link:"/vue2/vue2 페이지네이션"},{title:"vue2 폰트 추가",content:`
# {{ $frontmatter.title }}


\`\`\`bash
npm i google-fonts-webpack-plugin -d
\`\`\`



webpack.config.js 내부에 아래 소스코드를 넣어준다. (응용) 

\`\`\`js
const googlefontsplugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new googlefontsplugin({
            fonts: [
                { family: "source sans pro" },
                { family: "roboto", variants: [ "400", "700italic" ] }
            ]
        })
    ]
}
\`\`\`


###############################


근데 웹팩 5 이상에서만 되는것같다 지금 3정도 쓴데 작동 안되서 일단 보류 한다.




## 참고 자료 :
 
https://stackoverflow.com/questions/51516084/how-do-i-add-a-google-font-to-a-vuejs-component
`,link:"/vue2/vue2 폰트 추가"},{title:"vuejs 2 로그인 구현",content:`
# {{ $frontmatter.title }}


여기 주소 참고한다.

https://minu0807.tistory.com/64`,link:"/vue2/vuejs 2 로그인 구현"},{title:"vuejs ssr rendering php",content:`
# {{ $frontmatter.title }}


php 와 vuejs를 서버 사이더 렌더링 하는 방법을 찾아봤다.

이게 어떻게 알게 됐냐면 줌 기술 블로그에서 잠깐 포스팅을 읽다보니까 알게됐다.



https://zuminternet.github.io/zum-mobile-nodejs/




위에 포스팅글 읽다보면 스프링 부트에서 노드로 갈아탄다고 하는데 vuejs 랑 노드를 혼합해서 사용하려고 노드로 갈아탄다는 말인데



혹시나 php 관련된 자료가 있을건가 알아봤더니 라라벨이랑 뷰랑 혼합해서 쓴게 있는데 이건 예전부터 있던건데 php-v8js인가 이거랑 연동해서 쓰는경우도 있다고 한다. (아래 링크 참고)



https://blog.kesuskim.com/archives/spl-php-vue-ssr/

https://vuejsdevelopers.com/2017/11/06/vue-js-laravel-server-side-rendering/

https://github.com/anthonygore/vue-js-laravel-ssr


근데 이 자료는 라라벨 위주라서 그런지 라라벨에 최적화 되어 있다. 결국엔 ci4랑 연동 하려면.. 문제가 될건가 하고 다른 자료들도 찾아봤다.


여기 이자료는 그냥 순수 php 로 연동한 자료가 있다.

https://rojas.io/vue-js-server-side-rendering-with-php/


이러면 굳이 라라벨을 안하고 ci4 나 순수 php 로 가능할것같다.


그리고 좀더 찾아보니까 패키지리스트에 자료가 렌더링 관련 자료가 있다.


https://packagist.org/packages/spatie/server-side-rendering


이걸 사용하면 리액트나 뷰 등 같이 사용 할 수 있는것같다.


사실 내가 이전에도 비슷하게 개발을 했는데~ 근데 이게 단점이 많아서.. 이 방식이 좀 올바른건지.. 알송달송 한 느낌인데 

이번에 찾은 자료로 다시 개발을 하면 될것같다. 만약에 서버 세션까지 되면 금상첨화라고 생각한다.  

jwt 이용해서 하던지 아님 세션을 줘서 해보고 싶다. nuxtjs로 개발하는데 좀 힘든것도 있고 설정이라던지 api 로그인을 통해서 하려니까.. 



어쨋든간에 서버사이더 렌더링 방식으로 다시 개발해보고 리뷰 남겨봐야지..



https://github.com/leorojas22/vue-ssr-php-example




`,link:"/vue2/vuejs ssr rendering php"},{title:"vuejs를 php 코드로 사용가능하는 패키지",content:`
# {{ $frontmatter.title }}



웹서핑하다가 어떤분이 vuejs를 php코드로 사용하는거 올려놔서..

보고 너무 신기해서.. 

나중에 써봐야지..


https://viewi.net/`,link:"/vue2/vuejs를 php 코드로 사용가능하는 패키지"},{title:"vuelidate 컴포넌트로 분리해서 사용하는 방법",content:`
# {{ $frontmatter.title }}


이거 보고 쓰면된다.

https://codesandbox.io/s/mjxzpvpw6j?from-embed=&file=/src/app.vue`,link:"/vue2/vuelidate 컴포넌트로 분리해서 사용하는 방법"},{title:"vuetify 네비게이션",content:`
# {{ $frontmatter.title }}

https://stackoverflow.com/questions/55503676/vuetify-navigation-drawer-with-sub-menus

여기 참고해서 개발하면 될것 같다.`,link:"/vue2/vuetify 네비게이션"},{title:"vuex 상태관리",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..

https://goodteacher.tistory.com/439
`,link:"/vue2/vuex 상태관리"},{title:"vue로 개발한 페이지 검색엔진에 노출시키는 법",content:`
# {{ $frontmatter.title }}



일단 아래 방법 그대로 참고만 하면된다.



https://dong-queue.tistory.com/3`,link:"/vue2/vue로 개발한 페이지 검색엔진에 노출시키는 법"},{title:"zsh : comment not found : vue",content:`
# {{ $frontmatter.title }}



## 원인 : 


터미널에 명령어 치면 이런 에러가 뜬다.

zsh : comment not found : vue 

환경 변수에 등록이 안되서 나오는 에러이다.




## 해결방법 :


1. 터미널에서 아래 명령어 입력해준다. 

\`\`\`bash
vi .zshrc 
\`\`\`

\`\`\`bash
export path="$path:~/.npm-global/bin" source ~/.zshrc
\`\`\`


저장 후에 터미널에 vue를 입력하면 된다.  

.zshrc 설정은 맥 버전 마다 설정 하는 방법이 약간 다르기 때문에 주의 해야한다. 

최신 버전에서는 이렇게 하면된다. 




## 참고 자료 :


https://kabby.tistory.com/3


https://zionh.tistory.com/28





`,link:"/vue2/zsh : comment not found : vue"},{title:"노드, 뷰2,socket.io 채팅 구현하기",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://taehyeki.tistory.com/319`,link:"/vue2/노드 뷰2 socket.io 채팅 구현하기"},{title:"다음 우편주소 api 적용하기",content:`
# {{ $frontmatter.title }}


## 설명 :

일단 사용법은 구글링을통해서 알아냈지만 혹시 몰라서 남긴다.

meta-tag 패키지가 있다는 가정하에 아래 소스를 참고한다.


\`\`\`js
metainfo: {
    script: [
         { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js', async: true, defer: true }
    ],
},
\`\`\`



\`\`\`js
methods: {
    execdaumpostcode() {
        new window.daum.postcode({
            oncomplete: (data) => {
                let fullroadaddr = data.roadaddress; // 도로명 주소 변수
                let extraroadaddr = ''; // 도로명 조합형 주소 변수
    
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraroadaddr += data.bname;
                }
    
                if(data.buildingname !== '' && data.apartment === 'y'){
                    extraroadaddr += (extraroadaddr !== '' ? ', ' + data.buildingname : data.buildingname);
                } // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    
                if(extraroadaddr !== ''){
                    extraroadaddr = ' (' + extraroadaddr + ')';
                } // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
    
                if(fullroadaddr !== ''){
                    fullroadaddr += extraroadaddr;
                } // 우편번호와 주소 정보를 해당 필드에 넣는다.
    
                this.$refs.zip.value = data.zonecode; //5자리 새우편번호 사용
                this.$refs.address1.value = fullroadaddr;
    
                this.form.zip = this.$refs.zip.value;
                this.form.address1 = this.$refs.address1.value;
            }
        }).open()
    },
}
\`\`\`



여기서 중요한게 input에 refs="address1" 가 있어야된다.

그리고나서 따로 변수에다가 연결 시켜서 하면된다.

인풋은 3가지로 있다 우편번호, 상세주소, 나머지주소


\`\`\`js
this.$refs.zip.value = data.zonecode; 
this.$refs.address1.value = fullroadaddr;
 
this.form.zip = this.$refs.zip.value;
this.form.address1 = this.$refs.address1.value;
\`\`\`

이게 핵심이다. 만약에 변수에다가 연결 안하면 인풋값들이 날라간다. 주의하길..








`,link:"/vue2/다음 우편주소 api 적용하기"},{title:"뷰 컴포넌트 데이터 바인딩 - 모달",content:`
# {{ $frontmatter.title }}



여기 참고 사이트 보면서 따라하면 되는데 참고로 

뷰는 0부터 시작 하는거다.

모달에 배열을 고유번호로 지정할때 0부터 지정된것만 가능하다.



https://goodmemory.tistory.com/146`,link:"/vue2/뷰 컴포넌트 데이터 바인딩 - 모달"},{title:"체크 유무를 특정 값으로 바인딩 방법",content:`
# {{ $frontmatter.title }}


## 원인 : 
인풋 체크 박스에서 바인딩하면

모델이 true 와 false가 안먹히는 현상이 있다.



## 해결 방법 :

인풋 에다가 true-value, false-value 추가한다. 


\`\`\`html
<input type="checkbox" v-model="agreeyn" true-value="y" false-value="n"/>
\`\`\`

  

## 참고 사이트 :

https://tjddnjs625.tistory.com/34`,link:"/vue2/체크 유무를 특정 값으로 바인딩 방법"},{title:"캡틴판교 nuxt2 강의",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자


https://github.com/joshua1988/learn-nuxt`,link:"/vue2/캡틴판교 nuxt 2 강의"},{title:"ref vs reactive",content:`
# {{ $frontmatter.title }}



강의에서 처럼 ref vs reactive는 둘다 반응형상태를 만드는데 사용합니다.

차이점은 ref 는.value 가 붙고, reactive는 .value가 붙지 않습니다. 

그렇기 때문에 reactive로 primitive type(number, string, boolean ...)반응형 상태를 선언시 반응성이 유지되지 않습니다. 

반면 ref는 .value로 접근하기에 primitive type은 물론이고 object type도 선언할 수 있습니다.`,link:"/vue3/ref vs reactive"},{title:"vite vue3 jwt",content:`
# {{ $frontmatter.title }}


https://minu0807.tistory.com/130`,link:"/vue3/vite vue3 jwt"},{title:"vuejs3 컴퓨티드 계산된 속성",content:`
# {{ $frontmatter.title }}


템플릿 문법({{ }})은 간단히 사용 하면 매우 편리합니다. 하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워질 수 있습니다. 예를 들어 아래와 같이 객체가 있는경우:

\`\`\` js
const teacher = reactive({
  name: '짐코딩',
  lectures: [
    'html/css',
    'javascript',
    'vue3'
  ]
})
\`\`\`

 
그리고 < template > 에 author가 책을 갖고 있는지 없는지 여부를 표시하고 싶습니다.
 
\`\`\` js
<p>강의가 존재 합니까?:</p>
<span>{{ teacher.lectures.length > 0 ? 'yes' : 'no' }}</span>
\`\`\`

이 시점에서 템플릿 표현식은 복잡해지며 선언적이지 않습니다. 또 이러한 코드를 여러곳에서 반복적으로 사용해야 한다면 더더욱 비효율 적일 것입니다.
 

이럴때 사용하는 것이 계산된 속성(computed property)입니다.

\`\`\` js
const haslecture = computed(() => {
  return teacher.lectures.length > 0 ? 'yes' : 'no'
})
<p>강의가 존재 합니까?:</p>
<span>{{ haslecture }}</span>
\`\`\`






`,link:"/vue3/vuejs3 컴퓨티드 계산된 속성"},{title:"짐코딩 강의 깃허브",content:`
# {{ $frontmatter.title }}



https://github.com/gymcoding/vue3-posts

실전편 코드 



https://github.com/gymcoding/learn-vue3 

기본편 코드







`,link:"/vue3/짐코딩 강의"},{title:"컴포지션 api 를 사용하는이유",content:`
# {{ $frontmatter.title }}

기존에 vuejs2에서는 옵션 에이피 아이를 사용하는데 코드 분석이 어렵고 논리적 관심사 로직이 분산되어 있어서 쉽게 찾을수 없다는 단점이 있다

그래서 컴포지션 에이피아이를 사용하면 코드 분석도 금방 찾을 수 있고 코드 재 사용도 가능해서 컴포지션 에이피아이를 쓰는것을 추천한다.




## 코드 재사용성 


composition api의 가장 큰 장점은 composable 함수의 형태로 로직의 재사용이 가능하다는 것입니다. options api의 기본 로직 재사용 메커니즘인 mixins의 모든 단점을 해결합니다. composition api의 재사용 기능은 계속해서 증가하는 구성 가능한 유틸리티 모음인 vueuse와 같은 인상적인 커뮤니티 프로젝트를 탄생시켰습니다. 또한 immutable data, state machines, rxjs와 같은 상태 저장 타사 서비스 또는 라이브러리를 vue의 반응성 시스템(reactivity system)에 쉽게 통합하기 위한 깨끗한 메커니즘 역할을 합니다. 

compositions api는 options api가 가지고 있던 2가지 주요 제한 사항을 해결합니다.`,link:"/vue3/컴포지션 api 를 사용하는이유"},{title:"컴포지션 api",content:`
# {{ $frontmatter.title }}

composition api

composition api는 옵션(data, methos, ...)을 선언하는 대신 가져온 함수(ref, onmounted, ...)를 사용하여 vue 컴포넌트를 작성할 수 있는 api 세트를 말합니다.

다음은 composition api에서 각각의 api(ref, onmounted, ...)들을 포괄하는 용어 입니다.

반응형 api (reactivity api)

라이프 사이클 훅 (lifecycle hooks)

종속성 주입 (dependency injection)

배열 및 컬렉션의 참조 unwarpping

반응형 객체와 달리 ref가 반응형 배열 또는 map과 같은 기본 컬렉션 타입의 요소로 접근될 때 수행되는 래핑 해제가 없습니다.


\`\`\`js
const books = reactive([ref('vue 3 guide')])
// need .value here
console.log(books[0].value)
 
const map = reactive(new map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)
\`\`\`

객체에서는 .value를 안붙는다.

배열에서는 .value를 붙는다.



반응형 상태 구조 분해하기(destructuring)

큰 반응형 객체의 몇몇 속성을 사용하길 원할 때, 원하는 속성을 얻기 위해 es6 구조 분해 할당을 사용하는 것은 매우 일반적입니다.


\`\`\`js
import { reactive } from 'vue'
 
const book = reactive({
  author: 'vue team',
  year: '2020',
  title: 'vue 3 guide',
  description: '당신은 이 책을 지금 바로 읽습니다 ;)',
  price: '무료'
})
 
let { author, title } = book
\`\`\`

안타깝게도, 그러한 구조 분해로 두 속성은 반응형을 잃게 될 것 입니다. 이런 경우, 반응형 객체를 일련의 ref 들로 변환해야 합니다. 이러한 ref 들은 소스 객체에 대한 반응형 연결을 유지합니다.
 
torefs 와 toref는 반응형 객체로 만들어준다. (이전에는 스트링인데..)

::: danger
torefs, toref를 사용하면 반응형 객체의 속성과 동기화 됩니다. 그래서 원본 속성을 변경하면 ref 객체가 업데이트되고 그 반대의 경우도 마찬가지 입니다.
:::


\`\`\`js
import { reactive, torefs } from 'vue'
 
const book = reactive({
  author: 'vue team',
  year: '2020',
  title: 'vue 3 guide',
  description: '당신은 지금 바로 이 책을 읽습니다  ;)',
  price: '무료'
})
 
let { author, title } = torefs(book)
 
title.value = 'vue 3 상세 guide' // title 이 ref 이므로 .value 를 사용해야 합니다.
console.log(book.title) // 'vue 3 detailed guide'
\`\`\`






`,link:"/vue3/컴포지션 api"},{title:"[우편번호 서비스] API 로딩시 허용되지 않은 파라미터가 감지되어 API 작동이 중지되었습니다",content:`
# {{ $frontmatter.title }}


아래 링크 참고

https://sir.kr/g5_tip/15675`,link:"/그누&영카트/[우편번호 서비스] API 로딩시 허용되지 않은 파라미터가 감지되어 API 작동이 중지되었습니다"},{title:"dropzone 이미지 업로드 플러그인 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

드롭존 이미지 업로드 플러그인에 대해서 설명한다.

그누보드에서 사용되는 드롭존 플러그인이다 필요 에 따라서 응용해서 사용하면된다.

간단하게 포스팅 하는거라서 에러는 알아서들 해결 하면 된다.

 

일단 필요한 디비들은 이러하다 

설정 테이블에서 하나를 추가 하면된다.

\`\`\`php
// 팝업 설정 이미지 토큰 필드 추가
if(!sql_query(" select nw_token_id from {$g5['new_win_table']} limit 1", false)) {
    sql_query(" alter table \`{$g5['new_win_table']}\` 
                      add \`nw_token_id\` varchar(255) not null after \`nw_content_html\`
                        ", true);
}
\`\`\`

위에 소스는 토큰 유니크 아이디 이다 설정 테이블, 이미지 테이블에 둘 다 존재 해야 된다.

필드 값이 설정, 이미지 두 곳에 똑같이 존재 해야 하는데 설정 테이블에 없거나 다르면 이미지가 삭제 처리 된다. (이건 맨 밑에 로직을 넣었다.)

\`\`\`php
// 이미지 테이블
if(!sql_query(" desc {$g5['new_win_image_table']} ", false)) {
    sql_query(" create table if not exists \`{$g5['new_win_image_table']}\` (
                      \`bf_no\` int(11) unsigned not null auto_increment,
                      \`bf_source\` varchar(255) not null default '',
                      \`bf_file\` varchar(255) not null default '',
                      \`bf_download\` int(11) not null,
                      \`bf_content\` text not null,
                      \`bf_fileurl\` varchar(255) not null default '',
                      \`bf_thumburl\` varchar(255) not null default '',
                      \`bf_storage\` varchar(50) not null default '',
                      \`bf_filesize\` int(11) not null default '0',
                      \`bf_width\` int(11) not null default '0',
                      \`bf_height\` smallint(6) not null default '0',
                      \`bf_type\` tinyint(4) not null default '0',
                      \`bf_datetime\` datetime not null default current_timestamp,
                      \`bf_token_id\` varchar(100) not null default '',
                      primary key (\`bf_no\`)
                    ) engine=innodb default charset=utf8; ", true);
}
\`\`\`

이게 이미지 테이블이다. 여기서 테이블 배열 변수만 바꾸면 된다.  위에 보면 bf_token_id 필드가 존재한다.

 

이제는 폼으로 접근한다. 예를 들어서 팝업 레이어 폼에서 사용하고 싶다면 거기 폼에 접근해서 form 태그 밑에 아래 코드를 넣는다.

토큰 인풋이 보이면 거기 바로 밑에 소스를 넣으면 된다.

\`\`\`php
<input type="hidden" name="token_id" id="token_id" value="<?php echo $nw['nw_token_id'] ? $nw['nw_token_id'] : get_uniqid(); ?>">
\`\`\`

위에 php 소스를 설명하자면 3항 연산자이고 토큰 아이디가 존재 하면 토큰 아이디 $row 배열 변수가 출력 되지만 만약에 없을 경우 유니크아이디가 생성된다. 이 유니크아이디는 영카트에 있다 (즉, 토큰 아이디는 유니크 아이디이다)

(5.4.15 버전에서는 영카트 와 통합 되서 존재 한다. 5.3 이하 면 없 을 경우가 있어서 영카트에서 소스를 떼 와야 한다.)

 

이제는 드롭존 플러그인 렌더링 할 곳에 알 맞 은 자리에 아 래 소스를 넣 어 주면 된다. (보통 맨 아 래에 넣는다.)

\`\`\`php
<tr>
    <th scope="row"><label for="nw_upload">이미지 업로드<strong class="sound_only"> 필수</strong></label></th>
    <td>
        <div id="mydropzone" class="dropzone"></div>
    </td>
</tr>
\`\`\`

cdn를 알 맞 은 위치에 넣 어 주면 된다.  

\`\`\`
<link href='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.css' type='text/css' rel='stylesheet'>
<script src='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js' type='text/javascript'><\/script>
\`\`\`

이게 제일 핵심 코드이다. 세팅이 다 됐으니.. 수정 할 곳 은 그냥 에이젝스 쓸 경로만 수정 하면 될 것 이다.

대충 설명 한다면 maxfiles는 최대 업로드 수 이고 이 것은 알 맞 게 수정 한다.  나머지 파라메터는 tokenid를 지정하면된다. 제이쿼리를 하던지 바닐라자스로 지정 하면된다.

(토큰 아이디는 중요 해서 빠지면 에러 생긴다.)

\`\`\`php
<script>
dropzone.options.mydropzone = {
    maxfiles: 5,
    paramname:"upload",
    params: {mode:'upload',token_id:$('#token_id').val()},
    dictdefaultmessage: "<strong>클릭하거나 파일을 여기로 옮겨주세요.</strong>",
    dictcancelupload: "업로드 취소",
    dictremovefile: "파일삭제",
    url: "<?php echo g5_admin_url."/newwin_img_ajax.php"?>",
    addremovelinks: true,
    success: function (file, res) {
        $(file.previewelement).attr("data-bf_no", res['bf_no']);
        $(file.previewelement).find(".dz-details").click(function(){
            if(res['image']) {
                editor_instance.inserthtml(\`<img src="\${res['path']}" alt="\${file['name']}"/>\`);
            } else {
                editor_instance.inserthtml(\`<a href="\${res['path']}" target="_blank">\${file['name']}</a>\`);
            }
        });
    },
    init: function() {
        let mydropzone = this;
        $.ajax({
            method:"post",
            url: "<?php echo g5_admin_url."/newwin_img_ajax.php"?>",
            data: {mode:'upload_list',token_id:$('#token_id').val()},
            datatype: 'json',
            success: function(data){
                if(data['count']>0) {
                    data['list'].foreach(function(el){
                        const mockfile = {
                            name: el['name'],
                            size: el['size'],
                            type: el['mime'],
                            accepted: true            // required if using 'maxfiles' option
                        };
                        const res = {'path':el['path'], 'bf_no':el['bf_no'], 'image':el['image']};
                        mydropzone.emit("addedfile", mockfile);
                        if(el['thumb']) {
                            mydropzone.emit("thumbnail", mockfile, el['thumb']);
                        } else {
                            mydropzone.emit("thumbnail", mockfile, el['path']);
                        }
                        mydropzone.emit("success", mockfile, res);
                        mydropzone.emit("complete", mockfile);
                        mydropzone.files.push(mockfile);    // add to files array
                    });
                }
            }
        });
  
        this.on("thumbnail", function(file, dataurl) {
            $('.dz-image').last().find('img').attr({width: '100%', height: '100%'});
        })
    },
    removedfile: function (file) {
        const bf_no = $(file.previewelement).data("bf_no");
        $.ajax({
            url: "<?php echo g5_admin_url."/newwin_img_ajax.php"?>",
            method:"post",
            data: {mode:'upload_remove',token_id:$('#token_id').val(),bf_no:bf_no},
            datatype: 'json',
            success: function(data){
                if(data['success']) {
                    $(file.previewelement).remove();
                }
            }
        });
    }
}
<\/script>
\`\`\`



밑에꺼는 ajax.php 소스이다.

여기서는 소스 분석해서 수정 해야 된다. 일단 썸네일부분이 미흡하다. 썸네일 빼고 업로드는 잘 된다.

중요한게 디렉토리 경로 수정 하고 디비 인설트 업데이트 델리트 문을 좀 변경만 하면 된다.

$mode 변수를 따로 만든것이니 직접 포스트로 만들어주면된다.

\`\`\`php
<?php
  
include_once('./_common.php');
  
if($mode == "upload") {
  
    // 디렉토리가 생성
    @mkdir(g5_data_path.'/new_win_image/', g5_dir_permission);
    @chmod(g5_data_path.'/new_win_image/', g5_dir_permission);
  
    $tmp_file  = $_files['upload']['tmp_name'];
    $filesize  = $_files['upload']['size'];
    $filename  = $_files['upload']['name'];
    $filename  = get_safe_filename($filename);
    $dest_file = null;
  
    $success = false;
    $file_path = '';
    $bf_no = 0;
    $is_image = false;
  
    $chars_array = array_merge(range(0,9), range('a','z'), range('a','z'));
  
    if (is_uploaded_file($tmp_file)) {
  
        //=================================================================\\
        // 090714
        // 이미지나 플래시 파일에 악성코드를 심어 업로드 하는 경우를 방지
        // 에러메세지는 출력하지 않는다.
        //-----------------------------------------------------------------
        $timg = @getimagesize($tmp_file);
        // image type
        if (
            preg_match("/\\.({$config['cf_image_extension']})$/i", $filename) ||
            preg_match("/\\.({$config['cf_flash_extension']})$/i", $filename)
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
        $filename = preg_replace("/\\.(php|pht|phtm|htm|cgi|pl|exe|jsp|asp|inc)/i", "$0-x", $filename);
  
        shuffle($chars_array);
        $shuffle = implode('', $chars_array);
  
        // 첨부파일 첨부시 첨부파일명에 공백이 포함되어 있으면 일부 pc에서 보이지 않거나 다운로드 되지 않는 현상이 있습니다. (길상여의 님 090925)
        $upload['file'] = abs(ip2long($_server['remote_addr'])).'_'.substr($shuffle,0,8).'_'.replace_filename($filename);
  
        $dest_file = g5_data_path.'/new_win_image/'.$upload['file'];
  
        // 업로드가 안된다면 에러메세지 출력하고 죽어버립니다.
        $error_code = move_uploaded_file($tmp_file, $dest_file) or die($_files['bf_file']['error']);
  
        // 올라간 파일의 퍼미션을 변경합니다.
        chmod($dest_file, g5_file_permission);
  
        //썸네일 여기서 썸네일 사이즈 는 새로 적용해줘야한다. 
        $thumb_files = thumb($dest_file,$default['de_pthumb_width'],$default['de_pthumb_height']);
  
        $token_id = $_post['token_id'];
  
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
                 bf_datetime = '".g5_time_ymdhis."',
                 bf_token_id = '{$token_id}'";
        sql_query($sql);
        $success = true;
        $file_path = '/data/new_win_image/'.$upload['file'];
        $mime = mime_content_type(g5_data_path.'/new_win_image/'.$upload['file']);
        if(strpos($mime,'image') !== false) {
            $is_image = true;
        }
    }
  
  
    header("content-type: application/json");
    echo json_encode([
        'success'=>$success,
        'bf_no'=>$bf_no,
        'image'=>$is_image,
        'path'=> $file_path
    ]);
  
}
else
if($mode == "upload_list") {
  
    $token_id = strip_tags(clean_xss_attributes($_post['token_id']));
  
    $sql = "
         select bf_source as name, bf_file, bf_no, bf_filesize as size, bf_width as width, bf_height as height
         from {$g5['new_win_image_table']} where bf_token_id = '{$token_id}'
        ";
    $result = sql_query($sql);
  
    $list = [];
    while ($row = sql_fetch_array($result)) {
        $row['path'] = '/data/new_win_image/'.$row['bf_file'];
        $row['image'] = true;
        if(is_file(g5_data_path.'/new_win_image/'.$row['bf_file'])) {
            $row['mime'] = mime_content_type(g5_data_path.'/new_win_image/'.$row['bf_file']);
            if(strpos($row['mime'],'image') === false) {
                $ext = pathinfo($row['name'],pathinfo_extension);
                $row['thumb'] = g5_data_path.'/new_win_image/img/extensions/'.$ext.'.svg';
                $row['image'] = false;
            }
        }
        $list[] = $row;
    }
  
    header("content-type: application/json");
    echo json_encode([
        'count'=>sizeof($list),
        'list'=>$list
    ]);
  
  
}
else
if($mode == "upload_remove") {
  
    $token_id = strip_tags(clean_xss_attributes($_post['token_id']));
    $bf_no = strip_tags(clean_xss_attributes($_post['bf_no']));
  
    $success = false;
    if($bf_no) {
        $row = sql_fetch("
                     select *
                     from {$g5['new_win_image_table']}
                     where bf_token_id = {$token_id}
                     and bf_no = '{$bf_no}'
                    limit 1
                    ");
  
        $delete_file = g5_data_path.'/new_win_image/'.$row['bf_file'];
        if( file_exists($delete_file) ){
            @unlink(g5_data_path.'/new_win_image/'.$row['bf_file']);
        }
  
        sql_query("
            delete from {$g5['new_win_image_table']}
            where bf_token_id = '{$token_id}'
            and bf_no = '{$bf_no}'
        ");
        $success = true;
    }
  
  
    header("content-type: application/json");
    echo json_encode(['success'=>$success]);
}
\`\`\`

위에 보면 썸네일 함수 보면 없던 설정 디비 필드가 보 일 것이다. 저건 직접 만들어주던지 아니면 썸네일 사이즈를 지정해주면 된다. 예를들어서 300, 300 으로 해주면된다.

이제 마지막으로 이미지 파일 삭제 소스이다.

이건 이미지 설정에서 토큰 아이디가 불일치 하거나 없으면 쓰레기값이 되는거니 만들어주면 좋다.

불필요한 이미지를 없애주는 로직이다.

 

admin.memu100.php 에 접근해서 아래 소스를 알맞는 곳에 넣어주면 된다.

 

\`\`\`php
array('100930', '이미지파일 일괄삭제',g5_admin_url.'/newwin_image_delete.php',   'newwin_image_delete', 1),
\`\`\`
newwin_image_delete.php 

\`\`\`php
<?php
  
$sub_menu = '100930';
  
include_once('./_common.php');
  
include_once(g5_theme_path.'/autoload.php');
  
  
  
if ($is_admin != 'super')
  
alert('최고관리자만 접근 가능합니다.', g5_url);
  
  
  
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
  
$path = g5_data_path.'/new_win_image/';
  
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
  
echo '<ul>'.php_eol;
  
  
  
foreach($list as $image) {
  
if (is_file($image['files'])) {
  
$cnt++;
  
@unlink($image['files']);
  
  
  
echo '<li>'.$image['files'].'</li>'.php_eol;
  
  
  
flush();
  
  
  
if ($cnt%10==0)
  
echo php_eol;
  
}
  
}
  
  
  
  
  
foreach($list as $image) {
  
if (is_file($image['thumb'])) {
  
$cnt++;
  
@unlink($image['thumb']);
  
  
  
echo '<li>'.$image['thumb'].'</li>'.php_eol;
  
  
  
flush();
  
  
  
if ($cnt%10==0)
  
echo php_eol;
  
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
  
  
  
  
  
echo '<li>완료됨</li></ul>'.php_eol;
  
echo '<div class="local_desc01 local_desc"><p><strong>이미지 '.$cnt.'건의 삭제 완료됐습니다.</strong>
프로그램의 실행을 끝마치셔도 좋습니다.</p></div>'.php_eol;
  
?>
  
  
  
<?php
  
include_once('./admin.tail.php');
\`\`\`

여기까지 마치겠다. 끝!!

추가적으로 함수가 새로 생겼다. 

\`\`\`php
// 썸네일 간단하게 사용 할때...
  
function thumb($path, $width = 320, $height = 180) {
  
include_once(g5_lib_path."/thumbnail.lib.php");
  
$filename = end(explode("/", $path));
  
$path = dirname($path);
  
return thumbnail($filename, $path, $path, $width, $height, false, true);
  
}
\`\`\`






`,link:"/그누&영카트/dropzone 이미지 업로드 플러그인 만들기"},{title:"kcp 본인인증 안전하지 않는 페이지 뜨는경우",content:`
# {{ $frontmatter.title }}


## 설명 :


아래 링크 참고 하자.

https://sir.kr/qa/453045?stx=kcp+%eb%b3%b8%ec%9d%b8%ec%9d%b8%ec%a6%9d&sst=wr_num&sop=and&unanswered=0&unadopted=0&adopted=0&s_tag=



결국엔 ssl을 달아야한다... 

`,link:"/그누&영카트/kcp 본인인증 안전하지 않는 페이지 뜨는경우"},{title:"mysql 필드명 변경하기",content:`
# {{ $frontmatter.title }}


## 사용 방법 : 

\`\`\`sql
alter table \`media_value_report\` 
    change col1_old col1_new varchar(10),
    change col1_old col1_new varchar(10),
    ...
\`\`\`

예시는 위 소스코드로 변경하면 된다.

 

아래는 직접 실행 했을때~

\`\`\`php
if(sql_query(" select iq_hp,iq_email from {$g5['g5_shop_item_qa_table']} limit 1", false)) {
    sql_query(" alter table \`{$g5['g5_shop_item_qa_table']}\` 
                        change \`iq_hp\` \`is_hp\` tinyint(4) not null default '0', 
                        change \`iq_email\` \`is_email\` tinyint(4) not null default '0'
                        ", true);
}​

\`\`\`


## 참고자료:

https://stackoverflow.com/questions/10846499/alter-multiple-columns-in-a-single-statement`,link:"/그누&영카트/mysql 필드명 변경하기"},{title:"pdf 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

최근에 데이터가 날라가는 일이 있어서 다시 포스트 글을 남겨본다.

 

준비물 : mpdf 8.0, 컴포저 

 

컴포저로 다운 받는다. (센토환경에서 설치 방법은 이전 포스트글에 있어서 참고하면된다.)

 

https://packagist.org/


최신버전으로 그대로 다운 받는다.

 
\`\`\`bash
composer require mpdf/mpdf
\`\`\`

 

이제는 권한 설정한다. (그대로 사용하면 에러생긴다.) 

\`\`\`bash
sudo chmod -r 777 vendor/mpdf/mpdf/tmp
\`\`\`

나는 그누보드 내부에서 사용 하는거니까 

index.php를 만들어서 인크루드를 미리 해놓았다.

\`\`\`php
require_once __dir__ . '/vendor/autoload.php';
\`\`\`

이제 좀더 구체적으로 세팅 해야된다.

경로는 이러하다. /mpdf/mpdf/src/config/ 까지 접근한다.

 

configvariables.php
\`\`\`
'useadobecjk' => true,
\`\`\`

 


fontvariables.php
\`\`\`
'fontdata' => [
  
... 밑으로 내려가서 마지막쯤에..
"nanumgothic" => [
                    'r' => "nanumgothic.ttf",
                    'b' => "nanumgothicbold.ttf",
                ],
  
  
  
'bmponly' => [
                "nanumgothic",
  
  
  
'sans_fonts' => ['nanumgothic',
  
  
  
  
  
'serif_fonts' => ['nanumgothic',
 
\`\`\`




 

위치는 그냥 놓고 싶은 위치에 놓으면 된다. 저 배열 마다 나눔고딕을 넣어주면된다.

그리고나서 실제로 나눔고딕 파일을 넣어줘야한다.

 

경로는 이러하다. /mpdf/mpdf/ttfonts/ 까지 접근한다.

 

[나눔 고딕 다운 받기](https://fontmeme.com/ktype/nanum-gothic-font/	) 


 

위에꺼 그대로 링크 이동해서 다운 받으면된다. 다른곳에는 에러가 나서.. (명칭이 좀 다르게 해놓으면 에러난다.)

압축을 풀면 전부다 넣어주면된다. 볼드체,익스트라,라이트 네개 전부다!!!

 

거의 다 됐다! 

사용법은 아래 처럼 하면 된다.

\`\`\`php
include_once pdf_plugin_path; << 이건 상수로 만들어놓은거다 알아서 응용한다.
  
$mpdf = new \\mpdf\\mpdf([
    'mode' => 'utf-8',
    'format' => 'a4',
    'margin_left' => 5,
    'margin_right' => 5,
    'margin_top' => 5,
    'margin_bottom' => 5,
    'margin_header' => 0,
    'margin_footer' => 0,
]);
$mpdf->settitle('타이틀');
$html = file_get_contents('경로/template.php');
$mpdf->addpage();
$mpdf->writehtml($html);
  
  
$filename = "파일이름.pdf";
$mpdf->output($filename);
\`\`\`

위에꺼 처럼 사용하면된다 별거 없다

일단 설명 하자면 

new \\mpdf\\mpdf 생성자 옵션을 잘 해주면된다. 위에 있는거 대로 하면 된다.

 

$mpdf->writehtml($html);  writehtml 메서드로 템플릿을 임포트하는 부분이다.

 

 

$mpdf->output($filename); 이게 중요한거다 그냥 디스플레이용으로 쓴다면 filename 을 빼면된다.

$mpdf->output 이대로만 쓰면 되고 만약에 다운로드까지 쓴다면

 

$mpdf->output($filename,'d'); 두번째 인자값에 d를 넣어주면 된다.

 

여기까지 사용법을 마치겠다.

 

## 맺음말 : 

 

참고 자료를 보면서 따라 했다. 여기서 좀더 구체적으로 풀이해서 설명하였다.

하지만 템플릿 같은건 직접 만들었는데 이건 php,mysql, html inline tag에 css 로 꾸민거다.

당연히 style 태그를 넣어도 된다. 근데 점점 길어지니까 인라인 태그로... 짧게 편집 하려고 애를 썼다.

견적서를 만들려고 시도를 했다가 사람이 할짓이 아니다.. 쪼금만 틀어져도 a4 사이즈에 넘쳐날수 있고 줄어들수있고.. 패딩 마진 으로 겨우야 맞췄는데 

테이블 태그로만 해서 겨우야 하나 만들었다~ 사이즈도 적당하고.. 쌩 노가다 해야된다.. 

 

그리고 마지막 할말은 자바스크립트로도 가능하다 자료가 다양한데~ 나는 게시판 글 읽기 페이지에서 pdf 를 뷰어가 나오면서 그대로 볼 수 있는 기능을 만들어야한다.

자스로 처리하면 그렇게 쌩 노가다하면서 할 필요도 없다 해당 영역을 이미지로 캡쳐해서 pdf로 다운 받는 로직이니까 금방 된다.

내껀 의뢰 때문에.. 어쩔수없이 해야된다..

`,link:"/그누&영카트/pdf 만들기"},{title:"php, nginx 등 그누보드 설치",content:`
# {{ $frontmatter.title }}


## 설명 :



https://casper.woosung.vercel.app/php7-4-install-and-gnuboard-5-4-install/




`,link:"/그누&영카트/php, nginx 등 그누보드 설치"},{title:"php8 에서 impload 사용할때 문제",content:`
# {{ $frontmatter.title }}

impload 함수를 사용할 때 주의 해야 되는것은 배열 형태인지 확인 해야된다.

만약에 인풋에 배열 네임으로 적용해서 써야된다면  
\`\`\`html
<input name="test[]" />
\`\`\`
이렇게 해야된다.


그리고 백단으로 넘길때는 

update 나 insert 쿼리 문 써서 넘길적에 아래 처럼 하면된다.
 
\`\`\`php
$wr_1 = isset($_request['wr_1']) && is_array($_request['wr_1']) ? $_request['wr_1'] : [];
$wr_1 = implode('|', $wr_1);

$sql = " update {$write_table}
set   wr_1 = '{$wr_1}'
where wr_id = '{$wr_id}' ";
sql_query($sql);
\`\`\`

위 소스코드를 설명하자면 in_array나 isset으로 설정된 변수인지 검사 해야된다. 

어쨌든 php8이 제일 까탈스러워서.. 위 방법을 해야된다.

 
불러올때는 아래 처럼 하면된다.

\`\`\`php
<?php $array = explode('|', $write['wr_1']); ?>
<input type="checkbox" name="wr_1[]" value="신규" <?php if(in_array('신규', $array)) echo 'checked'; ?>>
 \`\`\`
 
이러면 문제 없이 작동 될 것이다. 

`,link:"/그누&영카트/php8에서 impload 사용할때"},{title:"rss 페이지 만들기",content:`
# {{ $frontmatter.title }}




## 설명 :


최근에 데이터가 날라가서 다시 포스팅 글 남겨본다.  

그누보드에 보면 rss 페이지가 게시판에 있긴하다.. 근데 게시판에서만 동작 하니까~ 다시 만들어줘야한다.

이건 게시판 뿐만 아니라 모든 페이지에서 활성화 될 수 있는 페이지다(?)


 

아래 소스코드를 보면서 설명한다.

여기서 보면 쿼리가 이런게 있다.

\`\`\`sql
wr_is_comment = 0 and wr_option not like '%secret%'
\`\`\`


옵션이 시크릿은 제외 시킨다는 뜻이다

그리고 bo_read_level 은 읽기 권한 옵션인데 1이상이면 낮은거니까 낮은순서로 오픈해서 보여준다는뜻이다.

 

밑에 보면 컨텐츠 테이블도 보인다 거기는 내가 일부러 만들어서 넣었다~ 

아무튼 이부분 그대로 쓰면 된다.


\`\`\`php
<?php
include_once "./_common.php";
  
header("content-type: text/xml;charset=utf-8");
header("cache-control: no-cache, must-revalidate");
header("pragma: no-cache");
  
$limit = 100;
  
$search = " where (1) ";
$search .= " and wr_is_comment = 0 and wr_option not like '%secret%'";
$selectboard = " select bo_table,bo_subject from ".$g5['board_table']." where bo_read_level = 1 ";
$queryboard = sql_query($selectboard);
  
while($rowboard = sql_fetch_array($queryboard)){
    $resultselect[] = "( select wr_id,wr_subject,wr_content,wr_datetime,wr_name, '".$rowboard['bo_table']."' as bo_table from ".$g5['write_prefix'].$rowboard['bo_table'].$search." )"; }
$resultquery = implode(" union all ", $resultselect);
  
  
$resultquery .= " order by wr_datetime desc limit 0 , $limit ";
$query = sql_query($resultquery);
  
$data = [];
while($row = sql_fetch_array($query)){
    $content = strip_tags($row['wr_content']);
    $content = str_replace("&nbsp;"," ",$content);
    $data[] = $row;
}
  
// 허용된 co_id
$allowed = ["about"];
$co_id = implode("','", $allowed);
$contentquery = " select co_id,co_subject,co_content from ".$g5['content_table']." where co_id in('".$co_id."') order by co_id desc ";
$contentrr = sql_query($contentquery);
$content_arr = [];
for ($i=0;$cnrow = sql_fetch_array($contentrr);$i++) {
    $content_arr[$i]['co_id'] = $cnrow['co_id'];
    $content_arr[$i]['co_subject'] = $cnrow['co_subject'];
    $content_arr[$i]['co_content'] = $cnrow['co_content'];
    $content_arr[$i]['co_name'] = '비버';
    $content_arr[$i]['co_datetime'] = g5_time_ymdhis;
}
  
$buff = '';
$buff .= "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>".php_eol;
$buff .= '<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">'.php_eol;
$buff .= '<channel>'.php_eol;
$buff .= '<title>'.specialchars_replace($config['cf_title']).'</title>'.php_eol;
$buff .= '<link>'.g5_url.'</link>'.php_eol;
$buff .= '<description><![cdata['.$config['cf_1'].']]></description>'.php_eol;
$buff .= '<language>ko</language>'.php_eol;
  
// 내용관리 데이터 출력
foreach ($content_arr as $item) {
    $buff .= "<item>".php_eol;
    $buff .= "<category><![cdata[".$item['co_id']."]]></category>".php_eol;
    $buff .= "<title><![cdata[".$item['co_subject']."]]></title>".php_eol;
    $buff .= "<link>".specialchars_replace(get_pretty_url('content',$item['co_id']))."</link>".php_eol;
    $buff .= "<description><![cdata[".$file.conv_content($item['co_content'], $html)."]]></description>".php_eol;
    //$buff .= "<description><![cdata[".mb_strimwidth($item['co_content'],0,400,'..','utf-8')."]]></description>".php_eol;
   // $buff .= "<dc:creator>".specialchars_replace($item['co_name'])."</dc:creator>".php_eol;
    $buff .= "<pubdate>".date("r", strtotime($item['co_datetime']))."</pubdate>".php_eol;
    $buff .= "</item>".php_eol;
}
  
// 게시판 데이터 출력
foreach ($data as $item) {
    $buff .= "<item>".php_eol;
    $buff .= "<category><![cdata[".$item['bo_table']."]]></category>".php_eol;
    $buff .= "<title><![cdata[".$item['bo_table']." - ".$item['wr_subject']."]]></title>".php_eol;
    $buff .= "<link>".get_pretty_url($item['bo_table'],$item['wr_id'])."</link>".php_eol;
    //$buff .= "<description><![cdata[".mb_strimwidth($item['wr_content'],0,400,'..','utf-8')."]]></description>".php_eol;
    $buff .= "<description><![cdata[".$file.conv_content($item['wr_content'], $html)."]]></description>".php_eol;
   // $buff .= "<dc:creator>".specialchars_replace($item['wr_name'])."</dc:creator>".php_eol;
    $buff .= "<pubdate>".date("r", strtotime($item['wr_datetime']))."</pubdate>".php_eol;
    $buff .= "</item>".php_eol;
}
  
$buff .= "</channel>".php_eol;
$buff .= "</rss>";
  
echo $buff;
\`\`\`

금방 쉽게 만든 소스코드이다 바로 이대로 쓰면된다.

 

 

## 맺음말 :

만약에 다시 만들고 싶다면 티스토리에보면 rss 형식이 있다 네이버도 있어서 네이버 형식도 참고해본다.

이대로 쓰면 아무런 문제 없다.`,link:"/그누&영카트/rss 페이지 만들기"},{title:"구글 sns 로그인 달기",content:`
# {{ $frontmatter.title }}


## 설명 :




https://cutebabypig15.tistory.com/55
	


여기 레퍼런스 참고하면된다.

네이버랑 카카오도 비슷한데 구글이 좀더 조건 까다롭다..

결국엔 2차 도메인까지 달아놓은 상태에서 해야된다.

구글 처음에 생성할때 구글 + api 저거 사용하기 누르면된다.

아래 식스샵 자료가 최신자료라서 정확하다.

https://help.sixshop.com/learn-sixshop/store-manager/add-ons/social-login/googlelogin
	


https://gnustudy.com/bbs/board.php?bo_table=gnu_tip&wr_id=65
	
`,link:"/그누&영카트/구글 sns 로그인 달기"},{title:"구글 sns 연결 문제",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자 

https://velog.io/@kong7300/aws%eb%a5%bc-%ed%86%b5%ed%95%9c-%ea%b5%ac%ea%b8%80-%ec%86%8c%ec%85%9c%eb%a1%9c%ea%b7%b8%ec%9d%b8-%ec%a7%84%ed%96%89%ec%8b%9c-400-error


구글달때 ssl 연결 후에 달아야 문제 없다는뜻이다..


pg사 연동후에 \b구글 다시 한번 체크하면됨 









`,link:"/그누&영카트/구글 sns 연결 문제"},{title:"그누4 ckeditor 4 유투브 안나오는 현상",content:`
# {{ $frontmatter.title }}



## 원인 :
 
ckeditor 4 유투브 안나온 현상.. 

처음에 유투브를 넣을때는 정상적으로 작동되는데 저장 후에 수정 페이지로 접근 하니까 나오지 않는다.

그누보드 최신에서 ckeditor5 에서는 아주 정상적으로 작동 된다.




## 해결 방법 :

ckeditor 4 설정에서 추가하면 된다. 

\`\`\`js
config.allowedcontent = true;
\`\`\`







`,link:"/그누&영카트/그누4 ckeditor 4 유투브 안나오는 현상"},{title:"그누보드 5 패치 파일만 다운받는 방법",content:`
# {{ $frontmatter.title }}


커맨드 창을 열기!!

\`\`\`bash
cd /해당경로
curl -lo "https://github.com/gnuboard/gnuboard5/releases/download/v5.4.15/gnuboard5.4.15.patch.zip"
&& unzip gnuboard5.4.15.patch.zip
\`\`\`

 
위에 버전을 확인하면 릴리즈를 확인해야한다.

https://github.com/gnuboard/gnuboard5/releases
	

 

## 결론 :

sir에서 패치 쉽게 하는 기능을 추가 했으면 좋겠다~ 매번 다운 받아서 하기엔 귀찮다.. 

파이썬으로 만들어봐야하나.. 크롤링해서 다운 받기 이런 귀중한 기능이 필요하다..


https://stackoverflow.com/questions/24987542/is-there-a-link-to-github-for-downloading-a-file-in-the-latest-release-of-a-repo
	


## 최근에 새로 플러그인이 생겼다.

https://sir.kr/g5_plugin/10307?page=2

`,link:"/그누&영카트/그누보드 5 패치만 따로 다운 받기"},{title:"그누보드 5.4 메뉴 active 주기",content:`
# {{ $frontmatter.title }}


그누보드 5.4 에서는 짧은 주소가 적용 되면 active 방식이 백단에서 하기가 좀 어렵다..

결론은 자바스크립트로 해결 해야된다.

\`\`\`js
$('#gnb_1dul .gnb_1dli a').each(function (ele,val) {
    if($(val).attr('href') === decodeuricomponent(window.location.href)) {
        $(this).parent().addclass('active');
    }
});
\`\`\`



디코더 유알엘 컴포넌트 함수를 적용하는 이유는 브라우저 주소에서는 인코딩이 된상태로 나와서 액티브 클래스를 적용이 안되는 부분이 있다 

 

혹시나 짧은 주소 적용 안하고 할때는 아래처럼 백단에서 하면 된다.

\`\`\`php
<ul id="gnb_1dul">
<?php
$sql = " select *
    from {$g5['menu_table']}
    where me_use = '1'
      and length(me_code) = '2'
    order by me_order, me_id ";
$result = sql_query($sql, false);
$gnb_zindex = 999; // gnb_1dli z-index 값 설정용
$menu_datas = array();
for ($i=0; $row=sql_fetch_array($result); $i++) {
    $menu_datas[$i] = $row;

    $sql2 = " select *
        from {$g5['menu_table']}
        where me_use = '1'
          and length(me_code) = '4'
          and substring(me_code, 1, 2) = '{$row['me_code']}'
        order by me_order, me_id ";
    $result2 = sql_query($sql2);
    for ($k=0; $row2=sql_fetch_array($result2); $k++) {
        $menu_datas[$i]['sub'][$k] = $row2;
    }

    if($i == 2) {
        $sql3 = " select it_id from {$g5['g5_shop_item_table']} where it_id like '%{$it_id}'";
        $result3 = sql_query($sql3);
        for ($j=0; $row3=sql_fetch_array($result3); $j++) {
            $menu_datas[$i]['shop'][$j] = $row3;
        }
    }
}

$i = 0;
foreach($menu_datas as $key=> $row){
    if(empty($row)) continue;
    $active = '';
    if($it_id) {
        if($row['shop'][0]['it_id'] == $it_id)  {
            $active = ' active';
        }
    }else
    if($bo_table) {
        if(strpos($row['me_link'], 'bo_table='.$bo_table) !== false) {
            $active = ' active';
        }
    } else
    if(strpos($row['me_link'], $_server['php_self']) !== false) {
        $active = ' active';
    }
    ?>
<li class="gnb_1dli <?php echo $active; ?> ">
    <a href="<?php echo $row['me_link']; ?>" target="_<?php echo $row['me_target']; ?>" class="gnb_1da"><?php echo $row['me_name'] ?></a>
    <?php
    $k = 0;
    foreach( (array) $row['sub'] as $row2 ){

        if( empty($row2) ) continue;

        if($k == 0)
            echo '<span class="bg">하위분류</span><ul class="gnb_2dul">'.php_eol;
        ?>
        <li class="gnb_2dli"><a href="<?php echo $row2['me_link']; ?>" target="_<?php echo $row2['me_target']; ?>" class="gnb_2da"><?php echo $row2['me_name'] ?></a></li>
        <?php
        $k++;
    }   //end foreach $row2

    if($k > 0)
        echo '</ul>'.php_eol;
    ?>
    </li>
    <?php
    $i++;
}   //end foreach $row

if ($i == 0) {  ?>
    <li class="gnb_empty">메뉴 준비 중입니다.<?php if ($is_admin) { ?> <a href="<?php echo g5_admin_url; ?>/menu_list.php">관리자모드 &gt; 환경설정 &gt; 메뉴설정</a>에서 설정하실 수 있습니다.<?php } ?></li>
<?php } ?>
</ul>
\`\`\`

`,link:"/그누&영카트/그누보드 5.4 메뉴 active 주기"},{title:"그누보드 sns 로그인 달기",content:`
# {{ $frontmatter.title }}


## 설명 :


필수준비물 각각 시리얼넘버 그누보드 sns 탭누르면 이동된다.

여기서 네이버는 기본적으로 쉽고 

카카오는 아래 이미지를 보고 설정하면된다. 

oauth 설정 하면된다. 



활성화 설정 on 설정해주고 

리다이렉트 주소를 넣어주면 된다. 

<img src="./img/1.png" /> 


페이스북은 앱을 만든후에 왼쪽에 메뉴 보면 아래 그림처럼 페이지 이동한다.

<img src="./img/2.png" /> 


클라이언트 oauth 설정에 리다이렉트 주소를 등록만하면된다. 

<img src="./img/3.png" /> 

나머지는 응용하면 된다.








 `,link:"/그누&영카트/그누보드 sns 로그인 달기"},{title:"그누보드 게시판 이미지 출력에서 base64 로 인코딩이 제대로 출력 되지 않는 경우",content:`
# {{ $frontmatter.title }}


## 원인 :
 
그누보드로 블로그 제작 중인데 이미지가 올려도 빈화면만 나와서 무슨 문제 있는가 하고 체크 해봤는데

이미지는 디비에 등록이 되는데 글 읽기 페이지 에선 나타나지 않아서 분석 해보았다

 

## 해결 방법 :

냑에서 자료를 찾아본 결과 질문 답변에 어떤 분이 질문 올리고 자문 자답 한 글을 봤다 

거기서 힌트를 찾을 수 있었다.

우선 /bbs/view.php 로 접근한다.거기서 120 라인에보면 소스가 보인다.

 
\`\`\`php
$view['content'] = conv_content($view['wr_content'], $html);
\`\`\`



여기보면 conv_content 로 접근하면 된다.

아래 소스 를 보고 해결 하면된다.

\`\`\`php
// common.lib.php
// 580라인 
function html_purifier($html)
{
    $f = file(g5_plugin_path.'/htmlpurifier/safeiframe.txt');
    $domains = array();
    foreach($f as $domain){
        // 첫행이 # 이면 주석 처리
        if (!preg_match("/^#/", $domain)) {
            $domain = trim($domain);
            if ($domain)
                array_push($domains, $domain);
        }
    }
    // 내 도메인도 추가
    array_push($domains, $_server['http_host'].'/');
    $safeiframe = implode('|', $domains);
  
    include_once(g5_plugin_path.'/htmlpurifier/htmlpurifier.standalone.php');
    include_once(g5_plugin_path.'/htmlpurifier/extend.video.php');
    $config = htmlpurifier_config::createdefault();
    // data/cache 디렉토리에 css, html, uri 디렉토리 등을 만든다.
    $config->set('cache.serializerpath', g5_data_path.'/cache');
    $config->set('html.safeembed', false);
    $config->set('html.safeobject', false);
    $config->set('output.flashcompat', false);
    $config->set('html.safeiframe', true);
    if( (function_exists('check_html_link_nofollow') && check_html_link_nofollow('html_purifier')) ){
        $config->set('html.nofollow', true);    // rel=nofollow 으로 스팸유입을 줄임
    }
    $config->set('uri.safeiframeregexp','%^(https?:)?//('.$safeiframe.')%');
    $config->set('attr.allowedframetargets', array('_blank'));
    $config->set('uri.allowedschemes', array('http' => true, 'https' => true, 'data' => true));
    //유튜브, 비메오 전체화면 가능하게 하기
    $config->set('filter.custom', array(new htmlpurifier_filter_iframevideo()));
    $purifier = new htmlpurifier($config);
    return run_replace('html_purifier_result', $purifier->purify($html), $purifier, $html);
}
\`\`\`



위에 소스 추가 된게 무엇인가 하면
  
\`\`\`php
$config->set('attr.allowedframetargets', array('_blank'));  여기 라인 아랫줄에 추가 하면된다.
\`\`\`

\`\`\`php
$config->set('attr.allowedframetargets', array('_blank'));
$config->set('uri.allowedschemes', array('http' => true, 'https' => true, 'data' => true)); #추가
\`\`\`

`,link:"/그누&영카트/그누보드 게시판 이미지 출력에서 base64 로 인코딩이 제대로 출력 되지 않는 경우"},{title:"그누보드 메뉴 만들기",content:`
# {{ $frontmatter.title }}


소스 보면서 적용하면 된다. 참고용이다.


\`\`\`php
<divid="header">
<divid="wrap">
<divid="logo"><ahref="<?php echo g5_url?>"><imgsrc="<?php echo g5_theme_img_url?>/logo.png"width="150"alt="<?php echo $config['cf_title'];?>"></a></div>
<divid="navi">
<ul>
<?php
$sql="select*
from{$g5['menu_table']}
whereme_use='1'
andlength(me_code)='2'
orderbyme_order,me_id";
$result=sql_query($sql,false);
$gnb_zindex=999;
$menu_datas=array();
  
for($i=0;$row=sql_fetch_array($result);$i++){
    $menu_datas[$i]=$row;
  
    $sql2="select*
    from{$g5['menu_table']}
    whereme_use='1'
    andlength(me_code)='4'
    andsubstring(me_code,1,2)='{$row['me_code']}'
    orderbyme_order,me_id";
    $result2=sql_query($sql2);
    for($k=0;$row2=sql_fetch_array($result2);$k++){
        $menu_datas[$i]['sub'][$k]=$row2;
    }
}
  
  
$i=0;
foreach($menu_datas as $row){
if(empty($row))continue;
$active='';
if($co_id){
if(strpos($row['me_link'],'co_id='.$co_id)!==false){
$active='on';
}
}else
if($bo_table){
if(strpos($row['me_link'],'bo_table='.$bo_table)!==false){
$active.="on";
}
}else{
if(strpos($row['me_link'],$_server['php_self'])!==false){
$active.="on";
}
}
  
foreach($row['sub']as$j=>$item){
if($co_id){
if(strpos($item['me_link'],'co_id='.$co_id)!==false){
$active='on';
}
}else
if($bo_table){
if(strpos($item['me_link'],'bo_table='.$bo_table)!==false){
$active.="on";
}
}else{
if(strpos($item['me_link'],$_server['php_self'])!==false){
$active.="on";
}
}
}
?>
<liclass="<?=$active?>">
<ahref="<?php echo $row['me_link'];?>"target="_<?php echo $row['me_target'];?>"><?php echo $row['me_name']?></a>
<?php
$k=0;
foreach((array)$row['sub']as$row2){
  
if(empty($row2))continue;
  
if($k==0)
echo'<ulclass="submenu">'.php_eol;
?>
<li><ahref="<?php echo $row2['me_link'];?>"target="_<?php echo $row2['me_target'];?>"><?php echo $row2['me_name']?></a></li>
<?php
$k++;
}//endforeach$row2
  
if($k>0)
echo'</ul>'.php_eol;
?>
</li>
<?php
$i++;
}//endforeach$row
  
if($i==0){?>
<liclass="gnb_empty">메뉴준비중입니다.
관리자모드&gt;환경설정&gt;메뉴설정에서설정하실수있습니다.</li>
<?php}?>
</ul>
</div>
</div>
</div>
  
  
<script>
$(function(){
$('#navi>ul>li').on('mouseenterkeyup',function(){
$(this).addclass("active").find("ul").stop(true,true).slidedown("fast");
});
  
$('#navi>ul>li>a').on('mouseenterkeyup',function(){
$(this).find("ul").stop(true,true).slidedown("fast");
});
  
$('#navi>ul>li').on('mouseleave',function(){
$(this).removeclass("active").find("ul").stop(true,true).slideup("fast");
});
});
<\/script>
  
  
  
<?php if(!defined("_index_")){
  
$bg="";
if($co_id=="company"||$co_id=="location"){
$bg.=g5_theme_img_url."/company_bg.png";
}elseif($co_id=="summary"||$co_id=="special"||$co_id=="sample"||$co_id=="metal"){
$bg.=g5_theme_img_url."/tech_bg.png";
}elseif($bo_table){
$bg.=g5_theme_img_url."/qna_bg.png";
}elseif($co_id=="contact"){
$bg.=g5_theme_img_url."/cs_bg.png";
}else{
$bg.=g5_theme_img_url."/qna_bg.png";
}
?>
  
<divclass="sub_page">
<divid="sub_visual"style="background:url('<?=$bg?>');background-size:cover;background-position:50%0;background-repeat:no-repeat;width:100%;height:200px;position:relative;">
<divid="wrap">
<h1><?php echo get_head_title($g5['title']);?></h1>
</div>
</div>
  
<?php if($_server['script_name']!='/bbs/login.php'){?>
<divid="sub_container">
<divid="wrap">
<ulid="snb">
<li><ahref="<?php echo g5_url?>"id="snb1"><iclass="fafa-home"></i></a></li>
<liclass="snb_bread">
<?php
if($co_id){
$whereinfo=$co_id;
$codelength=4;
}
if($co_id){
$whereinfo=$co_id;
$codelength=4;
}
if($bo_table){
$whereinfo=$bo_table;
$codelength=4;
}
if($gr_id&&$bo_table==""){
$whereinfo=$gr_id;
$codelength=2;
}
$titledata=sql_fetch("select*from{$g5['menu_table']}whereme_code=(selectsubstring(me_code,1,2)from{$g5['menu_table']}whereme_use='1'andme_linklike'%{$whereinfo}%'andlength(me_code)={$codelength})andlength(me_code)=2orderbyme_order,me_id");
?>
<small><?php echo get_text($titledata['me_name']);?><iclass="fafa-sort-desc"></i></small>
<ulid="snb_submenu">
<?php
$sql="select*from{$g5['menu_table']}whereme_use='1'andlength(me_code)='2'orderbyme_order,me_id";
$result=sql_query($sql,false);
for($i=0;$row=sql_fetch_array($result);$i++){?>
<li><ahref="<?php echo $row['me_link'];?>"target="_<?php echo $row['me_target'];?>"><?php echo $row['me_name']?></a></li>
<?php}?>
</ul>
</li>
<liclass="snb_bread">
<smallclass="active"><?php echo get_head_title($g5['title']);?><iclass="fafa-sort-desc"></i></small>
<?php
$result=sql_query("select*from{$g5['menu_table']}whereme_code=(selectsubstring(me_code,1,2)from{$g5['menu_table']}whereme_use='1'andme_linklike'%{$whereinfo}%'andlength(me_code)={$codelength})orderbyme_order,me_id",false);
for($i=0;$row=sql_fetch_array($result);$i++){
$result2=sql_query("select*from{$g5['menu_table']}whereme_use='1'andlength(me_code)='4'andsubstring(me_code,1,2)='{$row['me_code']}'orderbyme_order,me_id");
  
for($k=0;$row2=sql_fetch_array($result2);$k++){
if($k==0){
echo'<ulid="snb_submenu">'.php_eol;
}
?>
<li><ahref="<?php echo $row2['me_link'];?>"target="_<?php echo $row2['me_target'];?>"><?php echo $row2['me_name']?></a></li>
<?php
}
if($k>0){
echo'</div>'.php_eol;
}
if($k==0){?>
<ul><liclass="gnb_empty">메뉴준비중입니다.</li></ul>
<?php}?>
<?php}?>
</li>
</ul>
</div>
</div>
</div>
<?php}}?>
\`\`\`

`,link:"/그누&영카트/그누보드 메뉴 만들기"},{title:"그누보드 모바일 다이렉트 변환",content:`
# {{ $frontmatter.title }}


기존 그누보드에서는 주소에 ?device=pc or mobile 로해서 접근하면 페이지 변환 된다.

이 방법에서는 겟으로 세션이 등록되면 바뀌게 되는과정인데~ 이 과정을 없애고 바로 페이지 변경되게 수정 하면된다.

 

common.php // 741번째 라인 확인하면된다.


\`\`\`php
if (g5_use_mobile && $set_device) {
    if (isset($_request['device']) && $_request['device']=='pc')
        $is_mobile = false;
    else if (isset($_request['device']) && $_request['device']=='mobile')
        $is_mobile = true;
//    else if (isset($_session['ss_is_mobile']))
//        $is_mobile = $_session['ss_is_mobile'];
    if (is_mobile())
        $is_mobile = true;
} else {
    $set_device = false;
}
//$_session['ss_is_mobile'] = $is_mobile;
define('g5_is_mobile', $is_mobile);
define('g5_device_button_display', $set_device);
if (g5_is_mobile) {
    $g5['mobile_path'] = g5_path.'/'.g5_mobile_dir;
}
\`\`\`

위에보면 추석 처리 된거 보면서 그부분만 없애던지 주석처리 하면 된다. 그러면 바로 이동된다.




`,link:"/그누&영카트/그누보드 모바일 다이렉트 변환"},{title:"그누보드 모바일웹에서 쇼핑몰만 사용하기",content:`
# {{ $frontmatter.title }}


## 설명 :

그누보드 5.4 위주로 설명한다. (최신버전도 가능하다.)

일단 theme.config.php에 접근한다.


모바일 넣어주고 

\`\`\`php
if(! defined('g5_community_use')) define('g5_community_use', false);
\`\`\`
true에서 false로 불린값을 변경하자..

이렇게 설정해주면 커뮤니티는 사용불가이고 모바일 위주로 영카트만 가능하다.

`,link:"/그누&영카트/그누보드 모바일웹에서 쇼핑몰만 사용하기"},{title:"그누보드 무제한 배너 출력하기",content:`
# {{ $frontmatter.title }}


## 설명 :

과정은 이렇다~ 일정한 날짜에 맞춰서 출력되는데 시간 지나면 중단된다.

단 무제한 출력 허용하면 그것만 계속 나오고 나머진 중단된다. 

일단 배너에 필드 값 1개를 추가 한다.

\`\`\`
\`bn_unlimited\` tinyint not null default '0' comment '무제한출력',
\`\`\`

이걸로 쓰면되고

그리고 어드민은 알아서 변경하면된다 라디오 버튼 추가해서 0은 사용안함 1은 사용함으로 쓰면된다.

\`\`\`html
<tr>
    <th scope="row"><label for="bn_new_win">무제한출력</label></th>
    <td>
        <?php echo help("무제한 출력 가능합니다."); ?>
        <label for="bn_unlimited1">출력안함</label>
        <input type="radio" value="0" id="bn_unlimited1" name="bn_unlimited" <?php echo get_checked($bn['bn_unlimited'], 0); ?>>
        <label for="bn_unlimited2">출력함</label>
        <input type="radio" value="1" id="bn_unlimited2" name="bn_unlimited" <?php echo get_checked($bn['bn_unlimited'], 1); ?>>
    </td>
</tr>
\`\`\`

이러고나서 함수는 이걸 쓰면된다. 

\`\`\`php
/**
 * 배너 출력하기
 * 배너 일정시간 지나면 중단되고
 * 무제한 돌린건 무제한 나오게~~
 * @param null $skin
 */
function display_banners($skin=null)
{
    global $g5;
 
    if(!$skin) die("배너 스킨을 입력해주세요.");
 
    $skin_path = g5_theme_path.'/'.g5_skin_dir.'/'.banner.'/'.$skin;
 
    if(file_exists($skin_path)) {
        // 배너 출력
        $sql = " select * from {$g5['factory_banner_table']} order by bn_order, bn_id desc
                 ";
        $result = sql_query($sql);
 
        $dataarr = [];
        for($i=0;$row=sql_fetch_array($result);$i++) {
            if($row['bn_unlimited'] == 1) {
                $dataarr[$i] = $row;
            }else {
                $sql2 = " select * from {$g5['factory_banner_table']}
                             where '".g5_time_ymdhis."'
                            between bn_begin_time and bn_end_time
                            order by bn_order, bn_id desc
                 ";
                $rs = sql_query($sql2);
                while ($rows=sql_fetch_array($rs)) {
                    $dataarr = array_merge($dataarr,[$rows]);
                }
            }
        }
 
        include_once $skin_path;
    } else {
        echo '<p>'.str_replace(g5_path.'/', '', $skin_path).' 경로에 스킨 파일이 존재하지 않습니다.</p>';
    }
}
\`\`\`



사용법은 아래 소스를 하면됨 

\`\`\`php
<section class="slide_area mix_box">
    <?=display_banners('banner1.skin.php')?>
</section>
\`\`\`

당연히 스킨 위치는 /skin/banner/banner1.skin.php 로하면된다.

그리고  배너 스킨 내부는 이거 참고하면된다.

\`\`\`php
<?php
if (!defined("_gnuboard_")) exit; // 개별 페이지 접근 불가
add_stylesheet('<link rel="stylesheet" href="'.g5_theme_skin_url.'/'.banner.'/style.css">', 0);
 
/**
 * 여기서 썸네일 사이즈
 * 조절 하기
 */
$width = 1890;
$height = 340;
 
echo '<div class="swiper-container">'.php_eol;
for ($i=0; $i<count($dataarr); $i++) {
    $k = $i+1;
 
    if ($i==0)
        echo '<div class="swiper-wrapper">'.php_eol;
 
    // 테두리 옵션
    $bn_border  = ($dataarr[$i]['bn_border']) ? ' slide_bn_border' : '';
 
    // 새창 옵션
    $bn_new_win = ($dataarr[$i]['bn_open_use']) ? ' target="_blank"' : '';
 
    $bimg = g5_data_path.'/'.banner.'/'.$dataarr[$i]['bn_id'];
    if (file_exists($bimg))
    {
        $banner = '';
        $thumb = get_banner_thumbnail($dataarr[$i]['bn_id'], $width, $height,'alt="'.get_text($dataarr[$i]['bn_alt']).'" class="'.$bn_border.'"');
        $size = getimagesize($bimg);
        echo '<div class="swiper-slide">'.php_eol;
        if (filter_var($dataarr[$i]['bn_url'] , filter_validate_url)) {
            $banner .= '<a href="'.$dataarr[$i]['bn_url'].'"'.$bn_new_win.'>'.php_eol;
        }
        echo $banner.$thumb;
 
        if($banner)
            echo '</a>'.php_eol;
        echo '</div>'.php_eol;
    }
}
 
if($i == 0) echo "<div class='empty_banner'>이미지를 등록해주세요. {$width}x{$height}</div>";
 
if ($i>0) echo '</div>'.php_eol;
 
echo " <div class=\\"swiper-pagination\\"></div>
        <div class=\\"swiper-prev\\"></div>
        <div class=\\"swiper-next\\"></div>".php_eol;
echo '</div>'.php_eol;
?>
<script src="https://unpkg.com/swiper@6.3.2/swiper-bundle.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.0/gsap.min.js"><\/script>
<script>
    var myswiper = new swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        loopadditionalslides: 1,
        autoplay: {
            delay:3000,
            disabldoninteraction: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextel: '.swiper-next',
            prevel: '.swiper-prev',
        }
    });
<\/script>
\`\`\`


\`\`\`css
@charset "utf-8";
 
 
/* 스와이퍼 슬라이드 */
.slide_area {width: 100%;height: 300px;overflow: hidden;}
.swiper-container {background-color: #fff;width: 100%;height: 300px;}
.swiper-container .swiper-slide {position: relative;width: 100%;height: 300px}
.swiper-container .swiper-slide a {display: block;}
.swiper-container .swiper-slide img {width: 100%;height: 100%;object-fit: cover;}
.swiper-pagination {bottom: 10px !important;}
.swiper-pagination-bullet-active {background: #ffd140 !important;}
.swiper-prev {background: url("./img/btn-control.png") no-repeat 0 0;width: 33px;height: 45px;position: absolute;top:40%;left:10%;z-index: 999;}
.swiper-next {background: url("./img/btn-control.png") no-repeat 0 0;width: 33px;height: 45px;background-position: -62px 0;position: absolute;top:40%;right:10%;z-index: 999;}
 
 
.empty_banner {color: white;text-align: center;line-height: 300px;background: #ccc;font-size: 20px;}
 
@media (max-width: 320px)
{
    .swiper-container {width: 100%!important;height: auto!important;}
}
\`\`\`

여기까지!! 나머진 응용하면된다. 





`,link:"/그누&영카트/그누보드 무제한 배너 출력하기"},{title:"그누보드 미니멀 메뉴 액티브 포함",content:`
# {{ $frontmatter.title }}

여기 사이트 보면 미니멀하게 메뉴가 있다.

여기서 액티브 상태를 구현하려면 아래 처럼 만들면 된다.



\`\`\`php
function get_full_url()
{
    $last_url = parse_url($_server['request_uri']);
  
    $full_url = (isset($_server['https']) && $_server['https'] === 'on' ? "https" : "http") . "://{$_server['http_host']}{$last_url['path']}";
    return $full_url;
}​
<ul class="bo_tabmenu">
    <li <?php echo (strpos(get_pretty_url('notice'), get_full_url()) !== false) ? "class='on'" : ""  ?>>
        <a href="<?php echo get_pretty_url('notice')?>">공지사항</a>
    </li>
    <li <?php echo (strpos(get_pretty_url('faq?fm_id=1'), get_full_url()) !== false) ? "class='on'" : ""  ?>>
        <a href="<?php echo get_pretty_url('faq?fm_id=1')?>">자주묻는질문</a>
    </li>
    <li <?php echo (strpos(get_pretty_url('itemqalist'), get_full_url()) !== false) ? "class='on'" : ""  ?>>
        <a href="<?php echo get_pretty_url('itemqalist')?>">상품문의</a>
    </li>
    <li <?php echo (strpos(get_pretty_url('product_review'), get_full_url()) !== false) ? "class='on'" : ""  ?>>
        <a href="<?php echo get_pretty_url('product_review')?>">상품후기</a>
    </li>
</ul>​
\`\`\``,link:"/그누&영카트/그누보드 미니멀 메뉴 액티브 포함"},{title:"그누보드 및 영카트 회원삭제관련",content:`
# {{ $frontmatter.title }}


## 설명 :


회원삭제했는데 삭제 안되는이유는

재가입을 방지하기 위해서 삭제가 안되고 대신에 탈퇴처리 하게만들어야한다.

https://sir.kr/qa/267389



관리자 모드를 아무리 봐도 회원목록 삭제하는 항목이 안보여서요..

 

회원아이디 앞에 있는 체크박스 체크후 '선택삭제'를 클릭해도 안없어지네요..




회원관리에서 회원 완전히 삭제하기

http://gnustudy.com/bbs/board.php?bo_table=gnu_tip&wr_id=104


\`\`\`php
//회원삭제
//http://gnustudy.com/bbs/board.php?bo_table=gnu_tip&wr_id=104
functionmember_delete($mb_id)
{
global$config;
global$g5;
  
$sql="selectmb_name,mb_nick,mb_ip,mb_recommend,mb_memo,mb_levelfrom{$g5['member_table']}wheremb_id='".$mb_id."'";
$mb=sql_fetch($sql);
  
//이미삭제된회원은제외
//if(preg_match('#^[0-9]{8}.*삭제함#',$mb['mb_memo']))
//return;
  
if($mb['mb_recommend']){
$row=sql_fetch("selectcount(*)ascntfrom{$g5['member_table']}wheremb_id='".addslashes($mb['mb_recommend'])."'");
if($row['cnt'])
insert_point($mb['mb_recommend'],$config['cf_recommend_point']*(-1),$mb_id.'님의회원자료삭제로인한추천인포인트반환',"@member",$mb['mb_recommend'],$mb_id.'추천인삭제');
}
  
//회원자료는정보만없앤후아이디는보관하여다른사람이사용하지못하도록함:061025
//$sql="update{$g5['member_table']}setmb_password='',mb_level=1,mb_email='',mb_homepage='',mb_tel='',mb_hp='',mb_zip1='',mb_zip2='',mb_addr1='',mb_addr2='',mb_birth='',mb_sex='',mb_signature='',mb_memo='".date('ymd',g5_server_time)."삭제함\\n{$mb['mb_memo']}'wheremb_id='{$mb_id}'";
//sql_query($sql);
//회원삭제20190930원래는삭제가안되는데삭제하게만듦
/*
*글쓰기하셔도회원목록에서삭제가안되고탈퇴회원으로처리가되요
*이유는재가입방지(이전아이디글슬경우)기타등등문제사유가되기때문에
*탈퇴회원으로처리되지삭제하려면따로작업하셔야합니다.
*/
sql_query("update{$g5['member_table']}setmb_leave_date=now()wheremb_id='$mb_id'");
  
//포인트테이블에서삭제
sql_query("deletefrom{$g5['point_table']}wheremb_id='$mb_id'");
  
//그룹접근가능삭제
sql_query("deletefrom{$g5['group_member_table']}wheremb_id='$mb_id'");
  
//쪽지삭제
sql_query("deletefrom{$g5['memo_table']}whereme_recv_mb_id='$mb_id'orme_send_mb_id='$mb_id'");
  
//스크랩삭제
sql_query("deletefrom{$g5['scrap_table']}wheremb_id='$mb_id'");
  
//관리권한삭제
sql_query("deletefrom{$g5['auth_table']}wheremb_id='$mb_id'");
  
//그룹관리자인경우그룹관리자를공백으로
sql_query("update{$g5['group_table']}setgr_admin=''wheregr_admin='$mb_id'");
  
//게시판관리자인경우게시판관리자를공백으로
sql_query("update{$g5['board_table']}setbo_admin=''wherebo_admin='$mb_id'");
  
//소셜로그인에서삭제또는해제
if(function_exists('social_member_link_delete')){
social_member_link_delete($mb_id);
}
  
//아이콘삭제
@unlink(g5_data_path.'/member/'.substr($mb_id,0,2).'/'.$mb_id.'.gif');
  
//프로필이미지삭제
@unlink(g5_data_path.'/member_image/'.substr($mb_id,0,2).'/'.$mb_id.'.gif');
}
\`\`\`









`,link:"/그누&영카트/그누보드 및 영카트 회원삭제관련"},{title:"그누보드 분류관리 커스텀",content:`
# {{ $frontmatter.title }}



브랜드 관리 소스 추가 

categoryform.php 접속해서 소스 추가한다.

\`\`\`php
//적절한 곳에서 추가하면된다.
 <tr>
    <th scope="row"><label for="it_img">브랜드이미지</label></th>
    <td>
        <?php echo help("브랜드 이미지를 입력해주세요."); ?>
        <input type="file" name="ca_brand_img" id="ca_brand_img">
        <?php
        $ca_brand_img = g5_data_path.'/brand/'.$ca['ca_brand_img'];
        $ca_brand_img_exists = is_file($ca_brand_img) && file_exists($ca_brand_img);
        if($ca_brand_img_exists) {
            $thumb = get_brand_thumbnail($ca['ca_brand_img'], 25, 25);
            $img_tag = "<img src='".g5_data_url."/brand/".$ca['ca_brand_img']."' class='shop_item_preview_image' >";
            ?>
            <label for="ca_brand_del"><span class="sound_only">이미지 </span>파일삭제</label>
            <input type="checkbox" name="ca_brand_del" id="ca_brand_del" value="1">
            <span class="sit_wimg_limg1"><?php echo $thumb; ?></span>
            <div id="limg1" class="banner_or_img">
                <?php echo $img_tag; ?>
                <button type="button" class="sit_wimg_close">닫기</button>
            </div>
            <script>
                $('<button type="button" id="it_limg1_view" class="btn_frmline sit_wimg_view">이미지 확인</button>').appendto('.sit_wimg_limg1');
            <\/script>
        <?php } ?>
    </td>
</tr>
\`\`\`

shop.lib.php 에서 추가하면된다. 혹은 extend에서 추가해도 좋다. 

\`\`\`php
// 브랜드 이미지 썸네일 20210917
function get_brand_thumbnail($img, $width, $height=0, $id='', $is_crop=false)
{
    $str = '';
  
    if ( $replace_tag = run_replace('get_brand_thumbnail', $str, $img, $width, $height, $id, $is_crop) ){
        return $replace_tag;
    }
  
    $file = g5_data_path.'/brand/'.$img;
    if(is_file($file))
        $size = @getimagesize($file);
  
    if (! (isset($size) && is_array($size)))
        return '';
  
    if($size[2] < 1 || $size[2] > 3)
        return '';
  
    $img_width = $size[0];
    $img_height = $size[1];
    $filename = basename($file);
    $filepath = dirname($file);
  
    if($img_width && !$height) {
        $height = round(($width * $img_height) / $img_width);
    }
  
    $thumb = thumbnail($filename, $filepath, $filepath, $width, $height, false, $is_crop, 'center', false, $um_value='80/0.5/3');
  
    if($thumb) {
        $file_url = str_replace(g5_path, g5_url, $filepath.'/'.$thumb);
        $str = '<img src="'.$file_url.'" width="'.$width.'" height="'.$height.'"';
        if($id)
            $str .= ' id="'.$id.'"';
        $str .= ' alt="">';
    }
  
    return $str;
}
  
  
  
// 브랜드 이미지 업로드 추가 20210917
function brand_img_upload($srcfile, $filename, $dir)
{
    if($filename == '')
        return '';
  
    $size = @getimagesize($srcfile);
    if($size[2] < 1 || $size[2] > 3)
        return '';
  
    //php파일도 getimagesize 에서 image type flag 를 속일수 있다
    if (!preg_match('/\\.(gif|jpe?g|png)$/i', $filename))
        return '';
  
    if(!is_dir($dir)) {
        @mkdir($dir, 707);
        @chmod($dir, 707);
    }
  
    $pattern = "/[#\\&\\+\\-%@=\\/\\\\:;,'\\"\\^\`~\\|\\!\\?\\*\\$#<>\\(\\)\\[\\]\\{\\}]/";
  
    $filename = preg_replace("/\\s+/", "", $filename);
    $filename = preg_replace( $pattern, "", $filename);
  
    $filename = preg_replace_callback("/[가-힣]+/", '_callback_it_img_upload', $filename);
  
    $filename = preg_replace( $pattern, "", $filename);
    $prepend = '';
  
    // 동일한 이름의 파일이 있으면 파일명 변경
    if(is_file($dir.'/'.$filename)) {
        for($i=0; $i<20; $i++) {
            $prepend = str_replace('.', '_', microtime(true)).'_';
  
            if(is_file($dir.'/'.$prepend.$filename)) {
                usleep(mt_rand(100, 10000));
                continue;
            } else {
                break;
            }
        }
    }
  
    $filename = $prepend.$filename;
  
    upload_file($srcfile, $filename, $dir);
  
    $file = str_replace(g5_data_path.'/brand/', '', $dir.'/'.$filename);
  
    return $file;
}


//categoryformupdate.php
  
//여기서 $ca_id 변수 밑에서 소스 추가를 하면된다.
  
  
@mkdir(g5_data_path."/brand", 707);
@chmod(g5_data_path."/brand", 707);
  
  
$ca_brand_img = '';
// 파일정보
if($w == "u") {
    $sql = " select ca_brand_img
            from {$g5['g5_shop_category_table']}
            where ca_id = '$ca_id' ";
    $file = sql_fetch($sql);
  
    $ca_brand_img = $file['ca_brand_img'];
}
  
$brand_dir = g5_data_path.'/brand';
  
  
$ca_brand_del = isset($_post['ca_brand_del']) ? $_post['ca_brand_del'] : 0;
  
// 파일삭제
if ($ca_brand_del) {
    $file_img1 = $brand_dir.'/'.clean_relative_paths($ca_brand_img);
    @unlink($file_img1);
    delete_item_thumbnail(dirname($file_img1), basename($file_img1));
    $ca_brand_del = '';
}
  
// 이미지업로드
if ($_files['ca_brand_img']['name']) {
    if($w == 'u' && $ca_brand_img) {
        $file_img1 = $brand_dir.'/'.clean_relative_paths($ca_brand_img);
        @unlink($file_img1);
        delete_item_thumbnail(dirname($file_img1), basename($file_img1));
    }
    $ca_brand_img = brand_img_upload($_files['ca_brand_img']['tmp_name'], $_files['ca_brand_img']['name'], $brand_dir.'/'.$ca_id);
}
  
$brand_full_path = $ca_brand_img;
  
190줄에서 추가하면된다.
$sql_common = "
ca_brand_img            = '$brand_full_path', "
\`\`\`

여기서 파일 등록이 안되면 쓰기권한을 줘야한다. 707로 brand 파일 권한을 주면 된다. 

 

## 원인 :

분류관리에서 커스텀 작업 했는데 자료가 없습니다. 라는 메시지가 뜬다. 

그누보드에서 분류관리 브랜드 이미지 추가 하는 작업을 하고 있는데 문제가 발생됐을때..

밑에 보니까 $check_str_keys 배열에 추가가 되지 않아서 생기는 문제다.




## 해결 방법 :  

\`\`\`php
$check_str_keys = array(
    'ca_brand_img' => 'str',
)
\`\`\`

`,link:"/그누&영카트/그누보드 분류관리 커스텀"},{title:"그누보드 사이트 점검 페이지 만들기",content:`
# {{ $frontmatter.title }}


## 설명 : 

페이지 중간에 문제가 발생했을때 잠깐 점검 페이지를 보여주기 위해서 만들어놓으면 좋을 것같다

원래는 sir 에서 찾아보니까 그걸로 써봤는데 수정 할 부분이 많아서.. 직접 만들기로 했다.

extend/inspect.extend.php 만든다.

\`\`\`php
<?php
  
######################### 사이트점검 플러그인 상수 ################################
  
  
define('inspect',      'inspect');
define('inspect_admin',      'inspect_admin');
  
  
define('inspect_plugin_path', g5_theme_path.'/'.g5_plugin_dir.'/'.inspect);
define('inspect_plugin_url', g5_theme_url.'/'.g5_plugin_dir.'/'.inspect);
  
define('inspect_plugin_lib_path', g5_theme_path.'/'.g5_plugin_dir.'/'.inspect.'/'.g5_lib_dir);
  
  
$g5['inspect_table'] = "config_inspect";
  
  
######################### 사이트점검 로직 ################################
  
$inspect_rows = sql_fetch(" select * from {$g5['inspect_table']}");
  
  
$c42df = preg_replace("\`\\/[^/]*\\.php$\`i", "/", $_server['php_self']);
  
  
// ...............................................
// url 검사를 해서 최상위 디덱토리로 이동해버린다.
// ...............................................
  
// 점검 시간이 종료
if (time() > strtotime($inspect_rows['insp_end']))
{
    // 현재시간을 날짜 형태로 저장한다.
    $d_tmp = date("y-m-d h:i:s", time());
    sql_query("update {$g5['inspect_table']} set \`insp_use\` = 0, \`last_date\` = '{$d_tmp}' where \`insp_use\` = 1",true);
}
  
if ($is_admin != "super" && $inspect_rows['insp_use'] == 1)
{
    $cnt_possible_ip = trim($inspect_rows['possible_ip']);
    if ($cnt_possible_ip) {
        $is_possible_ip = false;
        $pattern = explode("\\n", $cnt_possible_ip);
        for ($i=0; $i<count($pattern); $i++) {
            $pattern[$i] = trim($pattern[$i]);
            if (empty($pattern[$i]))
                continue;
  
            $pattern[$i] = str_replace(".", "\\.", $pattern[$i]);
            $pattern[$i] = str_replace("+", "[0-9\\.]+", $pattern[$i]);
            $pat = "/^{$pattern[$i]}$/";
            $is_possible_ip = preg_match($pat, $_server['remote_addr']);
            if ($is_possible_ip)
                break;
        }
    }
  
    if (!$is_possible_ip && $is_admin != "super") {
        define('_sircrypt_', true);
        include_once inspect_plugin_lib_path.'/inspect.lib.php';
        include_once inspect_plugin_path.'/inspect_view.php';
    }
}
\`\`\`

/theme/plugin/inspect 

lib/inspect.lib.php
\`\`\`php
<?php
  
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
  
if (!defined('_sircrypt_')) exit; // 개별 페이지 접근 불가
  
  
  
$startdate = array(
  
date("y-m-d h:i", strtotime($inspect_rows['insp_start'])),
  
date("y", strtotime($inspect_rows['insp_start'])),
  
date("n", strtotime($inspect_rows['insp_start'])),
  
date("d", strtotime($inspect_rows['insp_start'])),
  
date("g", strtotime($inspect_rows['insp_start'])),
  
date("i", strtotime($inspect_rows['insp_start'])),
  
date("a", strtotime($inspect_rows['insp_start']))
  
);
  
  
  
$enddate = array(
  
date("y-m-d h:i", strtotime($inspect_rows['insp_end'])),
  
date("y", strtotime($inspect_rows['insp_end'])),
  
date("n", strtotime($inspect_rows['insp_end'])),
  
date("d", strtotime($inspect_rows['insp_end'])),
  
date("g", strtotime($inspect_rows['insp_end'])),
  
date("i", strtotime($inspect_rows['insp_end'])),
  
date("a", strtotime($inspect_rows['insp_end']))
  
);
  

function copyright_year($startdate='2021')
{
    return (date('y')==$startdate)?(date('y')):"$startdate - ".date('y');
}
\`\`\`



_common.php 

\`\`\`php
<?php
  
include_once "../../../../common.php";
\`\`\`



fliptimer.css 

\`\`\`css
@-webkit-keyframes fliptop {
  
0% {
  
-webkit-transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
-webkit-transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-webkit-keyframes flipbottom {
  
0% {
  
-webkit-transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
-webkit-transform: perspective(400px) rotatex(0deg); } }
  
  
  
@-moz-keyframes fliptop {
  
0% {
  
-moz-transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
-moz-transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-moz-keyframes flipbottom {
  
0% {
  
-moz-transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
-moz-transform: perspective(400px) rotatex(0deg); } }
  
  
  
@-ms-keyframes fliptop {
  
0% {
  
-ms-transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
-ms-transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-ms-keyframes flipbottom {
  
0% {
  
-ms-transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
-ms-transform: perspective(400px) rotatex(0deg); } }
  
  
  
@-keyframes fliptop {
  
0% {
  
transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-keyframes flipbottom {
  
0% {
  
transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
transform: perspective(400px) rotatex(0deg); } }
  
  
  
.fliptimer {
  
color: #fff;
  
font-family: "helvetica neue", helvetica, sans-serif;
  
font-size: 90px;
  
font-weight: bold;
  
line-height: 100px;
  
height: 100px; }
  
.fliptimer .seperator {
  
vertical-align: top;
  
margin: 0 -20px;
  
display: inline; }
  
.fliptimer .seconds,
  
.fliptimer .minutes,
  
.fliptimer .hours,
  
.fliptimer .days {
  
height: 100%;
  
display: inline; }
  
.fliptimer .digit-set {
  
border-radius: 10px;
  
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  
border: 1px solid #111111;
  
width: 70px;
  
height: 100%;
  
display: inline-block;
  
position: relative;
  
margin: 0 1px; }
  
.fliptimer .digit {
  
position: absolute;
  
height: 100%; }
  
.fliptimer .digit > div {
  
position: absolute;
  
left: 0;
  
overflow: hidden;
  
height: 50%;
  
padding: 0 10px; }
  
.fliptimer .digit > div.digit-top, .fliptimer .digit > div.shadow-top {
  
background-color: #333;
  
border-bottom: 1px solid #333;
  
box-sizing: border-box;
  
top: 0;
  
z-index: 0;
  
border-radius: 10px 10px 0 0; }
  
.fliptimer .digit > div.digit-top:before, .fliptimer .digit > div.shadow-top:before {
  
content: "";
  
box-shadow: inset 0 10px 25px rgba(0, 0, 0, 0.4);
  
height: 100%;
  
width: 100%;
  
position: absolute;
  
left: 0;
  
top: 0; }
  
.fliptimer .digit > div.shadow-top {
  
background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0)), to(black));
  
width: 70px;
  
opacity: 0;
  
-webkit-transition: opacity 0.3s ease-in; }
  
.fliptimer .digit > div.digit-bottom, .fliptimer .digit > div.shadow-bottom {
  
background-color: #333;
  
bottom: 0;
  
z-index: 0;
  
border-radius: 0 0 10px 10px; }
  
.fliptimer .digit > div.digit-bottom .digit-wrap, .fliptimer .digit > div.shadow-bottom .digit-wrap {
  
display: block;
  
margin-top: -100%; }
  
.fliptimer .digit > div.digit-bottom:before, .fliptimer .digit > div.shadow-bottom:before {
  
content: "";
  
box-shadow: inset 0 10px 25px rgba(0, 0, 0, 0.3);
  
border-radius: 0 0 10px 10px;
  
height: 100%;
  
width: 100%;
  
position: absolute;
  
left: 0;
  
top: 0; }
  
.fliptimer .digit > div.shadow-bottom {
  
background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(black), to(rgba(0, 0, 0, 0)));
  
width: 50px;
  
opacity: 0;
  
-webkit-transition: opacity 0.3s ease-in; }
  
.fliptimer .digit.previous .digit-top,
  
.fliptimer .digit.previous .shadow-top {
  
opacity: 1;
  
z-index: 2;
  
-webkit-transform-origin: 50% 100%;
  
-webkit-animation: fliptop 0.3s ease-in both;
  
-moz-transform-origin: 50% 100%;
  
-moz-animation: fliptop 0.3s ease-in both;
  
-ms-transform-origin: 50% 100%;
  
-ms-animation: fliptop 0.3s ease-in both;
  
transform-origin: 50% 100%;
  
animation: fliptop 0.3s ease-in both; }
  
.fliptimer .digit.previous .digit-bottom,
  
.fliptimer .digit.previous .shadow-bottom {
  
z-index: 1;
  
opacity: 1; }
  
.fliptimer .digit.active .digit-top {
  
z-index: 1; }
  
.fliptimer .digit.active .digit-bottom {
  
z-index: 2;
  
-webkit-transform-origin: 50% 0%;
  
-webkit-animation: flipbottom 0.3s 0.3s ease-out both;
  
-moz-transform-origin: 50% 0%;
  
-moz-animation: flipbottom 0.3s 0.3s ease-out both;
  
-ms-transform-origin: 50% 0%;
  
-ms-animation: flipbottom 0.3s 0.3s ease-out both;
  
transform-origin: 50% 0%;
  
animation: flipbottom 0.3s 0.3s ease-out both; }
\`\`\`



inspect_view.php 

\`\`\`php
<?php
  
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
  
if (!defined('_gnuboard_')) exit; // 개별 페이지 접근 불가
  
if (!defined('_sircrypt_')) exit;
  
  
  
include_once('./_common.php');
  
  
  
$g5_head_title = "서비스 점검중입니다.";
  
  
  
  
  
/*
  
// 만료된 페이지로 사용하시는 경우
  
header("cache-control: no-cache"); // http/1.1
  
header("expires: 0"); // rfc2616 - section 14.21
  
header("pragma: no-cache"); // http/1.0
  
*/
  
?>
  
<!doctype html>
  
<html lang="ko">
  
<head>
  
<meta charset="utf-8">
  
<?php
  
if (g5_is_mobile) {
  
echo '<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10">'.php_eol;
  
echo '<meta name="handheldfriendly" content="true">'.php_eol;
  
echo '<meta name="format-detection" content="telephone=no">'.php_eol;
  
} else {
  
echo '<meta http-equiv="imagetoolbar" content="no">'.php_eol;
  
echo '<meta http-equiv="x-ua-compatible" content="ie=edge">'.php_eol;
  
}
  
  
  
if($config['cf_add_meta'])
  
echo $config['cf_add_meta'].php_eol;
  
?>
  
<title><?php echo $g5_head_title; ?></title>
  
<!--[if lte ie 8]>
  
<script src="<?php echo g5_js_url ?>/html5.js"><\/script>
  
<![endif]-->
  
<link rel="stylesheet" href="<?php echo inspect_plugin_url ?>/style.min.css">
  
<link rel="stylesheet" href="<?php echo inspect_plugin_url ?>/fliptimer.css" />
  
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"><\/script>
  
</head>
  
<body>
  
<section class="inspection_wrp">
  
<aside class="logo"><span class="none">로고</span></aside>
  
<h1><img src="<?php echo inspect_plugin_url?>/img/ins_text_title.gif" alt="보다 나은 서비스 제공을 위한 점검 시간입니다."></h1>
  
  
  
<p class="info_txt">
  
<?php echo $rows['content'];?>
  
</p>
  
  
  
<article class="inspection_time_wrp">
  
<div class="inspection_loading" id="inspection_loading" style="width:80%;">
  
<div class="icon_chr">
  
</div>
  
<div class="icon_bar">
  
<div class="txt" id="progressbar">
  
0%
  
</div>
  
</div>
  
</div>
  
<div class="inspection_time_txt">
  
점검 시간 : <?php echo $startdate[0]?>:00 ~ <?php echo $enddate[0]?>:00
  
</div>
  
</article>
  
  
  
<div class="fliptimer">
  
<div class="hours"></div>
  
<div class="minutes"></div>
  
<div class="seconds"></div>
  
</div>
  
<aside class="footer">copyright &copy; <?php echo copyright_year('2021') ?> <strong><?php echo $config['cf_title']; ?></strong>. all rights reserved.</aside>
  
</section>
  
  
  
<script src="<?php echo inspect_plugin_url?>/jquery.fliptimer.js" type="text/javascript"><\/script>
  
<script>
  
$(document).ready(function() {
  
$('.fliptimer').fliptimer({
  
direction:'down',
  
date:"<?php echo $enddate[0]?>:00",
  
});
  
});
  
<\/script>
  
<?php
  
include_once(g5_theme_path."/tail.sub.php");
\`\`\`

  
 
  
 
jquery.fliptimer.js
 

\`\`\`js
(function($) {
  
  
  
/**
  
* @class fliptimer
  
* @constructor
  
*
  
* @param element {htmlelement} the element fliptimer is called on
  
*/
  
var fliptimer = function(element, options) {
  
this.element = element;
  
  
  
// ensures the htmlelement has a class of 'fliptimer'
  
if (!this.element.hasclass('fliptimer')) {
  
this.element.addclass('fliptimer');
  
}
  
  
  
// attach users options to instance
  
this.useroptions = options;
  
  
  
// attach default options to instance
  
this.defaultoptions = fliptimer.defaults;
  
  
  
// merge default options with user options and attach to instance
  
this.options = $.extend({}, this.defaultoptions, this.useroptions);
  
  
  
// detects if the seconds digits should be used
  
if (this.element.find('.seconds').length > 0) {
  
this.options.seconds = this.element.find('.seconds')[0];
  
}
  
  
  
// detects if the minutes digits should be used
  
if (this.element.find('.minutes').length > 0) {
  
this.options.minutes = this.element.find('.minutes')[0];
  
}
  
  
  
// detects if the hours digits should be used
  
if (this.element.find('.hours').length > 0) {
  
this.options.hours = this.element.find('.hours')[0];
  
}
  
  
  
// detects if the days digits should be used
  
if (this.element.find('.days').length > 0) {
  
this.options.days = this.element.find('.days')[0];
  
}
  
  
  
// store the date/time when initialised
  
this.initdate = new date();
  
  
  
// make the date into a javascript date
  
this.options.date = new date(this.options.date);
  
  
  
// untested
  
this.calculatedate();
  
};
  
  
  
fliptimer.defaults = {
  
seconds: false,
  
minutes: false,
  
hours: false,
  
days: false,
  
date: new date().todatestring(),
  
direction: 'up',
  
callback: null,
  
digittemplate: '' +
  
'<div class="digit">' +
  
' <div class="digit-top">' +
  
' <span class="digit-wrap"></span>' +
  
' </div>' +
  
' <div class="shadow-top"></div>' +
  
' <div class="digit-bottom">' +
  
' <span class="digit-wrap"></span>' +
  
' </div>' +
  
' <div class="shadow-bottom"></div>' +
  
'</div>'
  
};
  
  
  
fliptimer.prototype = {
  
/**
  
* calculates the difference in date for the timer
  
*
  
* @method calculatedate
  
*/
  
calculatedate: function() {
  
var datediff;
  
  
  
// calculates the difference in dates
  
if (this.options.direction == 'down') {
  
datediff = this.options.date - this.initdate;
  
} else if (this.options.direction == 'up') {
  
datediff = this.initdate - this.options.date;
  
}
  
  
  
// sets the date/time on the instance
  
this.seconds = math.floor(datediff/1000) % 60;
  
this.minutes = math.floor(datediff/1000/60) % 60;
  
this.hours = math.floor(datediff/1000/3600) % 24;
  
this.days = math.floor(datediff/1000/60/60/24);
  
  
  
// render the html for the plugin
  
this.render();
  
},
  
  
  
/**
  
* dictates what needs rendering for the plugin
  
*
  
* @method render
  
*/
  
render: function() {
  
// if using seconds, populate it
  
if (this.options.seconds) {
  
this.renderdigits(this.options.seconds, this.seconds);
  
}
  
// if using minutes, populate it
  
if (this.options.minutes) {
  
this.renderdigits(this.options.minutes, this.minutes);
  
}
  
// if using hours, populate it
  
if (this.options.hours) {
  
this.renderdigits(this.options.hours, this.hours);
  
}
  
// if using days, populate it
  
if (this.options.days) {
  
this.renderdigits(this.options.days, this.days);
  
}
  
  
  
this.starttimer();
  
},
  
  
  
/**
  
* renders the digits for a given subject
  
*
  
* @method renderdigits
  
* @param subject {htmlelement} the element to generate digits for
  
*/
  
renderdigits: function(subject, value) {
  
var i, x, max, maxdigit, currentdigit, _this = this, number_array;
  
// if digits are not already rendered...
  
if ($(subject).find('.digit').length == 0) {
  
// split the value into two individual digits
  
// unless time has ran out
  
if (_this.days < 0 && _this.hours < 0 && _this.minutes < 0 && _this.seconds < 0) {
  
number_array = [0,0];
  
}
  
else {
  
number_array = string(value).split(""); // split all digits
  
  
  
// ensure the set is at least 2 digits long
  
if (number_array.length < 2) {
  
number_array.unshift(0)
  
}
  
}
  
  
  
// set maximum digits for seconds/minutes/hours
  
if (subject == _this.options.seconds || subject == _this.options.minutes) {
  
// minutes and seconds max digit
  
maxdigit = 5;
  
} else if (subject == _this.options.hours) {
  
// hours max digit
  
maxdigit = 2;
  
} else {
  
// everything else digit max
  
maxdigit = 9;
  
}
  
  
  
// append a div for each digit
  
number_array.foreach(function() {
  
$(subject).append('<div class="digit-set"></div>');
  
});
  
  
  
// for each digit-set in the subject
  
$(subject).find('.digit-set').each(function(el) {
  
// if first digit, then use digit max
  
max = (el == 0) ? maxdigit : 9;
  
  
  
// generate the right number of digits
  
for(i=0; i<=max; i++) {
  
// append the digit template
  
$(this).append(_this.options.digittemplate);
  
  
  
// if direction is down then make numbers decline
  
x = (_this.options.direction == 'down') ? max - i : i;
  
  
  
// select the current digit and apply the number to it
  
currentdigit = $(this).find('.digit')[i];
  
$(currentdigit).find('.digit-wrap').append(x);
  
  
  
// if the current number matches the value then apply active class
  
if (x == number_array[el]) {
  
$(currentdigit).addclass('active');
  
} else if (number_array[el] != 0 && ((x + 1) == number_array[el])) {
  
// if the current number is one less than active but not zero
  
$(currentdigit).addclass('previous');
  
} else if (number_array[el] == 0 && x == max) {
  
// if the current number is zero then apply previous to max
  
$(currentdigit).addclass('previous');
  
}
  
}
  
});
  
}
  
},
  
  
  
/**
  
* start a timer with an interval of 1 second
  
*
  
* @method starttimer
  
*/
  
starttimer: function() {
  
var _this = this;
  
  
  
clearinterval(this.timer);
  
this.timer = setinterval(function() {
  
// if timer runs out stop the timer
  
if (_this.days <= 0 && _this.hours <= 0 && _this.minutes <= 0 && _this.seconds <= 0) {
  
// execute callback if one exists
  
if (_this.options.callback) {
  
_this.options.callback();
  
}
  
  
  
clearinterval(_this.timer);
  
return;
  
}
  
  
  
// if timer runs out stop the timer
  
if ((_this.days > 999) || (_this.days == 999 && _this.hours == 23 && _this.minutes == 59 && _this.seconds == 59)) {
  
clearinterval(_this.timer);
  
return;
  
}
  
  
  
// increase/decrease seconds
  
(_this.options.direction == 'down') ? _this.seconds-- : _this.seconds++;
  
if (_this.options.seconds) _this.increasedigit(_this.options.seconds);
  
  
  
// increase/decrease minutes
  
if (_this.seconds == 60 || _this.seconds == -1) {
  
if (_this.options.direction == 'down') {
  
_this.seconds = 59;
  
_this.minutes--;
  
} else {
  
_this.seconds = 0;
  
_this.minutes++;
  
}
  
if (_this.options.minutes) _this.increasedigit(_this.options.minutes);
  
}
  
  
  
// increase/decrease hours
  
if (_this.minutes == 60 || _this.minutes == -1) {
  
if (_this.options.direction == 'down') {
  
_this.minutes = 59;
  
_this.hours--;
  
} else {
  
_this.minutes = 0;
  
_this.hours++;
  
}
  
if (_this.options.hours) _this.increasedigit(_this.options.hours);
  
}
  
  
  
// increase/decrease days
  
if (_this.hours == 24 || _this.hours == -1) {
  
if (_this.options.direction == 'down') {
  
_this.hours = 23;
  
_this.days--;
  
} else {
  
_this.hours = 0;
  
_this.days++;
  
}
  
if (_this.options.days) _this.increasedigit(_this.options.days);
  
}
  
},1000);
  
},
  
  
  
/**
  
* changes classes on the digits to increase the number
  
*
  
* @method increasedigit
  
* @param target {htmlelement} the element to increase digit for
  
*/
  
increasedigit: function(target) {
  
var digitsets = new array(), _this = this;
  
  
  
// find all digit-sets related to digit type
  
$(target).find('.digit-set').each(function() {
  
digitsets.push(this);
  
});
  
  
  
// increase individual digit
  
increase(digitsets[digitsets.length - 1]);
  
  
  
/**
  
* increases individual digit in a digit-set
  
*
  
* @param el {htmlelement} the digit-set being increased
  
*/
  
function increase(el) {
  
var current = $(el).find('.active'),
  
previous = $(el).find('.previous'),
  
index = $.inarray(el, digitsets);
  
  
  
previous.removeclass('previous');
  
current.removeclass('active').addclass('previous');
  
  
  
if (current.next().length == 0) {
  
if (_this.options.direction == 'down'
  
&& target == _this.options.hours
  
&& (_this.hours == -1 || _this.hours == 23)
  
&& $(el).find('.digit').length == 10) {
  
// if the hours digit reaches 0 it should make 24 active
  
$($(el).find('.digit')[6]).addclass('active');
  
} else {
  
// increase to first digit in set
  
$(el).find('.digit:first-child').addclass('active');
  
}
  
if (index != 0) {
  
// increase digit of sibling digit-set
  
increase(digitsets[index - 1]);
  
}
  
} else {
  
if (_this.options.direction == "up"
  
&& target == _this.options.hours
  
&& _this.hours == 24) {
  
// if the hours digit reaches 24 it should make 0 active
  
$(el).find('.digit:first-child').addclass('active');
  
increase(digitsets[index - 1]);
  
} else {
  
// increase the next digit
  
current.next().addclass('active');
  
}
  
}
  
}
  
}
  
};
  
  
  
$.fn.fliptimer = function(options) {
  
return this.each(function() {
  
if (!$(this).data('fliptimer')) {
  
$(this).data('fliptimer', new fliptimer($(this), options));
  
}
  
});
  
};
  
})(jquery);
\`\`\`  



style.min.css 

\`\`\`css
@charset "utf-8";  
@import url('https://fonts.googleapis.com/css2?family=poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); @import url('https://fonts.googleapis.com/css2?family=noto+sans+kr:wght@100;300;400;500;700;900&family=poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); @import url('https://fonts.googleapis.com/css2?family=nanum+gothic:wght@400;700;800&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=nanum+gothic:wght@400;700;800&family=nanum+myeongjo:wght@400;700;800&display=swap'); @import url('https://fonts.googleapis.com/css2?family=nanum+brush+script&family=nanum+gothic:wght@400;700;800&family=nanum+myeongjo:wght@400;700;800&display=swap');  
 
body, html {font-size: 13px;line-height: 1.5;color: #333;letter-spacing: -.05em;background: #eee;font-family: "poppins", "noto sans kr", "nanum gothic", "맑은 고딕","malgun gothic","nanum myeongjo","nanum brush script", sans-serif;}  
 
blockquote, body, button, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, html, img, input, label, legend, li, ol, option, p, pre, select, textarea, ul {margin: 0;padding: 0}  </pre><pre class="brush: css">img {vertical-align: top}  button {cursor: pointer}  dl, li, ol, ul {list-style: none}  </pre><pre class="brush: css">fieldset, img {border: 0}  button, input, select {vertical-align: middle}  </pre><pre class="brush: css">a {text-decoration: none}  a:hover {text-decoration: underline}  </pre><pre class="brush: css">table {border-collapse: collapse}  </pre><pre class="brush: css">.none, table caption {position: absolute;left: -3000px;top: -3000px;width: 0;height: 0;font-size: 0;line-height: 0;overflow: hidden}  </pre><pre class="brush: css">article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;margin: 0;padding: 0}  </pre><pre class="brush: css">
\`\`\`


\`\`\`css
.space1 {clear: both;height: 1px;font-size: 0;line-height: 0} 
.space5 {clear: both;height: 5px;font-size: 0;line-height: 0}  
.space10 {clear: both;height: 10px;font-size: 0;line-height: 0} 
.space15 {clear: both;height: 15px;font-size: 0;line-height: 0}  
.space20 {clear: both;height: 20px;font-size: 0;line-height: 0}  
.space25 {clear: both;height: 25px;font-size: 0;line-height: 0}  
.space30 {clear: both;height: 30px;font-size: 0;line-height: 0}  
.space45 {clear: both;height: 45px;font-size: 0;line-height: 0}  
.space50 {clear: both;height: 50px;font-size: 0;line-height: 0}  

.txtover {overflow: hidden;text-overflow: ellipsis;-o-text-overflow: ellipsis;white-space: nowrap}  
.inspection_wrp {width: 820px;margin: 0 auto;padding: 20px 80px 30px}  
.inspection_wrp .logo {width: 53px;height: 46px}  
.inspection_wrp h1 {padding: 147px 0 0;font-size: 0;line-height: 0;text-align: center;background: url(../../plugin/inspect/img/ins_icon.gif) center 9px no-repeat} 
.inspection_wrp .info_txt {padding: 25px 0 20px;text-align: center}  
.inspection_wrp .info_txt strong {color: #d23433}  
.inspection_wrp .now_time {width: 275px;margin: 10px auto 0;padding: 4px 0 6px;font-weight: 700;text-align: center;border: 1px solid #aaa;background: #fcfcfc}  
.inspection_time_wrp {position: relative;height: 135px;background: url(../../plugin/inspect/img/ins_loading_bg.gif) left bottom repeat-x}  
.inspection_time_txt {position: absolute;left: 0;top: 90px;width: 820px;text-align: center;font-weight: 700;color: #fff}  
.inspection_loading {position: relative;float: left;padding-left: 0;background: url(../../plugin/inspect/img/ins_loading_line.gif) repeat-x}  
.inspection_loading .icon_chr {position: absolute;right: 0;top: 0;width: 51px;height: 80px;margin-right: -20px;background: url(../../plugin/inspect/img/ins_loading_chr.gif) right top no-repeat}  
.inspection_loading .icon_bar {position: absolute;right: 0;top: 86px;width: 100%;height: 30px;background: url(../../plugin/inspect/img/ins_loading_line.gif) no-repeat}  
.inspection_loading .txt {position: absolute;right: 0;top: 28px;height: 20px;text-align: center;margin-right: -17px;font-weight: 700;color: #d30000}  
.mobile_side_wrap, .mobile_side_wrap .discussion_slider li.item_content ul {position: relative}  
.inspection_wrp h2 {padding: 45px 0 5px;font-size: 13px}  
.inspection_wrp .footer {clear: both;padding-top: 70px;color: #888;font-size: 10px;font-family: tahoma, arial, helvetica;text-align: center}  
.mobile_side_wrap {clear: both;width: 735px;height: 130px;padding-left: 85px;background: url(../../plugin/inspect/img/ins_m_album_bg.jpg) no-repeat;z-index: 1}  
.mobile_side_wrap .discussion_slider {position: relative;margin: 0 auto;width: 650px;height: 130px;padding-top: 20px;left: 50px;overflow: hidden}  
.mobile_side_wrap .discussion_slider li.item_content {float: left;width: 220px;height: 130px}  
.mobile_side_wrap .discussion_slider li.item_content a {display: inline-block;cursor: pointer;text-decoration: none}  
.mobile_side_wrap .discussion_slider li.item_content .game_img {position: absolute;left: 0;top: 0;width: 100px;height: 78px;padding: 0} 
.mobile_side_wrap .discussion_slider li.item_content .game_img img {width: 78px;height: 78px} 
.mobile_side_wrap .discussion_slider li.item_content .game_tit {width: 110px;padding: 0 0 0 100px;font-weight: 700;font-size: 14px;color: #333} 
.mobile_side_wrap .discussion_slider li.item_content .game_div {width: 110px;padding: 0 0 10px 100px} 
.mobile_side_wrap .discussion_slider li.item_content .game_div span {display: inline-block;width: 15px;height: 17px;padding-right: 3px;font-size: 0;line-height: 0;vertical-align: middle;background: url(../../plugin/inspect/img/icon_m_os.gif) no-repeat} 
.mobile_side_wrap .discussion_slider li.item_content .game_div span.os_ios {background-position: 0 0} 
.mobile_side_wrap .discussion_slider li.item_content .game_div span.os_andr {background-position: 0 -34px} 
.mobile_side_wrap .discussion_slider li.item_content .game_int {width: 110px;padding: 0 0 0 100px;font-weight: 400;font-size: 11px;color: #666}
.mobile_side_wrap .bx-controls {position: absolute;width: 735px;z-index: 100;top: 45px}  
.mobile_side_wrap .bx-controls a {width: 18px;height: 29px;margin: 0;padding: 0;border: 0;font-size: 0;line-height: 0;cursor: pointer;z-index: 100}  
.mobile_side_wrap .bx-controls a.bx-prev {position: absolute;left: -64px;top: 0;background: url(../../plugin/inspect/img/ins_m_arrow_01.png) no-repeat}  
.mobile_side_wrap .bx-controls a.bx-next {position: absolute;right: 21px;top: 0;background: url(../../plugin/inspect/img/ins_m_arrow_02.png) no-repeat}  
.mobile_side_wrap .bx-controls a.bx-prev:hover {background: url(../../plugin/inspect/img/ins_m_arrow_01_on.png) no-repeat}  
.mobile_side_wrap .bx-controls a.bx-next:hover {background: url(../../plugin/inspect/img/ins_m_arrow_02_on.png) no-repeat}  
.preview {width: 100%;height: 50px;background: #d23433;line-height: 50px;text-align: center;font-size: 15pt;color: #fff;}  
.fliptimer {margin: 20px auto 0;width: 500px;}
\`\`\`

사용법은 꼭 접근가능 아이피에 내 아이피를 넣어준다.

나만 빼고 다른 사람은 접근할 수 없다.

어쨌든 모든 자료는 깃헙에 저장 됐다~ 데모 플러그인 자료를 보면 된다. 플러그인 따로 올려놨다.

여기까지 설명 마친다.`,link:"/그누&영카트/그누보드 사이트 점검 페이지 만들기"},{title:"그누보드 세션 에러문제 해결하기",content:`
# {{ $frontmatter.title }}


## 원인 :

이렇게 에러가 나온다. 

::: danger 
warning: session_start(): open(/var/lib/php/7.0/session/sess_h27una7glolthuvqq8lh0ttsf3, o_rdwr) failed: permission denied (13) in /data/www/von.news/wp-content/plugins/cosmosfarm-members/cosmosfarm-members.php on line 12
  
warning: unknown: open(/var/lib/php/7.0/session/sess_h27una7glolthuvqq8lh0ttsf3, o_rdwr) failed: permission denied (13) in unknown on line 0
  
warning: unknown: failed to write session data (files). please verify that the current setting of session.save_path is correct (/var/lib/php/7.0/session) in unknown on line 0
:::

 

 

## 해결 방법 :

 

그누보드에서 세션 에러가 이런식으로 메시지를 뜨면

세션 저장소에 소유권을 줘야한다. 확인해보니 nobody로 되어있는데 root나 소유권계정으로 해주면 된다. 

\`\`\`bash
chown -r root:root data
chown -r root:test data
  
chmod 707 data
\`\`\`

 

여기서 또 한가지

그누보드 5.4.15에서 로그인 할떄 에러가 생긴문제는 관리자로 로그인시 data 폴더의 쓰기 권한이 있는지 체크합니다. 쓰기 권한이 없으면 로그인을 못합니다. 

이렇게 주석처리가 있는데 보니까 data 폴더에서 tmp 파일이 쓰기 권한이 없어서 로그인이 제대로 안된거 같다

tmp 하고 session 은 707으로 되어야 한다. 

 

여기서 마지막 방법은 

세션이 쌓이지 않는것도 예측헌데 그러면 아래 방법으로 해결 해보자

\`\`\`bash
chmod 707 /var/lib/php/session
\`\`\`

디렉토리 퍼미션을 707 혹은 777 로 해보자 

 

그러고 같이 /home/그누보드/data/session 폴더 내부를 싹다 비워보자.

::: danger
반드시 data 내부에 session 폴더까지 접근해서 전부 비워야한다. 안그럼 싹다 날라간다. 
:::

\`\`\`bash
cd data/session/
rm -rf *
\`\`\`

`,link:"/그누&영카트/그누보드 세션 에러문제 해결하기"},{title:"그누보드 쉽게 엑셀 파일 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

쉽게 엑셀 파일을 만든 방법이 있다. 

보통 이런 방식으로 만들긴하는데 만약에 테이블 구조가 복잡하면 이런 방법 보다 라이브러리 써서 만든게 좋다.

우선 쉽게 만든 방법에 대해서 글 올린다.

 
\`\`\`php
<?php
$sub_menu = "500300";
  
include_once "./_common.php";
  
  
auth_check($auth[$sub_menu], "w");
  
// 상품이 많을 경우 대비 설정변경
set_time_limit ( 0 );
ini_set('memory_limit', '50m');
  
  
  
$filename = date('y-m-d h:i:s')."_상담신청목록";
  
$sql = "select * from {$g5['reser_content_table']} order by re_no desc";
$result = sql_query($sql);
  
$list = array();
for($i=0;$row = sql_fetch_array($result);$i++) {
    $list[$i] = $row;
}
  
  
  
header('content-type: application/vnd.ms-excel');
header('expires: ' . gmdate('d, d m y h:i:s') . ' gmt');
header("content-disposition: attachment; filename='{$filename}'.xls");
header('cache-control: must-revalidate, post-check=0, pre-check=0');
header('pragma: public');
header('content-transfer-encoding: binary');
  
?>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title><?=$filename?></title>
</head>
<body>
<table border="1">
    <thead>
    <tr>
        <th scope="col">번호</th>
        <th scope="col">진료과목</th>
        <th scope="col">진료구분</th>
        <th scope="col">휴대번호</th>
        <th scope="col">진료시간</th>
        <th scope="col">제목</th>
        <th scope="col">성함</th>
        <th scope="col">상태</th>
        <th scope="col">내용</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($list as $value) : ?>
    <tr>
        <td><?=$value['re_no']?></td>
        <td><?=$value['category']?></td>
        <td><?=$value['division']?></td>
        <td><?=$value['phone']?></td>
        <td><?=$value['reservetime']?></td>
        <td><?=$value['title']?></td>
        <td><?=$value['mb_name']?></td>
        <td><?=$value['status']?></td>
        <td><?=$value['content']?></td>
    </tr>
    <?php endforeach; ?>
    </tbody>
</table>
</body>
</html>
\`\`\`
 

이렇게 바이너리를 엑셀로 변환해서 하면 페이지 접근했을때 엑셀 다운 받기가 된다.

간단하게 목록만 따로 출력되는거라서 쉽게 구현 된다. 

여기까지 설명하겠다.`,link:"/그누&영카트/그누보드 쉽게 엑셀 파일 만들기"},{title:"그누보드 에디터 사용법",content:`
# {{ $frontmatter.title }}

## 설명 :

위지윅 에디터 사용법

\`\`\`php
include_once('./_common.php');
include_once(g5_editor_lib);
  
  
$editor_html = editor_html("content", get_text(html_purifier($rows['content']), 0));
  
여기서 스크립트 따로 집어 넣을때..
function frmcontentform_check(f)
{
    <?php echo get_editor_js("content"); ?>
  
   return true;
}
\`\`\`


이렇게 하고 나서

백단에서 소스는 이렇게 하면된다.

\`\`\`php
$content = conv_content(conv_unescape_nl(stripslashes($_request['content'])), 1);
\`\`\`

이건 그누 5.4 최신에서 사용된거 같은데 이렇게 하면 p 태그 br 태그가 먹힌다.

그리고 밑에꺼는 포스트 값에 xss 클리어링 하는건데 그냥 알아두면된다 

쓸때 마다 밑에꺼로랑 같이 쓰면된다.

여기서 참고로 content 는 넣어서 쓰면 안된다 xss 제거 되서 태그가 안먹힌다.

\`\`\`php
$check_keys = array(
    'num',
    'writer',
    'subject',
    'datetime'
);
  
foreach($check_keys as $key){
    $$key = $_post[$key] = isset($_post[$key]) ? strip_tags(clean_xss_attributes($_post[$key])) : '';
}

\`\`\`
`,link:"/그누&영카트/그누보드 에디터 사용법"},{title:"그누보드 에서 테마 부분에서 에러 문제",content:`
# {{ $frontmatter.title }}

## 설명 :

일단 그누보드에서 테마를 복붙하는데 갑자기 에러가 생겼다..

원인 모를 에러 투성..

알고 봤더니 config 테이블에 보면 cf_theme 가 없어서 생긴 문제이다..

그냥 쉽게 아래 소스를 넣으면 된다.

\`\`\`php
sql_query(" update {$g5['config_table']} set cf_theme = 'basic' ");
\`\`\`

`,link:"/그누&영카트/그누보드 에서 테마 부분에서 에러 문제"},{title:"그누보드 이미지 썸네일 빈공간 없이 크기조절하기",content:`
# {{ $frontmatter.title }}


그누보드 이미지 썸네일

빈공간 없이 크기 조절 하는방법 

우선 썸네일 그전에 가지고 있던 함수를 복제하고 함수명을 new_thumbnail 등 임시적으로 만든다
/lib/thumbnail.lib.php - 292행 부분아래 내용 주석 처리 

\`\`\`php
// if($size[0] < $thumb_width || $size[1] < $thumb_height)
// $is_large = false;
\`\`\`


이부분 주석처리 해놓고 썸네일 사용하면된다.`,link:"/그누&영카트/그누보드 이미지 썸네일 빈공간 없이 크기조절하기"},{title:"그누보드 이미지 썸네일 사이즈 맞추기",content:`
# {{ $frontmatter.title }}


## 설명 :

썸네일로 리사이징해서 잘라지며는

css로는 width:100%; height:auto로 해야됨 

혹은 리사이징 안될경우에도 위에 스타일시트로 맞춰야함 

모바일에서 문제 없게 나온다.`,link:"/그누&영카트/그누보드 이미지 썸네일 사이즈 맞추기"},{title:"그누보드 최고관리자 변경하기",content:`
# {{ $frontmatter.title }}

## 설명 :

변경하는 방법 : 

\`\`\`php
$sql = "update g5_member set mb_id = '아이디', mb_password = '".get_encrypt_string('비밀번호')."' where mb_id='admin'";
  
sql_query($sql);
\`\`\`

그리고 g5_config에서 cf_admin까지 변경해줘야함 mb_id 하고 동일하게 변경하면됨 



5.4 버전에서는 이런식으로 비밀번호 변경하면된다. 

\`\`\`php
sql_query(" update {$g5['member_table']} set mb_password = '".get_encrypt_string('1234')."' where mb_id = '".$config['cf_admin']."' ");
\`\`\`

5.4 이하 버전에서는 아래처럼 하면된다. 

\`\`\`sql
update g5_member set mb_password = password('1111') where mb_id='admin'
\`\`\`

아이디 변경하기  

기본설정에서 어드민도 변경해야된다.

\`\`\`php
sql_query(" update {$g5['member_table']} set mb_id='demoshopadmin' where mb_id = '".$config['cf_admin']."' ",true);
  
  
sql_query(" update {$g5['config_table']} set cf_admin='demoshopadmin' where 1 ",true);
\`\`\`






`,link:"/그누&영카트/그누보드 최고관리자 변경하기"},{title:"그누보드 카카오 맵 연동 (2)",content:`
# {{ $frontmatter.title }}

## 제작 방법 설명 : 

지난 시간에 이어서 플러그인 좀 더 구체화 하는 작업을 해볼까 한다. 

우선 지도를 확대 시키면 왼쪽에 메뉴가 아작스로 정보가 바뀌는건데 지도와 연동 되서 해야되서...

맛집 배달 게시판 플러그인에 보면 주소가 등록은 됐는데~ 위도와 경로는 빠져 있어서 수정 작업해야 한다.

여기서 부터 포스팅 글 남겨 본다.

구글링으로 찾아보니까 curl 로 지도 api 이용해서 조회하는 함수를 찾았다.

\`\`\`php
function kakao_request($path, $query, $content_type = 'json', $api_key)
{
  
    $api_server = 'https://dapi.kakao.com';
  
    $headers = array('authorization: kakaoak '.$api_key.'');
  
    $opts = array(
        curlopt_url => $api_server . $path . '.' . $content_type . '?' . $query,
        curlopt_returntransfer => true,
        curlopt_ssl_verifypeer => false,
        curlopt_sslversion => 1,
        curlopt_header => false,
        curlopt_httpheader => $headers
    );
  
    $curl_session = curl_init();
  
    curl_setopt_array($curl_session, $opts);
  
    $return_data = curl_exec($curl_session);
  
    if (curl_errno($curl_session)) {
        throw new exception(curl_error($curl_session));
    } else {
        curl_close($curl_session);
        return json_decode($return_data, true);
    }
}
\`\`\`

위에 함수를 이용해서 사용법을 풀이하자면 아래 소스 코드 참고하면 된다.

여기 매뉴얼을 참고하면 된다.

https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-address 



일단 query 짜는 부분을 수정 해야 한다.

wr_gps로 필드를 만들어 주고 여기다가 insert 할때는 point로 저장해야된다.

point로 쓸때 mysql 버전 마다 다르기 때문에 아래 주소 참고해서 한다.

https://dba.stackexchange.com/questions/33410/whats-the-difference-between-pointx-y-and-geomfromtextpointx-y
	
 

버전때가 mysql 5.1.35 이전이면 아래꺼로 쓰면된다.

\`\`\`sql
insert into t1 (pt_col) values (geomfromwkb(point(1,2)));
\`\`\`
 

이후 버전이면 아래꺼 쓰면된다.

\`\`\`sql
insert into t1 (pt_col) values(point(1,2));
\`\`\`

사실상 point로 쓰면 될것이다 mysql 버전때 5.5, 5.7 그리고 8이상 쓰는 경우가 있다. 

\`\`\`php
$path = '/v2/local/search/address';
  
$content_type = 'json'; // json or xml
  
$params = http_build_query(array(
    'page' => 1,
    'size' => 10,
    'query' => $wr_3
));
  
$res = kakao_request($path, $params, $content_type, $config['cf_kakao_rest_key']);
  
$gps = $res['documents'][0]['y'].",".$res['documents'][0]['x'];
  
$wr_gps = " (point(".$gps.")) ";
  
  
// 쿼리 짜는건 이렇게..
$sql = "wr_gps = $wr_gps";
\`\`\`

  

그 다음에는 조회를 할때는 이 방식으로 한다.

https://jichun.tistory.com/191
	
\`\`\`php
$cord = $_request['min_map_latitude']." ".$_request['min_map_longitude'].", ".$_request['max_map_latitude']." ".$_request['max_map_longitude'];
  
if($cord) {
    $sql_search .= " where mbrcontains(geomfromtext('linestring($cord)'), \`wr_gps\`)";
}
\`\`\`	

여기서 현재 위치가 안된다.

찾아보니까 현재 위치 소스는 정상적인데 시스템 환경이 제대로 주어지지 않아서 그렇다.

조건은 이렇다.

- https (기본)
- localhost (예외)

https://devtalk.kakao.com/t/getcurrentposition-geolocation/108794
	

\`\`\`php
<?php
  
if (!$sst) {
    $sst  = "wr_id";
    $sod = "asc";
}
  
$sql_search = " where wr_is_comment = 0 ";
  
$sql_order = " order by $sst $sod ";
  
$sql_common = " from {$g5['foodelivery_form_table']} ";
  
$sql = " select count(*) as cnt {$sql_common} {$sql_search} {$sql_order} ";
$row = sql_fetch($sql);
$total_count = $row['cnt'];
  
$rows = 10;
$total_page  = ceil($total_count / $rows);  // 전체 페이지 계산
if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
$from_record = ($page - 1) * $rows; // 시작 열을 구함
  
$sql = " select * {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";
$result = sql_query($sql);
  
  
add_stylesheet('<link rel="stylesheet" href="'.bv_map_plugin_url.'/style.css">', 0);
?>
  
<div class="beaver_map_area">
    <div class="map_area">
        <div id="map"></div>
        <a id="currentpositionbtn" href="#" onclick="getcurrentpositionevent(); return false;">
            <span class="current"><i class="fa fa-crosshairs"></i>현위치</span>
        </a>
    </div>
    <div class="map_list">
        <div class="wrapper">
            <div class="head">
                <span class="total_count">조회 <?php echo $total_count ?>건</span>
            </div>
            <ul class="body">
                <?php
                for ($i=0;$row = sql_fetch_array($result);$i++) {
                    $img = get_fd_image_data($row['token_id'],'limit 1');
                ?>
                <li>
                    <a class="list_item" href="<?php echo get_pretty_url(fd,$row['wr_id'])?>" target="_blank">
                        <div class="thumb_area">
                            <?php foreach ($img as $item) { ?>
                            <img class="thumb" src="<?=$item['bf_thumburl']?>" width="<?=$item['bf_width']?>" height="<?=$item['bf_height']?>" />
                            <?php } ?>
                        </div>
  
                        <div class="content_area">
                            <div class="title">
                                <?php echo $row['wr_subject']?>
                            </div>
                            <div class="content">
                                <?php echo $row['wr_content']?>
                            </div>
                        </div>
                    </a>
                </li>
                <?php } ?>
                <?php if($i == 0) echo "<li id='empty_map'>조회 된 정보가 없습니다.</li>"; ?>
            </ul>
            <div id="page_navigation">
                <?php echo get_paging(g5_is_mobile ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, $qstr.'&amp;page='); ?>
            </div>
        </div>
    </div>
</div>
\`\`\`
여기서 스크립트 부분은 아래 처럼 하면된다. 

\`\`\`js
var plugin_url = "<?=bv_map_plugin_url?>";
  
var current_latitude = '';
var current_longitude = '';
var kakaomap = '';
var kakaomarkers = [];
var kakaomarkercluster = '';
var kakaocustomoverlays = [];
  
var latlng_bounds = '';
  
var latlng_north_east,
    latlng_south_west,
    max_map_latitude,
    max_map_longitude,
    min_map_latitude,
    min_map_longitude;
  
function ajaxmapload(){
    kakaomap = map;
  
    for(i=0; i<kakaomarkers.length; i++){
        kakaomarkers[i].setmap(null);
    }
    for(i=0; i<kakaocustomoverlays.length; i++){
        kakaocustomoverlays[i].setmap(null);
    }
  
    kakaomarkers = [];
    kakaocustomoverlays = [];
  
    if(kakaomap){
        latlng_bounds = kakaomap.getbounds();
        latlng_north_east = latlng_bounds.getnortheast();
        latlng_south_west = latlng_bounds.getsouthwest();
        max_map_latitude = latlng_north_east.getlat();
        max_map_longitude = latlng_north_east.getlng();
        min_map_latitude = latlng_south_west.getlat();
        min_map_longitude = latlng_south_west.getlng();
    }
  
    let ajax_data = {
        'min_map_latitude':min_map_latitude,
        'max_map_latitude':max_map_latitude,
        'min_map_longitude':min_map_longitude,
        'max_map_longitude':max_map_longitude,
    };
  
    $.ajax({
        type: 'post',
        url: plugin_url + '/get_map_data.php',
        data: ajax_data,
        datatype:'html',
        success: function (data) {
            let response = $(data);
            $('.map_list').html(response.find('.map_list .wrapper'));
  
            ajaxmenuload(ajax_data);
        }
    });
}
  
  
  
function ajaxmenuload(ajax_data) {
    $.ajax({
        type: 'post',
        url: plugin_url + '/get_list_data.php',
        data: ajax_data,
        datatype:'json',
        success: function (data) {
            $.each(data.result,function(i,item){
                let latitude = parsefloat(item.latitude);
                let longitude = parsefloat(item.longitude);
                kakaomarkers[i] = new kakao.maps.marker({
                    position: new kakao.maps.latlng(latitude, longitude)
                });
                kakaomarkers[i].setmap(kakaomap);
                kakao.maps.event.addlistener(kakaomarkers[i], 'click', function() {
                    kakaocustomoverlays[i].setmap(kakaomap);
                });
                kakaocustomoverlays[i] = new kakao.maps.customoverlay({
                    position: new kakao.maps.latlng(latitude, longitude),
                    content: \`
                        <div class="kakao_custom_overlay">
                            <div class="map_item_overlay_html">
                                <a class="list_item" href="\${item.href}" target="_blank">
                                    <div class="thumb_area">
                                        <img class="thumb" src="\${item.bf_thumburl}" width="\${item.bf_width}" height="\${item.bf_height}" />
                                    </div>
                                    <div class="content_area">
                                        <div class="title">
                                            \${item.shop_name}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <span class="arrow"></span>
                        </div>\`
                });
            });
            if(kakaomarkercluster){
                kakaomarkercluster.clear();
            }
  
            kakaomarkercluster = new kakao.maps.markerclusterer({
                map: kakaomap,
                averagecenter: true,
                minlevel: 1,
                gridsize: 60,
                disableclickzoom: true,
                calculator: [9, 99, 999, 9999,99999],
                styles: [{
                    width : '50px',
                    height : '50px',
                    background: 'rgba(126, 142, 227, .7)',
                    borderradius: '28px',
                    color: '#fff',
                    textalign: 'center',
                    fontweight: 'bold',
                    fontsize: '20px',
                    lineheight: '50px',
                    border: '2px solid rgba(126, 142, 227, .9)'
                },
                    {
                        width : '56px',
                        height : '56px',
                        background: 'rgba(255, 134, 74, .7)',
                        borderradius: '31px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '20px',
                        lineheight: '56px',
                        border: '2px solid rgba(255, 134, 74, .9)'
                    },
                    {
                        width : '60px',
                        height : '60px',
                        background: 'rgba(255, 72, 50, .7)',
                        borderradius: '33px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '18px',
                        lineheight: '60px',
                        border: '2px solid rgba(255, 72, 50, .9)'
                    },
                    {
                        width : '60px',
                        height : '60px',
                        background: 'rgba(217, 84, 189, .7)',
                        borderradius: '33px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '18px',
                        lineheight: '60px',
                        border: '2px solid rgba(217, 84, 189, .9)'
                    },
                    {
                        width : '60px',
                        height : '60px',
                        background: 'rgba(147, 84, 217, .7)',
                        borderradius: '33px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '18px',
                        lineheight: '60px',
                        border: '2px solid rgba(147, 84, 217, .9)'
                    }
                ]
            });
            kakaomarkercluster.addmarkers(kakaomarkers);
            kakao.maps.event.addlistener(kakaomarkercluster, 'clusterclick', function(cluster) {
  
                var latlng_bounds = cluster.getbounds();
                latlng_north_east = latlng_bounds.getnortheast();
                latlng_south_west = latlng_bounds.getsouthwest();
                max_map_latitude = latlng_north_east.getlat();
                max_map_longitude = latlng_north_east.getlng();
                min_map_latitude = latlng_south_west.getlat();
                min_map_longitude = latlng_south_west.getlng();
  
                let ajax_data = {
                    'min_map_latitude':min_map_latitude,
                    'max_map_latitude':max_map_latitude,
                    'min_map_longitude':min_map_longitude,
                    'max_map_longitude':max_map_longitude,
                };
  
                $.ajax({
                    type: 'post',
                    url: plugin_url + '/get_map_data.php',
                    data: ajax_data,
                    datatype:'html',
                    success: function (data) {
                        let response = $(data);
                        $('.map_list').html(response.find('.map_list .wrapper'));
                    }
                });
            });
  
        },
        error: function (request, status, error) {
            console.log('code: '+request.status+"\\n"+'message: '+request.responsetext+"\\n"+'error: '+error);
            return false;
        }
    })
}
  
var marker = '';
var container = document.getelementbyid('map');
var position = new kakao.maps.latlng(37.493619044107106, 127.06653626780998);
var options = {
    center: position,
    level: 14,
    disabledoubleclick: false,
    disabledoubleclickzoom: false,
    draggable: true
};
var map = new kakao.maps.map(container, options);
var maptypecontrol = new kakao.maps.maptypecontrol();
map.addcontrol(maptypecontrol, kakao.maps.controlposition.topright);
var zoomcontrol = new kakao.maps.zoomcontrol();
map.addcontrol(zoomcontrol, kakao.maps.controlposition.right);
  
  
ajaxmapload();
  
kakao.maps.event.addlistener(map, 'idle', function() {
    if(marker) marker.setmap(null);
    ajaxmapload();
});
  
  
function getcurrentpositionevent() {
    //gps를 지원하면
    if (navigator.geolocation) {
        navigator.geolocation.getcurrentposition(function(position) {
            current_latitude = position.coords.latitude;
            console.log(current_latitude);
            current_longitude = position.coords.longitude;
            //카카오지도 현위치를 센터로
            if(map){
                var change_position = new daum.maps.latlng(current_latitude, current_longitude);
                map.setcenter(change_position);
            }
        }, function error(e) {
            if(e.code==1){
                alert('사용자가 위치정보 권한을 제공하지 않습니다.');
            } else if(e.code==2){
                alert('브라우저가 위치를 가져올 수 없습니다.');
            } else if(e==3){
                alert(e.code);
            } else {
                alert(e.message);
            }
        }, {
            enablehighaccuracy: true,
            maximumage: 0,
            timeout: 2000
        });
    }
    //gps를 지원하지 않으면
    else {
        alert('현위치 기능을 사용할 수 없습니다. 현위치 접근권한이 있는지 확인하시기 바랍니다.');
    }
}
$(document).ready(function(){
    $('body').attr('oncontextmenu','return false');
    $('body').attr('ondragstart','return false');
    $('body').attr('onselectstart','return false');
});
\`\`\`



/get_list_data.php 파일을 만든다. 

\`\`\`php
include_once "./_common.php";
  
  
$sql_search = " where wr_is_comment = 0 ";
  
$cord = $_request['min_map_latitude']." ".$_request['min_map_longitude'].", ".$_request['max_map_latitude']." ".$_request['max_map_longitude'];
  
if($cord) {
    $sql_search .= " and mbrcontains(geomfromtext('linestring($cord)'), \`wr_gps\`)";
}
  
$sql_order = " order by wr_id asc ";
  
$sql_common = " from {$g5['foodelivery_form_table']} ";
  
  
$sql = " select *, x(wr_gps)as latitude, y(wr_gps) as longitude {$sql_common} {$sql_search} {$sql_order} ";
  
$rr = sql_query($sql);
$data = [];
for ($i=0;$row = sql_fetch_array($rr);$i++) {
  
    $data['result'][$i]['shop_name'] = $row['wr_subject'];
    $data['result'][$i]['href'] = get_pretty_url(fd,$row['wr_id']);
  
    $data['result'][$i]['longitude'] = $row['longitude'];
    $data['result'][$i]['latitude'] = $row['latitude'];
  
    $img = get_fd_image_data($row['token_id'],'limit 1');
  
    foreach ($img as $value) {
        $data['result'][$i]['bf_thumburl'] = $value['bf_thumburl'];
        $data['result'][$i]['bf_width'] = $value['bf_width'];
        $data['result'][$i]['bf_height'] = $value['bf_height'];
    }
}
  
  
echo json_encode($data,json_unescaped_unicode);
\`\`\`

/get_map_data.php 파일을 만든다.

\`\`\`php
include_once "./_common.php";
  
$sql_search = " where wr_is_comment = 0 ";
  
$cord = $_request['min_map_latitude']." ".$_request['min_map_longitude'].", ".$_request['max_map_latitude']." ".$_request['max_map_longitude'];
  
if($cord) {
    $sql_search .= " and mbrcontains(geomfromtext('linestring($cord)'), \`wr_gps\`)";
}
  
$sql_order = " order by wr_id asc ";
  
$sql_common = " from {$g5['foodelivery_form_table']} ";
  
$sql = " select count(*) as cnt {$sql_common} {$sql_search} {$sql_order} ";
$row = sql_fetch($sql);
$total_count = $row['cnt'];
  
$rows = 10;
$total_page  = ceil($total_count / $rows);  // 전체 페이지 계산
if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
$from_record = ($page - 1) * $rows; // 시작 열을 구함
  
  
$sql = " select *, x(wr_gps)as latitude, y(wr_gps) as longitude {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";
  
$result = sql_query($sql);
  
?>
<div class="beaver_map_area">
    <div class="map_area">
        <div id="map"></div>
        <a id="currentpositionbtn" href="#" onclick="getcurrentpositionevent(); return false;">
            <span class="current"><i class="fa fa-crosshairs"></i>현위치</span>
        </a>
    </div>
    <div class="map_list">
        <div class="wrapper">
            <div class="head">
                <span class="total_count">조회 <?php echo $total_count ?>건</span>
            </div>
            <ul class="body">
                <?php
                for ($i=0;$row = sql_fetch_array($result);$i++) {
                    $img = get_fd_image_data($row['token_id'],'limit 1');
                    ?>
                    <li>
                        <a class="list_item" href="<?php echo get_pretty_url(fd,$row['wr_id'])?>" target="_blank">
                            <div class="thumb_area">
                                <?php foreach ($img as $item) { ?>
                                    <img class="thumb" src="<?=$item['bf_thumburl']?>" width="<?=$item['bf_width']?>" height="<?=$item['bf_height']?>" />
                                <?php } ?>
                            </div>
                            <div class="content_area">
                                <div class="title">
                                    <?php echo $row['wr_subject']?>
                                </div>
                                <div class="content">
                                    <?php echo $row['wr_content']?>
                                </div>
                            </div>
                        </a>
                    </li>
                <?php } ?>
                <?php if($i == 0) echo "<li id='empty_map'>조회 된 정보가 없습니다.</li>"; ?>
            </ul>
            <div id="page_navigation">
                <?php echo get_paging(g5_is_mobile ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, $qstr.'&amp;page='); ?>
            </div>
        </div>
    </div>
</div>
\`\`\`



## 맺음말 :

마커 클러스터러를 이용해서 하려 했더니 어떻게 할줄 몰라서 삼일동안 쌩고생 했다.. 카카오 개발자 센터에서 질문 답변 해보니까 이해를 못한가 쓸때 없는 코드 주는데.. 

결국엔 냑에서 컨텐츠몰에 있던거 사이트 들어가서 분석 해서.. 어렵게 가져다 활용함.. 백단은 겨우야 만들었는데 힘들다. 

이렇게 아래 이미지 처럼 클러스터 마커 누르면 이 지역에 좌표를 이용해서 정보를 가져올 수 있게 만들었다~ 

깃헙에 저장 해야겠다.











`,link:"/그누&영카트/그누보드 카카오 맵 연동 (2)"},{title:"그누보드 카카오 맵 연동 (3)",content:`
# {{ $frontmatter.title }}

## 제작 방법 설명 : 

이전의 카카오맵 지도 관련해서 포스팅 한적이 있었다.



이전 자료를 참고하는데 쿼리부분에서 에러가 나서 한참 헤맸더니 몇가지 사실을 발견했다.



지금 필자의 디비 버전은 mysql8 이상으로 쓰고 있는데 버전 업글을 하고 나서부터 문제 발생 된 사실인데



첫번째 에러는 error code: 1305. function demoplugindb.geomfromtext does not exist 라고 나와서 찾아보니까 약간 문법적으로 달라졌다.




아래 코드로 수정하면 된다.

\`\`\`
st_geomfromtext
\`\`\`

그러고 나서 두번째 에러는 1305 : function demoplugindb.x does not exist 라고 나온다.



여기서부터 막히는데 한참동안 구글링한끝에~ 웨어절 문제가 아니라 셀렉트문에서 문제였다.


마리아 디비 와 비슷한것 같다.



st_x 와 st_y 문법으로 변경되었다.



https://mariadb.com/kb/en/st_x/
	


결국에는 아래 소스코드로 쿼리문 검색하니 아주 잘 나온다.


\`\`\`sql
select st_x(wr_gps) as latitude, st_y(wr_gps) as longitude from g5_write_foodelivery 
 
where wr_is_comment = 0 
 
and mbrcontains(geomfromtext('linestring(31.386686783474833 119.7940308372939, 43.04458642579598 135.5164956111702)'), wr_gps) 
 
order by wr_id asc limit 0, 10
\`\`\`

이렇게 바뀐건데.. 간만에 고생했다..



그리고 혹시 몰라서 딴 블로그 보면서 따라하는데 카카오맵 쓸때는 허용 아이피 제발 등록하지 않고 그냥 쓰면된다.



그거 내꺼 아이피 등록 했다가 데이터가 조회 안되서 문제 될수 있으니 참고하길..

`,link:"/그누&영카트/그누보드 카카오 맵 연동 (3)"},{title:"그누보드 홈피 검색 노출하기",content:`
# {{ $frontmatter.title }}


## 설명 :

그누보드 홈피 검색 노출 하는 방법에 대해서 포스팅 글 남겨봅니다.

 

1. 기본설정에 보면 추가 메타 라고 칸이 있습니다. 여기에 메타 태그를 추가하면 됩니다. ( 따로 추가 할 경우 head.sub.php 로 추가 해야됩니다.)

\`\`\`html
<meta name="author" content="비버테크">
<meta name="keywords" content="비버윤,윤비버,비버테크,php개발,솔루션,홈페이지,쇼핑몰,백오피스,웹개발">
<meta name="description" content="비버윤,윤비버,비버테크,php개발,솔루션,홈페이지,쇼핑몰,백오피스,웹개발">
<meta property="og:type" content="website">
<meta property="og:title" content="비버테크">
<meta property="og:description" content="비버윤,윤비버,비버테크,php개발,솔루션,홈페이지,쇼핑몰,백오피스,웹개발">
<meta property="og:image" content="http://도메인/img/og.jpg">
<meta property="og:image:width" content="200">
<meta property="og:image:height" content="200">
<meta property="og:url" content="http://도메인">
<link rel="canonical" href="http://도메인">
<link rel="icon" type="image/png" sizes="16x16" href="도메인/img/favicon.png">
<meta name="google-site-verification" content="....." />
\`\`\`



위에 소스에 보면 키워드와 데스크립션은 비슷하게 입력해야 됩니다. 연관된 단어로 하는게 좋습니다.

 

 

2. 로봇 텍스트 만들기 

로봇텍스트? 검색 로봇에게 사이트 및 웹 페이지를 수집할 수 있도록 허용하거나 제한하는 국제권고안입니다.

[참고자료](https://searchadvisor.naver.com/guide/seo-basic-robots) 
	
robots.txt 파일을 만들어서 루트 위치에 넣습니다. 아래 소스를 넣으면 됩니다. (응용해서 노출할것과 비노출할것을 구분해야됩니다.)

\`\`\`text
user-agent: *
  
disallow: /adm/
disallow: /bbs/register.php
disallow: /bbs/content.php?co_id=provision
disallow: /bbs/content.php?co_id=privacy
disallow: /bbs/login.php
  
allow:/
\`\`\`



3. 사이트 맵 만들기 

 

사이트맵은 사이트에 있는 페이지, 동영상 및 기타 파일과 그 관계에 관한 정보를 제공하는 파일입니다. google과 같은 검색엔진은 이 파일을 읽고 사이트를 더 효율적으로 크롤링합니다

사이트맵이 있어야지 페이지 노출을 좀 더 구체적으로 노출 할 수 있어서 만들어 놓은게 좋습니다.

sitemap.php 파일을 만들어서 루트 위치에 넣습니다.

\`\`\`php
<?php
include_once("./_common.php");
  
header("content-type: text/xml;charset=\\"utf-8\\"");
header("cache-control: no-cache, must-revalidate");
header("pragma: no-cache");
  
echo "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>\\n";
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php
$query = sql_query("select bo_table from \`{$g5['board_table']}\` where bo_read_level=1");
while($temp = sql_fetch_array($query)) {
    $bo_arr[] = $temp['bo_table'];
}
  
foreach($bo_arr as $bo) {
    $bbs_url = get_pretty_url($bo);
    echo "<url>\\n";
    echo "<loc>$bbs_url</loc>\\n";
    $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` order by wr_datetime desc");
    $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
     
    echo "<lastmod>$lastmod</lastmod>\\n";
    echo "<changefreq>daily</changefreq>\\n";
    echo "<priority>0.9</priority>\\n";
    echo "</url>\\n";
  
    $query = sql_query("select wr_id, wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_is_comment='0' and wr_option not like '%secret%'");
    while($row = sql_fetch_array($query)) {
        $bbs_url = get_pretty_url($bo,$row['wr_id']);
        echo "<url>";
        echo "<loc>$bbs_url</loc>";
        $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_parent='{$row['wr_id']}' order by wr_id desc");
        $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        if(!$lastmod) {
            $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_id='{$row['wr_id']}'");
            $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        }
        if(!$lastmod) $lastmod = g5_time_ymd;
        echo "<lastmod>$lastmod</lastmod>";
        echo "<changefreq>weekly</changefreq>";
        echo "<priority>0.8</priority>";
        echo "</url>\\n";
    }
}
?>
</urlset>
\`\`\`

위에 소스를 설명 하자면 bo_read_level이 1 조건문이 있는데 이건 글 읽기 1 레벨 일때만 게시판이 보여집니다. 아니면 게시판이 노출 되지 않습니다.

도메인/sitemap.php 로 접근 해서 확인 하면 됩니다.

 

 

자! 이제 재료 준비는 다 됐고 등록하는 방법에 대해서 설명합니다. 

구글 웹마스터 도구에 등록하면 됩니다.

구글 서치 콘솔 로 검색합니다.

https://search.google.com/search-console?hl=ko
 

접속을 하게되면 도메인 과 url 접두어 두개가 나옵니다

여기서 url 접두어에 주소를 넣습니다.  (제가 쓸때는 이게 편해서..)

주소를 누르면 이제는 방문자 분석 스크립트를 선택 할 수 있는게 주어지는데 저는 태그로 선택 했습니다.

스크립트로도 해도 상관 없습니다. 복붙해서 그누보드 기본설정에 방문자 분석 스크립트에 넣으시면 되고 메타 태그를 선택 했을때는 추가 메타에서 맨 아래 부분에 넣으면 됩니다.

완료 버튼을 누르고 상세보기로 접근합니다. 그러면  왼쪽 메뉴에서 개요가 있고 쭈루룩 내려가면 사이트 맵이 있습니다. 사이트 맵으로 접근합니다.

새 사이트 맵 추가가 있습니다. 여기서 /sitemap.php 로 입력합니다 제출 버튼 누르면 되는데 제출된 사이트 맵에 보면 상태에서 성공하면 성공이 뜨고 실패 하면 빨간색으로 글이 표시 됩니다.

여기까지 하면 끝!! 구글은 1~2주정도 지나야지 검색에 노출 됩니다. 

 

이제는 네이버 웹마스터 도구로 접속합니다.

https://searchadvisor.naver.com/console/board

로그인 후에 

사이트관리 페이지에서 사이트 주소를 입력합니다.

여기서 사이트 소유 확인 페이지가 나옵니다.

저는 태그로 선택 했습니다. 해당 태그를 바로 추가 메타 태그 칸에 추가 합니다. 

그러고 확인 누르면 사이트 목록에 홈페이지 주소가 보입니다.

주소를 클릭하면 상세 페이지로 접근됩니다.

왼쪽 메뉴에 보면 검증 메뉴를 접근해서 웹페이지 최적화로 접근합니다. 

여기서 url 입력 라고 보이는데 녹색 확인 버튼을 누릅니다. 

여기서 5개 이상 항목에서 상태가 성공이라고 뜨면 됩니다.

그러고나서 요청 페이지로 클릭합니다. 사이트 맵 제출로 접근합니다.

여기도 똑같이 sitemap.php 라고 입력 후에 확인 누릅니다. 그러면 밑에 제출된 사이트 맵이 고스란히 출력 됩니다.

그리고 위에 보면 요청에서 웹페이지 수집으로 접속 합니다. 수집 요청 url 입력 가 보이는데 여기서 확인 버튼을 누릅니다.

그러면 수집 요청 결과가 고스란히 출력 됩니다. 요청 완료가 나오면 됩니다.

그러고 혹시나 하는 생각이 들면 간단체크에 접근합니다. 여기서 사이트 주소를 입력 하고 조회를 합니다.

진단 결과가 나오는데 저는 7가지 성공이라 표시 됐습니다.

 

네이버는 3일정도 혹은 한달 정도 지나야지 노출이 잘 된다고 합니다. 기다리면 될것 같습니다.

 

줌 사이트 등록

https://help.zum.com/submit/register
	

 

빙 (마소) 사이트 등록

https://www.bing.com/webmasters
	
 

다음 사이트 등록

https://register.search.daum.net/index.daum


 

`,link:"/그누&영카트/그누보드 홈피 검색 노출하기"},{title:"그누보드에서 메일 보내기",content:`
# {{ $frontmatter.title }}

## 설명 :

그누보드로 메일 보내려면 제일 편한게 다음 스마트워크 신청 하는게 좋다.
일단 비교 하는 레퍼런스 보면 된다.
 
https://blog.mailplug.com/1254
	

위에 자료를 참고해보니까 다음 스마트워크를 쓰는게 편하다 왜냐면 대량으로 보낼것도 아니고
간편하게 보낼거라서 선택 했다.
 
일단 신청부터 하고 받은메일을 확인하면 mx레코드 두개를 준다 
 
https://smarter0214.tistory.com/8


https://www.cmsfactory.net/10224


위에 링크 확인해서 아마존 서버에 연동하면된다.
 
세팅 다 하면 테스트로 그누보드 설정에서 대표 이메일을 등록해서 발송 테스트 하면 끝!!!`,link:"/그누&영카트/그누보드에서 메일 보내기"},{title:"그누에 ajax 사용할때 주의사항",content:`
# {{ $frontmatter.title }}


## 설명 :


일단 그누에다가 ajax를 사용할때 csrf 보안 함수 와 같이 적용하는 방법에 대해서 설명하겠다.

요새 보안 이슈가 있다보니 그누에서도 적용 해야된다. 필수적으로 해놓아야한다.

 

 

스크립트 적용법 

어드민에서 사용되는 방법인데 어디든 응용해서 사용하면된다.

프론트쪽에 사용하려면 /js/common.js 확인하면 마지막 쯤에 있다. 그걸로 응용하면된다.

\`\`\`js
var token = get_ajax_token();
if(!token) {
    alert("토큰 정보가 올바르지 않습니다.");
    return false;
}

if(typeof $(this).token === "undefined")
    $(this).prepend('<input type="hidden" name="token" value="">');

$(this).find("input[name=token]").val(token);

$.ajax({
    type:'post',
    url:'./test.php',
    data:{act_button:'삭제',token:$(this).find("input[name=token]").val(),ep_no:lastitemno},
    datatype:'json',
    success:function () {},
    error:function (error) {
        console.log(error);
    }
});
\`\`\`

어드민 컨펌 쪽에서 사용되는 함수들 

\`\`\`php
include_once('./_common.php');
 
check_demo();
 
check_admin_token();
\`\`\`

이렇게 두개정도가 필수이다.

일치하지 않으면 에러 난다.










`,link:"/그누&영카트/그누에 ajax 사용할때 주의사항"},{title:"네이버페이 관련 소스코드",content:`
# {{ $frontmatter.title }}




냑에 올린 자료인데 언제 없어질지 몰라서 따로 배포 하였다.


영카트 네이버페이 주문 방식이 5.4.18 버전에서 pg사에 통합되면서

상품페이지에서 직접 네이버페이로 주문할 수 있는 기능이 사라졌습니다



----------------------------------

/shop.config.php
----------------------------------
97 ~ 104 줄의 내용을 복사해서 붙여넣기로 변경함


----------------------------------
/ shop / settle_naverpay.inc.php
----------------------------------
3 ~ 10 줄의 내용을 복사해서 붙여넣기로 변경함


shop.config.php

\`\`\`php
<?php
if (!defined('_gnuboard_')) exit; // 개별 페이지 접근 불가
 
if (!defined('g5_use_shop') || !g5_use_shop) return;
 
//------------------------------------------------------------------------------
// 쇼핑몰 상수 모음 시작
//------------------------------------------------------------------------------
 
define('g5_shop_dir', 'shop');
 
define('g5_shop_path',  g5_path.'/'.g5_shop_dir);
define('g5_shop_url',   g5_url.'/'.g5_shop_dir);
define('g5_mshop_path', g5_mobile_path.'/'.g5_shop_dir);
define('g5_mshop_url',  g5_mobile_url.'/'.g5_shop_dir);
 
define('g5_shop_img_url',  g5_shop_url.'/'.g5_img_dir);
define('g5_mshop_img_url', g5_mshop_url.'/'.g5_img_dir);
 
// 보안서버주소 설정
if (g5_https_domain) {
    define('g5_https_shop_url', g5_https_domain.'/'.g5_shop_dir);
    define('g5_https_mshop_url', g5_https_domain.'/'.g5_mobile_dir.'/'.g5_shop_dir);
} else {
    define('g5_https_shop_url', g5_shop_url);
    define('g5_https_mshop_url', g5_mshop_url);
}
 
//------------------------------------------------------------------------------
// 쇼핑몰 상수 모음 끝
//------------------------------------------------------------------------------
 
 
//==============================================================================
// 쇼핑몰 필수 실행코드 모음 시작
//==============================================================================
 
// 쇼핑몰 설정값 배열변수
$default = sql_fetch(" select * from {$g5['g5_shop_default_table']} ");
 
if(!defined('_theme_preview_')) {
    // 테마 경로 설정
    if(defined('g5_theme_path')) {
        define('g5_theme_shop_path',   g5_theme_path.'/'.g5_shop_dir);
        define('g5_theme_shop_url',    g5_theme_url.'/'.g5_shop_dir);
        define('g5_theme_mshop_path',  g5_theme_path.'/'.g5_mobile_dir.'/'.g5_shop_dir);
        define('g5_theme_mshop_url',   g5_theme_url.'/'.g5_mobile_dir.'/'.g5_shop_dir);
    }
 
    // 스킨 경로 설정
    if(preg_match('#^theme/(.+)$#', $default['de_shop_skin'], $match)) {
        if(defined('g5_theme_path')) {
            define('g5_shop_skin_path',  g5_theme_path.'/'.g5_skin_dir.'/shop/'.$match[1]);
            define('g5_shop_skin_url',   g5_theme_url .'/'.g5_skin_dir.'/shop/'.$match[1]);
        } else {
            define('g5_shop_skin_path',  g5_path.'/'.g5_skin_dir.'/shop/'.$match[1]);
            define('g5_shop_skin_url',   g5_url .'/'.g5_skin_dir.'/shop/'.$match[1]);
        }
    } else {
        define('g5_shop_skin_path',  g5_path.'/'.g5_skin_dir.'/shop/'.$default['de_shop_skin']);
        define('g5_shop_skin_url',   g5_url .'/'.g5_skin_dir.'/shop/'.$default['de_shop_skin']);
    }
 
    if(preg_match('#^theme/(.+)$#', $default['de_shop_mobile_skin'], $match)) {
        if(defined('g5_theme_path')) {
            define('g5_mshop_skin_path', g5_theme_mobile_path.'/'.g5_skin_dir.'/shop/'.$match[1]);
            define('g5_mshop_skin_url',  g5_theme_url .'/'.g5_mobile_dir.'/'.g5_skin_dir.'/shop/'.$match[1]);
        } else {
            define('g5_mshop_skin_path', g5_mobile_path.'/'.g5_skin_dir.'/shop/'.$match[1]);
            define('g5_mshop_skin_url',  g5_mobile_url .'/'.g5_skin_dir.'/shop/'.$match[1]);
        }
    } else {
        define('g5_mshop_skin_path', g5_mobile_path.'/'.g5_skin_dir.'/shop/'.$default['de_shop_mobile_skin']);
        define('g5_mshop_skin_url',  g5_mobile_url .'/'.g5_skin_dir.'/shop/'.$default['de_shop_mobile_skin']);
    }
}
 
if( !isset($g5['g5_shop_post_log_table']) || !$g5['g5_shop_post_log_table'] ){
    $g5['g5_shop_post_log_table'] = g5_shop_table_prefix.'order_post_log'; // 주문요청 로그 테이블
}
 
// 옵션 id 특수문자 필터링 패턴
define('g5_option_id_filter', '/['\\"\\\\'\\\\\\"]/');
 
if(isset($_server['https']) && $_server['https']=='on') {
    // 토스페이먼츠 현금영수증 실결제 url 상수
    define('shop_tosspayments_cashreceipt_real_js', 'https://pgweb.tosspayments.com/web_server/js/receipt_link.js');
    // 토스페이먼츠 현금영수증 테스트 url 상수
    define('shop_tosspayments_cashreceipt_test_js', 'https://pgweb.tosspayments.com:7085/web_server/js/receipt_link.js');
} else {
    // 토스페이먼츠 현금영수증 실결제 url 상수
    define('shop_tosspayments_cashreceipt_real_js', 'http://pgweb.tosspayments.com/web_server/js/receipt_link.js');
    // 토스페이먼츠 현금영수증 테스트 url 상수
    define('shop_tosspayments_cashreceipt_test_js', 'http://pgweb.tosspayments.com:7085/web_server/js/receipt_link.js');
}
 
// [영카트원본] 네이버페이를 신용카드 결제창에서 지원하고 있으므로 네이버에 직접신청하는 결제 기능을 미사용(false:기본설정) 합니다. (kagla,211019)
// [영카트원본] 네이버에서 직접신청 결제를 사용(true)하시는 경우 모든 문제를 직접 해결해 주셔야 합니다.
//========================================================================================
// [우주정복 수정본] 우주정복s23.0.0 에서는 네이버페이를 사용하도록 다시 되돌림
// https;//series8.kr    @우주정복 @시리즈8 @매일프랜즈
//----------------------------------------------------------------------------------------
define('g5_shop_direct_naverpay', true); // true 사용, 상품페이지에 보이게 다시 살림. false 미사용(pg사에서 지원하여 미사용하게 되었음)
//========================================================================================
 
/*
// 주문상태 상수
define('g5_od_status_order'     , '입금확인중');
define('g5_od_status_settle'    , '결제완료');
define('g5_od_status_ready'     , '배송준비중');
define('g5_od_status_delivery'  , '배송중');
define('g5_od_status_finish'    , '배송완료');
*/
 
/*
# 주문상태는 상수로 처리하지 않고 실제 문자열 값을 처리한다.
 
'쇼핑'          : 고객이 장바구니에 상품을 담고 있는 경우 입니다.
'입금확인중'    : 무통장, 가상계좌의 경우 결제하기 전을 말합니다.
'결제완료'      : 결제가 완료된 상태를 말합니다.
'배송준비중'    : 배송준비중이 되면 취소가 불가합니다.
'배송중'        : 배송중이면 반품이 불가합니다.
'배송완료'      : 배송이 완료된 상태에서만 포인트적립이 가능합니다.
'취소'          : 입금확인중이나 결제완료후 취소가 가능합니다.
'반품'          : 배송완료 후에만 반품처리가 가능합니다.
'품절'          :
 
 
# 13.10.04
 
'쇼핑'  : 고객이 장바구니에 상품을 담고 있는 경우 입니다.
'주문'  : 무통장, 가상계좌의 경우 결제하기 전을 말합니다.
'입금'  : 신용카드, 계좌이체, 휴대폰결제가 된 상태, 무통장, 가상계좌는 주문후 입금한 상태를 말합니다.
'배송'  : 배송이 되면 취소가 불가합니다.
'완료'  : 배송이 완료된 상태에서만 포인트적립이 가능합니다.
'취소'  : 입금이후로는 고객의 취소가 불가합니다.
'반품'  : 배송완료 후에만 반품처리가 가능합니다.
'품절'  : 주문이나 입금후 상품의 품절된 상태를 나타냅니다.
*/
 
//==============================================================================
// 쇼핑몰 필수 실행코드 모음 끝
//==============================================================================;


\`\`\`





shop 폴더 내부에 추가하기

\`\`\`php
<?php
if (!defined('_gnuboard_')) exit; // 개별 페이지 접근 불가
// [영카트원본] 네이버페이를 신용카드 결제창에서 지원하고 있으므로 네이버에 직접신청하는 결제 기능을 미사용(return:기본설정) 합니다.
// [영카트원본] 네이버에서 직접신청 결제를 사용하시는 경우 모든 문제를 직접 해결해 주셔야 합니다.
//========================================================================================
// [우주정복 수정본] 우주정복s23.0.0 에서는 네이버페이를 사용하도록 다시 되돌림
// https;//series8.kr    @우주정복 @시리즈8 @매일프랜즈
//----------------------------------------------------------------------------------------
// if (!defined('g5_shop_direct_naverpay') || !g5_shop_direct_naverpay) return;
//========================================================================================
 
if(!$is_admin && !$default['de_card_test'] && $default['de_naverpay_test']) {
    if($default['de_naverpay_mb_id'] && ($is_guest || $member['mb_id'] != $default['de_naverpay_mb_id']))
        return;
}
 
if(!$default['de_naverpay_cert_key'] || !$default['de_naverpay_button_key'])
    return;
 
if(basename($_server['script_name']) == 'item.php') {
    if(!$is_orderable)
        return;
}
 
$naverpay_button_js = '';
 
$is_mobile_order = is_mobile();
//$is_mobile_order = g5_is_mobile;
$naverpay_button_enable = 'y';
 
$naverpay_button_count = 2;
if(basename($_server['script_name']) == 'cart.php')
    $naverpay_button_count = 1;
 
if($is_mobile_order) {
    if($default['de_naverpay_test'])
        $naverpay_button_js_url = 'https://test-pay.naver.com/customer/js/mobile/naverpaybutton.js';
    else
        $naverpay_button_js_url = 'https://pay.naver.com/customer/js/mobile/naverpaybutton.js';
 
    $naverpay_button_js = '<script type="text/javascript" src="'.$naverpay_button_js_url.'" charset="utf-8"><\/script>
    <script type="text/javascript" >//<![cdata[
    naver.naverpaybutton.apply({
    button_key: "'.$default['de_naverpay_button_key'].'", // 네이버페이에서 제공받은 버튼 인증 키 입력
    type: "ma", // 버튼 모음 종류 설정
    color: 1, // 버튼 모음의 색 설정
    count: '.$naverpay_button_count.', // 버튼 개수 설정. 구매하기 버튼만 있으면 1, 찜하기 버튼도 있으면 2를 입력.
    enable: "'.$naverpay_button_enable.'", // 품절 등의 이유로 버튼 모음을 비활성화할 때에는 "n" 입력
    buy_button_handler : buy_nc, // 구매하기 버튼 이벤트 handler 함수 등록, 품절인 경우 not_buy_nc 함수 사용
    wishlist_button_handler : wishlist_nc, // 찜하기 버튼 이벤트 handler 함수 등록
    "":""
    });
    //]]><\/script>'.php_eol;
} else {
    $naverpay_button_js = '<script type="text/javascript" src="https://pay.naver.com/customer/js/naverpaybutton.js" charset="utf-8"><\/script>
    <script type="text/javascript" >//<![cdata[
    naver.naverpaybutton.apply({
    button_key: "'.$default['de_naverpay_button_key'].'", // 페이에서 제공받은 버튼 인증 키 입력
    type: "a", // 버튼 모음 종류 설정
    color: 1, // 버튼 모음의 색 설정
    count: '.$naverpay_button_count.', // 버튼 개수 설정. 구매하기 버튼만 있으면 1, 찜하기 버튼도 있으면 2를 입력.
    enable: "'.$naverpay_button_enable.'", // 품절 등의 이유로 버튼 모음을 비활성화할 때에는 "n" 입력
    buy_button_handler : buy_nc, // 구매하기 버튼 이벤트 handler 함수 등록, 품절인 경우 not_buy_nc 함수 사용
    wishlist_button_handler : wishlist_nc, // 찜하기 버튼 이벤트 handler 함수 등록
    "":""
    });
    //]]><\/script>'.php_eol;
}
 
$naverpay_button_js .= '<input type="hidden" name="naverpay_form" value="'.basename($_server['script_name']).'">'.php_eol;
 
if($default['de_naverpay_test'] || $default['de_card_test']) {
    $req_addr     = 'ssl://test-pay.naver.com';
    $buy_req_url  = 'post /customer/api/order.nhn http/1.1';
    $wish_req_url = 'post /customer/api/wishlist.nhn http/1.1';
    $req_host     = 'test-pay.naver.com';
    $req_port     = 443;
    if($is_mobile_order) {
        $orderurl = 'https://test-m.pay.naver.com/mobile/customer/order.nhn';
        $wishurl  = 'https://test-m.pay.naver.com/mobile/customer/wishlist.nhn';
    } else {
        $orderurl = 'https://test-pay.naver.com/customer/order.nhn';
        $wishurl  = 'https://test-pay.naver.com/customer/wishlistpopup.nhn';
    }
} else {
    $req_addr     = 'ssl://pay.naver.com';
    $buy_req_url  = 'post /customer/api/order.nhn http/1.1';
    $wish_req_url = 'post /customer/api/wishlist.nhn http/1.1';
    $req_host     = 'pay.naver.com';
    $req_port     = 443;
    if($is_mobile_order) {
        $orderurl     = 'https://m.pay.naver.com/mobile/customer/order.nhn';
        $wishurl      = 'https://m.pay.naver.com/mobile/customer/wishlist.nhn';
    } else {
        $orderurl     = 'https://pay.naver.com/customer/order.nhn';
        $wishurl      = 'https://pay.naver.com/customer/wishlistpopup.nhn';
    }
}
 
define('shipping_additional_price', $default['de_naverpay_sendcost']);
 
$naverpay_request_js = '<script type="text/javascript" >//<![cdata[
function buy_nc(url)
{
    var f = $(this).closest("form").get(0);
 
    var check = fsubmit_check(f);
    if ( check ) {
        //네이버페이로 주문 정보를 등록하는 가맹점 페이지로 이동.
        //해당 페이지에서 주문 정보 등록 후 네이버페이 주문서 페이지로 이동.
        //location.href=url;
 
        //var win_buy_nc = window.open("_blank", "win_buy_nc", "scrollbars=yes,width=900,height=700,top=10,left=10");
        //f.action = "'.g5_shop_url.'/naverpay/naverpay_order.php";
        //f.target = "win_buy_nc";
        //f.submit();
        //return false;
 
        $.ajax({
            url : "'.g5_shop_url.'/naverpay/naverpay_order.php",
            type : "post",
            data : $(f).serialize(),
            async : false,
            cache : false,
            datatype : "json",
            success : function(data) {
                if(data.error) {
                    alert(data.error);
                    return false;
                }
 
                document.location.href = "'.$orderurl.'?order_id="+data.order_id+"&shop_id="+data.shop_id+"&total_price="+data.total_price;
            }
        });
    }
 
    return false;
}
function wishlist_nc(url)
{
    var f = $(this).closest("form").get(0);
 
    // 네이버페이로 찜 정보를 등록하는 가맹점 페이지 팝업 창 생성.
    // 해당 페이지에서 찜 정보 등록 후 네이버페이 찜 페이지로 이동.
    '.($is_mobile_order ? '' : 'var win_wishlist_nc = window.open(url,"win_wishlist_nc","scrollbars=yes,width=400,height=267");'.php_eol.'f.target = "win_wishlist_nc";').'
    f.action = "'.g5_shop_url.'/naverpay/naverpay_wish.php";
    f.submit();
 
    return false;
}
function not_buy_nc()
{
    alert("죄송합니다. 네이버페이로 구매가 불가한 상품입니다.");
    return false;
}
//]]><\/script>'.php_eol;

\`\`\`


현재는 네이버 페이가 영카트 결제 시스템에 포함 되어 있다고 한다.

통합되다 보니 따로 연동할 필요 없다.


## 참고 자료 :

https://sir.kr/bbs/board.php?bo_table=g5_skin&wr_id=52310`,link:"/그누&영카트/네이버페이 관련 소스코드"},{title:"다중검색 만들기",content:`
# {{ $frontmatter.title }}


다중검색에 대해서 포스팅 글 올려본다. 

그누보드에서 다중검색은 약간 까다로운 부분이 있다. 하지만 완전히 뜯어 고칠 필요는 없고 약간 수정 하면 된다. 

수정 방법에 대해서 설명 하겠습니다.


위에 사진 처럼 다중 검색을 하려면 get 파라메터에서 배열을 이용해서 검색을 하면 된다. 

(사진은 복구 못해서 뺸다.)

이 방법대로 개발하게되면 브라우저 주소가 좀 지저분하게 보이고 속도 또한 약간 저하될 수 있다.

하지만 제이쿼리 ajax로 써서 하면 깔끔하게 만들수 있다.
 

아래 소스 코드 참고해서 응용하자

\`\`\`php
<form name="fsearch" method="get" class="form_bbs_search">
    <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
    <input type="hidden" name="sca" value="<?php echo $sca ?>">
    <input type="hidden" name="sop" value="and">
    <?php if ($is_category) { ?>
    <nav id="bo_cate">
        <h2><?php echo $board['bo_subject'] ?> 카테고리</h2>
        <ul id="bo_cate_ul">
            <?php echo $category_option ?>
        </ul>
    </nav>
    <?php } ?>
    <div class="search_bar">
        <input type="text" name="address" id="address" disabled>
        <button type="button" class="btn btn_b03" id="btn_addr">주소검색</button>
        <input type="text" name="stx" value="<?php echo stripslashes($stx) ?>" id="stx" class="sch_input" size="25" maxlength="20" placeholder="매장명을 입력해주세요">
        <button type="button" id="searchbtn" class="btn btn_submit">검색</button>
    </div>
</form>
\`\`\`



아래 소스코드는 list.skin.php 에서 맨 상위 부분에 넣으면 된다. 

(원래 분류 코드가 있긴 하지만 게시판에서 따로 사용해야되고 수정한 부분이 있어서 아래 소스를 사용하면 된다.)

\`\`\`php
// 분류 사용 여부
$is_category = false;
$category_option = '';
if ($board['bo_use_category']) {
    $is_category = true;
    $categories = explode('|', $board['bo_category_list']); // 구분자가 , 로 되어 있음
    for ($i=0; $i<count($categories); $i++) {
        $start = $i + 1;
        $category = trim($categories[$i]);
        if ($category=='') continue;
        $category_option .= '<li>'.php_eol;
        $category_option .= '<input type="checkbox" name="sca[]" id="sca_id_'.$start.'" value="'.$category.'"';
        $category_option .= ' '.($category == $_request['sca'] ? "checked" : "").'> <label for="sca_id_'.$start.'"><span>'.$category;
        $category_option .= '</span></label></li>';
    }
}
\`\`\`



여기서 sca를 배열로 만들고 검색을 누르면 바로 ajax 로 출력된다.

아래 소스는 sca 배열을 | 로 구분해서 ajax통신해서 값이 전달 된다.

\`\`\`js
function actions()
{
    let checked = []
    $("input[name='sca[]']:checked").each(function () {
        checked.push($(this).val());
    });
    let arr = checked.join("|");
    let address = $('#address').val();
    let stx = $('#stx').val();
  
    $.ajax({
        type:'post',
        url : g5_plugin_url + '/list.ajax.php',
        data:{bo_table:g5_bo_table,sca:arr,address:address,stx:stx},
        success:function (data) {
            $('#gall_div').html(data);
        }
    });
}

\`\`\`




ajax 내부에 보면 성공일때 #gall_div에서 출력 되는데  이렇게 gall_ul 위에다가 gall_div로 상위를 한번 감싸줬다.

한마디로 gall_div 내부에서 ajax 출력된다.

\`\`\`html
<div id="gall_div">
  <ul id="gall_ul">
\`\`\`


list.ajax.php 페이지 만든다. 플러그인에 넣는다.

원래 쓰던거라서 게시판 목록에 있던 소스를 바꿔치기 해도 괜찮다. (하지만 내가 소스를 다듬어서 만든거라서 아래 소스 코드가 도움된다.)

여기서 중요한게 get_sql_search2 함수이다.  이건 새로 만든 함수인데 바로 아래 소스 참고하면 된다.

\`\`\`php
include_once "./_common.php";
  
$board = get_board_db($bo_table, true);
  
$sop = strtolower($sop);
if ($sop != 'and' && $sop != 'or')
    $sop = 'and';
  
// 분류 선택 또는 검색어가 있다면
$stx = trim($stx);
//검색인지 아닌지 구분하는 변수 초기화
$is_search_bbs = false;
  
if ($sca || $stx || $stx === '0') {     //검색이면
    $is_search_bbs = true;      //검색구분변수 true 지정
    $sql_search = get_sql_search2($sca, $sfl, $stx, $sop);
  
    // 가장 작은 번호를 얻어서 변수에 저장 (하단의 페이징에서 사용)
    $sql = " select min(wr_num) as min_wr_num from {$write_table} ";
    $row = sql_fetch($sql);
    $min_spt = (int)$row['min_wr_num'];
  
    if (!$spt) $spt = $min_spt;
  
    $sql_search .= " and (wr_num between {$spt} and ({$spt} + {$config['cf_search_part']})) ";
  
    $sql = " select count(distinct \`wr_parent\`) as \`cnt\` from {$write_table} where {$sql_search} ";
    $row = sql_fetch($sql,true);
    $total_count = $row['cnt'];
} else {
    $sql_search = "";
  
    $total_count = $board['bo_count_write'];
}
  
if(g5_is_mobile) {
    $page_rows = $board['bo_mobile_page_rows'];
    $list_page_rows = $board['bo_mobile_page_rows'];
} else {
    $page_rows = $board['bo_page_rows'];
    $list_page_rows = $board['bo_page_rows'];
}
  
if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
  
// 년도 2자리
$today2 = g5_time_ymd;
  
$list = array();
$i = 0;
$notice_count = 0;
$notice_array = array();
  
// 공지 처리
if (!$is_search_bbs) {
    $arr_notice = explode(',', trim($board['bo_notice']));
    $from_notice_idx = ($page - 1) * $page_rows;
    if($from_notice_idx < 0)
        $from_notice_idx = 0;
    $board_notice_count = count($arr_notice);
  
    for ($k=0; $k<$board_notice_count; $k++) {
        if (trim($arr_notice[$k]) == '') continue;
  
        $row = sql_fetch(" select * from {$write_table} where wr_id = '{$arr_notice[$k]}' ");
  
        if (!$row['wr_id']) continue;
  
        $notice_array[] = $row['wr_id'];
  
        if($k < $from_notice_idx) continue;
  
        $list[$i] = get_list($row, $board, $board_skin_url, g5_is_mobile ? $board['bo_mobile_subject_len'] : $board['bo_subject_len']);
        $list[$i]['is_notice'] = true;
        $list[$i]['num'] = 0;
        $i++;
        $notice_count++;
  
        if($notice_count >= $list_page_rows)
            break;
    }
}
  
$total_page  = ceil($total_count / $page_rows);  // 전체 페이지 계산
$from_record = ($page - 1) * $page_rows; // 시작 열을 구함
  
// 공지글이 있으면 변수에 반영
if(!empty($notice_array)) {
    $from_record -= count($notice_array);
  
    if($from_record < 0)
        $from_record = 0;
  
    if($notice_count > 0)
        $page_rows -= $notice_count;
  
    if($page_rows < 0)
        $page_rows = $list_page_rows;
}
  
// 관리자라면 checkbox 보임
$is_checkbox = false;
if ($is_member && ($is_admin == 'super' || $group['gr_admin'] == $member['mb_id'] || $board['bo_admin'] == $member['mb_id']))
    $is_checkbox = true;
  
// 정렬에 사용하는 query_string
$qstr2 = 'bo_table='.$bo_table.'&amp;sop='.$sop;
  
// 0 으로 나눌시 오류를 방지하기 위하여 값이 없으면 1 로 설정
$bo_gallery_cols = $board['bo_gallery_cols'] ? $board['bo_gallery_cols'] : 1;
$td_width = (int)(100 / $bo_gallery_cols);
  
// 정렬
// 인덱스 필드가 아니면 정렬에 사용하지 않음
if (!$sst) {
    if ($board['bo_sort_field']) {
        $sst = $board['bo_sort_field'];
    } else {
        $sst  = "wr_num, wr_reply";
        $sod = "";
    }
} else {
    $board_sort_fields = get_board_sort_fields($board, 1);
    if (!$sod && array_key_exists($sst, $board_sort_fields)) {
        $sst = $board_sort_fields[$sst];
    } else {
        // 게시물 리스트의 정렬 대상 필드가 아니라면 공백으로 (nasca 님 09.06.16)
        // 리스트에서 다른 필드로 정렬을 하려면 아래의 코드에 해당 필드를 추가하세요.
        // $sst = preg_match("/^(wr_subject|wr_datetime|wr_hit|wr_good|wr_nogood)$/i", $sst) ? $sst : "";
        $sst = preg_match("/^(wr_datetime|wr_hit|wr_good|wr_nogood)$/i", $sst) ? $sst : "";
    }
}
  
if(!$sst)
    $sst  = "wr_num, wr_reply";
  
if ($sst) {
    $sql_order = " order by {$sst} {$sod} ";
}
  
$sql_search_wr_3 = '';
if($_request['address']) {
    $sql_search_wr_3 = " and wr_3 = '{$_request['address']}'";
}
  
if ($is_search_bbs) {
    $sql = " select distinct wr_parent from {$write_table} where {$sql_search} {$sql_search_wr_3} {$sql_order} limit {$from_record}, $page_rows ";
} else {
    $sql = " select * from {$write_table} where wr_is_comment = 0 ";
    if(!empty($notice_array))
        $sql .= " and wr_id not in (".implode(', ', $notice_array).") ";
    $sql .= " {$sql_order} limit {$from_record}, $page_rows ";
}
  
if($page_rows > 0) {
    $result = sql_query($sql);
  
    $k = 0;
  
    while ($row = sql_fetch_array($result))
    {
        // 검색일 경우 wr_id만 얻었으므로 다시 한행을 얻는다
        if ($is_search_bbs)
            $row = sql_fetch(" select * from {$write_table} where wr_id = '{$row['wr_parent']}' ");
  
        $list[$i] = get_list($row, $board, $board_skin_url, g5_is_mobile ? $board['bo_mobile_subject_len'] : $board['bo_subject_len']);
        if (strstr($sfl, 'subject')) {
            $list[$i]['subject'] = search_font($stx, $list[$i]['subject']);
        }
        $list[$i]['is_notice'] = false;
        $list_num = $total_count - ($page - 1) * $list_page_rows - $notice_count;
        $list[$i]['num'] = $list_num - $k;
  
        $i++;
        $k++;
    }
}
  
  
g5_latest_cache_data($board['bo_table'], $list);
  
$write_pages = get_paging(g5_is_mobile ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, get_pretty_url($bo_table, '', $qstr.'&amp;page='));
?>
<ul id="gall_ul">
    <?php for ($i=0; $i<count($list); $i++) { ?>
        <li class="gall_li">
            <a href="<?php echo $list[$i]['href']?>">
                <div class="mark"><?php echo $list[$i]['ca_name']?></div>
                <div class="gall_img">
                    이미지
                </div>
                <div class="gall_info">
                    <dl class="gall_list">
                        <dt class="gall_tit"><?php echo get_text($list[$i]['wr_subject'])?></dt>
                        <dd class="gall_del_info">
                            <span class="line"><i class="fa fa-phone"></i> <?php echo $list[$i]['wr_1']?></span>
                            <span class="line"><i class="fa fa-bicycle"></i> <?php echo number_format($list[$i]['wr_7']) ?>원 이상 배달 가능</span>
                        </dd>
                    </dl>
                </div>
            </a>
        </li>
    <?php } ?>
    <?php if (count($list) == 0) { echo "<li class=\\"empty_list\\">찾는 정보가 없습니다.</li>"; } ?>
</ul>
  
<!-- 페이지 -->
<?php echo $write_pages; ?>
<!-- 페이지 -->
\`\`\`



아래 소스를 설명하자면 먼저 | 구분 되면 expload로 제거 후에 impload 함수로 in으로 바꿔준다.

in내부에서 가나라,마바사 이렇게 다시 콤마로 구분 되서 쿼리가 동작된다.

 
\`\`\`php
function get_sql_search2($search_ca_name, $search_field, $search_text, $search_operator='and')
{
    global $g5;
 
    if($search_ca_name) {
        $arr_sca = explode("|", $search_ca_name);
 
        $str= "(";
 
        $ingredients = [];
        foreach ($arr_sca as $item){
            $ingredients[] = $item;
        }
 
        $str .=  " ca_name in('";
        $str .= implode("','", $ingredients);
        $str .= "'";
 
        $str .= "))";
    }else {
        $str = " (1) ";
    }
 
 
    $search_text = strip_tags(($search_text));
    $search_text = trim(stripslashes($search_text));
 
    if (!$search_text && $search_text !== '0') {
        if ($search_ca_name) {
            return $str;
        } else {
            return '0';
        }
    }
 
    if ($str)
        $str .= " and ";
 
    // 쿼리의 속도를 높이기 위하여 ( ) 는 최소화 한다.
    $op1 = "";
 
    // 검색어를 구분자로 나눈다. 여기서는 공백
    $s = array();
    $s = explode(" ", $search_text);
 
    // 검색필드를 구분자로 나눈다. 여기서는 +
    $tmp = array();
    $tmp = explode(",", trim($search_field));
    $field = explode("||", $tmp[0]);
    $not_comment = "";
    if (!empty($tmp[1]))
        $not_comment = $tmp[1];
 
    $str .= "(";
    for ($i=0; $i<count($s); $i++) {
        // 검색어
        $search_str = trim($s[$i]);
        if ($search_str == "") continue;
 
        // 인기검색어
        insert_popular($field, $search_str);
 
        $str .= $op1;
        $str .= "(";
 
        $op2 = "";
        for ($k=0; $k<count($field); $k++) { // 필드의 수만큼 다중 필드 검색 가능 (필드1+필드2...)
 
            // sql injection 방지
            // 필드값에 a-z a-z 0-9 _ , | 이외의 값이 있다면 검색필드를 wr_subject 로 설정한다.
            $field[$k] = preg_match("/^[\\w\\,\\|]+$/", $field[$k]) ? strtolower($field[$k]) : "wr_subject";
 
            $str .= $op2;
            switch ($field[$k]) {
                case "mb_id" :
                case "wr_name" :
                    $str .= " $field[$k] = '$s[$i]' ";
                    break;
                case "wr_hit" :
                case "wr_good" :
                case "wr_nogood" :
                    $str .= " $field[$k] >= '$s[$i]' ";
                    break;
                // 번호는 해당 검색어에 -1 을 곱함
                case "wr_num" :
                    $str .= "$field[$k] = ".((-1)*$s[$i]);
                    break;
                case "wr_ip" :
                case "wr_password" :
                    $str .= "1=0"; // 항상 거짓
                    break;
                // like 보다 instr 속도가 빠름
                default :
                    if (preg_match("/[a-za-z]/", $search_str))
                        $str .= "instr(lower($field[$k]), lower('$search_str'))";
                    else
                        $str .= "instr($field[$k], '$search_str')";
                    break;
            }
            $op2 = " or ";
        }
        $str .= ")";
 
        $op1 = " $search_operator ";
    }
    $str .= " ) ";
    if ($not_comment)
        $str .= " and wr_is_comment = '0' ";
 
    return $str;
}
\`\`\`

여기까지 설명하겠다.

 

## 맺음말 :

데모 플러그인에 보면 맛집 배달 게시판이 있다. 이거 참고하면 된다.

깃헙에 따로 올려놨다.

 

`,link:"/그누&영카트/다중검색 만들기"},{title:"모바일 해상도 참고자료",content:`
# {{ $frontmatter.title }}



아래 링크 참고하자...


https://wisesilver.tistory.com/20`,link:"/그누&영카트/모바일 해상도 참고자료"},{title:"모바일에서 스마트에디터2 사용하기",content:`
# {{ $frontmatter.title }}

그누보드 기본 설정은 모바일에서 에디터 사용안함으로 되어 있습니다.

모바일에서도 에디터를 활성화하는 방법입니다. 

root/config.php 파일에서 모바일 에디터 사용 설정을 true 로 변경합니다. 

\`\`\`php
define('g5_is_mobile_dhtml_use', true);
\`\`\`


모바일에서 사용시 스마트에디터가 깨지기 때문에 아래 파일에 해당코드 추가

플러그인 위치 /plugin/editor/smarteditor2/css/ko_kr/smart_editor2.css

\`\`\`css
/* 모바일용 */
#smart_editor2{margin-right:1px !important;min-width:100px !important}
@media screen and (max-width: 640px){
 #smart_editor2 .se2_text_tool ul:nth-child(4n){clear:both;}
 #smart_editor2 .se2_text_tool ul{margin-bottom:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(n+4){margin-bottom:0}
 #smart_editor2 .se2_text_tool .se2_multy,#smart_editor2 .se2_text_tool .se2_multy button, #smart_editor2 .se2_text_tool .se2_multy button span{height:54px}
}
@media screen and (max-width: 515px){
 #smart_editor2 .se2_text_tool ul:nth-child(3n){clear:both;margin-left:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(6n),#smart_editor2 .se2_text_tool ul:nth-child(4n){clear:none;margin-left:0}
 #smart_editor2 .se2_text_tool ul:nth-child(n+3){margin-bottom:0}
}
@media screen and (max-width: 370px){
 #smart_editor2 .se2_text_tool ul:nth-child(2n){clear:both;margin-left:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(3n){clear:both;margin-left:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(6n),#smart_editor2 .se2_text_tool ul:nth-child(4n){clear:none;margin-left:0}
 #smart_editor2 .se2_text_tool ul:nth-child(n+3){margin-bottom:0}
 #smart_editor2 .se2_text_tool .se2_multy,#smart_editor2 .se2_text_tool .se2_multy button, #smart_editor2 .se2_text_tool .se2_multy button span{height:79px}
}
@media screen and (max-width: 325px){
 #smart_editor2 .se2_text_tool .se2_multy,#smart_editor2 .se2_text_tool .se2_multy button, #smart_editor2 .se2_text_tool .se2_multy button span{height:29px;}
 #smart_editor2 .se2_text_tool .se2_multy{border-bottom:1px solid #e0dedf}
}
\`\`\`


모바일은 위에 방법처럼 따로 커스텀 해야된다. 

그누 특정상 커스텀 할게 많아서 참고하시길...




 `,link:"/그누&영카트/모바일에서 스마트에디터2 사용하기"},{title:"배열을 12개씩 내부에 4개씩 묶어서 출력할경우",content:`
# {{ $frontmatter.title }}

배열이 1부터 12개까지 출력하는데 1배열에 4개씩 묶어서 출력하려면 어떻게 하는지 찾아보니까..

이렇게 하면된다.

\`\`\`php
$list = [];
// 리뷰글 가져오기
$sql = " select * from \`{$g5['g5_shop_item_use_table']}\` where is_confirm = '1' order by is_time desc limit 0,12";
$result = sql_query($sql);
for ($i=0; $rows = sql_fetch_array($result); $i++) {
$list[$i]['subject'] = conv_subject($rows['is_subject'],12,"…");
$list[$i]['content'] = conv_content($rows['is_content'],2);
$list[$i]['score'] = get_star($rows['is_score']);
$list[$i]['writer'] = mb_substr(get_text($rows['is_name']), 0, 1, 'utf-8') . "***" . mb_substr($rows['is_name'], -1, 0, 'utf-8');
$list[$i]['datetime'] = date('y-m-d',strtotime($rows['is_time']));
}

$output = array_chunk($list,4,true);
\`\`\`


여기서 중요한게 array_chunk 함수를 이용해서 4개씩 묶어서 출력한다. `,link:"/그누&영카트/배열을 12개씩 내부에 4개씩 묶어서 출력할경우"},{title:"복수 게시판 정보 가져오기",content:`
# {{ $frontmatter.title }}


복수 게시판 정보 가져오기

\`\`\`php
$bbs_cate = ["notice","free"];
$bo_table = implode("','", $bbs_cate);
  
$sql = " select bo_table from {$g5['board_table']} where bo_table in('".$bo_table."')";
$rr = sql_query($sql);
  
while ($bbs = sql_fetch_array($rr)) {
    $tmp_write_table = $g5['write_prefix'] . $bbs['bo_table'];
  
    $sql = " select * from $tmp_write_table where wr_is_comment = 0 order by wr_num ";
    $row = sql_fetch($sql);
}
\`\`\``,link:"/그누&영카트/복수 게시판 정보 가져오기"},{title:"사이트맵 만들기",content:`
# {{ $frontmatter.title }}


사이트맵 아래 소스 참고해서 넣어주면 된다.


\`\`\`php
<?php
include_once("./_common.php");
  
header("content-type: text/xml;charset=\\"utf-8\\"");
header("cache-control: no-cache, must-revalidate");
header("pragma: no-cache");
  
echo "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>\\n";
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php
$query = sql_query("select bo_table from \`{$g5['board_table']}\` where bo_read_level=1");
while($temp = sql_fetch_array($query)) {
    $bo_arr[] = $temp['bo_table'];
}
  
foreach($bo_arr as $bo) {
    $bbs_url = get_pretty_url($bo);
    echo "<url>\\n";
    echo "<loc>$bbs_url</loc>\\n";
    $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` order by wr_datetime desc");
    $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
     
    echo "<lastmod>$lastmod</lastmod>\\n";
    echo "<changefreq>daily</changefreq>\\n";
    echo "<priority>0.9</priority>\\n";
    echo "</url>\\n";
  
    $query = sql_query("select wr_id, wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_is_comment='0' and wr_option not like '%secret%'");
    while($row = sql_fetch_array($query)) {
        $bbs_url = get_pretty_url($bo,$row['wr_id']);
        echo "<url>";
        echo "<loc>$bbs_url</loc>";
        $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_parent='{$row['wr_id']}' order by wr_id desc");
        $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        if(!$lastmod) {
            $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_id='{$row['wr_id']}'");
            $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        }
        if(!$lastmod) $lastmod = g5_time_ymd;
        echo "<lastmod>$lastmod</lastmod>";
        echo "<changefreq>weekly</changefreq>";
        echo "<priority>0.8</priority>";
        echo "</url>\\n";
    }
}
?>
</urlset>
\`\`\`


`,link:"/그누&영카트/사이트맵 만들기"},{title:"스마트필터 스크립트",content:`
# {{ $frontmatter.title }}


아래 소스코드 참고하자


\`\`\`js
/**
 * 선택초기화 클릭시
 */
$('#reset_btn').on('click',function () {
    $(".sm_brand_wrap > .sm_chk_box").removeclass("on");
    $('#pricemin').val('');
    $('#pricemax').val('');
    $('.sort_item').removeclass('on');
    $('#sct_sortlst > div.sct_sort > div > ul > li:nth-child(2)').addclass('on');
    $('#page_rows').val('20').prop("checked",true);
    let currenturl = window.location.href;
    if (currenturl.indexof("&") > 0) {
        let cleanurl = currenturl.substring(0, currenturl.indexof("&"));
        window.history.replacestate({}, document.title, cleanurl);
    }
    modelsrequests(parameter[1]);
});
 
 
$('input[name^=filter_brand]').on('change',function() {
    var brandstr = '';
    $('input[name*=filter_brand]').each(function() {
        if($(this).is(":checked")){
            brandstr += (brandstr) ? "&" + "filter_brand[]="+$(this).val() : "filter_brand[]="+$(this).val() ;
        }
    });
    var currenturl = window.location.href;
    var currenturlsplit = currenturl.split("?");

    var filter_parameter = currenturlsplit[0] + "?ca_id=" + getqueryparam('ca_id') + "&" + brandstr;
    history.pushstate(null, null, filter_parameter);

    modelsrequests(currenturlsplit[1]);
});
\`\`\``,link:"/그누&영카트/스마트필터 스크립트"},{title:"스크롤 내릴때 하단 바 고정 하는방법",content:`
# {{ $frontmatter.title }}


일단 그누보드 내부에서 css가 이상해서 내가 직접 필터해서 쓴걸로 변경 해야한다.

아래 소스 참고하면된다. 아래 소스코드 참고하면 html,body {height:100%} 으로 지정을 해야지 하단에 고정이 된다. 

html 이 포함된 부분에서 문제가 있는것 같은데.. 이유는 아무리 찾아봐도 잘 모르겠고 아래 소스코드 쓰면 된다. 그누 특정상 직접 커스텀을 해야된다. 

\`\`\`css
html, body{height:100%;}body{margin:0;padding:0;font-size:0.75em;min-height:320px;height:100%;background:#f5f5f5;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}html, h1, h2, h3, h4, h5, h6, form, fieldset, img{margin:0;padding:0;border:0}h1, h2, h3, h4, h5, h6{font-size:1em;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{line-height:inherit;vertical-align:top;border:0 none;-webkit-font-smoothing:antialiased;scroll-behavior:auto;}legend{position:absolute;font-size:0;line-height:0;text-indent:-9999em;overflow:hidden}label, input, button, select, img{vertical-align:middle}input, button{margin:0;padding:0;font-size:1em;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}button{cursor:pointer}input[type=text], input[type=password], input[type=submit], input[type=image], button{font-size:1em;-webkit-appearance:none}textarea, select{font-size:1em;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}textarea{border-radius:0;-webkit-appearance:none;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}select{margin:0;background:none;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}p{margin:0;padding:0;word-break:break-all}hr{display:none}pre{overflow-x:scroll;font-size:1.1em}a{color:#000;text-decoration:none}ul,li,dl,dt,dd{padding:0;margin:0}ul{list-style:none}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}input[type=text],input[type=password], textarea{-webkit-transition:all 0.30s ease-in-out;-moz-transition:all 0.30s ease-in-out;-ms-transition:all 0.30s ease-in-out;-o-transition:all 0.30s ease-in-out;outline:none;}input[type=text]:focus,input[type=password]:focus, textarea:focus,select:focus{-webkit-box-shadow:0 0 5px #9ed4ff;-moz-box-shadow:0 0 5px #9ed4ff;box-shadow:0 0 5px #9ed4ff;border:1px solid #558ab7 !important;}a[href^="tel"]{color:inherit;text-decoration:none;}
\`\`\`


그리고 나서 포지션 픽시드로 하면 고정이 된다. 하단까지 아예 내려가면 푸터가 가려지는데 이걸 제이쿼리로 소스 추가하면 된다. 

\`\`\`css
position:fixed;bottom:0;left:0;right:0;z-index:10000;
\`\`\`
혹시 몰라서 전체적으로 소스코드를 넣었다. 참고하면 된다. 


\`\`\`html
<div id="bottomnav" class="fixed_sidebar">
    <ul class="fixed_sidebar_wrap">
        <li><a href="#" class="btn_hdcate"><span class="sound_only">분류</span></a></li>
        <li><a href="#" class="btn_kakao"><span class="kakao_icon"></span> <span class="fixed_name">카카오 상담하기</span></a></li>
        <li><a href="tel:<?php echo $default['de_admin_company_tel']; ?>" class="btn_tel"><span class="tel_icon"></span> <span class="fixed_name">전화 상담하기</span></a></li>
    </ul>
</div>
\`\`\`

\`\`\`css
/* 하단 고정바 */
#bottomnav {border-top:1px solid #eee;background: #fff;transition: top 0.3s;width: 100%;}
#bottomnav .fixed_sidebar_wrap {display: flex;}
#bottomnav .fixed_sidebar_wrap li {display: flex;flex-flow: column;flex: 1 1 auto;align-items: center;text-align: center;position: relative;}
#bottomnav .fixed_sidebar_wrap li a {display: inline-block;padding: 10px 15px;font-size: 13px;}
#bottomnav .fixed_sidebar_wrap li .btn_hdcate {display: inline-block;background: url("../img/mobile/hamburger_icon.png") center no-repeat;background-size: 20px;padding: 20px 10px;}
#bottomnav .fixed_sidebar_wrap li .btn_kakao .kakao_icon {display: inline-block;background: url("../img/mobile/kakao_icon.png") no-repeat;background-size: 20px 20px;background-position: 50%;padding: 10px;vertical-align: top;}
#bottomnav .fixed_sidebar_wrap li .btn_tel .tel_icon {display: inline-block;background: url("../img/mobile/tel_icon.png") no-repeat;background-size: 20px 20px;background-position: 50%;padding: 10px;vertical-align: top;}
#bottomnav .fixed_sidebar_wrap li a .fixed_name {display: inline-block;padding-top: 3px;padding-left: 5px;}
.fixed_sidebar {position: fixed;bottom: 0;left:0;right:0;z-index: 10000;}
\`\`\`


\`\`\`js
$(window).scroll(function() {
        if($(window).scrolltop() + $(window).height() > $(document).height() - 300) {
            $('#bottomnav').hide();
        } else {
            $('#bottomnav').show();
        }
    });
\`\`\`



`,link:"/그누&영카트/스크롤 내릴때 하단 바 고정 하는방법"},{title:"에디터 내용이 짤릴경우",content:`
# {{ $frontmatter.title }}


여기꺼 참고하면 된다.

https://gnustudy.com/bbs/board.php?bo_table=gnu_tip&wr_id=24



참고로 혹시 모르니까 데이터필드를 롱텍스트로 바꿨다. 

위에 레퍼런스 읽으면서 천천히 따라하면된다.



`,link:"/그누&영카트/에디터 내용이 짤릴경우"},{title:"영카트 그누보드 설치 쉘 스크립트",content:`
# {{ $frontmatter.title }}


쉘스크립트

\`\`\`bash
#!/bin/bash 
wgethttps://github.com/gnuboard/gnuboard5/tarball/master mvmaster master.tar.gz tar-xvzpf master.tar.gz rmmaster.tar.gz mvgnuboard-gnuboard5-*/* ./ 
rm-r gnuboard-gnuboard5-*
\`\`\`



그누보드5 최신버전 설치 

\`\`\`bash
wgethttps://raw.githubusercontent.com/hanbitgaram/shell-script/master/gnuboard.sh &&shgnuboard.sh &&rmgnuboard.sh
\`\`\`

영카트5 최신버전 설치 

\`\`\`bash
wgethttps://raw.githubusercontent.com/hanbitgaram/shell-script/master/youngcart.sh &­oungcart.sh &&rmyoungcart.sh
\`\`\``,link:"/그누&영카트/영카트 그누보드 설치 쉘 스크립트"},{title:"영카트 모든 상품 보는 방법",content:`
# {{ $frontmatter.title }}


## 설명 :

shop/all_list.php 경로를 만들어준다. (파일생성)

 
\`\`\`php
<?php
include_once('./_common.php');
  
$g5['title'] = '전체 상품 목록';
include_once('./_head.php');
  
// 한페이지에 출력하는 이미지수 = $list_mod * $list_row
$list_mod   = 4;   // 1줄당 이미지 수
$list_row   = 3;   // 출력할 줄 수
$img_width  = 230;  // 이미지 폭
$img_height = 230; // 이미지 높이
?>
  
<?php
$list_file = g5_shop_skin_path.'/list.10.skin.php'; // 스킨
if (file_exists($list_file)) {
    // 총몇개 = 한줄에 몇개 * 몇줄
    $items = $list_mod * $list_row;
    // 페이지가 없으면 첫 페이지 (1 페이지)
    if ($page < 1) $page = 1;
    // 시작 레코드 구함
    $from_record = ($page - 1) * $items;
    $sql = " select * from {$g5['g5_shop_item_table']} where it_use = '1' order by it_order, it_id desc ";
    $list->set_query($sql);
    $list = new item_list();
    $list->set_list_skin($list_file);
    $list->set_list_mod($list_mod);
    $list->set_list_row($list_row);
    $list->set_img_size($img_width, $img_height);
    $list->set_is_page(true);
    $list->set_from_record($from_record);
    $list->set_view('it_img', true);
    $list->set_view('it_id', false);
    $list->set_view('it_name', true);
    $list->set_view('it_basic', true);
    $list->set_view('it_cust_price', false);
    $list->set_view('it_price', true);
    $list->set_view('it_icon', true);
    $list->set_view('sns', true);
    echo $list->run();
  
    // where 된 전체 상품수
    $total_count = $list->total_count;
    // 전체 페이지 계산
    $total_page  = ceil($total_count / $items);
}
?>
  
<?php
echo get_paging($config['cf_write_pages'], $page, $total_page, "{$_server['script_name']}?$qstr&amp;page=");
?>
  
<?php
include_once('./_tail.php');
?>
\`\`\`

여기서 스킨만 list.10.skin.php만 복제해서 새로 만든다.

list.all.skin.php 이라고 만든다.

그러고 위에 소스를 보면 스킨을 위치만 변경하면 된다.`,link:"/그누&영카트/영카트 모든 상품 보는 방법"},{title:"영카트 모바일 결제가 갑자기 안되는이유",content:`
# {{ $frontmatter.title }}


이건 상황에 따라서 달라진다. 일단 최신껄로 덮어씌워본다 그리고도 결제창 안뜨면 에러 로그 이부분을 원본에 있던걸로 풀어준다.

\`\`\`php
error_reporting( e_core_error | e_core_warning | e_compile_error | e_error | e_warning | e_parse | e_user_error | e_user_warning );
\`\`\`

싹다 풀다가.. 

봉인하면 된다. 이게 에러로그 싹다 푸는거다.. 

\`\`\`php
error_reporting(e_all); ini_set('display_errors', '1');
\`\`\`

에러로그를 열어둬서 그런거다.. 일단 닫아놓자~`,link:"/그누&영카트/영카트 모바일 결제가 갑자기 안되는이유"},{title:"영카트 사용법",content:`
# {{ $frontmatter.title }}


## 설명 :


상품 목록 소스


\`\`\`php
<div class="sct_wrap">
    <h2><a href="<?php echo shop_type_url('1'); ?>">히트상품</a></h2>
    <?php
    $list = new item_list();
    $list->set_mobile(true); 
    $list->set_type(1); 
    $list->set_view('it_id', false);
    $list->set_view('it_name', true);
    $list->set_view('it_cust_price', true);
    $list->set_view('it_price', true);
    $list->set_img_size(240, 240);
    $list->set_list_skin(g5_shop_skin_path.'/list.15.skin.php');
    $list->set_view('it_icon', true);
    $list->set_view('sns', false);
    echo $list->run();
    ?>
</div>
\`\`\`

$list->set_type(1);  << 이건  상품유형으로 1~5번까지 있으며 

1:히트상품, 2:추천상품, 3:최신상품, 4:인기상품, 5:할인상품 으로 구성됨`,link:"/그누&영카트/영카트 사용법"},{title:"영카트 상품 구매한 갯수",content:`
# {{ $frontmatter.title }}


## 설명 :

상품을 구매한 개수를 가져오려면...

장바구니에서 완료 인 것의 합을 가져오면된다.

단일 제품을 가져오려면...

\`\`\`sql
select ifnull(sum(ct_qty),0) as sum_qty
from {$g5['g5_shop_cart_table']}
where ct_status in ('완료')
and it_id = '{$row['it_id']}'
\`\`\` 

 

모든 제품을 가져오려면...

\`\`\`sql
select sum(ct_qty) as sum_qty , it_id
from {$g5['g5_shop_cart_table']}
where ct_status in ('완료')
\`\`\` `,link:"/그누&영카트/영카트 상품 구매한 갯수"},{title:"영카트 상품 테이블로 이용해서 3단 메뉴 만들기",content:`
# {{ $frontmatter.title }}


영카트 상품 테이블 이용해서 3단 메뉴 만들기 소스 

전체 메뉴 포함!

\`\`\`php
$sql = " select ca_id, ca_name from {$g5['g5_shop_category_table']} where ca_id like '$ca_id%' and length(ca_id) = 6 and ca_use = '1' order by ca_order, ca_id ";
$result = sql_query($sql);
$i = 0;
while ($row=sql_fetch_array($result)) {
    $count_row = sql_fetch(" select count(*) as cnt from {$g5['g5_shop_item_table']} where (ca_id like '{$row['ca_id']}%' or ca_id2 like '{$row['ca_id']}%' or ca_id3 like '{$row['ca_id']}%') and it_use = '1'  ");
  
    $row2 = sql_fetch(" select * from {$g5['g5_shop_item_table']} where (ca_id like '{$row['ca_id']}%' or ca_id2 like '{$row['ca_id']}%' or ca_id3 like '{$row['ca_id']}%') and it_use = '1'  ");
  
    if($i == 0) {
        $str .= '<li '.(strpos($row2["ca_id"], $_request['ca_id']) !== false ? "class='active'" : "").'><a href="'.g5_theme_mshop_url.'/list.php?ca_id='.$row2['ca_id'].'">전체 <span class="prd_cnt">'.$count_row['cnt'].'</span></a></li>';
    }
  
    $str .= '<li '.(strpos($row["ca_id"], $_request['ca_id']) !== false ? "class='active'" : "").'><a href="'.shop_cate_url($row['ca_id']).'">'.$row['ca_name'].' <span class="prd_cnt">'.$count_row['cnt'].'</span></a></li>';
    $i++;
}
\`\`\`

이건 sir 사이트에서 찾아보면 금방 나온다.  예제를 응용해서 쓴거라서.. 상황에 맞게 쓰면된다. `,link:"/그누&영카트/영카트 상품 테이블로 이용해서 3단 메뉴 만들기"},{title:"영카트 주소 ca_id 정규식",content:`
# {{ $frontmatter.title }}


주소에 보면 /shop/list.php?ca_id=12313

이런식으로 되어 있는거 ca_id만 빼오는 정규식이다. 


\`\`\`php
preg_replace( "/\\/shop\\/list.php([?])ca_id=/",'',$row['me_link']);
\`\`\`
`,link:"/그누&영카트/영카트 주소 ca_id 정규식"},{title:"영카트) 상세 탭버튼 스크롤시 헤더 고정",content:`
# {{ $frontmatter.title }}


## 설명 :


제이쿼리 ) 상세페이지에서 탭버튼 스크롤 내릴시 헤더 고정 하고 id 일치하면 탭버튼 메뉴 엑티브로 렌더링 하기

<img src="./img/11.png" /> 


이거 참고하면된다. 



소스는 이렇다.

\`\`\`js
$(function (){
    $(window).scroll(function() {
        var windscroll = $(window).scrolltop();
        var offset = $('.tabstit').offset().top;
        if (windscroll >= offset) {
            $('.tabstit').addclass('fixed_tabstit');
            $('#wrapper .tabslist').each(function(i) {
                if(windscroll > $("#"+$(this).attr('id')).offset().top) {
                    $('.tabstit .tabstab').removeclass('tabshover');
                    $('.tabstit .tabstab').eq(i).addclass('tabshover');
                }
            });
        } else {
            $('.tabstit').removeclass('fixed');
            $('.tabstit .tabstab').removeclass('active');
            $('.tabstit .tabstab:first').addclass('active');
        }
    });
 
    $('.tabstit .tabstab').on('click',function () {
        $(this).addclass('tabshover').siblings().removeclass("tabshover");
    });
});

\`\`\`


백단 소스코드

\`\`\`php
<ul class="tabstit sanchor">
    <li class="tabstab tabshover tab-first"><a href="#sit_inf">상품정보</a></li>
    <li class="tabstab"><a href="#sit_use">리뷰 <span class="item_use_count"><?php echo $item_use_count; ?></span></a></li>
    <li class="tabstab"><a href="#sit_qa">q&a <span class="item_qa_count"><?php echo $item_qa_count; ?></span></a></li>
</ul>
 
<div id="wrapper"><!-- <div id="wrapper"> -->
    <!-- 상품 정보 시작 { -->
    <div id="sit_inf" class="tabslist">
        <h2>상품정보</h2>
        <?php if ($it['it_basic']) { // 상품 기본설명 ?>
            <h3>상품 기본설명</h3>
            <div id="sit_inf_basic">
                <?php echo $it['it_basic']; ?>
            </div>
        <?php } ?>

        <?php if ($it['it_explan']) { // 상품 상세설명 ?>
            <h3>상품 상세설명</h3>
            <div id="sit_inf_explan">
                <?php echo ($it['it_mobile_explan'] ? conv_content($it['it_mobile_explan'], 1) : conv_content($it['it_explan'], 1)); ?>
            </div>
        <?php } ?>
        <?php
        if ($it['it_info_value']) { // 상품 정보 고시
            $info_data = unserialize(stripslashes($it['it_info_value']));
            if(is_array($info_data)) {
                $gubun = $it['it_info_gubun'];
                $info_array = $item_info[$gubun]['article'];
                ?>
                <h3>상품 정보 고시</h3>
                <table id="sit_inf_open">
                    <colgroup>
                        <col class="grid_4">
                        <col>
                    </colgroup>
                    <tbody>
                    <?php
                    foreach($info_data as $key=>$val) {
                        $ii_title = $info_array[$key][0];
                        $ii_value = $val;
                        ?>
                        <tr>
                            <th scope="row"><?php echo $ii_title; ?></th>
                            <td><?php echo $ii_value; ?></td>
                        </tr>
                    <?php } //foreach?>
                    </tbody>
                </table>
                <!-- 상품정보고시 end -->
                <?php
            } else {
                if($is_admin) {
                    echo '<p>상품 정보 고시 정보가 올바르게 저장되지 않았습니다.
                        config.php 파일의 g5_escape_function 설정을 addslashes 로
                        변경하신 후 관리자 &gt; 상품정보 수정에서 상품 정보를 다시 저장해주세요. </p>';
                }
            }
        } //if
        ?>
        <?php if ($default['de_baesong_content']) { // 배송정보 내용이 있다면 ?>
            <!-- 배송 시작 { -->
            <h2>배송정보</h2>
            <div id="sit_dvr">
                <h3>배송</h3>
                <?php echo conv_content($default['de_baesong_content'], 1); ?>
            </div>
            <!-- } 배송 끝 -->
        <?php } ?>
        <!-- 교환 시작 { -->
        <h2>교환정보</h2>
        <?php if ($default['de_change_content']) { // 교환/반품 내용이 있다면 ?>
            <div id="sit_ex">
                <h3>교환/반품</h3>
                <?php echo conv_content($default['de_change_content'], 1); ?>
            </div>
        <?php } ?>
        <!-- } 교환 끝 -->
    </div>
    <!-- } 상품 정보 끝 -->
    <!-- 사용후기 시작 { -->
    <div id="sit_use" class="tabslist">
        <h2>리뷰</h2>
        <div id="itemuse"><?php include_once(g5_shop_path.'/itemuse.php'); ?></div>
    </div>
    <!-- } 사용후기 끝 -->
    <!-- 상품문의 시작 { -->
    <div id="sit_qa" class="tabslist">
        <h2>q&a</h2>
        <div id="itemqa"><?php include_once(g5_shop_path.'/itemqa.php'); ?></div>
    </div>
    <!-- } 상품문의 끝 -->
</div><!-- <div id="wrapper"> --> 
\`\`\`

     
 






`,link:"/그누&영카트/영카트) 상세 탭버튼 스크롤시 헤더 고정"},{title:"영카트4 장바구니키 세션을 쿠키방식으로 변경하기",content:`
# {{ $frontmatter.title }}


장바구니에 담은후 창을 닫고 다시 띄우면 담은 상품이 없어집니다. 

 

영카트는 세션을 사용하기 때문이죠. 

쿠키를 사용하면 창을 닫아도 새로 띄우면 담았던 장바구니가 그대로 나오게 할수있습니다. 

하지만 보안상 좋지는 않습니다. 

관련 의뢰가 들어와 작업을 해드리고 다른분에게 도움이 될듯하여 공유합니다. 

 

파일명 : /extend/shop.extend.php 

 : get_session('ss_on_uid') -> get_cookie('ss_on_uid') 

 : set_session('ss_on_uid', get_unique_id()); -> set_cookie("ss_on_uid", get_unique_id(), 86400 * 30); 

 

 

파일명 : /shop/boxcart.inc.php 

파일명 : /shop/cart.php 

파일명 : /shop/cartupdate.php 

파일명 : /shop/cartupdate2.php 

파일명 : /shop/list.skin.12.php 

파일명 : /shop/list.skin.12_test.php 

파일명 : /shop/orderform.php 

파일명 : /shop/orderreceipt.php 

 : get_session('ss_on_uid') -> get_cookie('ss_on_uid') 로 변경 

 

 

파일명 : /shop/orderupdate.php 

 : get_session('ss_on_uid') -> get_cookie('ss_on_uid') 로 변경 

 : set_session('ss_on_uid','') -> set_cookie('ss_on_uid', 0, 0); 로 변경 

 

 

파일명 : /lib/shop.lib.php  

 : session_check() 함수내 get_session('ss_on_uid') -> get_cookie('ss_on_uid') 로변경.`,link:"/그누&영카트/영카트4 장바구니키 세션을 쿠키방식으로 변경하기"},{title:"장바구니에 상품 중복 되는경우",content:`
# {{ $frontmatter.title }}


## 설명 :

장바구니에 있던 상품이 옵션 있는 상품 하고 없는 상품이 있는데 5개로 나온다 

이렇게 중복 불가를 해야될 경우 쿼리에 디스카운트로 처리 하면 될것 같다.


\`\`\`php
$qry = " select count(distinct it_id) as cnt from {$g5['g5_shop_cart_table']} where od_id = '{$row['od_id']}' "; 
$ct2 = sql_fetch($qry,false); 
 
if($ct2['cnt'] > 1) { 
     $item_name = $row['it_name'].' 외 '.($ct2['cnt']).'건'; 
}else { 
     $item_name = $row['it_name']; 
}
\`\`\`
`,link:"/그누&영카트/장바구니에 상품 중복 되는경우"},{title:"전체 검색 할때 결과가 나오지 않을경우",content:`
# {{ $frontmatter.title }}


## 설명 :


전체 검색 할적에 결과가 나오지 않는 경우가 있는데

커스텀 할필요 없이 그냥 게시판 설정에보면 검색 사용이 체크 됐는지 확인한다.`,link:"/그누&영카트/전체 검색 할때 결과가 나오지 않을경우"},{title:"전체 검색에 단어가 짤리는 현상 문제 해결",content:`
# {{ $frontmatter.title }}



전체 검색에 단어가 짤리는 현상를 sir에 문의 했는데 답변이 이렇다. 



검색단어를 늘릴려면

bbs/search.php 파일의 대략 63 번째줄의 코드

$s = array_slice($s, 0, 2);

를

$s = array_slice($s, 0, 3);

으로 수정하면 3개 단어로 늘릴수 있습니다.

게시판이 많으면 검색량이 늘어나서 sql 부하가 일어날수 있습니다.
sql 검색량이 과도하게 일어나는 것은 취약점으로 여겨질수 있기 때문에, 현재 2개까지 단어를 허용하게 해 놓았습니다. `,link:"/그누&영카트/전체 검색에 단어가 짤리는 현상 문제 해결"},{title:"제이쿼리 메뉴 액티브",content:`
# {{ $frontmatter.title }}

\`\`\`js
let something_url;

if(g5_bo_table) {
    something_url = '/'+g5_bo_table;
}else {
    something_url = window.location.pathname;
}
\`\`\`

제이쿼리 메뉴에 보면 액티브 혹은 온 처리 하는 방법은 

아래 소스 참고 하면 된다.

\`\`\`js 
$('#topnavbar li a').each(function (ele,val) {
    let path = window.location.href.replace(/\\/+$/, '');
    if($(val).attr('href') === decodeuricomponent(path)) {
        $(this).parent().addclass('active');
    }
});
\`\`\`

여기서 path 조건문이 문제가 된다면 이렇게 하면된다.

게시판 조건문을 넣어주면된다. 이건 그누보드에만 해당 된다.`,link:"/그누&영카트/제이쿼리 메뉴 액티브"},{title:"최근게시물 자동 삭제 안되게",content:`
# {{ $frontmatter.title }}




게시글을 쓰면 자동으로 새글 테이블에 데이터가 올라간다.

근데 게시물 자동 삭제 기간이 있어서 기본적으로 30일이 지나면 삭제 처리된다.



일단 이걸 방지 하려면 기본설정 > 최근게시물 삭제 여기에 0으로 값을 수정한다.


혹시나 소스코드 궁금 하다면?? 


bbs/db_table.optimize.php 으로가서 

// 설정일 지난 접속로그 삭제 라고 주석 처리 이부분을 확인후

아래 소스코드를 주석처리한다.



만약에 삭제 됐으면 그누보드 플러그인 게시판 에보면 디비 복구가 있어서

이걸로 다운 받아서 해결 하면된다.



https://sir.kr/g5_plugin/4564?sfl=wr_subject%7c%7cwr_content&stx=%eb%b3%b5%ea%b5%ac`,link:"/그누&영카트/최근게시물 자동 삭제 안되게"},{title:"카운트 조정 관련 소스코드",content:`
# {{ $frontmatter.title }}



adm\\board_form_update.php 파일에 아래 소스 부분을 복사해서

따로 cron 실행 파일을 만들면 됩니다.

\`\`\`php
<?php
include_once('절대경로/common.php');
// 원글을 얻습니다.
//$sql = " select wr_id from {$g5['write_prefix']}{$bo_table} where wr_is_comment = 0 ";
$sql = " select a.wr_id, (count(b.wr_parent) - 1) as cnt from {$g5['write_prefix']}{$bo_table} a, {$g5['write_prefix']}{$bo_table} b where a.wr_id=b.wr_parent and a.wr_is_comment=0 group by a.wr_id ";
$result = sql_query($sql);
for ($i=0; $row=sql_fetch_array($result); $i++) {
    /*
    // 코멘트수를 얻습니다.
    $sql2 = " select count(*) as cnt from {$g5['write_prefix']}$bo_table where wr_parent = '{$row['wr_id']}' and wr_is_comment = 1 ";
    $row2 = sql_fetch($sql2);
    */
    sql_query(" update {$g5['write_prefix']}{$bo_table} set wr_comment = '{$row['cnt']}' where wr_id = '{$row['wr_id']}' ");
}

\`\`\`



## 참고 자료 :


https://sir.kr/qa/467552?&vpage=1#answer_484901`,link:"/그누&영카트/카운트 조정 관련 소스코드"},{title:"카카오맵 api 연동하기",content:`
# {{ $frontmatter.title }}


## 제작 방법 :


최근에 데이터가 날라가서 다시 포스팅 글 남겨본다.

 
카카오 맵 연동 하기 위해서 준비물을 소개한다.

 

## 준비물 :
 
::: info
카카오 rest api 키,카카오 javascript 키
:::
 

 

카카오 개발자에서 발급 받아야한다.

https://developers.kakao.com/
	

 

발급 받고 그누보드에 연동 하는건 알아서 한다.

 

여기 아래 소스코드로 맵을 만들면된다.

 
주소는 따로 우편번호, 기본주소, 상세 주소 이렇게 분리해서 디비에 저장하면된다.

아니면 기본 주소만 따로 디비에 저장 하는 방식으로.. 우편번호랑 뒷자리 주소는 빼고..

주소를 분리해서 디비 저장 하는 이유는 내가 경험해 본게 있는데 만약에 주소1|주소2 이렇게 붙어서 여분필드에 저장 했더니 불러들 일때 문제가 생긴다.

따로 중간 주소 빼고 다시 저장 해야하고 이래야 되서.. 불편하다 그냥 분리시켜서 저장하면된다.

(중간에 기본주소 빼고 저장하고 이런 방법을 알고 있으면 해도 된다. 말리진 않는다 방식을 알면 바로 써먹자~)

 

 

여기서 풀어드레스 변수는 기본 주소만 넣어주면 된다.

 

단, 버그가 있다~ 지도 검색이 안되면 맵이 흰색으로만 변한다. 

우리 집 주소가 그렇다.. 서울 주소가 흰색으로만 나온다.

 
\`\`\`html
<div id="map_canvas"></div>
\`\`\`

\`\`\`php
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=<?=$config['cf_kakao_js_apikey']?>&libraries=services"><\/script>
  
var kakao_rest_api = "";
var full_addresss = "";
  
$.ajax({
    url: 'https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeuricomponent(full_address),
    type: 'get',
    headers: {'authorization': "kakaoak " + kakao_rest_api},
    success: function (data) {
        var inputdata = [data.documents[0].address_name]
        var mapcontainer = document.getelementbyid('map_canvas'),
            mapoption = {center: new kakao.maps.latlng(data.documents[0].x, data.documents[0].y), level: 3};
        var map = new kakao.maps.map(mapcontainer, mapoption);
        var count = 0;
        var ps = new kakao.maps.services.places();
        var bounds = new kakao.maps.latlngbounds();
        if (inputdata != null) {
            kewwordsearch(inputdata[count]);
        }
  
        function kewwordsearch(keword) {
            ps.keywordsearch(keword, placessearchcb);
            count = count + 1;
        }
  
        function placessearchcb(data, status) {
            if (status === kakao.maps.services.status.ok) {
                displaymarker(data[0]);
                bounds.extend(new kakao.maps.latlng(data[0].y, data[0].x));
                setbounds();
            }
        }
  
        function displaymarker(place) {
            var marker = new kakao.maps.marker({map: map, position: new kakao.maps.latlng(place.y, place.x),});
            kakao.maps.event.addlistener(marker, 'click', function () {
                var position = this.getposition();
                var url = 'https://map.kakao.com/link/map/' + place.id;
                window.open(url, '_blank');
            });
        }
  
        function setbounds() {
            map.setbounds(bounds, 90, 30, 10, 30);
        }
    }, /*error : function(e){}*/
});
 
\`\`\`


 

## 느낀점 :

지도 연동할때 위 와 같이 하는 방법이 대부분이다~ 일단 지도 하나에서 마커가 생기는데 업체 소개 할때 쓰이면 좋다

이제는 다양하게 마커 만드는 방법을 포스팅 남겨볼것이다. 사용법을 연구해서 많이 올려봐야징..



`,link:"/그누&영카트/카카오맵 api 연동하기"},{title:"프리랜서 세금 계산 방법",content:`
# {{ $frontmatter.title }}


일단 프로젝트 신청서 수정 보면서 세금계산 기능을 추가 해줬다.

여기 참고 할 것.



계산법은 컴퓨터 계산으로 해야되니까

(2000000 / 100) * 3.3 = 66000

2000000  - 66000 = 1934000



이렇게 계산식을 처리하면된다.


\`\`\`js
$('#calc').click(function () {
   let budget_cost = $('[name=wr_3]').val();
   let total_tax_cost = (budget_cost / 100) * 3.3;
   let total_cost = budget_cost - total_tax_cost;
    $('[name=wr_3]').val(total_cost);
});
\`\`\`



## 참고 자료 :


https://tthefreedom.tistory.com/59`,link:"/그누&영카트/프리랜서 세금 계산 방법"},{title:"한글 자음의 초성으로 검색 하기",content:`
# {{ $frontmatter.title }}


## 설명 :


\`\`\`php
// 한글 자음의 초성으로 검색하기
  
if($find == 'ㄱ'){
 $where = "and (field_name rlike '^(ㄱ|ㄲ)' or ( field_name >= '가' and field_name < '나' )) order by field_name";
}else if($find == 'ㄴ'){
 $where = "and (field_name rlike '^ㄴ' or ( field_name >= '나' and field_name < '다' )) order by field_name";
}else if($find == 'ㄷ'){
 $where = "and (field_name rlike '^(ㄷ|ㄸ)' or ( field_name >= '다' and field_name < '라' )) order by field_name";
}else if($find == 'ㄹ'){
 $where = "and (field_name rlike '^ㄹ' or ( field_name >= '라' and field_name < '마' )) order by field_name";
}else if($find == 'ㅁ'){
 $where = "and (field_name rlike '^ㅁ' or ( field_name >= '마' and field_name < '바' )) order by field_name";
}else if($find == 'ㅂ'){
 $where = "and (field_name rlike '^ㅂ' or ( field_name >= '바' and field_name < '사' )) order by field_name";
}else if($find == 'ㅅ'){
 $where = "and (field_name rlike '^(ㅅ|ㅆ)' or ( field_name >= '사' and field_name < '아' )) order by field_name";
}else if($find == 'ㅇ'){
 $where = "and (field_name rlike '^ㅇ' or ( field_name >= '아' and field_name < '자' )) order by field_name";
}else if($find == 'ㅈ'){
 $where = "and (field_name rlike '^(ㅈ|ㅉ)' or ( field_name >= '자' and field_name < '차' )) order by field_name";
}else if($find == 'ㅊ'){
 $where = "and (field_name rlike '^ㅊ' or ( field_name >= '차' and field_name < '카' )) order by field_name";
}else if($find == 'ㅋ'){
 $where = "and (field_name rlike '^ㅋ' or ( field_name >= '카' and field_name < '타' )) order by field_name";
}else if($find == 'ㅌ'){
 $where = "and (field_name rlike '^ㅌ' or ( field_name >= '타' and field_name < '파' )) order by field_name";
}else if($find == 'ㅍ'){
 $where = "and (field_name rlike '^ㅍ' or ( field_name >= '파' and field_name < '하' )) order by field_name";
}else if($find == 'ㅎ'){
 $where = "and (field_name rlike '^ㅎ' or ( field_name >= '하')) order by field_name";
}else{
 $where = "order by field_name";
}
  
$qry     = "select * from table_name where $where";
$result  = mysql_query($qry);
\`\`\``,link:"/그누&영카트/한글 자음의 초성으로 검색 하기"}],t={data:e,regexForContentStripping:n};export{t as default};
