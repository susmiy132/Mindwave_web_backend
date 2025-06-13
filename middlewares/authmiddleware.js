const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // "Bearer <token>"

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Token is not valid" });
//   }
};

module.exports = authMiddleware;
