import * as React from "react";
import Section, { staticImplements } from "./Section";
import If from "../../src/elements/If";
import Button from "../../src/elements/Button";

@staticImplements<Section>()
export default class IfSection extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false
        }
    }

    public static className = "if-section";
    public static description = "Can be used to hide or show child elements";

    public render() {
        return (
            <div>
                <Button title="Toggle visibility" onClick={() => this.setState({ show: !this.state.show })}></Button>
                <If expression={this.state.show}>
                    <span>Textvisibility can be toggled</span>
                </If>                
            </div>
        )
    }
}

interface State {
    show: boolean;
}