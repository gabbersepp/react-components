import { IIndexable } from "../interfaces/IIndexable";

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
}