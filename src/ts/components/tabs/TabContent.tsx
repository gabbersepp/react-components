import * as React from "react";

export default class TabContent extends React.Component<ITabContentProps, ITabContentState> {
    public render(): JSX.Element {
        return (
            <div className={`body ${this.props.active ? "active" : ""}`}>
                {this.props.element}
            </div>
        )
    }
}

interface ITabContentProps {
    active?: boolean;
    element: React.ReactElement;
}

interface ITabContentState {
    active: boolean;
}