import { expect } from 'chai';
import { isString } from '../src/index';

describe("#isString", function() {
    it('when number return false', function(){
        expect(isString(0)).to.equal(false);
    })
    it('when string return true', function(){
        expect(isString('Bruce')).to.equal(true);
    })
})