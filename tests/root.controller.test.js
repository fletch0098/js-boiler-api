const controller = require("../app/controllers/root.controller");
const ApiError = require("../app/utilities/api.error");

const mockRequest = () => {
  const req = {};
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Root Controller", () => {
  // Test health
  test("Should call res.send('OK')", async () => {
    let req = mockRequest();
    const res = mockResponse();

    await controller.health(req, res);

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith("OK");
  });

  // Test debug
  test("Should call res.json()", async () => {
    let req = mockRequest();
    const res = mockResponse();

    await controller.debug(req, res);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json.mock.calls.length).toBe(1);
    expect(res.json).toHaveBeenCalledWith({ debug: "OK" });
  });

  // Test app
  test("Should call res.json()", async () => {
    let req = mockRequest();
    const res = mockResponse();

    await controller.root(req, res);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json.mock.calls.length).toBe(1);
  });

  // Test error
  test("Should throw error", () => {
    expect(controller.error).toThrow(ApiError);
    expect(controller.error).toThrow(`I'm a teapot`);
  });

  // Test internal error
  test("Should throw internal error", () => {
    expect(controller.internalError).toThrow(Error);
    expect(controller.internalError).toThrow(`Internal Error`);
  });
});
