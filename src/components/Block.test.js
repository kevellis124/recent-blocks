import { shallow } from "../enzyme";
import * as React from "react";
import Block from "./Block";

describe("<Block />", () => {
    describe("By default", () => {
        let component;
        beforeAll(() => {
            component = shallow(<Block />);
        });
        it("hasnt changed", () => {
            expect(component.html()).toMatchSnapshot();
        });
    });
});
