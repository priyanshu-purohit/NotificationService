const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const cron = require('./crons/cron');
const app = express();

const ticketRoutes = require('./routes/ticket.routes');

env.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

ticketRoutes(app);

app.listen(process.env.PORT, async () => {
    console.log('Notification server started');
    if(process.env.EMAIL_PASS)
        cron.mailerCron();
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('Successfully connected to mongo');
    }
    catch(error){
        console.log(error);
    }
})