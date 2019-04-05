import * as React from "react";
import { ITabsProps } from "../../interfaces/tabs/ITabsProps";
import TabHeader from "./internal/TabHeader";
import TabContent from "./internal/TabContent";
import "./../../../style/tabs.scss";
import { ITabsState } from "../../interfaces/tabs/ITabsState";
import { ITab } from "../../interfaces/tabs/ITab";
import StateUtils from "./../../utils/StateUtils";
import Tab from "./external/Tab";

import TabHeaderExternal from "./external/TabHeader";
import TabContentExternal from "./external/TabContent";

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps) {
        super(props);

        if (props.tabs && props.children) {
            throw new Error("Not able to set tabs through both properties");
        }

        this.state = {
            tabs: props.tabs || this.buildTabsFromProps() || []
        }
    }

    public render(): JSX.Element {
        return (
            <div className="tabs">
                <div className="bar">
                    {this.state.tabs.map(tab => <TabHeader allowClose={tab.allowClose} key={tab.id + tab.active + tab.enabled} disabled={!tab.enabled} onClick={() => this.selectTab(tab)} active={tab.active} title={tab.title}/>)}
                </div>
                <div className="content">
                    {this.state.tabs.map(tab => <TabContent key={tab.id + tab.active + tab.enabled} active={tab.active} element={tab.element}/>)}
                </div>
            </div>
        )
    }

    public componentDidUpdate(prevProps: ITabsProps) {
        if (prevProps.children) {
            // TODO: fix
            return;
        }

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

    private buildTabsFromProps(): ITab[] {
        if (this.props.tabs) {
            return this.props.tabs;
        }

        let childArray: any[] = [];

        if (Array.isArray(this.props.children)) {
            childArray = this.props.children;
        } else {
            childArray.push(this.props.children);
        }

        const tabs: ITab[] = [];
        let id: number = 0;

        childArray.forEach((reactTab: React.ReactElement<Tab>) => {
            const tab: ITab = {
                enabled: !(reactTab.props as any).disabled,
                active: (reactTab.props as any).active,
                id: id++ + ""
            } as any;

            if (!(reactTab.type === Tab)) {
                throw new Error("unexpected type. Expected chidl to be of type 'Tab'");
            }

            const tabHeader: any = (reactTab.props as any).children.find((x: any) => x.type === TabHeaderExternal);
            if (!tabHeader) {
                throw new Error("expected one child of type 'TabHeader'");
            }

            const title: string = tabHeader.props.children;
            tab.title = title;
            tab.allowClose = tabHeader.props.allowClose;

            const tabContent: any = (reactTab.props as any).children.find((x: any) => x.type === TabContentExternal);
            if (!tabContent) {
                throw new Error("expected one child of type 'TabContent'");
            }

            tab.element = (<div>{tabContent.props.children}</div>);

            tabs.push(tab);
        });

        if (tabs.length > 0 && !tabs.find(x => x.active)) {
            const firstEnabledTab: ITab = tabs.find(x => x.enabled);
            if (firstEnabledTab) {
                firstEnabledTab.active = true;
            }
        }

        return tabs;
    }
}