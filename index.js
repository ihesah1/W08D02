const express = require("express")
const dotenv = require("dotenv")
const db = require("./db/index.js");
const app = express() //instantiate express
app.use(express.json());
dotenv.config()
const PORT = process.env.PORT //port varible to hold value from file (env)









app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });