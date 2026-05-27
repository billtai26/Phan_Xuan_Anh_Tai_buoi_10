import { DataTypes } from 'sequelize'
import sequelize from '../common/sequelize/connect.sequelize.js'

const User = sequelize.define(
  'User', 
  {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'user',
  timestamps: false 
})

export default User
