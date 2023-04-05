const rootService = require("../app/services/root.service");
const { appSettings } = require("../app/config/vars");

describe("Root Service", () => {
  // Test health
  test("Should return OK", () => {
    expect(rootService.health()).toBe("OK");
  });

  // Test debug
  test("Should return debug object", () => {
    expect(rootService.debug()).toStrictEqual({
      debug: "OK",
    });
  });

  // Test debug
  test("Should return debug object", () => {
    const data = rootService.root();
    expect(data).toBeTruthy();
    expect(data.app).toStrictEqual(appSettings.appName);
  });
});
