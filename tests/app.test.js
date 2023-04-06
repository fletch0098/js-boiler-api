const request = require("supertest");

const app = require("../app/app");

describe("App", () => {
  // health check
  test("GET /health statusCode 200, text OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });

  // not found
  test("GET /foo statusCode 404, message Error: Requested resource at /foo not found", async () => {
    const response = await request(app).get("/foo");
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe(
      "Error: Requested resource at /foo not found"
    );
  });

  // error
  test("GET /error statusCode 418, message I'm a teapot", async () => {
    const response = await request(app).get("/error");
    expect(response.statusCode).toBe(418);
    expect(response.body.message).toBe(`I'm a teapot`);
  });

  // internal error
  test("GET /internal-error statusCode 500, message Internal Server Error", async () => {
    const response = await request(app).get("/internal-error");
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe(`Internal Server Error`);
  });
});
