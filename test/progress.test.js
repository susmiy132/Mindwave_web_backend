// const { app, request, tokenHolder } = require("./setup");

// describe("Progress API", () => {
//   test("Fetch progress summary", async () => {
//     const res = await request(app)
//       .get("/api/progress")
//       .set("Authorization", `Bearer ${tokenHolder.token}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveProperty("totalMeditations");
//     expect(res.body).toHaveProperty("totalJournals");
//   });
// });


const { app, request, tokenHolder } = require("./setup");
const Progress = require("../models/progressBar");

let progressId;

describe("📈 Progress API Tests", () => {
  // 1. Add a progress entry
  it("should create a new progress entry", async () => {
    const res = await request(app)
      .post("/api/progress")
      .set("Authorization", `Bearer ${tokenHolder.token}`)
      .send({
        percentage: 75,
        calories: 2000,
        heartRate: 80,
        steps: 8000,
        kcalBurn: 500,
        habits: ["meditation", "exercise"]
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.percentage).toBe(75);
    progressId = res.body._id;
  });

  // 2. Get all progress entries for the logged-in user
  it("should fetch all progress entries for the user", async () => {
    const res = await request(app)
      .get("/api/progress")
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.progress)).toBe(true);
  });

  // 3. Handle unauthenticated request
  it("should return 401 without token", async () => {
    const res = await request(app)
      .get("/api/progress");

    expect(res.statusCode).toBe(401);
  });

  // 4. Create a progress entry with missing required fields
  it("should fail with bad request if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/progress")
      .set("Authorization", `Bearer ${tokenHolder.token}`)
      .send({
        // no percentage, calories, etc.
      });

    expect(res.statusCode).toBe(400); // Mongoose will throw
  });

  // 5. Retrieve progress with journal/meditation/mood data
  it("should return progress with journals, meditations, and moods", async () => {
    const res = await request(app)
      .get("/api/progress")
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("progress");
    expect(res.body).toHaveProperty("journals");
    expect(res.body).toHaveProperty("meditations");
    expect(res.body).toHaveProperty("moods");
  });
});
