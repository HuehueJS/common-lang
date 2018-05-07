export const getattr = function (obj, key, defaultValue = undefined) {
    if (obj === undefined || obj === null) {
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
    if (obj === undefined || obj === null) {
        return defaultValue;
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

export const formatstr = function (message, data) {
    if (isEmpty(data)) {
        return message;
    }

    let formatedMessage = message;
    let paramRegex = new RegExp("{([\\w\.\\(\\),]+)}", 'g');
    let result = null;
    while (true) {
        result = paramRegex.exec(message);
        if (!result) {
            break;
        }
        let value = getattr(data, result[1].split('.'));
        if (value === undefined) {
            continue;
        }
        formatedMessage = formatedMessage.replace(result[0], value);
    }
    return formatedMessage;
}

export const isEmpty = function (obj) {
    if (!obj) { return true; }
    return !Object.keys(obj).length;
}

export const isNullOrUndefined = obj => [null, undefined].indexOf(obj) !== -1

export const noop = x => x