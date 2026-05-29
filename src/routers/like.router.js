import express from 'express'
import { likeController } from '../controllers/like.controller.js'

const likeRouter = express.Router()

likeRouter.post("/toggle", likeController.toggleLikeRestaurant)
likeRouter.get("/restaurant/:resId", likeController.getLikesByRestaurant)
likeRouter.get("/user/:userId", likeController.getLikesByUser)

export default likeRouter
