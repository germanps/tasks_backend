import express from 'express'
import dotenv from 'dotenv'
import conectDB from './config/db.js'

const app = express()
dotenv.config()
conectDB()

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
}) 


