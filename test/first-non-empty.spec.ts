import { expect } from 'chai';
import { firstNonEmpty } from '../src/index';

describe('#firstNonEmpty', () => {
    it("pass a empty [], should return the same empty []", () =>{
        const empty = [];
        expect(firstNonEmpty(empty)).to.equal(empty);
    })
    it("pass a empty null, should return the same empty null", ()=>{
        const empty = null;
        expect(firstNonEmpty(empty)).to.equal(empty);
    })

    it("pass a empty undefined, should return the same empty undefined", ()=>{
        const empty = undefined;
        expect(firstNonEmpty(empty)).to.equal(empty);
    })
    it("pass a empty 0, should return the same empty 0", ()=>{
        const empty = 0;
        expect(firstNonEmpty(empty)).to.equal(empty);
    })
    it("pass a empty {}, should return the same empty {}", ()=>{
        const empty = {};
        expect(firstNonEmpty(empty)).to.deep.equal(empty);
    })
    it("pass [1,2,null], should return 1", () => {
        expect(firstNonEmpty([1,2,null])).to.equal(1);
    })
    it("pass ['barton','banner','stark'], should return 'barton'", () => {
        expect(firstNonEmpty(['barton','banner','stark'])).to.equal('barton');
    })
    it("pass ['','','stark'], should return 'stark'", () => {
        expect(firstNonEmpty(['','','stark'])).to.equal('stark');
    })
    it("pass an array of object, should return first non empty", () => {
        const values = [
            {name: 'Clint Barton'},
            {name: 'Bruce Banner'},
            {name: 'Tony Stark'}
        ];
        expect(firstNonEmpty(values)).to.deep.equal({name: 'Clint Barton'});
    })

    it("pass an array of object with null and undefined value, should return first non empty", () => {
        const values = [
            null,
            undefined,
            {name: 'Tony Stark'}
        ];
        expect(firstNonEmpty(values)).to.deep.equal({name: 'Tony Stark'});
    })
})