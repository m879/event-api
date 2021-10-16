const express=require('express');
const app=express();
const mongoose=require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');


var index = require('./routes/index');
var eraseEvents = require('./routes/eraseEvents');
var events = require('./routes/events');

dotenv.config();

// Connect to database
mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.use(cors());

// Middleware
app.use(express.json());

app.use('/', index);
app.use('/erase', eraseEvents);
app.use('/events', events);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});