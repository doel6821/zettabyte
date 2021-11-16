const db = require('./mongodb')

db.createCollection("comments", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "article_id", "comment", "commentator" ],
         properties: {
            article_id: {
               bsonType: "string",  
               description: "must be a string and is required"
           },
            comment: {
               bsonType: "string", 
               description: "must be a string and is required"
           },
            commentator: {
               bsonType: "string", 
               description: "must be a string and is required"
           }
         }
      }
   }
})
