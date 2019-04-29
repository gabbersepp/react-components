/// <reference types="react" />
import ITab from "./ITab";
import Tab from "../../components/tabs/external/Tab";
export default interface ITabsProps {
    tabs?: ITab[];
    children?: React.ReactElement<Tab> | React.ReactElement<Tab>[];
}
