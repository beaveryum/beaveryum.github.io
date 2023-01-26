---
title: 'ssl 사용법'
---

# {{ $frontmatter.title }}


우선 기본적인 certbot 이런건 기본적인거라서 멀티 도메인 ssl 기능은 안된다 그래서 직접 찾아야된다.

밑에 참고 자료 봐서 ssl 달면 된다.

일단 기본적인 사용법 명령어를 남겨본다.


```bash
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
```



## 참고 자료 :


https://www.sslcert.co.kr/products/Ads?g_matchtype=b&g_device=c&g_network=g&g_c=526526969511


https://yellowit.co.kr/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94/%EB%AC%B4%EB%A3%8C-ssl-%EB%B3%B4%EC%95%88-%EC%9D%B8%EC%A6%9D%EC%84%9C-%EB%B0%9C%EA%B8%89-https-free-ssl-certificate/


https://www.sslforfree.com/