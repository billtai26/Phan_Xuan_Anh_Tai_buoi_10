import { RateRes, User, Restaurant } from '../models/association.js'

const rateService = {
  addRate: async (userId, resId, amount) => {
    
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

  getRatesByRestaurant: async (resId) => {
    return await RateRes.findAll({
      where: { res_id: resId },
      include: [{ model: User, attributes: ['user_id', 'full_name'] }]
    })
  },

  getRatesByUser: async (userId) => {
    return await RateRes.findAll({
      where: { user_id: userId },
      include: [{ model: Restaurant, attributes: ['res_id', 'res_name'] }]
    })
  }
}

export default rateService
