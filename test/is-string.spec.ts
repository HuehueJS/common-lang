import { expect } from 'chai';
import { isString } from '../src/string/index';

describe("#isString", () => {
    it('when number return false', () => {
        expect(isString(0)).to.equal(false);
    })
    it('when string return true', () => {
        expect(isString('Bruce')).to.equal(true);
    })
})