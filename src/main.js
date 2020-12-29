const app = require('./app')
const config = require('./app/config')

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(config.APP_PORT, () => {
  console.log(`${config.APP_PORT}启动`)
})