require('colors');
const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost:27017/hello', {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {

    const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    })

    const User = mongoose.model('user', UserSchema)

    User.findOne().then( users => {

        console.log(users);
    })
})
