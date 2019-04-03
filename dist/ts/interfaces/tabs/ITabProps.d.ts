/// <reference types="react" />
import TabBody from "src/ts/components/tabs/external/TabContent";
import TabContent from "src/ts/components/tabs/internal/TabContent";
export interface ITabProps {
    children?: (React.ReactElement<TabBody> | React.ReactElement<TabContent>)[];
}
