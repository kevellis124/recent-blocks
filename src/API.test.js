import * as API from "./API";
import { getBlockInfo } from "./API";
import { getLeadBlockId } from "./API";

describe("API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("getBlockInfo", () => {
    it("should return the json of the response", async () => {
      const testBlockId = 122423;
      const testJsonBody = { key: "testValue" };
      const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(testJsonBody)
        })
      );
      const result = await getBlockInfo(testBlockId);

      expect(result).toBe(testJsonBody);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });
  describe("getLeadBlockId", () => {
    it("should return the entire block details", async () => {
      const testBlockId = "testBlockId";
      const testJsonBody = { head_block_id: testBlockId };
      const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(testJsonBody)
        })
      );
      const result = await getLeadBlockId();

      expect(result).toBe(testBlockId);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });
});
