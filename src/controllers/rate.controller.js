import rateService from '../services/rate.service.js'
import { responseSuccess } from '../common/helpers/response.helper.js'

const rateController = {
  async addRate(req, res, next) {
    const data = await rateService.addRate(req)
    const response = responseSuccess(data, 'Thêm đánh giá mới thành công')
    res.json(response)
  },

  async updateRate(req, res, next) {
    const data = await rateService.updateRate(req)
    const response = responseSuccess(data, 'Cập nhật đánh giá thành công')
    res.json(response)
  },

  async getRatesByRestaurant(req, res, next) {
    const data = await rateService.getRatesByRestaurant(req)
    const response = responseSuccess(data, 'Lấy danh sách đánh giá theo nhà hàng thành công')
    res.json(response)
  },

  async getRatesByUser(req, res, next) {
    const data = await rateService.getRatesByUser(req)
    const response = responseSuccess(data, 'Lấy danh sách đánh giá theo user thành công')
    res.json(response)
  }
}

export default rateController
