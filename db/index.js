const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;
//connection  
mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);