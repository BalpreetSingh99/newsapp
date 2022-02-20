const express = require("express");
const router = express.Router();
const feedRouter = require('./feed');
const categoryRouter = require('./category');
const authorRouter = require('./author');
router.use('/feed', feedRouter);
router.use('/category', categoryRouter);
router.use('/author', authorRouter);



module.exports = router