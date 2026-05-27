import { LikeRes, User, Restaurant } from '../models/association.js'

const likeService = {
  toggleLike: async (userId, resId) => {
    const existingLike = await LikeRes.findOne({
      where: { user_id: userId, res_id: resId }
    })

    if (existingLike) {
      await LikeRes.destroy({ where: { user_id: userId, res_id: resId } })
      return { message: "Unlike nhà hàng thành công", data: null }
    } else {
      const newLike = await LikeRes.create({
        user_id: userId,
        res_id: resId,
        date_like: new Date()
      })
      return { message: "Like nhà hàng thành công", data: newLike }
    }
  },

  getLikesByRestaurant: async (resId) => {
    return await LikeRes.findAll({
      where: { res_id: resId },
      include: [{ model: User, attributes: ['user_id', 'full_name', 'email'] }]
    })
  },

  getLikesByUser: async (userId) => {
    return await LikeRes.findAll({
      where: { user_id: userId },
      include: [{ model: Restaurant, attributes: ['res_id', 'res_name', 'image'] }]
    })
  }
}

export default likeService
