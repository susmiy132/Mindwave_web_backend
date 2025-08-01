

// const mongoose = require("mongoose");
// const { app, request, tokenHolder } = require("./setup"); // your test setup file

// let meditationId = "";

// describe("Meditation API", () => {
//   afterAll(async () => {
//     await mongoose.disconnect();
//   });

//   test("Create meditation", async () => {
//     const res = await request(app)
//       .post("/api/meditations")
//       .set("Authorization", `Bearer ${tokenHolder.token}`)
//       .send({
//         title: "Calm Mind",
//         description: "this is my first description",
//         duration: 15,
//         category: "Relaxation",
//       });

//     expect(res.statusCode).toBe(201);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("_id");
//     meditationId = res.body.data._id;
//   });

//   test("Fetch all meditations", async () => {
//     const res = await request(app)
//       .get("/api/meditations");

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(Array.isArray(res.body.data)).toBe(true);
//   });

//   test("Fetch single meditation", async () => {
//     const res = await request(app)
//       .get(`/api/meditations/${meditationId}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("_id", meditationId);
//   });

//   test("Update meditation", async () => {
//     const res = await request(app)
//       .put(`/api/meditations/${meditationId}`)
//       .set("Authorization", `Bearer ${tokenHolder.token}`)
//       .send({ title: "Updated Calm Mind" });

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data.title).toBe("Updated Calm Mind");
//   });

//   test("Delete meditation", async () => {
//     const res = await request(app)
//       .delete(`/api/meditations/${meditationId}`)
//       .set("Authorization", `Bearer ${tokenHolder.token}`);
//     if (res.statusCode !== 200) {
//       console.log("Delete meditation error response:", res.body);
//     }

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.message).toMatch(/deleted successfully/i);
//   });
// });
