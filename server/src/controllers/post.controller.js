const { nanoid } = require("nanoid");
const imagekit = require("../config/imagekit");
const postModel = require("../model/post.Model");

const postController = async (req, res) => {

    const file = req.file;
    console.log(file)
    const upload = await imagekit.upload({
        file: file.data,
        fileName: nanoid('6')
    })


    res.status(200).json({
        upload
    })
};




module.exports = postController;