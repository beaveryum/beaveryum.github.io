---
title: 'centos7 SSH 키 페어 연결 해제하기(비밀번호로 접속)'
---

# {{ $frontmatter.title }}


현재 centos7 기준으로 설명 한다.

ssh 가 있는지 체크한다.

```bash
rpm -qa | grep openssh-server
```

없으면 설치한다.

```bash
yum install -y openssh-server
```

```bash
vi /etc/ssh/sshd_config

:set nu

Port 22 >> 2222
PermiRootLogin yes >> no : 루트로그인 접근 하지 못하게~
PermitEmptyPasswords no : Passwrod가 없는 계정으로 SSH 로그인이 불가능 하도록
MaxAuthTries 6 >> : 루트로 6번이상 시도 실패시 차단
UseDNS=yes >> no : 접속 지연 현상 문제 해결 됨
PasswordAuthentication no >> yes : 비밀번호 허용해서 접근하게

systemctl restart sshd
```

방화벽 확인하기

```bash
firewall-cmd --zone=public --list-port
```

없으면 방화벽 추가하기

```bash
sudo firewall-cmd --permanent --zone=public --add-port=2222/tcp
sudo firewall-cmd --reload
```

만약에 selinux 설치 되어 있지 않다면..

최소 설치를 하면 "semanage" 명령어가 실행되지 않는데 (아마존서버에선 존재 해서 패스)

```bash
yum install -y policycoreutils-python
```

selinux 포트 확인하기
```bash
semanage port -l | grep [포트번호]
```

없으면 포트 추가하기

```bash
semanage port -a -t ssh_port_t -p tcp 2222
```

포트 확인하기

```bash
netstat -an | grep :2222
```
그리고 더 중요한게 서버 외부 인스턴스 방화벽에 보면 새로 바뀐 포트를 입력해줍니다.
