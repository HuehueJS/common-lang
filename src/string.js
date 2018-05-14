import { getattr, isEmpty } from './main'
export const upperCaseFirst = function (string) {
    return string[0].toUpperCase() + string.slice(1);
}

export const lowerCaseFirst = function (string) {
    return string[0].toLowerCase() + string.slice(1);
}

export const upperCase = function (string) {
    return string.toUpperCase();
}

export const lowerCase = function (string) {
    return string.toLowerCase();
}

export const format = function (message, data) {
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