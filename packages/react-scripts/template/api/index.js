module.exports = function(app) {
  app.get('/api', (req, res) => {
    res.send({
      meta: {
        code: 200,
        msg: 'success'
      },
      data: {
        msg: 'hello'
      }
    })
  })
}