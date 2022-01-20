const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');


// Bring in Routes

const postRoutes = require('./routes/post');
//app.get("/", postRoutes.getPosts);
//const {getPosts} = require('./routes/post');

// Middleware
//#region
// const myOwnMiddleware = (req, res, next) => {
//     console.log("Middleware Applied !!!");
//     next();
// };

app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(myOwnMiddleware);
//#endregion

//app.get("/", getPosts);
app.use("/", postRoutes);



app.get("/", (req, res) => {
    res.send("Hello world from Node JS");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('A Node JS API is listening on port : '+ port);
});



// Database Connectivity

//#region 
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config();
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});
//#endregion