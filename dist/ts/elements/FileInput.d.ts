import * as React from "react";
import IFileUploadProps from "../interfaces/IFileUploadProps";
import "./../../style/fileinput.scss";
export default class FileInput extends React.Component<IFileUploadProps, IFileInputState> {
    constructor(props: IFileUploadProps);
    render(): JSX.Element;
    onChange(fileList: FileList): void;
}
interface IFileInputState {
    isValid: boolean;
}
export {};
