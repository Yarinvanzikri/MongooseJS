const express = require('express');
const router = express.Router();

router.use('/posts', require('./routes/postsRoutes'));
router.use('/comments', require('./routes/commentsRoutes'));


module.exports = router;