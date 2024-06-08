require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/user')

const { MONGOURL } = process.env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURL);
        console.log('Database connected')
    } catch (error) {
        console.log('Database connection failed')
        console.log(error)
    }
}

module.exports = connectDB