const route = require('express').Router()
const CommentController = require('../controllers/CommentController')

route.get("/", CommentController.findAll)
route.get("/:id", CommentController.findById)
route.post("/", CommentController.insertComment)
route.put("/:id", CommentController.UpdateById)
route.delete("/:id", CommentController.deleteComment)


module.exports = route
