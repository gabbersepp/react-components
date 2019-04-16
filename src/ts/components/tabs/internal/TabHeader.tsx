import * as React from "react";
import If from "./../../../elements/If";

export default class TabHeader extends React.Component<ITabsHeaderProps, {}> {
    public render(): JSX.Element {
        return (
            <div className={`tab-header ${this.props.allowClose ? "tab-header--closeable" : ""} ${this.props.active ? "tab-header--active" : "tab-header--inactive"} ${this.props.disabled ? "tab-header--disabled" : ""}`} onClick={() => this.props.onClick()}>
                <span>{this.props.title}</span><If expression={this.props.allowClose}><span>x</span></If>
            </div>
        )
    }
}

interface ITabsHeaderProps {
    title: string;
    active?: boolean;
    disabled?: boolean;
    onClick: () => void;
    allowClose?: boolean;
    refreshProperty?: any;
}