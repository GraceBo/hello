const express = require('express');
const bodyParser = require('body-parser');

//DB
require('colors');
const mongoose = require ('mongoose');
const User = require('./models/User');



    mongoose.connect('mongodb://localhost:27017/hello', {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {

            User.findOne().then(user => {
                console.log(user);
                return (user);
            });
    });



//routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('HELLO  WORLD!'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

