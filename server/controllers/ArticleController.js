const Article = require('../models/article')

class ArticleController {
    static findByTitle (req, res) {
        const filter = {
            title: req.params.title
        }
        Article.findAll(filter)
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static pagination (req, res) {
        const filter = {
            limit: parseInt(req.params.limit),
            page: parseInt(req.params.page),
        }
        Article.pagination(filter)
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static async insertArticle (req, res) {
        const newArticle = {
            title: req.body.title,
            article: req.body.article,
            author: req.body.author,
            
        }
        console.log(newArticle, "<<<<<")
        await Article.insertArticle(newArticle)
            .then( data => {
                res.status(201).json(data.ops)
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }

    static findById (req, res) {
        const id = req.params.id
        Article.findById(id)
            .then( data => {
                res.status(200).json(data)
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }

    static UpdateById (req, res) {
        const id = req.params.id
        const updateArticle = {
            title: req.body.title,
            article: req.body.article,
            author: req.body.author,
            
        }
        Article.UpdateById(id, updateArticle)
            .then( data => {
                res.status(201).json({message: `Successfully update data Article with id : ${id}`})
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }

    static deleteArticle (req, res) {
        const id = req.params.id
        Article.deleteArticle(id)
            .then( data => {
                res.status(200).json({message: `Successfully delete Article with id: ${id}`})
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ArticleController