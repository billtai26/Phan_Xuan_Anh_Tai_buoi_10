import { prisma } from '../common/prisma/connect.prisma.js'

export const orderService = {
  async createOrder(req) {
    const { userId, foodId, amount, code, arrSubId } = req.body

    return await prisma.orders.create({
      data: {
        userId: Number(userId),
        foodId: Number(foodId),
        amount: Number(amount),
        code: code,
        arr_sub_id: arrSubId
      }
    })
  }
}
