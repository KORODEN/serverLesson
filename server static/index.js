import express from "express"

const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Сервер запущен по адресу: http://localhost:3000')
})