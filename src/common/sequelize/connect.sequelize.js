import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root:12345@localhost:3306/BTVN')

// code test từ website của sequelize để kiểm tra kết nối đến database
try {
  await sequelize.authenticate()
  console.log('(SEQUELIZE) Connection has been established successfully.')
} catch (error) {
  console.error('(SEQUELIZE) Unable to connect to the database:', error)
}

export default sequelize