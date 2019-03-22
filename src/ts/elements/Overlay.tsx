import * as React from "react";
import { IOverlayProps } from "../interfaces/IOverlayProps";
import "./../../style/overlay.scss";

export default class Overlay extends React.Component<IOverlayProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="overlay-container">
                <div className="overlay"></div>
                <div className="overlay-content">
                    <div>
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}