import { ISelectItem } from "./ISelectItem";

export interface ISelectState {
    selectedKey: string;
    filtered: ISelectItem[];
    options: ISelectItem[];
    dropDownOpened: boolean;
}