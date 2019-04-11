import * as React from "react";
import ICollapsableContentProps from "../../interfaces/collapsable/ICollapsableContentProps";

export default class CollapsableContent extends React.Component<ICollapsableContentProps, {}> {
    public render(): JSX.Element {
        return (
            <div className={`collapsable-content ${this.props.collapsed ? "collapsable-content--collapsed" : ""}`}>
                {this.props.children}
            </div>
        )
    }
}