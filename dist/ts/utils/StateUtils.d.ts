export default class StateUtils {
    static newFromObj<T extends IIndexable>(obj: T): T;
    static setProp<T extends IIndexable>(obj: T, prop: string, val: any): T;
}
