import { DataTypes } from 'sequelize'
import sequelize from '../common/sequelize/connect.sequelize.js'

const RateRes = sequelize.define(
  'RateRes', 
  {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  res_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  date_rate: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'rate_res',
  timestamps: false
})

export default RateRes
