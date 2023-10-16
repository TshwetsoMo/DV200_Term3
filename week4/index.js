const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const carRoute = require('./routes/cars')
const userRoute = require('./routes/users')

require('dotenv/config')

const app = express()

//Used with react
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(carRoute)
app.use(userRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'week4', //Collection Name
}).then(() => {
    console.log("Connected to test DB")
})
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log('Server started at port', PORT)});