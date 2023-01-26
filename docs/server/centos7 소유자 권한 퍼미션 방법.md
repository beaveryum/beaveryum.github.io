---
title: 'centos7 소유자 권한 퍼미션 방법'
---

# {{ $frontmatter.title }}


파일 및 폴더 권한 주기

```bash
cd /home/user/domains/domain.com/public_html
find . -type d -exec chmod 0755 {} \;
find . -type f -exec chmod 0644 {} \;
```

```bash
chmod -R 755 *  // All files and folders to 755.
chmod -R 644 *.*  // All files will be 644.
```



소유자권한 주기

```bash
chown -R root:nginx /var/www/html/example1.com/
chmod -R 755 /var/www/html/example1.com/
chown -R root:nginx /var/log/nginx/example1.com/
chmod -R 660 /var/log/nginx/example1.com/
```

```bash
chcon -t httpd_sys_content_t /data/www/html/sites/mysite -R
chcon -t httpd_sys_rw_content_t /data/www/html/sites/mysite/logs -R
```