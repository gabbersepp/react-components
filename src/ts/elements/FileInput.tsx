import * as React from "react";
import IFileUploadProps from "../interfaces/IFileUploadProps";
import "./../../style/fileinput.scss";

export default class FileInput extends React.Component<IFileUploadProps, {}> {
    public render(): JSX.Element {
        const acceptString: string = this.props.accept ? this.props.accept.reduce((pV: string, cV: string) => `${pV},${cV}`) : null;
        const date: number = new Date().getTime();
        const fileId: string = `file-${date}`;

        return (
            <div className="file-input">
                <input type="file" id={fileId} onChange={e => this.onChange(e.target.files)} multiple={!!this.props.multiple} accept={acceptString}></input>
                <label htmlFor={fileId}>{this.props.title}</label>
            </div>
        )
    }

    onChange(fileList: FileList) {
        const files: File[] = [];
        for (let i = 0; i < fileList.length; i++) {
            files.push(fileList.item(i));
        }

        if (this.props.multiple) {
            this.props.onChange(files)
        } else {
            this.props.onChange(files[0]);
        }
    }
}