import orderService from '../services/order.service.js'
import { responseSuccess } from '../common/helpers/response.helper.js'

const orderController = {
  async addOrder(req, res, next) {
    const data = await orderService.createOrder(req)
    const response = responseSuccess(data, 'Đặt món ăn thành công', 201)
    res.json(response)
  }
}

export default orderController
