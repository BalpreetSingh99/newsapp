const express = require("express");
const router = express.Router();
const feedRouter = require('./feed');
const categoryRouter = require('./category');
const authorRouter = require('./author');
const userRouter = require('./user');
router.use('/feed', feedRouter);
router.use('/category', categoryRouter);
router.use('/author', authorRouter);
router.use('/user', userRouter);



module.exports = router