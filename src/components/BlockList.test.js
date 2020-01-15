import { shallow, mount } from "../enzyme";
import * as React from "react";
import BlockList from "./BlockList";
import { blockInfoFixture } from "../block_fixtures";
import Block from "./Block";

describe("<BlockList />", () => {
  describe("By default", () => {
    it("hasnt changed", () => {
      const component = shallow(<BlockList />);
      expect(component.html()).toMatchSnapshot();
    });
  });

  describe("When given one block", () => {
    it("will render one block and the loading button", () => {
      const reloadFunc = jest.fn();
      const oneBlockComponent = mount(
        <BlockList blocks={[blockInfoFixture]} reload={reloadFunc} />
      );
      expect(oneBlockComponent.exists(Block));
      expect(oneBlockComponent.html().includes('<ul>Block action count: 4</ul>')).toBe(true);
      expect(oneBlockComponent.find(Block).length).toBe(1);
      expect(oneBlockComponent.find("button").length).toBe(1);
    });
  });

  describe("When given two blocks", () => {
    it("will render two blocks and the loading button", () => {
      const reloadFunc = jest.fn();
      const twoBlockComponent = mount(
        <BlockList
          blocks={[blockInfoFixture, blockInfoFixture]}
          reload={reloadFunc}
        />
      );
      expect(twoBlockComponent.exists(Block));
      expect(twoBlockComponent.find(Block).length).toBe(2);
      expect(twoBlockComponent.find("button").length).toBe(1);
    });
  });

  describe("When given load is pressed", () => {
    it("will trigger the function passed in", () => {
      const reloadFunc = jest.fn();
      const twoBlockComponent = mount(
        <BlockList
          blocks={[blockInfoFixture, blockInfoFixture]}
          reload={reloadFunc}
        />
      );
      expect(twoBlockComponent.exists(Block));
      expect(twoBlockComponent.find(Block).length).toBe(2);
      expect(twoBlockComponent.find("button").length).toBe(1);
      twoBlockComponent.find("button").simulate("click");
      expect(reloadFunc).toHaveBeenCalledTimes(1);
    });
  });
});
