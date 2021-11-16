const route = require('express').Router()
const Article = require('./article')
const Comment = require('./comment')

route.use('/article', Article)
route.use('/comment', Comment)

module.exports = route