// const { app, request, tokenHolder } = require("./setup");

// const user = {
//   fullName: "Test User",
//   email: "testuser@example.com",
//   phone: "9804636264",
//   password: "password123"
// };

// describe("Auth API", () => {
//   test("Register a user", async () => {
//     const res = await request(app).post("/api/auth/register").send(user);
//     expect(res.statusCode).toBe(201);
//     expect(res.body).toHaveProperty("token");
//   });

//   test("Login user", async () => {
//     const res = await request(app).post("/api/auth/login").send({
//       email: user.email,
//       password: user.password,
//     });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.token).toBeDefined();
//     tokenHolder.token = res.body.token;
//   });

//   test("Fail login with wrong password", async () => {
//     const res = await request(app).post("/api/auth/login").send({
//       email: user.email,
//       password: "wrongpass",
//     });
//     expect(res.statusCode).toBe(400);
//   });

//   test("Register with existing email", async () => {
//     const res = await request(app).post("/api/auth/register").send(user);
//     expect(res.statusCode).toBe(400);
//   });
// });

