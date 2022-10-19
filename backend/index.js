const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const authController = require('./routes/auth.route');
const connection = require('./configs/db');
const authentication = require('./middlewares/auth');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the BMI Calculation App')
})

app.use('/auth', authController);
app.use(authentication);

app.get('/user', (req, res) => {
    res.send('user with token')
})


app.listen(8080, async () => {
    try {
        await connection;
        console.log('Database Connected')
    }
    catch {
        console.log('not connected to db')
    }
    console.log('Listening on 8080')
})