import { DataTypes } from 'sequelize'
import sequelize from '../common/sequelize/connect.sequelize.js'

const Restaurant = sequelize.define(
  'Restaurant', 
  {
  res_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  res_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'restaurant',
  timestamps: false
})

export default Restaurant
