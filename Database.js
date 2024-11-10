const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;