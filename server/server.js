require("dotenv").config()
const express = require("express");
const connectDB = require("./src/config/db");
const app = express();
const authRoutes = require("./src/routes/auth.route");
const postRoutes = require("./src/routes/post.route");
const getRoutes = require("./src/routes/getUser.route")
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Middlewares
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

// Routes or api 
app.use("/auth", authRoutes)
app.use("/post", postRoutes)
app.use("/",getRoutes)



// Do not do anything ---

connectDB()
app.listen(3000, () => {
    console.log('Server Runnig on port 3000')
});