const Post = require('../models/post');

exports.getPosts = (req, res) => {
    //res.send("Hello World from Node JS");
    res.json({
        posts : [
            {title : 'First Post'},
            {title : 'Second Post'}
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log("CREATING POST : ", post);
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            post: result
        });
    });
};