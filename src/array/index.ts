
const reduceToObject = (acc, [k, v]) => Object.assign(acc, { [k as string]: v });

const transformValue = it => ([k, v]) => ([k, it(v)]);

const setAtObject = obj => ([k, v]) => obj[k] = v;

const combine = ([k, v]) => v.map(it => [k, it]);

const swap = ([k, v]) => [v, k];

function flat<E>(acc: Array<E>, array: Array<E>): Array<E> {
    return acc.concat(array)
}

export const Mappers = {
    Value: transformValue,
    Combine: combine,
    Swap: swap
}

export const Reducers = {
    Object: reduceToObject,
    Flat: flat
}

export const Iter = {
    SetAt: setAtObject
}