import * as React from "react";
import ITabsProps from "../../interfaces/tabs/ITabsProps";
import "./../../../style/tabs.scss";
import ITab from "../../interfaces/tabs/ITab";
export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: ITabsProps): void;
    private getRealTab;
    private checkTabRefreshment;
    selectTab(tab: ITab): void;
    private buildTabsFromProps;
}
export interface ITabsState {
    tabs: ITab[];
}
