import "jsdom-global/register";
import * as React from "react";
import Select, { ISelectState } from "./Select";
import { shallow, mount } from "enzyme";
import { ISelectItem, ISelectProps } from "src/index-bundle";

describe("Select", () => {
    let onChangeFn: jest.Mock = null;
    beforeEach(() => {
        onChangeFn = jest.fn();
    })

    xit("should update options on props chang", () => {
        let options: ISelectItem[] = [{ key: "A", value: "A" }];
        const wrapper = shallow<Select, ISelectProps, ISelectState>(<Select onChange={onChangeFn} options={options}/>);
        options = [{ key: "B", value: "B"}];
        wrapper.setProps({ options: options});
        expect(wrapper.state().options).toEqual([{ key: "B", value: "B"}]);
        options = [{ key: "B", value: "B"}, { key: "C", value: "C" }];
        wrapper.setProps({ options: options});
        expect(wrapper.state().options).toEqual([{ key: "B", value: "B"}, { key: "C", value: "C" }]);
    })
})