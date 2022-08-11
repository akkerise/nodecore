'use strict'

const http = require('http')
const router = require('./route')
const app = require('router')()
const fh = require('finalhandler');

// Hide all url from bot
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('User-agent: *\nDisallow: /')
})

const onRequest = (req, res) => router(req, res, fh)
const server = http.createServer(onRequest)

module.exports = server