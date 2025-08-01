
const mongoose = require("mongoose");
const app = require("../index");
const request = require("supertest");
const connectDB = require("../config/db");

let token = "";

beforeAll(async () => {
  await connectDB();

  // Create a test user and log in to get a token
  const userData = {
    fullName: "testuser",
    email: "test@example.com",
    phone: "1234567890",
    password: "testpass123"
  };

  // Register the user
  await request(app).post("/api/auth/register").send(userData);

  // Login the user and set the token
  const res = await request(app).post("/api/auth/login").send({
    email: userData.email,
    password: userData.password
  });

  console.log("Login response:", res.body);  // <--- Add this line for debugging
  if (!res.body.token) {
    throw new Error("Token not received in login response");
  }

  token = res.body.token; // Make sure your login route returns `token`
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

module.exports = {
  app,
  request,
  tokenHolder: {
    get token() {
      return token;
    },
    set token(t) {
      token = t;
    }
  }
};

