import * as React from "react";
import Input from "./../elements/Input";

export default class TsComp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ""
        }
    }
    public render(): JSX.Element {
        return (
            <div>
                {this.state.value}
                <Input onChange={(v: string) => this.setState({value: v})}/>
            </div>
        )
    }
}