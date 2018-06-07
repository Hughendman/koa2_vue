# koa2_vue

一个搭建好的项目，可以拿来直接开发，里面的架构已经替你完成，前端使用vue（可以在这koa2-vue/public下进行更替），后端使用koa2
使用：
* cd koa2-vue  执行npm i 下载完成后执行 npm run dev
* 访问：http://127.0.0.1:3000
* 前端开发：cd koa2-vue/public/fronted 执行npm i 下载完成后执行 npm run dev
* 访问：http://127.0.0.1:8080

### 后端构架已经解决：
#### 2018/6/7
* 跨域问题 （"koa2-cors": "^2.0.5"）
* 日志 （"log4js": "^0.6.38"）（/koa2-vue/public/logs/error || /koa2-vue/public/logs/response（响应日志格式：年月日 时分秒 信息 get/post 接口 ip 参数 状态码 响应内容））
* sql架构 (数据库配置：koa2-vue/public/config/database.js)（所有的sql语句统一管理，放在koa2-vue/public/javascripts/database目录下面，一个数据库一个js文件）（在user.js文件中有使用案例）

#### 邮箱
> xuesong_yin@126.com
#### 微信
> wxid_reb7kk3h8om122
