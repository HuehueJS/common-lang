import { expect } from 'chai';
import { isEmpty } from '../src/index';

describe("#isEmpty", function() {
    it('when array is empty return true', function(){
        expect(isEmpty([])).to.equal(true);
    })
    it('when array isn\'t empty return false', function(){
        expect(isEmpty(['Bruce'])).to.equal(false);
    })
    it('when object is empty return true', function(){
        expect(isEmpty({})).to.equal(true);
    })
    it('when array isn\'t empty return false', function(){
        expect(isEmpty({name:'Bruce Banner'})).to.equal(false);
    })
    it('when null return true', function(){
        expect(isEmpty(null)).to.equal(true);
    })
    it('when null return true', function(){
        expect(isEmpty(undefined)).to.equal(true);
    })
    it('when 0 return true', function(){
        expect(isEmpty(0)).to.equal(true);
    })
})