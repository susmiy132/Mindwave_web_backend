const Notice = require("../models/Notice");
const { app, request, tokenHolder } = require("./setup"); // Adjust path if needed

let createdNoticeId;

describe("🔔 Notice API (with auth)", () => {
  // 1. Create a notice
  it("should create a new notice", async () => {
    const res = await request(app)
      .post("/api/notices")
      .set("Authorization", `Bearer ${tokenHolder.token}`)
      .send({
        title: "Test Notice",
        message: "This is a test notice",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Notice");
    createdNoticeId = res.body._id;
  });

  // 2. Get all notices
  it("should fetch all notices", async () => {
    const res = await request(app)
      .get("/api/notices")
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // 3. Get a single notice by ID
  it("should fetch a single notice by ID", async () => {
    const res = await request(app)
      .get(`/api/notices/${createdNoticeId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(createdNoticeId);
  });

  // 4. Update a notice
  it("should update a notice", async () => {
    const res = await request(app)
      .put(`/api/notices/${createdNoticeId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`)
      .send({ title: "Updated Notice Title" });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated Notice Title");
  });

  // 5. Delete a notice
  it("should delete the notice", async () => {
    const res = await request(app)
      .delete(`/api/notices/${createdNoticeId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted/i);
  });

  // 6. Handle 404 for deleted/non-existent notice
  it("should return 404 for non-existent notice", async () => {
    const res = await request(app)
      .get(`/api/notices/${createdNoticeId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(404);
  });
});
