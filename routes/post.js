// Declare and Export methods and allocate routes

//#region
// const getPosts = (req, res) => {
//     res.send("Hello World from Node JS");
// };

// module.exports = {
//     getPosts
// };
//#endregion

//#region 
// exports.getPosts = (req, res) => {
//     res.send("Hello World from Node JS");
// };
//#endregion

const express = require("express");
const postController = require('../controllers/post');
const validator = require('../validator');

const router = express.Router();

router.get('/', postController.getPosts);

// First checks route then checks validation then proceeds to controller
router.post('/post', validator.createPostValidator, postController.createPost);

module.exports = router;