import { prisma } from '../common/prisma/connect.prisma.js'
import { NotFoundError } from '../common/helpers/exception.helper.js'

export const rateService = {
  async addRate(req) {
    const { userId, resId, amount } = req.body

    const existingRate = await prisma.rate_res.findFirst({
      where: {
        user_id: Number(userId),
        res_id: Number(resId)
      }
    })

    if (existingRate) {
      await prisma.rate_res.updateMany({
        where: {
          user_id: Number(userId),
          res_id: Number(resId)
        },
        data: {
          amount: Number(amount),
          date_rate: new Date()
        }
      })

      return await prisma.rate_res.findFirst({
        where: {
          user_id: Number(userId),
          res_id: Number(resId)
        }
      })
    }

    return await prisma.rate_res.create({
      data: {
        user_id: Number(userId),
        res_id: Number(resId),
        amount: Number(amount),
        date_rate: new Date()
      }
    })
  },

  async updateRate(req) {
    const { userId, resId, amount } = req.body

    const existingRate = await prisma.rate_res.findFirst({
      where: {
        user_id: Number(userId),
        res_id: Number(resId)
      }
    })

    if (!existingRate) {
      throw new NotFoundError("Không tìm thấy đánh giá của user này tại nhà hàng")
    }

    await prisma.rate_res.updateMany({
      where: {
        user_id: Number(userId),
        res_id: Number(resId)
      },
      data: {
        amount: Number(amount),
        date_rate: new Date()
      }
    })

    return true
  },

  async getRatesByRestaurant(req) {
    const { resId } = req.body 

    return await prisma.rate_res.findMany({
      where: {
        res_id: Number(resId)
      },
      include: {
        Users: {
          select: {
            id: true,
            fullName: true
          }
        }
      }
    })
  },

  async getRatesByUser(req) {
    const { userId } = req.body 

    return await prisma.rate_res.findMany({
      where: {
        user_id: Number(userId)
      },
      include: {
        restaurant: true
      }
    })
  }
}
