import likeService from '../services/like.service.js'
import { responseSuccess } from '../common/helpers/response.helper.js'

const likeController = {
  async toggleLikeRestaurant(req, res, next) {
    const result = await likeService.toggleLike(req)
    const response = responseSuccess(result.data, result.message)
    res.json(response)
  },

  async getLikesByRestaurant(req, res, next) {
    const data = await likeService.getLikesByRestaurant(req)
    const response = responseSuccess(data, 'Lấy danh sách like theo nhà hàng thành công')
    res.json(response)
  },

  async getLikesByUser(req, res, next) {
    const data = await likeService.getLikesByUser(req)
    const response = responseSuccess(data, 'Lấy danh sách like theo user thành công')
    res.json(response)
  }
}

export default likeController
