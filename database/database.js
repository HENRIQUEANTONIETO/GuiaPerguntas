const Sequelize = require('sequelize')
const connection = new Sequelize('guiaperguntas', 'root', '78453116', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection