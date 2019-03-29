import { ISelectItem } from "./ISelectItem";

export interface ISelectProps {
    selectedKey?: string;
    options: ISelectItem[];
    onChange: (selected: ISelectItem) => void;
}