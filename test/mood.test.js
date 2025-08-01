// const { app, request, tokenHolder } = require("./setup");

// describe("Mood API", () => {
//   test("Add mood entry", async () => {
//     const res = await request(app)
//       .post("/api/mood")
//       .set("Authorization", `Bearer ${tokenHolder.token}`)
//       .send({ mood: "happy", note: "Feeling great!" });
//     expect(res.statusCode).toBe(201);
//   });

//   test("Fetch mood entries", async () => {
//     const res = await request(app)
//       .get("/api/mood")
//       .set("Authorization", `Bearer ${tokenHolder.token}`);
//     expect(res.statusCode).toBe(200);
//     expect(Array.isArray(res.body)).toBe(true);
//   });
// });
