'use strict'

const HttpCode = {
  INTERNAL_SERVER_ERROR: { CODE: 500, MESSAGE: 'Internal Server Error' },
  UNAUTHORIZED: { CODE: 401, MESSAGE: 'Unauthorized' },
  BAD_REQUEST: { CODE: 400, MESSAGE: 'Bad Request' },
  FORBIDDEN: { CODE: 403, MESSAGE: 'Forbidden' },
  NOT_FOUND: { CODE: 404, MESSAGE: 'Not Found' },
  CORS: { CODE: 503, MESSAGE: 'CORS' },
  OK: { CODE: 200, MESSAGE: 'OK' },
}

module.exports = (req, res, next) => {
  res.statusCode = HttpCode.OK.CODE
  res.setHeader('Content-Type', 'application/json; charset=utf8')

  const response = (res, { code = HttpCode.OK.CODE, data = [], message = null }) => {
    res.statusCode = code;
    res.end(JSON.stringify({ error: { status: code === 200 || false, message }, data }))
  }

  res.ok = (code = HttpCode.OK.CODE, data = null, message = null) => {
    const body = { code: HttpCode.OK.CODE, data, message }
    response(res, body)
  };

  res.br = ({ code = HttpCode.BAD_REQUEST.CODE, data = [], message = null }) => {
    const body = { code: HttpCode.BAD_REQUEST.CODE, data, message }
    response(res, body)
  };

  res.ise = ({ code = HttpCode.INTERNAL_SERVER_ERROR.CODE, data = [], message = null }) => {
    const body = { code: HttpCode.INTERNAL_SERVER_ERROR.CODE, data, message }
    response(res, body)
  };

  next()
}
