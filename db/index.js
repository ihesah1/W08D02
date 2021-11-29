const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose")
const DB = process.env.DB;


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };



//connection  
mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);