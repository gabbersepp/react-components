import * as React from "react";
import { IGroupProps } from "../interfaces/IGroupProps";
import If from "./../elements/If";

export default class Group extends React.Component<IGroupProps, IGroupState> {
    public render(): JSX.Element {
        return (
            <div className="group">
                <If expression={!!this.props.header}>
                    <div className="group-header">{this.props.header}</div>
                </If>
                <div className="group-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

interface IGroupState {

}