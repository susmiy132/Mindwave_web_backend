const { app, request, tokenHolder } = require("./setup");
const Journal = require("../models/journal");

describe("Journal API", () => {
  let journalId;

  it("should create a journal", async () => {
    const res = await request(app)
      .post("/api/journals")
      .set("Authorization", `Bearer ${tokenHolder.token}`)
      .send({
        title: "Test Journal",
        content: "This is a test entry.",
        mood: "happy"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Test Journal");
    journalId = res.body.data._id;
  });

  it("should fetch all journals for the logged-in user", async () => {
    const res = await request(app)
      .get("/api/journals")
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.journals)).toBe(true);
  });

  it("should get a journal by ID", async () => {
    const res = await request(app)
      .get(`/api/journals/${journalId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data._id).toBe(journalId);
  });

  it("should update a journal", async () => {
    const res = await request(app)
      .put(`/api/journals/${journalId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`)
      .send({ mood: "excited" });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.mood).toBe("excited");
  });

  it("should delete a journal", async () => {
    const res = await request(app)
      .delete(`/api/journals/${journalId}`)
      .set("Authorization", `Bearer ${tokenHolder.token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Journal deleted successfully");
  });
});
