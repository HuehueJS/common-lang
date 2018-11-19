export const isNullOrUndefined = (obj: any) => [null, undefined].indexOf(obj) !== -1;

export const requireNotNull = function (obj: any, message: string) {
    if (isNullOrUndefined(obj)) {
        throw Error(message);
    }
}

export const isCallable = (obj: any) => obj instanceof Function;

export const clone = (obj: any) => JSON.parse(JSON.stringify(obj));

export const noop = (x: any) => x;

export type KeyPiece = string | number;
export type Key = Array<KeyPiece>;

export const getattr = (obj: any, key: Key | KeyPiece, defaultValue: any = undefined) => {
    if (isNullOrUndefined(obj)) {
        return defaultValue;
    }
    if (typeof obj !== 'object') {
        throw TypeError();
    }
    if (['string', 'number'].indexOf(typeof key) !== -1) {
        key = [key as KeyPiece];
    }
    let currentValue = obj;
    for (let k of (key as Key)) {
        currentValue = currentValue[k];
        if (isNullOrUndefined(currentValue)) {
            return defaultValue;
        }
    }
    return currentValue;
}

export const setattr = (obj: any, key: Key | KeyPiece, value: any = null, force: boolean = false) => {
    if (isNullOrUndefined(obj)) {
        throw TypeError();
    }
    if (typeof obj !== 'object') {
        throw TypeError();
    }
    if (['string', 'number'].indexOf(typeof key) !== -1) {
        key = [key as KeyPiece];
    }
    let currentValue = obj;
    for (let k of (key as Key).slice(0, -1)) {
        if (!(k in currentValue)) {
            currentValue[k] = {}
        }
        if (!currentValue[k] && force) {
            currentValue[k] = {}
        }
        currentValue = currentValue[k]
    }
    currentValue[(key as Key).slice(-1)[0]] = value;
}

export const isEmpty = (obj: any) => {
    if (isNullOrUndefined(obj)) { return true; }
    if (typeof obj === 'number') {
        if (obj === 0) { return true; }
        return false
    }
    if (Object.keys(obj).length === 0) { return true; }
    return false;
}

export function firstNonEmpty<E>(obj: E | Array<E>): E | Array<E> {
    if (isEmpty(obj)) return obj;
    return (obj as Array<E>).find(it => !isEmpty(it));
}
