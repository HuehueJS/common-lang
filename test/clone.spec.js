import { expect } from 'chai';
import { clone } from '../src/index';

describe("#clone", function () {
    it('should have all keys when clone an obj', function () {
        const obj = {
            first_name: 'Bruce',
            last_name: 'Banner'
        };
        expect(clone(obj)).to.have.all.keys('first_name', 'last_name');
    })
    it('should not modify original object', function () {
        const obj = {
            first_name: 'Bruce',
            last_name: 'Banner'
        };
        const cloned_obj = clone(obj);
        cloned_obj.first_name = 'Clint';
        expect(cloned_obj.first_name).to.not.equal(obj.first_name);
    })
    it('should not modify nested original object', function () {
        const obj = {
            person: {
                first_name: 'Bruce',
                last_name: 'Banner'
            }
        };
        const cloned_obj = clone(obj);
        cloned_obj.person.first_name = 'Clint';
        expect(cloned_obj.person.first_name).to.not.equal(obj.person.first_name);
    })

})