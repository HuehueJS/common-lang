import { expect } from 'chai';
import { requireNotNull } from '../src/index';

describe("#requireNotNull", () => {
    it('should throw on undefined', () => {
        let obj = undefined;
        const test = () => requireNotNull(obj, 'huehue undefined')
        expect(test).to.throw('huehue undefined')
    })

    it('should throw on null', () => {
        let obj = null;
        const test = () => requireNotNull(obj, 'huehue null')
        expect(test).to.throw('huehue null')
    })

    it('should not throw on object', () => {
        let obj = {};
        const test = () => requireNotNull(obj, 'huehue object')
        expect(test).to.not.throw('huehue null')
    })

    it('should not throw on number', () => {
        let obj = 0;
        const test = () => requireNotNull(obj, 'huehue number')
        expect(test).to.not.throw('huehue number')
    })

    it('should not throw on object', () => {
        let obj = 'huehue';
        const test = () => requireNotNull(obj, 'huehue string')
        expect(test).to.not.throw('huehue string')
    })

})
