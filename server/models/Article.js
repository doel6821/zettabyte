const { ObjectId } = require('mongodb')
const db = require('../configs/mongodb')
// const { param } = require('../routes')
const Article = db.collection("articles")

class ArticleModel {
    static findAll (filter) {
        return Article.aggregate([{$match: {title: filter.title}}]).toArray()
    }

    static pagination (filter) {
        return Article.find().limit(filter.limit * 1).skip(filter.page -1).toArray()
    }

    static insertArticle (newArticle) {
        return Article.insertOne(newArticle)
    }

    static findById (id) {
        return Article.find({_id: ObjectId(id)}).toArray()
    }

    static UpdateById (id, updateArticle) {
        return Article.updateOne({_id: ObjectId(id)}, {$set: updateArticle})
    }

    static deleteArticle (id) {
        return Article.deleteOne({_id: ObjectId(id)})
    }
}

module.exports = ArticleModel