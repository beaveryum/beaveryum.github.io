---
title: 'centos7 환경에서 node 설치'
---

# {{ $frontmatter.title }}





1. 노드가 있는지 확인 한다.

```bash
yum list installed | grep node
```

만약에 epel 저장소가 없으면 따로 설치 해야된다. ( 저장소가 있는 과정하에 설명함)



2. 노드 특정 버전 설치하기

```bash
yum install -y gcc-c++ make
```

# 8점대 버전을 다운 받으려는 경우

curl -sL https://rpm.nodesource.com/setup_8.x | sudo -E bash -

# 9점대 버전을 다운 받으려는 경우

curl -sL https://rpm.nodesource.com/setup_9.x | sudo -E bash -

# 12점대 버전을 다운 받으려는 경우

curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -


현재 16 버전이 안정적이다.

curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -



3. 노드 설치한다.

```bash
yum -y install nodejs
```


4. 버전 확인하기

```bash
node -v
npm -v
```










## 참고 문헌 :

https://nirsa.tistory.com/193

