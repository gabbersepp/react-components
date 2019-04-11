import * as React from "react";
import ICollapsableHeaderProps from "../../interfaces/collapsable/ICollapsableHeaderProps";

export default class CollapsableHeader extends React.Component<ICollapsableHeaderProps, {}> {
    constructor(props: ICollapsableHeaderProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className={`collapsable-header ${this.props.collapsed ? "collapsable-header--collapsed" : ""}`} onClick={() => this.props.onToggle()}>
                {this.props.children}
            </div>
        )
    }
}