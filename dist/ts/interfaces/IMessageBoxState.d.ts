import { IMsgBoxButton } from "../components/messageBox/IMsgBoxButton";
export interface IMessageBoxState {
    show: boolean;
    title: string;
    msg: string;
    buttons: IMsgBoxButton[];
}
