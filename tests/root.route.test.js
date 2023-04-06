const request = require("supertest");

const app = require("../app/app");

describe("Root", () => {
  // health check
  test("GET /health statusCode 200, text OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });

  // debug
  test("GET /debug statusCode 200, body { debug: 'OK'}", async () => {
    const response = await request(app).get("/debug");
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({ debug: "OK" });
  });

  // app
  test("GET / statusCode 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
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
