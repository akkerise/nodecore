'use strict'

module.exports = (req, res, next) => {
  // if (req.headers['flatten-x-request-secret'] !== process.env.SECRET) {
  //   return res.end('Bần tăng chỉ nghe lệnh phật tổ')
  // }
  next()
}
