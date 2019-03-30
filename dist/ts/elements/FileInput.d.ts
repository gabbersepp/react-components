import * as React from "react";
import { IFileUploadProps } from "../interfaces/IFileUploadProps";
import "./../../style/fileinput.scss";
export default class FileInput extends React.Component<IFileUploadProps, IFileUploadState> {
    render(): JSX.Element;
    onChange(fileList: FileList): void;
}
