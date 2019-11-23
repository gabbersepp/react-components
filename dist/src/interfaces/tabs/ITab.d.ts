/// <reference types="react" />
export default interface ITab extends IIndexable {
    title: string;
    element: React.ReactElement;
    active: boolean;
    enabled: boolean;
    id: string;
    allowClose?: boolean;
    refreshProperty?: any;
}
