// const { app, request } = require("./setup");

// describe("Security & Auth Failures", () => {
//   test("Access journals without token", async () => {
//     const res = await request(app).get("/api/journals");
//     expect(res.statusCode).toBe(401);
//   });

//   test("Access mood with invalid token", async () => {
//     const res = await request(app)
//       .get("/api/mood")
//       .set("Authorization", "Bearer faketoken");
//     expect(res.statusCode).toBe(403);
//   });
// });
