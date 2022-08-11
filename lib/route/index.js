'use strict'

const log = require('../util/log')
const Router = require('router')
const configRoute = require('../config/route')
const isAuthenticated = require('../middleware/Authorization')
const app = configRoute(Router())
const RootController = require('../controller/root')

app.use('/api', isAuthenticated)
  .get('/api',
    RootController.index
  )

app.use(
  (err, req, res, next) => {
    res.statusCode = 500
    log.error(err)
    res.end('Bần tăng đang bận đánh quái ở bãi train')
  }
)

module.exports = app
