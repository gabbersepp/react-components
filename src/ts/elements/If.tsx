import * as React from "react";
import { IIfProps } from "../interfaces/IIfProps";

export default class If extends React.Component<IIfProps, {}> {
    public render(): JSX.Element {
        if (this.props.expression()) {
            return this.props.children;
        }
        return null;
    }
}