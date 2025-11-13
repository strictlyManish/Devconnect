const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
        },
        avatar: {
            type: String,
            default:
                "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        },
        bio: {
            type: String,
            default: "",
            maxlength: 200,
        }
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel
