const Comment = require('../models/comment')

class CommentController {
    static findAll (req, res) {
        Comment.findAll()
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static insertComment (req, res) {
        const newComment = {
            article_id: req.body.article_idc,
            comment: req.body.comment,
            commentator: req.body.commentator,
           
        }
        console.log(newComment, "<<<<<")
        Comment.insertComment(newComment)
            .then( data => {
                res.status(201).json(data.ops)
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }

    static findById (req, res) {
        const id = req.params.id
        Comment.findById(id)
            .then( data => {
                res.status(200).json(data)
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }

    static UpdateById (req, res) {
        const id = req.params.id
        const updateComment = {
            article_id: req.body.article_id,
            comment: req.body.comment,
            commentator: req.body.commentator,
        }
        Comment.UpdateById(id, updateComment)
            .then( data => {
                res.status(201).json({message: `Successfully update data Comment with id : ${id}`})
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }

    static deleteComment (req, res) {
        const id = req.params.id
        Comment.deleteComment(id)
            .then( data => {
                res.status(200).json({message: `Successfully delete Comment with id: ${id}`})
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }
}

module.exports = CommentController