import * as React from "react";
import { IOverlayProps } from "../interfaces/IOverlayProps";
import "./../../style/overlay.scss";

export default class Overlay extends React.Component<IOverlayProps, {}> {
    public render(): JSX.Element {
        const jsx: JSX.Element = (
            <div>
                <div className="overlay"></div>
                <div className="overlay-content">
                    <div>
                    {this.props.children}
                    </div>
                </div>
            </div>
        );

        const props: any = {
            className: "overlay-container"
        };

        if (this.props.onClick) {
            props.onClick = this.props.onClick;
        }

        return React.createElement("div", props, jsx);
    }
}