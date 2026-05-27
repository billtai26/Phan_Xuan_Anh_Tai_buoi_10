import { Order } from '../models/association.js'

const orderService = {
  createOrder: async (orderData) => {
    const { userId, foodId, amount, code, arrSubId } = orderData
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
