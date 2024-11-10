require('dotenv').config();

const connectDB = require('./Database');
connectDB();

const express = require('express');

const app = express();
app.use(express.json())
const router = express.Router();

app.use('/api/auth',require('./Routes/Auth/UserAuth'));

app.listen(process.env.PORT , ()=>{
    console.log('====================================');
    console.log(`PORT RUNNING AT ${process.env.PORT}`);
    console.log('====================================');
})

module.exports = router