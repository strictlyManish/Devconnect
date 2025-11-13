const jwt = require("jsonwebtoken");



const protect = (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            req.headers.authorization?.split(" ")[1]; // fallback for token header

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded; // attach user id to req.user
        next();
    } catch (error) {
        res.status(401).json({ message: "Token invalid or expired" });
    }
};


module.exports = protect;