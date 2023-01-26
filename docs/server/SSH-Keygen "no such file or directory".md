---
title: 'SSH-Keygen "no such file or directory"'
---

# {{ $frontmatter.title }}



ssh 연결 하려고 밤새도록 찾아도 다 옛날 레퍼런스 글 밖 에 안보인다..

결국엔 스텍오버플로우에서 힌트를 얻어왔다!!

터미널에서 연결 되는거 보고 환호성이 터진다!!!!!



일단 하는 방법은 이렇다~



ssh -i aws 도메인 ...... 이렇게 입력하면 아래 에러가 뿜는다...

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@       WARNING: POSSIBLE DNS SPOOFING DETECTED!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
The ECDSA host key for ***.com has changed,
and the key for the corresponding IP address ***.***.***.***
is unknown. This could either mean that
DNS SPOOFING is happening or the IP address for the host
and its host key have changed at the same time.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:bS3YVX************************************
Please contact your system administrator.
Add correct host key in /Users/******/.ssh/known_hosts to get rid of this message.
Offending ED25519 key in /Users/******/.ssh/known_hosts:37
ECDSA host key for seoirim.com has changed and you have requested strict checking.
Host key verification failed.
```

그러면 아래 명령어로 해결 하면 된다고들 하는데..

레퍼런스 찾아보면 다들 이렇게 해서 해결 했다고 하는데...

사용법이 틀렸다..


ssh-keygen -R [ IP or DomainName]

다시 정의 한다면 아래처럼 해야된다.



일단 아마존에서 펌키를 가져다가 다운 받는데 적절한 경로로 담아둔다.



파일 권한을 줘야한다. (디렉토리가 절대아니고 파일만...)

```bash
chmod 600 /Users/..... /test.pem
```

그리고 다시 명령어를 입력한다.

```bash
ssh-keygen -t rsa -b 4096 -C "아무개이메일" -f /path/to/key
```

이렇게 하면 아무거나 이메일을 넣어주고 /path/to/key는 당연히 펌키 위치를 넣어준다.



그럼 뭐라고 영문으로 나온데 yes로 해준다.

...... (y/n)? y

그러고 나머진 엔터 두번 치면 된다.




```bash
SHA256:/SECIpwcCUhnJsR4KX4aSaSCLpLc51MSqxkV3nYP2PM “아무개이메일”

The key's randomart image is:

+---[RSA 4096]----+

|O*.* .           |

|*=Oo. o o        |

|*o* .+.+ =       |

|+=.o..+...=      |

|+o+o + .S oE.    |

|o.  * o  . o .   |

|   o o      .    |

|      .          |

|                 |

+----[SHA256]-----+
```




이러면 끝난다!!!



다시 ssh로 아마존 서버 접속하면된다.





## 참고 자료 :

https://stackoverflow.com/questions/32910928/ssh-keygen-no-such-file-or-directory