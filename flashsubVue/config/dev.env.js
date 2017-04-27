var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var port = 3000;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  port:port,
  api:'"http://localhost:3001/api/"'
})

