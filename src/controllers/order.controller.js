import orderService from '../services/order.service.js'
import { responseSuccess } from '../common/helpers/response.helper.js'

const orderController = {
  addOrder: async (req, res, next) => {
    try {
      const { userId, foodId, amount, code, arrSubId } = req.body
      const data = await orderService.createOrder({ userId, foodId, amount, code, arrSubId })
      return res.status(201).json(responseSuccess(data, "Đặt món ăn thành công", 201))
    } catch (error) {
      next(error)
    }
  }
}

export default orderController
