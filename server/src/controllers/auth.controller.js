const UserModel = require("../model/user.Model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const RegisterController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existUser = await UserModel.findOne({ email });

        if (existUser) {
            return res.status(400).json({ message: "User already exists" })
        };

        const hashhedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            username,
            email,
            password: hashhedPassword
        });


        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

        res.cookie('token', token)

        res.status(201).json({
            message: "User registered successfully",
            user
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const LoginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).json(
                { message: "User not found" }
            )
        };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        };
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

        res.cookie('token', token)

        res.status(200).json({
            message: 'user Logged in sucessfully',
            user: user.username
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


module.exports = { RegisterController, LoginController }