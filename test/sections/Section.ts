export default interface Section {
    className: string;
    description: string;
}

export function staticImplements<T>() {
    return <U extends T>(constructor: U) => {constructor};
}