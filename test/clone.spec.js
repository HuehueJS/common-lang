import { expect } from 'chai';
import { clone } from '../src/index';

describe("#clone", function() {
    it('should have all keys when clone an obj', function(){
        const obj = {
            first_name: 'Bruce',
            last_name: 'Banner'
        };
        expect(clone(obj)).to.have.all.keys('first_name', 'last_name');
    })
})