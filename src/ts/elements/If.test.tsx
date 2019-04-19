import * as React from "react";
import { mount } from "enzyme";
import If from "./If";
import * as jsdom from "jsdom";

describe("If", () => {
    it("should show childs only if expression is true", () => {
        const doc = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
        (global as any).document = doc.window.document;
        (global as any).window = doc.window
        const wrapper = mount(<If expression={false}><div>Test</div></If>);
        expect(wrapper.text()).toBeNull();
        wrapper.setProps({ expression: true });
        expect(wrapper.text()).toContain("Test");
    })
})