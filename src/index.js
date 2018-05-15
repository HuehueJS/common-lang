export const isNullOrUndefined = obj => [null, undefined].indexOf(obj) !== -1;

export const isCallable = obj => obj instanceof Function;

export const clone = obj => JSON.parse(JSON.stringify(obj)); 

export const noop = x => x;

export const getattr = function (obj, key, defaultValue = undefined) {
    if (isNullOrUndefined(obj)) {
        return defaultValue;
    }
    if (typeof obj !== 'object') {
        throw TypeError();
    }
    if (['string', 'number'].indexOf(typeof key) !== -1) {
        key = [key];
    }
    let currentValue = obj;
    for (let k of key) {
        currentValue = currentValue[k];
        if (currentValue === undefined) {
            return defaultValue;
        }
    }
    return currentValue;
}

export const setattr = function (obj, key, value = null, force = false) {
    if (isNullOrUndefined(obj)) {
        throw TypeError();
    }
    if (typeof obj !== 'object') {
        throw TypeError();
    }
    if (['string', 'number'].indexOf(typeof key) !== -1) {
        key = [key];
    }
    let currentValue = obj;
    for (let k of key.slice(0, -1)) {
        if (!(k in currentValue)) {
            currentValue[k] = {}
        }
        if (!currentValue[k] && force) {
            currentValue[k] = {}
        }
        currentValue = currentValue[k]
    }
    currentValue[key.slice(-1)[0]] = value;
}

export const isEmpty = function (obj) {
    if (isNullOrUndefined(obj)) { return true; }
    if(typeof obj === 'number') {
        if (obj === 0) { return true; }
        return false
    }
    if (Object.keys(obj).length === 0) { return true; }
    return false;
}

export const firstNonEmpty = function (obj) {
    if (!obj) return null;
    return obj.find(it => !isEmpty(it));
}