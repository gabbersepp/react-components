import * as React from "react";
import Input from "../src/elements/Input";
import Label from "../src/elements/Label";
import MessageBox, { showOkCancel } from "../src/components/messageBox/MessageBox";

import Checkbox, { CheckboxCrossTypes } from "../src/elements/Checkbox";
import ISelectItem from "../src/interfaces/ISelectItem";
import Select from "../src/elements/Select";
import FileInput from "../src/elements/FileInput";

import Toaster, { success } from "../src/components/Toaster";
import Thumbnail from "../src/elements/Thumbnail";
import Tabs from "../src/components/tabs/Tabs";
import ITab from "../src/interfaces/tabs/ITab";
import Button from "../src/elements/Button";
import Tab from "../src/components/tabs/external/Tab";
import TabHeader from "../src/components/tabs/external/TabHeader";
import TabBody from "../src/components/tabs/external/TabContent";
import Group from "../src/components/Group";
import Collapsable from "../src/components/collapsable/Collapsable";
import CollapsableHeader from "../src/components/collapsable/CollapsableHeader";
import CollapsableContent from "../src/components/collapsable/CollapsableContent";


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

let tabs: ITab[] = [
    { title: "Hallo", id: "1", element: (<div>Hallo <Input onChange={() => {}} /></div> ), active: false, enabled: true },
    { title: "Hallo2", id: "2", element: (<div>Hallo2 <Input onChange={() => {}} /></div> ), active: true, enabled: true, allowClose: true },
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
            selectionOptions: items,
            tab: false,
            tabDisabled: false,
            tabLabelText: ""
        }
    }

    public render(): JSX.Element {

        tabs[0].enabled = this.state.tab;

        return (
            <div>
                <Label value={this.state.value}/>
                <Input onChange={(v: string) => this.setState({value: v})} validator={(val: string) => val.length > 10}/>
                <Checkbox crossType={CheckboxCrossTypes.DefaultCross} disabled={this.state.chkDisabled} checked={this.state.chkChecked}/>
                <Checkbox crossType={CheckboxCrossTypes.GreenHook} disabled={this.state.chkDisabled} checked={this.state.chkChecked}/>
                <Select options={this.state.selectionOptions} onChange={val => this.setState({selectedValue: val.value})} validator={val => val.length > 0}/>
                <Label value={this.state.selectedValue}/>
                <FileInput onChange={(file: File) => this.setState({selectedValue: file.name})} title="Bitte wählen" 
                    validator={(file: File | File[]) => !!file}/>
                <Toaster/>
                <button onClick={() => this.toggle("chkDisabled")}>Disable</button>
                <button onClick={() => this.toggle("chkChecked")}>Check</button>
                <button onClick={() => showOkCancel("hallo", "msg").then(() => alert("ok"))}>Overlay</button>
                <button onClick={() => this.setState({ selectionOptions: items2 })}>Change options</button>
                <MessageBox></MessageBox>
                {/*<Tabs tabs={tabs}/>*/}
                <Button title="Toggle tab disable" onClick={() => this.toggle("tab")}  disabled={this.state.chkDisabled}/>
                <Group header="Header">
                    <div>Hallo</div>
                    <div>Test</div>
                </Group>
                <Tabs>
                    <Tab disabled={this.state.tabDisabled} id="tab1">
                        <TabHeader allowClose={true}>
                            {`${this.state.tabDisabled} - Test`}
                        </TabHeader>
                        <TabBody>
                            <div>
                                <Button title="button von tab 1" onClick={() => {}}/>
                            </div>
                        </TabBody>
                    </Tab>
                    <Tab id="tab2" refreshProperty={this.state.tabLabelText.length}>
                        <TabHeader>
                            Test2
                        </TabHeader>
                        <TabBody>
                            <Label value={this.state.tabLabelText}/>
                            <Button title="button von tab 2" onClick={() => {}}/>
                            <Button title="button von tab 2" onClick={() => {}}/>
                            <Input onChange={(val: string) => this.setState({ tabLabelText: val })} />
                        </TabBody>
                    </Tab>
                </Tabs>
                <Button onClick={() => this.toggle("tabDisabled")} title="tab disable toggle"   disabled={this.state.chkDisabled}/>

                <Collapsable>
                    <CollapsableHeader>Header</CollapsableHeader>
                    <CollapsableContent>
                        <div>
                            Hallo
                        </div>
                    </CollapsableContent>
                </Collapsable>
            </div>
        )
    }

    private toggle(prop: string): void {
        let newObj = { ...this.state };
        newObj[prop] = !newObj[prop];
        this.setState(newObj);
        success("erfolgreich");
    }
}