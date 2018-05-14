
const router = require('koa-router')()
const home = require('./home')
const page = require('./page')

router.use('/', home.routes())
router.use('/page', page.routes())

module.exports = router