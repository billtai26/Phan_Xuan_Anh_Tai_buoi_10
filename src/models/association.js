import User from './user.model.js'
import Restaurant from './restaurant.model.js'
import Food from './food.model.js'
import Order from './order.model.js'
import LikeRes from './like_res.model.js'
import RateRes from './rate_res.model.js'

User.hasMany(LikeRes, { foreignKey: 'user_id' })
LikeRes.belongsTo(User, { foreignKey: 'user_id'})

Restaurant.hasMany(LikeRes, { foreignKey: 'res_id' })
LikeRes.belongsTo(Restaurant, { foreignKey: 'res_id'})

User.hasMany(RateRes, { foreignKey: 'user_id' })
RateRes.belongsTo(User, { foreignKey: 'user_id'})

Restaurant.hasMany(RateRes, { foreignKey: 'res_id' })
RateRes.belongsTo(Restaurant, { foreignKey: 'res_id' })

User.hasMany(Order, { foreignKey: 'user_id' })
Order.belongsTo(User, { foreignKey: 'user_id' })

Food.hasMany(Order, { foreignKey: 'food_id' })
Order.belongsTo(Food, { foreignKey: 'food_id' })

export { 
  User,
  Restaurant,
  Food,
  LikeRes,
  RateRes,
  Order
}
