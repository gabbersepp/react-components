import * as React from "react";
import ICollapsableProps from "../../interfaces/collapsable/ICollapsableProps";
import "./../../style/collapsable.scss";
export default class Collapsable extends React.Component<ICollapsableProps, ICollapsableState> {
    constructor(props: ICollapsableProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: ICollapsableProps): void;
    private onToggle;
}
interface ICollapsableState {
    collapsed: boolean;
    keepOpen: boolean;
}
export {};
