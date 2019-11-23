/// <reference types="react" />
export default interface ICollapsableContentProps {
    children: React.ReactElement | React.ReactElement[] | string;
    collapsed?: boolean;
}
