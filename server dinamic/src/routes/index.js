import express from "express"
import { homeRouter } from './homeRouter.js'
import { carsRouter } from './carsRouter.js'
 
export const mainRouter = express.Router()

mainRouter.use('/home', homeRouter)
mainRouter.use('/cars', carsRouter)