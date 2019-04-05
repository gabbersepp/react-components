import * as React from "react";

// TODO: Remove props.children maybe
export default class TabContent extends React.Component<ITabContentProps, ITabContentState> {
    public render(): JSX.Element {
        return (
            <div className={`tab-body ${this.props.active ? "tab-body--active" : ""}`}>
                { this.props.element || this.props.children }
            </div>
        )
    }
}

interface ITabContentProps {
    active?: boolean;
    element?: React.ReactElement;
    children?: React.ReactElement | React.ReactElement[];
}

interface ITabContentState {
    active: boolean;
}