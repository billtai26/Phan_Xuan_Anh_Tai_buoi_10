import { DataTypes } from 'sequelize'
import sequelize from '../common/sequelize/connect.sequelize.js'

const Order = sequelize.define(
  'Order', 
  {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  arr_sub_id: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  food_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'order',
  timestamps: false
})

export default Order
