// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const generateToken = require('../utils/generateToken');

// const nodemailer = require("nodemailer")


// // Register
// exports.register = async (req, res) => {
//   // Get the required field from body
//   const { fullName, email, phone, password } = req.body;

//   const userAlreadyExists = await User.findOne({email})
//   // Validate required fields
//   if (!fullName || !email || !phone || !password) {
//     return res.status(400).json(
//       { 
//         "success" : false,
//         "message": "All fields are required" 
//       }
//     );
//   }

//   // check if user exists
//   try
//   {
//     const existingUser = await User.findOne(
//       { 
//         $or: [{email: email}, ] 

//       }
//     );
//     if (existingUser) {
//       return res.status(400).json({"success" : false, "message": "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the instance of user
//     const newUser = new User(
//       {
//         fullName,
//         email,
//         phone,
//         password: hashedPassword,
//         profileImage: "", // or set a default string if image is not used
//       }
//     );

//     // save the user data
//     await newUser.save();

//     return res.status(201).json({ 
//       "success":true, 
//       "message": "User registered successfully",
//       "data": {
//         "_id": newUser.email,
//         "fullname": newUser.fullName,
//       },
//       "token": generateToken(newUser._id),
//      });

//   } catch (error) {
//     return res.status(500).json(
//       {
//         "success" : false,
//         "message": "Server error"
//       }
//     )
//     // console.error("Registration error:", error.message);
//     // res.status(500).json({ message: "Server error" });
//   }
// };

// // Login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   // Validation
//   if(!email || !password) {
//     return res.status(400).json(
//       {
//         "success": false,
//         "message": "Mising faled"
//       }
//     )
//   }

//   try {
//     const getUser = await User.findOne(
//       {"email": email }
//     );

//     if (!getUser){
//       return res.status(400).json(
//         {
//           "success": false,
//           "message": "User not found"
//         }
//       )
//     }
    
//     // Check for password
//     const passwordCheck = await bcrypt.compare(password, getUser.password);
//     if (!passwordCheck) {
//       return res.status(400).json(
//         { "success": false,
//           "message": 'Invalid credentials' 
//         }
//       );
//     }

//     // jwt token
//     const payload = {
//       "_id": getUser._id,
//       "email": getUser.email,
//       "fullname": getUser.fullName,
//       "phone": getUser.phone,
//       "password": getUser.password
//     }
//     const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '7d'})
//     return res.status(200).json(
//       {
//         "success": true,
//         "message": "Login Successful",
//         "data": {
//         "_id": getUser._id,
//         "fullName": getUser.fullName,
//         "email": getUser.email,
//       },
//       token: generateToken(getUser._id),
//       }
//     )
//   } catch (error) {
//     return res.status(500).json(
//       {"success": false, "message": 'Server error' }
//     );
//   }
// };


// const transporter = nodemailer.createTransport(
//   {
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   }
// )

// exports.sendResetLink = async = async (req, res) => {
//     const { email } = req.body
//     try{
//         const user = await User.findOne({email})
//         if(!user) return res.status(404).json({success: false, message: "User not found"})
//         const token = jwt.sign({id:user._id}, process.env.SECRET, {expiresIn: "15m"})
//         const resetUrl = process.env.CLIENT_URL + "/reset/password" + token
//         const mailOptions = {
//             from:`"MindWave" <${process.env.EMAIL_USER}>`,
//             to: email,
//             subject: "Reset you password",
//             html:`<p>Reset your password..${resetUrl}<p/>`
//         }
//         transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             console.log(err)
//             return res.status(403).json({ success: false, message: "Failed"})

//         }
//         if(info) console.log(info)
//         return res.status(200).json({ success: true, message: "Success" })
//     })
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({success: false, message: "server error"})
//     }
// }

// exports.resetPassword = async (req, res) => {
//     const { token } = req.params
//     const { password } = req.body
//     try{
//         const decoded = jwt.verify(token, process.env.SECRET)
//         const hased = await bcrypt.hash(password, 10)
//         await User.findByIdAndUpdate(decoded.id, {password: hased})
//         return res.status(200).json({success: true, message:"password updated"})
//     }
//     catch(err) {
//         return res.status(500).json({success: false, message:"Server error/Token invalid"})
//     }
// }