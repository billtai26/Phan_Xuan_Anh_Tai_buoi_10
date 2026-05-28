import { Order } from '../models/association.js'

const orderService = {
  createOrder: async (req) => {
    const { userId, foodId, amount, code, arrSubId } = req.body
    
    return await Order.create({
      user_id: userId,
      food_id: foodId,
      amount,
      code,
      arr_sub_id: arrSubId
    })
  }
}

export default orderService
