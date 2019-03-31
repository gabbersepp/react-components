import * as React from "react";

export default class TabHeader extends React.Component<ITabsHeaderProps, {}> {
    public render(): JSX.Element {
        return (
            <div className={`header ${this.props.active ? "active" : ""} ${this.props.disabled ? "disabled" : ""}`} onClick={() => this.props.onClick()}>
                <span>{this.props.title}</span><span>x</span>
            </div>
        )
    }
}

interface ITabsHeaderProps {
    title: string;
    active?: boolean;
    disabled?: boolean;
    onClick: () => void;
}