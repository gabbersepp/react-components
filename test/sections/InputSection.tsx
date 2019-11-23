import * as React from "react";
import Section, { staticImplements } from "./Section";
import Label from "../../src/elements/Label";
import Input from "../../src/elements/Input";
import { validate } from "@babel/types";

@staticImplements<Section>()
export default class InputSection extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ""
        }
    }

    public static description = "Display a 'input' box";
    public static className = "input-section";

    public render() {
        return (
            <div>
                <Label value={`You inserted: ${this.state.value}`}></Label>
                <Input onChange={val => this.setState({ value: val })}></Input>
                <Label value="You also can use validators, like a minLenght of 10"></Label>
                <Input onChange={val => this.setState({ value: val })} validator={val => val.length > 10}></Input>
            </div>
        )
    }
}

interface State {
    value: string;
}