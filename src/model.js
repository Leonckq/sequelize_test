const Sequelize = require('sequelize')
const seq = require('./seq')
const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING, //varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING,
    comment: '昵称'
  }
})

const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})


User.hasMany(Blog, {
  foreignKey: 'userId'
})
//创建外键
Blog.belongsTo(User, {
  foreignKey: 'userId'
})



module.exports = {
  User,
  Blog
}