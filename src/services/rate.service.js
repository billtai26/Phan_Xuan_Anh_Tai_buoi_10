import { NotFoundError } from '../common/helpers/exception.helper.js'
import { RateRes, User, Restaurant } from '../models/association.js'

const rateService = {
  addRate: async (req) => {
    const { userId, resId, amount } = req.body

    const existingRate = await RateRes.findOne({
      where: { user_id: userId, res_id: resId }
    })

    if (existingRate) {
      existingRate.amount = amount
      existingRate.date_rate = new Date()
      await existingRate.save()
      return existingRate
    }

    return await RateRes.create({
      user_id: userId,
      res_id: resId,
      amount,
      date_rate: new Date()
    })
  },

  updateRate: async (req) => {
    const { userId, resId, amount } = req.body

    const existingRate = await RateRes.findOne({
      where: {
        user_id: userId,
        res_id: resId
      }
    })

    if (!existingRate) {
      throw new NotFoundError("Không tìm thấy đánh giá của user này tại nhà hàng")
    }

    existingRate.amount = amount
    existingRate.date_rate = new Date()
    await existingRate.save()

    return true
  },

  getRatesByRestaurant: async (req) => {
    const { resId } = req.body
    return await RateRes.findAll({
      where: { res_id: resId },
      include: [{ model: User, attributes: ['user_id', 'full_name'] }]
    })
  },

  getRatesByUser: async (req) => {
    const { userId } = req.body
    return await RateRes.findAll({
      where: { user_id: userId },
      include: [{ model: Restaurant, attributes: ['res_id', 'res_name'] }]
    })
  }
}

export default rateService
