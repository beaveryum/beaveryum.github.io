---
title: 'SSH 무작위 로그인 시도 막기 ( Fail2Ban )'
---

# {{ $frontmatter.title }}


Linux 서버를 공개망에서 사용하면서 방화벽을 사용하지 않는 경우 ssh 로그인을 지속적으로 시도하는 로그를 볼 수 있습니다.

대부분 외국 IP 대역에서 지속적으로 ssh 로그인을 시도하는데 무작위 비밀번호를 대입하는 것입니다.

당연히 방화벽을 설정하는 것이 당연하나 특수한 목적으로 인해 접속 IP 대역을 제한할 수 없는 경우도 있을 수 있습니다.

이런 경우에 보안을 조금이나마 강화하기 위해 사용할 수 있는 것이 fail2ban 입니다.


1-1. SSH 로그인 시도 IP를 확인

[root@localhost ~]# ls /var/log/secure | xargs grep -E "[[:digit:]]+\.[[:digit:]]+\.[[:digit:]]+\.[[:digit:]]+" -o | sort | uniq
공개망에 연결된 서버라면 생각보다 많은 IP가 나와 놀랄수도 있습니다.
IP들 중 자신이 아는 IP를 제외하면 대부분이 위에 언급한 공격일 확률이 높습니다.


1-2. 최근 로그인 실패 기록을 확인

[root@localhost ~]# last -f /var/log/btmp | more

20 Linux Log Files that are Located under /var/log Directory에 보면 /var/log/btmp에 대한 설명을 확인 할 수 있습니다.
fail2ban은 지정된 시간 내에 지정된 횟수 이상으로 ssh 로그인을 실패하면 해당 IP에서의 접근을 지정된 시간만큼 차단하는 역할을 합니다.


2. fail2ban 살펴보기

아래는 fail2ban를 설치하면 생성되는 fail2ban 디렉토리들입니다.

/etc/fail2ban/
  ├ action.d
  │     계정 접속에 실패할 경우 사용할 수 있는 action 파일들이 있습니다. 방화벽으로 ip차단을 할 수 있는 firewallcmd-new.conf 파일도 여기에 있습니다.
  │
  │     기본 action 파일내용은 아래와 같습니다.
  │     [Definition]
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

[root@localhost ~]# rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm


Retrieving https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm


Preparing...                          ################################# [100%]
        package epel-release-7-10.noarch is already installed


4.  fail2ban 설치

[root@localhost ~]# yum install -y fail2ban

Loaded plugins: fastestmirror
base                                                                                                                           | 3.6 kB  00:00:00
epel/x86_64/metalink                                                                                                           | 4.2 kB  00:00:00
epel                                                                                                                           | 4.3 kB  00:00:00
extras                                                                                                                         | 3.4 kB  00:00:00
mariadb                                                                                                                        | 2.9 kB  00:00:00
updates                                                                                                                        | 3.4 kB  00:00:00
webtatic                                                                                                                       | 3.6 kB  00:00:00
(1/2): epel/x86_64/updateinfo                                                                                                  | 810 kB  00:00:00
epel/x86_64/primary_db         FAILED
http://repos.fedoralinux.ir/pub/epel/7/x86_64/repodata/2d654b9fec87d6b6e15258552458b0e18b470ebad3bc11f4178bc4b6fa518c4b-primary.sqlite.xz: [Errno 14] HTTP Error 404 - Not Found
Trying other mirror.
To address this issue please refer to the below knowledge base article

https://access.redhat.com/articles/1320623

[Errno 14] yum fails with HTTP/HTTPS Error 404 - Red Hat Customer Portal
Abstract field is required.
1


If above article doesn't help to resolve this issue please create a bug on https://bugs.centos.org



(2/2): epel/x86_64/primary_db                                                                                                  | 4.8 MB  00:00:00
Loading mirror speeds from cached hostfile
 * base: ftp.riken.jp
 * epel: mirror.premi.st
 * extras: ftp.riken.jp
 * updates: ftp.riken.jp
 * webtatic: sp.repo.webtatic.com
Package fail2ban-0.9.6-3.el7.noarch already installed and latest version
Nothing to do


CentOS 7에서 설치시 fail2ban-firewalld 패키지가 같이 필수로 설치됩니다.
firewalld 말고, iptables을 계속 사용한다면 /etc/fail2ban/jail.d/00-firewalld.conf 파일을 제거해야 iptables를 통한 차단이 이루어집니다.


5. 재부팅시 자동실행되도록 fail2ban 서비스를 활성화

[root@localhost ~]# systemctl enable fail2ban
Created symlink from /etc/systemd/system/multi-user.target.wants/fail2ban.service to /usr/lib/systemd/system/fail2ban.service.


6. fail2ban-systemd 설치 (CentOS 7)

fail2ban는 접속로그 기록을 분석해서 실패기록을 근거로 차단하는 원리로 동작합니다.

레드헷 계열 (Red Hat/CentOS/Fedora)에서 접근 로그파일은 /var/log/secure 이였습니다. 그래서 이전에는 /var/log/secure 로그파일에 의존해서 동작했습니다.
하지만 CentOS 7부터는 시스템 로그들을 systemd에서 통합 관리하게 되었습니다.
때문에  /var/log/secure 로그파일은 더 이상사용하지않는 파일이 되었습니다.
그러나 로그파일이 없으면 fail2ban가 동작할 수 없습니다.

대체방안으로 간단하게 fail2ban-systemd를 설치해주면 해결됩니다.

