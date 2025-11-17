const UserModel = require("../model/user.Model");

const getUserController = async (req, res) => {
    try {
        const { id } = req.user;

        if(!id){
            return res.status(409).json({
              message :'user does not exists'
            })
        }

        const userinfo = await UserModel.findOne({ _id: id });

        res.status(200).json({
            userinfo
        })
    } catch (error) {
        return res.status(500).json({
            message:'somethng is broken'
        })
    }
}


module.exports = getUserController