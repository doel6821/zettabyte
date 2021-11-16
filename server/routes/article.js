const route = require('express').Router()
const ArticleController = require('../controllers/ArticleController')

route.get("/:page/:limit", ArticleController.pagination)
route.get("/:title", ArticleController.findByTitle)
route.get("/:id", ArticleController.findById)
route.post("/", ArticleController.insertArticle)
route.put("/:id", ArticleController.UpdateById)
route.delete("/:id", ArticleController.deleteArticle)


module.exports = route
