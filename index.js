'use strict'

require('dotenv').config({ silent: true })
const PORT = process.env.PORT || 6969
const log = require('./lib/util/log')
const app = require('./lib/app')
const mongo = require('./lib/util/mongo')
app.listen(PORT, () => {
  // mongo()
  log.info(`http://0.0.0.0:${PORT}`)
})
