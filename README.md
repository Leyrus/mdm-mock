#  MDM OUT!!!

1. На фронте добавить в .env
```
REACT_APP_UIDM_API=http://localhost:55668
```

2. На беке в 

RecCdApi/appsettings.Development.json
   
RecCdService/appsettings.Development.json

поменять MdmAdapterUrl на http://localhost:55668/mdm-adapter
   
3. Добавить куку в браузере, это можно сделать в консоли браузера, добавив:
```
document.cookie= 'act=03ad656a-a6ca-4b21-b9f8-72b99ec9e463; ';
```

## Как запустить 

```
npm install
node mdm-server.js
```
