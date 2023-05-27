const mongoose = require('mongoose') ;
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://mohamedaminebenromdhane01:7amma2000ess1925@cluster0.vjpwz4x.mongodb.net/article_microservice?retryWrites=true&w=majority" , {useNewUrlParser: true}).then(
    () => {
        console.log("database connected");}
)
.catch((err) => {
    console.log(err);}) 

module.exports = mongoose    