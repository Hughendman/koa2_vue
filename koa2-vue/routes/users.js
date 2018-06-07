const router = require('koa-router')()
// const yinxs_a = require("../public/javascripts/database/yinxs_a")
router.prefix('/users')

router.get('/',async function (ctx, next) {
  let data;
  await yinxs_a.test_a().then(result => {
    data = result;
  });
  console.log(data);//从数据库中获取的数据
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
