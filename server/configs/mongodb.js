const { MongoClient } = require('mongodb')
const dbUrl = "mongodb+srv://doel6821:Bismillah1@doel6821.pwl6d.mongodb.net/zettabyte?retryWrites=true&w=majority"
const dbName = "zettabyte"

const instance = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true  });
// notice 'client' in the callback
instance.connect((err, client) => {
  if (err) console.log('failed to connect', err)
  else {
    console.log('connected')
    const article = client.db("zettabyte").collection("articles")
    const comment = client.db("zettabyte").collection("comments")
  }
 });

const db = instance.db(dbName)

module.exports = db

