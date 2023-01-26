---
title: 'centos7 - vsftp 설치하기'
---

# {{ $frontmatter.title }}


설치 됐는지 확인하기

```bash
yum list installed vsftpd rpm -qa vsftpd
```


vsftpd를 설치하기

```bash
yum install -y vsftpd
```


vsftpd를 업데이트

```bash
yum update vsftpd
```

#### 설정 변경

```bash
vi /etc/vsftpd/vsftpd.conf

anonymous_enable=NO

local_enable=YES

write_enable=YES

local_umask=022

dirmessage_enable=YES

xferlog_enable=YES

connect_from_port_20=YES

xferlog_file=/var/log/xferlog

xferlog_std_format=YES

chroot_local_user=YES

listen=YES

pam_service_name=vsftpd

userlist_enable=YES

tcp_wrappers=YES
```


구동하기

```bash
service vsftpd start service vsftpd enable
```

동작 중인지 확인하기

```bash
netstat --tcp -anp | grep vsftpd
```

방화벽 열기

```bash
sudo firewall-cmd --permanent --zone=public --add-port=21/tcp
sudo firewall-cmd --permanent --zone=public --add-port=20/tcp
sudo firewall-cmd --reload
```

에러 해결 하기

530 Permission denied 오류를 찾아보니, vsftpd에 기본적으로 접속거부 리스트에 root 계정이 포함되어 있다고 한다.

```bash
vi /etc/vsftpd/ftpusers
vi /etc/vsftpd/user_list
```

수정하기 (두곳에 루트만 빼면 된다)

[root@localhost vsftpd]

vi /etc/vsftpd/ftpusers

Users that are not allowed to login via ftp root bin daemon adm lp sync shutdown halt mail news uucp operator games nobody

여기서 루트만 주석처리한다.

서비스 재 시작하기

```bash
service vsftpd restart
```

에러 해결 하기 500 OOPS: vsftpd: refusing to run with writable root inside chroot()

```bash
vi /etc/vsftpd/vsftpd.conf allow_writeable_chroot=yes
```

마지막줄에서 추가한다.

```bash
pasv_enable=Yes pasv_max_port=40000 pasv_min_port=40000
```


방화벽 열어주기

```bash
firewall-cmd --permanent --add-port=40000/tcp
firewall-cmd --reload service vsftpd restart
```

최종 /etc/vsftpd/vsftpd.conf 파일 내용

```bash
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
xferlog_file=/var/log/xferlog
xferlog_std_format=YES
chroot_local_user=YES
listen=YES
pam_service_name=vsftpd
userlist_enable=YES
tcp_wrappers=YES
allow_writeable_chroot=YES
pasv_enable=Yes
pasv_max_port=40000
pasv_min_port=40000
```


여기서 아래 에러가 나온다면... 500 OOPS: run two copies of vsftpd for IPv4 and IPv6

아래처럼 yes 에서 no로 설정한다.

listen_ipv6=NO

마지막으로 중요한걸 빠졌다.

외부에 방화벽을 열어줘야한다.

아마존 서버 같은경우는 인스턴스에서 인바운드를 열면 된다.

500 OOPS: unrecognised variable in config file: userlist_eniable

이렇게 에러가 나올경우 해당 변수가 없다고 나온다.

userlist_eniable 찾아서 주석처리나 문법을 제거 하면된다.