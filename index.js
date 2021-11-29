const express = require("express")
const dotenv = require("dotenv")
const db = require("./db/index.js");
const app = express() //instantiate express
app.use(express.json());
dotenv.config()
const cors = require("cors");
app.use(cors());

//port varible to hold value from file (env)
const PORT = process.env.PORT 

const roleRouter = require('./routers/routes/role');
const userRouter = require("./routers/routes/user");


app.use(roleRouter)
app.use(userRouter);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
