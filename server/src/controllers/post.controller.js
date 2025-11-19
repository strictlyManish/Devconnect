const imagekit = require("../config/imagekit");
const postModel = require("../model/post.Model");


const postController = async (req, res) => {
    try {
        const file = req.file;
        const { title, body } = req.body;
        const user = req.user;

        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const uploadResponse = await imagekit.upload({
            file: file.buffer.toString("base64"),
            fileName: file.originalname,
            folder: 'post'
        });

        const post = await postModel.create({
            title,
            body,
            image: uploadResponse.url,
            author: user.id
        })

        res.json({
            message: 'uploaded sucessfully',
            post
        });



    } catch (error) {
        res.status(500).json({ error: "Upload failed" });
    }
};




module.exports = postController;