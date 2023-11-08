const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { path } = require('path');

const clothesRoute = require('./routes/clothes');
const userRoute = require('./routes/users');
//const authRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth');

require('dotenv/config');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use( clothesRoute); 
app.use(userRoute);
app.use(authRoutes);
// app.use('/api/auth', authRoutes);
//


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'TheTailored'
}).then(() => {
    console.log("Connected to the DB")
})
.catch((err) => {
    console.log("No Connection. Reason: " + err);
});


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {console.log('Server has started at port', PORT)});