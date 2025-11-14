const postModel = require("../model/post.Model");

const postController = async (req, res) => {
    const { title, body, image } = req.body;

    if (!title) {
        return res.status(400).json({
            message: 'Title is required'
        })
    };

    const post = await postModel.create({
        title,
        body,
        image,
        author: req?.user?.id,
    });

    res.status(201).json({
        message: "Post created successfully",
        post
    });
};




module.exports = postController;