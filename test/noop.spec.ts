import { expect } from 'chai';
import { isString } from '../src/string/index';
import { noop } from '../src';

describe("#noop", () => {
    it('noop should do nothing', () => {
        const anyValue = 'Tony Stark';
        expect(noop(anyValue)).to.equal(anyValue);
    })
})