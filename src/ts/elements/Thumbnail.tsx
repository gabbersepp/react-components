import * as React from "react";
import If from "./If";
import "./../../style/thumbnail.scss";
import IThumbnailProps from "../interfaces/IThumbnailProps";
import Overlay from "./Overlay";

export default class Thumbnail extends React.Component<IThumbnailProps, IThumbnailState> {
    constructor(props: IThumbnailProps) {
        super(props);
        this.state = {
            show: false
        }
    }
    public render(): JSX.Element {
        return (
            <div className="thumbnail">
                <If expression={this.state.show}>
                    <Overlay onClick={() => this.hide()}>
                        <img src={this.props.src} onClick={() => this.hide()}/>
                        <span></span>
                    </Overlay>
                </If>
                <img src={this.props.src} onClick={() => this.show()}/>
            </div>
        )
    }

    private show(): void {
        this.setState({ show: true });
    }

    private hide(): void {
        this.setState({ show: false });
    }
}

interface IThumbnailState {
    show: boolean;
}