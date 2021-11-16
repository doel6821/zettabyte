const { ObjectId } = require('mongodb')
const db = require('../configs/mongodb')
const Comment = db.collection("comments")

class CommentModel {
    static findAll () {
        return Comment.find().toArray()
    }

    static insertComment (newComment) {
        return Comment.insertOne(newComment)
    }

    static findById (id) {
        return Comment.find({_id: ObjectId(id)}).toArray()
    }

    static UpdateById (id, updateComment) {
        return Comment.updateOne({_id: ObjectId(id)}, {$set: updateComment})
    }

    static deleteComment (id) {
        return Comment.deleteOne({_id: ObjectId(id)})
    }
}

module.exports = CommentModel