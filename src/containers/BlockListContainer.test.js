import { mount } from "../enzyme";
import * as React from "react";
import BlockListContainer from "./BlockListContainer";
import BlockList from "../components/BlockList";
import * as API from "../API";
import { blockInfoFixture, leadBlockFixture } from "../block_fixtures";

describe("<BlockListContainer />", () => {
  beforeAll(() => {});
  describe("By default", () => {
    it("hasnt changed", () => {
      const component = mount(<BlockListContainer />);
      expect(component.html()).toMatchSnapshot();
    });
  });

  describe("reloadBlocks", () => {
    it("will put 10 blocks in the props to the child", async () => {
      const leadBlockSpy = jest
        .spyOn(API, "getLeadBlockId")
        .mockImplementation(() => {
          return Promise.resolve(leadBlockFixture["head_block_id"]);
        });
      const blockInfoSpy = jest
        .spyOn(API, "getBlockInfo")
        .mockImplementation(blockId => {
          return Promise.resolve(blockInfoFixture);
        });

      const component = mount(<BlockListContainer />);

      await flushPromises();
      component.update();

      expect(component.find(BlockList).props().blocks.length).toBe(10);
      expect(leadBlockSpy).toHaveBeenCalledTimes(1);
      expect(blockInfoSpy).toHaveBeenCalledTimes(10);
      expect(component.exists(BlockList));
    });
  });
});

const flushPromises = () => new Promise(setImmediate);
