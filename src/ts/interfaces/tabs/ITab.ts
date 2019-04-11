export default interface ITab {
    title: string;
    element: React.ReactElement;
    active: boolean;
    enabled: boolean;
    id: string;
    allowClose?: boolean;
}