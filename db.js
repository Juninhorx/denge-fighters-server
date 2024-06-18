import { Sequelize } from "sequelize"

const host = process.env.MYSQLHOST
const database = process.env.MYSQLDATABASE
const username = process.env.MYSQLUSER
const password = process.env.MYSQLPASSWORD
const dbPort = process.env.MYSQLPORT

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  port: dbPort
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.log(database, password)
  console.error('Unable to connect to the database:', error);
}

export default sequelize