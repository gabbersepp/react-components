import TabBody from "src/ts/components/tabs/external/TabBody";
import TabContent from "src/ts/components/tabs/internal/TabContent";

export interface ITabProps {
    children?: (React.ReactElement<TabBody> | React.ReactElement<TabContent>)[];
}