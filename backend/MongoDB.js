require('colors');
const mongoose = require ('mongoose');
const User = require('./models/User');


mongoose.connect('mongodb://localhost:27017/hello', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {

    User.findOne().then( users => {
        console.log(users);
    })
    console.log('database connected');
})
