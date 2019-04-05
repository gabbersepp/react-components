import TabBody from "../../components/tabs/external/TabContent";
import TabContent from "../../components/tabs/internal/TabContent";

export interface ITabProps {
    children?: (React.ReactElement<TabBody> | React.ReactElement<TabContent>)[];
    disabled?: boolean;
    active?: boolean;
}