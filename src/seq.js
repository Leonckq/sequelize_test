const Sequelize = require('sequelize')
const conf = {
  host: 'localhost',
  dialect: 'mysql'
}
const seq = new Sequelize('koa2_weibo_db', 'root', 'Liyang6666', conf)



module.exports = seq