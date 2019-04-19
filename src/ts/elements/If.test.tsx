import "jsdom-global/register";
import * as React from "react";
import { mount } from "enzyme";
import If from "./If";

describe("If", () => {
    it("should show childs only if expression is true", () => {
        const wrapper = mount(<If expression={false}><div>Test</div></If>);
        expect(wrapper.text()).toBeNull();
        wrapper.setProps({ expression: true });
        expect(wrapper.text()).toContain("Test");
        wrapper.unmount();
    })
})