import { ITab } from "./ITab";
import Tab from "../components/tabs/Tab";

export interface ITabsProps {
    tabs?: ITab[];
    children?: React.ReactElement<Tab> | React.ReactElement<Tab>[];
}