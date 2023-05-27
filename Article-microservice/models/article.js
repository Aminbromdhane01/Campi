const mongoose = require('mongoose') ; 
const Article = mongoose.model('Article',



    { 
        title: {
            type : String 
        } ,
       
        description: {
            type : String 
        } ,
        date: {
            type : String 
        }, 
        content: {
            type : String 
        } ,
        
        tags: {
            type : Array 
        },
        
        idUser : {
            type : String},
        AuName: {
            type : String
        }    





    }
)

module.exports = Article