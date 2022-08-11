const index = (req, res, next) => {
  return res.br({
    message: 'Not found'
  })
}

module.exports = {
  index,
}
