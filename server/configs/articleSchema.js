const db = require('./mongodb')

db.createCollection("articles", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "title", "arcticle", "author" ],
          properties: {
             title: {
                bsonType: "string",  
                description: "must be a string and is required"
            },
            arcticle: {
                bsonType: "string", 
                description: "must be a string and is required"
            },
             author: {
                bsonType: "string", 
                description: "must be a string and is required"
            }
          }
       }
    }
 })



