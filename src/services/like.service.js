import { prisma } from '../common/prisma/connect.prisma.js'

export const likeService = {
  async toggleLike(req) {
    const { userId, resId } = req.body

    const existingLike = await prisma.like_res.findFirst({
      where: {
        user_id: Number(userId),
        res_id: Number(resId)
      }
    })

    if (existingLike) {
      await prisma.like_res.deleteMany({
        where: {
          user_id: Number(userId),
          res_id: Number(resId)
        }
      })
      return { message: 'Unlike nhà hàng thành công', data: null }
    } else {
      const newLike = await prisma.like_res.create({
        data: {
          user_id: Number(userId),
          res_id: Number(resId),
          date_like: new Date()
        }
      })
      return { message: 'Like nhà hàng thành công', data: newLike }
    }
  },

  async getLikesByRestaurant(req) {
    const { resId } = req.params

    return await prisma.like_res.findMany({
      where: {
        res_id: Number(resId)
      },
      include: {
        user: {
          select: {
            user_id: true,
            full_name: true,
            email: true
          }
        }
      }
    })
  },

  async getLikesByUser(req) {
    const { userId } = req.params

    return await prisma.like_res.findMany({
      where: {
        user_id: Number(userId)
      },
      include: {
        restaurant: true
      }
    })
  }
}
