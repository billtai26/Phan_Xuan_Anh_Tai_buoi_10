import likeService from '../services/like.service.js'
import { responseSuccess } from '../common/helpers/response.helper.js'

const likeController = {
  toggleLikeRestaurant: async (req, res, next) => {
    try {
      const { userId, resId } = req.body
      const result = await likeService.toggleLike(userId, resId)
      return res.status(200).json(responseSuccess(result.data, result.message))
    } catch (error) {
      next(error)
    }
  },

  getLikesByRestaurant: async (req, res, next) => {
    try {
      const { resId } = req.params
      const data = await likeService.getLikesByRestaurant(resId)
      return res.status(200).json(responseSuccess(data, "Lấy danh sách like theo nhà hàng thành công"))
    } catch (error) {
      next(error)
    }
  },

  getLikesByUser: async (req, res, next) => {
    try {
      const { userId } = req.params
      const data = await likeService.getLikesByUser(userId)
      return res.status(200).json(responseSuccess(data, "Lấy danh sách like theo user thành công"))
    } catch (error) {
      next(error)
    }
  }
}

export default likeController
