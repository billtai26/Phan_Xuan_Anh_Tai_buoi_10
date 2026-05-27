import { DataTypes } from 'sequelize'
import sequelize from '../common/sequelize/connect.sequelize.js'

const LikeRes = sequelize.define(
  "LikeRes",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_like: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: "like_res",
    timestamps: false
  }
)

export default LikeRes