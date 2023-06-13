import express from "express"
import { mainRouter } from "./src/routes/index.js"

const app = express()

//MVC - model view controller
//router

app.set('view engine', 'ejs')
app.use('/', mainRouter)

app.listen(3000, () => {
    console.log('Сервер запущен по адресу: http://localhost:3000')
})