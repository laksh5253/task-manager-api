//mongoose use mogodb modules behind the scene
const mongoose = require('mongoose')

//connect to database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const me = new User({
//     name: 'Shivam',
//     email: 'shivam@nodejs.com',
//     password: 'phone098!'
// })

// // save the user data and it will return promise
// me.save().then(()=>{
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error!',error)
// })