const mongoose = require('mongoose') ; 
const User = mongoose.model('user',



    { 
        name : {
            type : String 
        } ,
        lastname : {
            type : String 
        },
        email : {
            type : String
            
        } ,
        password : {
            type : String 
        }, 
        about : {
            type : String 
        } ,
        image : {
            type : String 
        } 




    }
)

module.exports = User