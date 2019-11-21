import * as React from "react";
import ITabsProps from "../../interfaces/tabs/ITabsProps";
import TabHeader from "./internal/TabHeader";
import TabContent from "./internal/TabContent";
import "./../../../style/tabs.scss";
import ITab from "../../interfaces/tabs/ITab";
import Tab from "./external/Tab";

import TabHeaderExternal from "./external/TabHeader";
import TabContentExternal from "./external/TabContent";
import ITabProps from "../../interfaces/tabs/ITabProps";

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps) {
        super(props);

        if (props.tabs && props.children) {
            throw new Error("Not able to set tabs through both properties");
        }

        this.state = {
            tabs: this.buildTabsFromProps(props) || []
        }
    }

    public render(): JSX.Element {
        return (
            <div className="tabs">
                <div className="tabs-bar">
                    {this.state.tabs.map(tab => <TabHeader refreshProperty={tab.refreshProperty} allowClose={tab.allowClose} key={tab.id} disabled={!tab.enabled} onClick={() => this.selectTab(tab)} active={tab.active} title={tab.title}/>)}
                </div>
                <div className="tabs-content">
                    {this.state.tabs.map(tab => <TabContent refreshProperty={tab.refreshProperty} key={tab.id} active={tab.active} element={tab.element}/>)}
                </div>
            </div>
        )
    }

    public componentDidUpdate(prevProps: ITabsProps) {
        const tabsFromOldProps: ITab[] = this.buildTabsFromProps(prevProps);
        const tabsFromNewProps: ITab[] = this.buildTabsFromProps(this.props);
        
        if (this.checkTabRefreshment(tabsFromOldProps, tabsFromNewProps)) {
            // if refresh required -> use current state but changed from props
            const tabs = tabsFromOldProps.map(tab => this.getRealTab(tab, tabsFromNewProps.find(x => x.id === tab.id), this.state.tabs.find(x => x.id === tab.id)));
            this.setState({
                tabs: tabs
            });
        }
    }

    private getRealTab(tabFromOldProps: ITab, tabFromNewProps: ITab, tabFromState: ITab): ITab {
        const newTab: ITab = {} as ITab;
        Object.keys(tabFromOldProps).forEach((key: string) => {
            const oldVal: any = tabFromOldProps[key];
            const newVal: any = tabFromNewProps[key];
            const stateVal: any = tabFromState[key];
            newTab[key] = oldVal !== newVal ? newVal : stateVal;
        });

        return newTab;
    }

    private checkTabRefreshment(oldTabs: ITab[], newTabs: ITab[]): boolean {
        const update: boolean = oldTabs.length !== newTabs.length ||
            oldTabs.filter(t => newTabs.find(t2 => t2.id === t.id && 
                t2.active === t.active && t2.enabled === t.enabled && 
                t2.refreshProperty === t.refreshProperty)).length !== oldTabs.length;
        return update;
    }

    public selectTab(tab: ITab) {
        if (tab.enabled) {
            const tabs = this.state.tabs.map((t: ITab) =>  {
                t.active = t.id === tab.id;
                return t;
            });
            this.setState({
                tabs
            });
        }
    }

    private buildTabsFromProps(props: ITabsProps): ITab[] {
        if (props.tabs) {
            return props.tabs;
        }

        let childArray: any[] = [];

        if (Array.isArray(props.children)) {
            childArray = props.children;
        } else {
            childArray.push(props.children);
        }

        const tabs: ITab[] = [];

        childArray.forEach((reactTab: React.ReactElement<ITabProps>) => {
            const tab: ITab = {
                enabled: !reactTab.props.disabled,
                active: reactTab.props.active,
                id: reactTab.props.id,
                refreshProperty: reactTab.props.refreshProperty
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

export interface ITabsState {
    tabs: ITab[];
}