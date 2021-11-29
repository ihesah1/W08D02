# W08D02
## Login & Register task using Node/Express using bcrypt to hash passwords and jwt (jsonwebtoken)


Lets go !

    
    cd Desktop
    mkdir W08D02
    cd W08D02
    npm init -Y
    



Now install the dependencies:

    npm install express  mongoose bcrypt jsonwebtoken cors

Also we need nodemon to restart the server whenever code is changed.


Now, we need to initialize the server  here.

    const express = require('express');
   
    const app = express();
    const port = process.env.PORT || 5001;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', async (req, res) => {
        res.send('Index Route')
    }

    app.get('/register', async (req, res) => {
        res.send('Register Route')
    }

    app.listen(port, console.log(`Server is running at port ${port}`));

In the root directory, create a db.js file, in this file we will connect the MongoDB database.

login/db.js

    const mongoose = require('mongoose');

    mongoose.connect(
        'mongodb://localhost:27017/login-system',
        { useNewUrlParser: true, useUnifiedTopology: true },
        console.log('Database Connected')
    );

Now we need to bring this file in index.js


    const db = require('./db');
