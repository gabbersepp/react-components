import * as React from "react";
import Input from "./../elements/Input";
import Label from "./../elements/Label";
import Overlay from "./../elements/Overlay";

import Checkbox, { CheckboxCrossTypes } from "./../elements/Checkbox";
import StateUtils from "../utils/StateUtils";


export default class TsComp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: "",
            chkDisabled: false,
            chkChecked: false,
            overlay: false
        }
    }
    public render(): JSX.Element {
        return (
            <div>
                <Label value={this.state.value}/>
                <Input onChange={(v: string) => this.setState({value: v})}/>
                <Checkbox crossType={CheckboxCrossTypes.DefaultCross} disabled={this.state.chkDisabled} checked={this.state.chkChecked}/>
                <Checkbox crossType={CheckboxCrossTypes.GreenHook} disabled={this.state.chkDisabled} checked={this.state.chkChecked}/>
                
                <button onClick={() => this.toggle("chkDisabled")}>Disable</button>
                <button onClick={() => this.toggle("chkChecked")}>Check</button>
                <button onClick={() => this.toggle("overlay")}>Overlay</button>
                
                {this.state.overlay ? (<Overlay>Hallo</Overlay>) : null}
            </div>
        )
    }

    private toggle(prop: string): void {
        const newObj: any = StateUtils.newFromObj(this.state);
        newObj[prop] = !newObj[prop];
        this.setState(newObj);
    }
}