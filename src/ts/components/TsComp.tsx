import * as React from "react";
import Input from "./../elements/Input";
import Label from "./../elements/Label";
import MessageBox, { showOkCancel } from "./messageBox/MessageBox";

import Checkbox, { CheckboxCrossTypes } from "./../elements/Checkbox";
import StateUtils from "../utils/StateUtils";
import { ISelectItem } from "../interfaces/ISelectItem";
import Select from "./../elements/Select";
import FileInput from "../elements/FileInput";

import Toaster, { success } from "./Toaster";

let items: ISelectItem[] = [
    { key: "1", value: "text 1"},
    { key: "2", value: "text 123"},
    { key: "3", value: "text 234"},
    { key: "4", value: "text 456"},
    { key: "5", value: "text asdas"},
    
]

let items2: ISelectItem[] = [
    { key: "11", value: "seddasd"},
    { key: "21", value: "tasdext 123"},
    { key: "31", value: "texdasdq32t 234"},
    { key: "41", value: "teq    qxt 456"},
    { key: "51", value: "texasdt asdas"},
]

export default class TsComp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: "",
            chkDisabled: false,
            chkChecked: false,
            overlay: false,
            selectedValue: "",
            selectionOptions: items
        }
    }
    public render(): JSX.Element {


        return (
            <div>
                <Label value={this.state.value}/>
                <Input onChange={(v: string) => this.setState({value: v})}/>
                <Checkbox crossType={CheckboxCrossTypes.DefaultCross} disabled={this.state.chkDisabled} checked={this.state.chkChecked}/>
                <Checkbox crossType={CheckboxCrossTypes.GreenHook} disabled={this.state.chkDisabled} checked={this.state.chkChecked}/>
                <Select options={this.state.selectionOptions} onChange={val => this.setState({selectedValue: val.value})}/>
                <Label value={this.state.selectedValue}/>
                <FileInput onChange={(file: File) => this.setState({selectedValue: file.name})} title="Bitte wählen" accept={[".jpg", ".gif"]}/>
                <Toaster/>
                <button onClick={() => this.toggle("chkDisabled")}>Disable</button>
                <button onClick={() => this.toggle("chkChecked")}>Check</button>
                <button onClick={() => showOkCancel("hallo", "msg").then(() => alert("ok"))}>Overlay</button>
                <button onClick={() => this.setState({ selectionOptions: items2 })}>Change options</button>
                
                <MessageBox></MessageBox>
            </div>
        )
    }

    private toggle(prop: string): void {
        const newObj: any = StateUtils.newFromObj(this.state);
        newObj[prop] = !newObj[prop];
        this.setState(newObj);
        success("erfolgreich");
    }
}