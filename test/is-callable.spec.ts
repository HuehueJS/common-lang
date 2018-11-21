import { expect } from 'chai';
import { isCallable } from '../src/index';

describe("#isCallable", () => {
    it('when string return false', () => {
        expect(isCallable('Banner')).to.equal(false);
    })
    it('when function return true', () => {
        const test = () => console.log('Banner');
        expect(isCallable(test)).to.equal(true);
    })
})