# 랜덤 함수 이용해서  

guest00~99 문자열 표시하기 

```
echo "guest".str_pad(rand(0,99), 2, "0", STR_PAD_LEFT)."~".str_pad(rand(0,99), 2, "0", STR_PAD_LEFT);
```

