import * as React from "react";
import { ITabsProps } from "../../interfaces/tabs/ITabsProps";
import TabHeader from "./internal/TabHeader";
import TabContent from "./internal/TabContent";
import "./../../../style/tabs.scss";
import { ITabsState } from "../../interfaces/tabs/ITabsState";
import { ITab } from "../../interfaces/tabs/ITab";
import StateUtils from "./../../utils/StateUtils";

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps) {
        super(props);

        if (props.tabs && props.children) {
            throw new Error("Not able to set tabs through both properties");
        }

        this.state = {
            tabs: props.tabs || []
        }
    }

    public render(): JSX.Element {
        return (
            <div className="tabs">
                <div className="bar">
                    {this.state.tabs.map(tab => <TabHeader key={tab.id + tab.active + tab.enabled} disabled={!tab.enabled} onClick={() => this.selectTab(tab)} active={tab.active} title={tab.title}/>)}
                </div>
                <div className="content">
                    {this.state.tabs.map(tab => <TabContent key={tab.id + tab.active + tab.enabled} active={tab.active} element={tab.element}/>)}
                </div>
            </div>
        )
    }

    public componentDidUpdate(prevProps: ITabsProps) {
        const update: boolean = prevProps.tabs !== this.props.tabs ||
            prevProps.tabs.length !== this.props.tabs.length ||
            prevProps.tabs.filter(t => this.props.tabs.find(t2 => t2.id === t.id && 
                t2.active === t.active && t2.enabled === t.enabled)).length !== prevProps.tabs.length;

        if (update) {
            const newState: ITabsState = StateUtils.newFromObj(this.state);
            newState.tabs = this.props.tabs;
            this.setState(newState);
        }
    }

    public selectTab(tab: ITab) {
        if (tab.enabled) {
            const newState = StateUtils.newFromObj(this.state);
            newState.tabs.forEach((t: ITab) => t.active = t.id === tab.id);
            this.setState(newState);
        }
    }
}