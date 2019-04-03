import * as React from "react";
import { ITabsProps } from "../../interfaces/tabs/ITabsProps";
import "./../../../style/tabs.scss";
import { ITabsState } from "../../interfaces/tabs/ITabsState";
import { ITab } from "../../interfaces/tabs/ITab";
export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: ITabsProps): void;
    selectTab(tab: ITab): void;
    private buildTabsFromProps;
}
