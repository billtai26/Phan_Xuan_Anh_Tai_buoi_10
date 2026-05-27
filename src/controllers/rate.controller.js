import rateService from '../services/rate.service.js'
import { responseSuccess } from '../common/helpers/response.helper.js'

const rateController = {
  addRate: async (req, res, next) => {
    try {
      const { userId, resId, amount } = req.body
      const data = await rateService.addRate(userId, resId, amount)
      return res.status(201).json(responseSuccess(data, "Thêm đánh giá thành công", 201))
    } catch (error) {
      next(error)
    }
  },

  getRatesByRestaurant: async (req, res, next) => {
    try {
      const { resId } = req.params
      const data = await rateService.getRatesByRestaurant(resId)
      return res.status(200).json(responseSuccess(data, "Lấy danh sách đánh giá theo nhà hàng thành công"))
    } catch (error) {
      next(error)
    }
  },

  getRatesByUser: async (req, res, next) => {
    try {
      const { userId } = req.params
      const data = await rateService.getRatesByUser(userId)
      return res.status(200).json(responseSuccess(data, "Lấy danh sách đánh giá theo user thành công"))
    } catch (error) {
      next(error)
    }
  }
}

export default rateController
