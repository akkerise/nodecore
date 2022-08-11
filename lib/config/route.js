'use strict'

const compression = require('compression')
const helmet = require('helmet')
const csurf = require('csurf')
const cookieParser = require('cookie-parser')
const qs = require('querystring')
const url = require('url')

// apply all middlewares needed for the app
module.exports = (app) => {
  // use gzip to reduce the size of assets
  app.use(compression({ level: process.env.COMPRESSION_LEVEL || 1 }))

  // query string
  app.use(require('../middleware/RequestHandler'))

  // res.json
  app.use(
    (req, res, next) => {
      const json = (obj) => JSON.stringify(obj, null, 4)
      res.json = (obj) => {
        res.setHeader('Content-Type', 'application/json; charset=utf8')
        res.end(json(obj))
      }
      next()
    }
  )


  /**
   * Add:
   * @res.ok(response)
   * @res.fail(response)
   */
  app.use(require('../middleware/ResponseHandler'))

  // parse body
  app.use((req, res, next) => {
    req.body = {}
    if (req.method !== 'POST') {
      return next()
    } else {
      let body = ''
      req.on('data', (buf) => {
        body += buf.toString()
      })
      req.on('end', () => {
        req.body = qs.parse(body)
        next()
      })
    }
  })

  // enable cookie
  app.use(cookieParser())

  // helmet best practise protection
  app.use(helmet())

  // csrf protection
  app.use(csurf({ cookie: true }))

  // assign csrfToken to view
  app.use(
    (req, res, next) => {
      res.locals = res.locals || {}
      res.locals.csrfToken = req.csrfToken()
      next()
    }
  )

  return app
}
