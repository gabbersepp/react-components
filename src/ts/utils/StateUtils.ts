export default class StateUtils {
    public static newFromObj<T extends IIndexable>(obj: T): T {
        const t: T = <T>{};
        for(const k in obj) {
            if (obj.hasOwnProperty(k)) {
                t[k] = obj[k];
            }
        }
        return t;
    }

    public static setProp<T extends IIndexable>(obj: T, prop: string, val: any): T {
        const newState: T = this.newFromObj(obj);
        newState[prop] = val;
        return newState;
    }
}