import { getattr, isEmpty } from '../index'

export const isString = obj => typeof obj === 'string';

export const upperCaseFirst = (string : string) => {
    return string[0].toUpperCase() + string.slice(1);
}

export const lowerCaseFirst = (string : string) => {
    return string[0].toLowerCase() + string.slice(1);
}

export const upperCase = (string : string) => {
    return string.toUpperCase();
}

export const lowerCase = (string : string ) => {
    return string.toLowerCase();
}

export const format = (message : string, data : any) => {
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