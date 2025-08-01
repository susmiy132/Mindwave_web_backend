
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User"); // ✅ Make sure this path matches your file

// // authMiddleware = async (req, res, next) => {
// //   const authHeader = req.header("Authorization");

// //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
// //     return res.status(401).json({ message: "No token, authorization denied" });
// //   }

// //   const token = authHeader.split(" ")[1];

// //   try {
// //     // Verify token and extract payload
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //     // Optionally fetch the full user (excluding password)
// //     const user = await User.findById(decoded.id).select("-password");

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     req.user = user; // Attach user object to request
// //     next();
// //   } catch (err) {
// //     return res.status(401).json({ message: "Token is not valid" });
// //   }
// // };

// // module.exports = authMiddleware;


// // // exports.authMiddleware = async (req, res, next) => {
// // //   try{
// // //     // Get token from headder
// // //     const authHeader = req.headers.authorization
// // //     if(!authHeader || !authHeader.startsWith("Bearer")) {
// // //       return res.status(401).json(
// // //         {
// // //           "success": false,
// // //           "message": "Athentication required"
// // //         }
// // //       )
// // //     }
// // //     // Get token after Bearer prefix
// // //     const token = authHeader.split(" ") [1]
// // //     const decoded = jwt.verify(token, process.env.JWT_SECRET)
// // //     const user = await User.findOne({"_id": decoded._id})
// // //     if(!user) {
// // //       return res.status(401).json(
// // //         {
// // //           "success": false, 
// // //           "message": "Token mismatch"
// // //         }
// // //       )
// // //     }

// // //     // attract user to request for further use
// // //     req.user = user
// // //     next()        //continue to next function
// // //   } catch (err){
// // //     return res.status(500).json(
// // //       {
// // //         "success": false, 
// // //         "message": "Authentication failed"
// // //       }
// // //     )
// // //   }
// // // }

// // // exports.isAdmin = async (req, res, next) => {
// // //   if(req.user && req.user.role === "admin") {
// // //     next()
// // //   } else{
// // //     return res.status(403).json(
// // //       {
// // //         "success": false, 
// // //         "message": "Admin privilage required"
// // //       }
// // //     )
// // //   }
// // // }

// // // module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     // Verify token and decode user ID
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Find user by ID (excluding password)
//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Attach user to request
//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Token is not valid" });
//   }
// };

// module.exports = authMiddleware;
