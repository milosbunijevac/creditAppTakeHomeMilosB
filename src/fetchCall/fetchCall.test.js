import mockFetch from "./fetchCall.js";

describe("Mock fetch call", () => {
  describe("Positive tests", () => {
    it("should return a successful message when user has adequate scores", async () => {
      const testValue = await mockFetch(20000, 110000, 640);
      expect(testValue).toBe("Success");
    });
  });

  describe("Negative tests", () => {
    it("should return a failure message when user has deficient scores", async () => {
      expect.assertions(1);
      const testValue = mockFetch(20000, 50000, 550).catch((e) => {
        expect(e).toEqual(
          "We are sorry that we are not able to process this loan at this time."
        );
      });
    });

    it("should return a bad request when user has car value over 1 million", async () => {
      expect.assertions(1);
      const testValue = mockFetch(10000000, 50000, 650).catch((e) => {
        expect(e).toEqual("Bad Request");
      });
    });

    it("should return a bad request when user has car value over 1 million and other scores are good", async () => {
      const testValue = mockFetch(1000000, 30000000, 650).catch((e) => {
        expect(e).toEqual("Bad Request");
      });
    });
  });
});