[root@localhost ~]# yum install fail2ban-system
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: www.ftp.ne.jp
 * epel: mirror01.idc.hinet.net
 * extras: www.ftp.ne.jp
 * updates: www.ftp.ne.jp
 * webtatic: sp.repo.webtatic.com
No package fail2ban-system available.
Error: Nothing to do


7. fail2ban 기본 설정

fail2ban의 기본 설정파일은 /etc/fail2ban/jail.conf 입니다.
이 기본설정 파일을 직접 수정하지않고, 기본 설정파일을 참조하여 새로 생성한 사용자 설정파일에서 설정해주는 방법으로 하면 yum 업데이트가 되더라도 사용자가 설정한 파일을 덮어쓰지않게 됩니다.

[root@localhost ~]# vi /etc/fail2ban/jail.d/local.conf
[DEFAULT]
# Common
ignoreip  = 127.0.0.1/8
bantime   = 86400
findtime  = 86400
maxretry  = 3
banaction = firewallcmd-new

# Mail
destemail = 알림 수신메일 주소
sender    = 알림 발신메일 주소

# Action
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

fail2ban 로그파일( /var/log/fail2ban.log )에 로그가 너무 많이 생성된다면 로그레벨(loglevel)을 ERROR으로 조정하면 됩니다.
/etc/fail2ban/fail2ban.d 디렉토리에 사용자 설정파일( local.conf )을 생성하고, 로그레벨 설정을 넣으면 됩니다.

[root@localhost ~]# vi /etc/fail2ban/fail2ban.d/local.conf
[Definition]
loglevel = ERROR


9. fail2ban 서비스 시작

[root@localhost ~]# systemctl start fail2ban.service


10. fail2ban 상태 확인

[root@localhost ~]# fail2ban-client status sshd

Status for the jail: sshd
|- Filter
|  |- Currently failed: 1
|  |- Total failed: 153
|  `- File list:    /var/log/secure
`- Actions
   |- Currently banned: 0
   |- Total banned: 2
   `- Banned IP list:


11. ipset에 설정(차단)된 내용 확인

[root@localhost ~]# ipset --list

Name: fail2ban-sshd
Type: hash:ip
Revision: 1
Header: family inet hashsize 1024 maxelem 65536 timeout 3600
Size in memory: 16656
References: 1
Members:


12. fail2ban 로그 확인

[root@localhost ~]# cat /var/log/fail2ban.log | more
2017-08-12 00:48:50,511 fail2ban.server         [32725]: INFO    Changed logging target to /var/log/fail2ban.log for Fail2ban v0.9.6
2017-08-12 00:48:50,512 fail2ban.database       [32725]: INFO    Connected to fail2ban persistent database '/var/lib/fail2ban/fail2ban.sqlite3'
2017-08-12 00:48:50,515 fail2ban.database       [32725]: WARNING New database created. Version '2'
2017-08-12 00:48:50,516 fail2ban.jail           [32725]: INFO    Creating new jail 'sshd'
2017-08-12 00:48:50,538 fail2ban.jail           [32725]: INFO    Jail 'sshd' uses systemd {}
2017-08-12 00:48:50,566 fail2ban.jail           [32725]: INFO    Initiated 'systemd' backend
2017-08-12 00:48:50,567 fail2ban.filter         [32725]: INFO    Set maxRetry = 3
2017-08-12 00:48:50,568 fail2ban.filter         [32725]: INFO    Set jail log file encoding to UTF-8
2017-08-12 00:48:50,569 fail2ban.actions        [32725]: INFO    Set banTime = 86400
2017-08-12 00:48:50,570 fail2ban.filter         [32725]: INFO    Set findtime = 86400
2017-08-12 00:48:50,570 fail2ban.filter         [32725]: INFO    Set maxlines = 10
2017-08-12 00:48:50,660 fail2ban.filtersystemd  [32725]: INFO    Added journal match for: '_SYSTEMD_UNIT=sshd.service + _COMM=sshd'
2017-08-12 00:48:50,677 fail2ban.filter         [32725]: INFO    [sshd] Found 59.63.166.83
2017-08-12 00:48:50,679 fail2ban.jail           [32725]: INFO    Jail 'sshd' started
2017-08-12 00:48:50,681 fail2ban.filter         [32725]: INFO    [sshd] Found 59.xx.166.83
...


14. 차단 IP 목록

설치하고 몇분동안 차단된 아이피가 벌써 5개나 ...
[root@localhost ~]# awk '($(NF-1) = /Ban/){print $NF}' /var/log/fail2ban.log | sort | uniq -c | sort -n
      1 116.xx.116.41
      1 2.xx.93.91
      1 39.xx.93.107
      1 59.xx.166.83
      1 61.xx.172.66

[root@localhost ~]# firewall-cmd --direct --get-rules ipv4 filter f2b-sshd
1000 -j RETURN
0 -s 61.xx.172.66 -j REJECT --reject-with icmp-port-unreachable
0 -s 59.xx.166.83 -j REJECT --reject-with icmp-port-unreachable
0 -s 116.xx.116.41 -j REJECT --reject-with icmp-port-unreachable
0 -s 2.xx.93.91 -j REJECT --reject-with icmp-port-unreachable
0 -s 39.xx.93.107 -j REJECT --reject-with icmp-port-unreachable


15. ip 차단해제

[root@localhost ~]# firewall-cmd --direct --remove-rule ipv4 filter f2b-sshd 0 -s [해제할 ip주소]  -j REJECT --reject-with icmp-port-unreachable



## 참고 자료 :

http://www.joshi.co.kr/index.php?mid=board_Szhe52&document_srl=305384