import * as React from "react";
import "./../style/thumbnail.scss";
import IThumbnailProps from "../interfaces/IThumbnailProps";
export default class Thumbnail extends React.Component<IThumbnailProps, IThumbnailState> {
    constructor(props: IThumbnailProps);
    render(): JSX.Element;
    private show;
    private hide;
}
interface IThumbnailState {
    show: boolean;
}
export {};
