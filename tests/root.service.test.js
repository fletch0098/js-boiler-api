const service = require("../app/services/root.service");
const { appSettings } = require("../app/config/vars");
const ApiError = require("../app/utilities/api.error");

describe("Root Service", () => {
  // Test health
  test("Should return OK", () => {
    expect(service.health()).toBe("OK");
  });

  // Test debug
  test("Should return debug object", () => {
    expect(service.debug()).toStrictEqual({
      debug: "OK",
    });
  });

  // Test app
  test("Should return debug object", () => {
    const data = service.root();
    expect(data).toBeTruthy();
    expect(data.app).toStrictEqual(appSettings.appName);
  });

  // Test error
  test("Should throw error", () => {
    expect(service.error).toThrow(ApiError);
    expect(service.error).toThrow(`I'm a teapot`);
  });

  // Test internal error
  test("Should throw internal error", () => {
    expect(service.internalError).toThrow(Error);
    expect(service.internalError).toThrow(`Internal Error`);
  });
});
