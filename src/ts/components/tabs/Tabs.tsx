import * as React from "react";
import { ITabsProps } from "../../interfaces/ITabsProps";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";
import "./../../../style/tabs.scss";
import { ITabsState } from "./../../interfaces/ITabsState";
import { ITab } from "./../../interfaces/ITab";
import StateUtils from "./../../utils/StateUtils";

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps) {
        super(props);
        this.state = {
            tabs: props.tabs || []
        }
    }
    
    public render(): JSX.Element {
        return (
            <div className="tabs">
                <div className="bar">
                    {this.props.tabs.map(tab => <TabHeader key={tab.id} onClick={() => this.selectTab(tab.id)} active={tab.active} title={tab.title}/>)}
                </div>
                <div className="content">
                    {this.props.tabs.map(tab => <TabContent key={tab.id} active={tab.active} element={tab.element}/>)}
                </div>
            </div>
        )
    }

    public selectTab(id: string) {
        const newState = StateUtils.newFromObj(this.state);
        newState.tabs.forEach((t: ITab) => t.active = t.id === id);
        this.setState(newState);

    }
}