import express from 'express'
import rateController from '../controllers/rate.controller.js'

const rateRouter = express.Router()

rateRouter.post('/add', rateController.addRate)
rateRouter.patch('/update', rateController.updateRate)
rateRouter.get('/restaurant/:resId', rateController.getRatesByRestaurant)
rateRouter.get('/user/:userId', rateController.getRatesByUser)

export default rateRouter
