import { expect } from 'chai';
import { isEmpty } from '../src/index';

describe("#isEmpty", () => {
    it('when array is empty return true', () => {
        expect(isEmpty([])).to.equal(true);
    })
    it('when array isn\'t empty return false', () => {
        expect(isEmpty(['Bruce'])).to.equal(false);
    })
    it('when object is empty return true', () => {
        expect(isEmpty({})).to.equal(true);
    })
    it('when array isn\'t empty return false', () => {
        expect(isEmpty({ name: 'Bruce Banner' })).to.equal(false);
    })
    it('when null return true', () => {
        expect(isEmpty(null)).to.equal(true);
    })
    it('when null return true', () => {
        expect(isEmpty(undefined)).to.equal(true);
    })
    it('when 0 return true', () => {
        expect(isEmpty(0)).to.equal(true);
    })
    it('when 1 return false', () => {
        expect(isEmpty(1)).to.equal(false);
    })
})