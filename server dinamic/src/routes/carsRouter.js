import express from "express"
 
export const carsRouter = express.Router()

carsRouter.get('/', (req, res) => {
    res.render('home')
})

// carsRouter.post('/', (req, res) => {
//     res.render('home')
// })