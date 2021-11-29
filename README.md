
# :pushpin: Login & Register task using Node/Express
## using bcrypt to hash passwords and jwt (jsonwebtoken)

Lets go :computer: !

## Requirement

``` Nodejs,Express, Mongodb, Core ,bcrypt ,jwt ```

    
    cd Desktop
    mkdir W08D02
    cd W08D02
    npm init -Y
    



Now install the dependencies:

    npm install express  mongoose bcrypt jsonwebtoken cors

Also we need nodemon to restart the server whenever code is changed.

Then include the module to your JavaScript code with require:

```const bcrypt = require("bcrypt");```

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
    
Hashing a password in Node.js
The bcrypt NPM package is a JavaScript implementation of the bcrypt password hashing function that allows you to easily create a hash out of a password string. Unlike encryption which you can decode to get back the original password, hashing is a one-way function that can’t be reversed once done.
This code hashes the password 'Pa$$w0rd' using bcrypt and stores the result in the passwordHash variable.

``` const passwordHash = bcrypt.hashSync('Pa$$w0rd', 10); ```


Now we need to bring this file in index.js


    const db = require('./db');
