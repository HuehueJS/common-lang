import { expect } from 'chai';
import { isCallable } from '../src/index';

describe("#isCallable", function() {
    it('when string return false', function(){
        expect(isCallable('Banner')).to.equal(false);
    })
    it('when function return true', function(){
        const test = () => console.log('Banner');
        expect(isCallable(test)).to.equal(true);
    })
})