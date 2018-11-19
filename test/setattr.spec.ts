import { setattr } from '../src/index'
import { expect } from 'chai'

describe("#setattr", () => {
    it('when key exists should set the value', () => {
        let obj = { 'key': 1 };
        setattr(obj, 'key')
        expect(obj.key).to.equal(null)
    })
    it('when key exists should set the value', () => {
        let obj = { 'key': null };
        setattr(obj, 'key', 'value')
        expect(obj.key).to.equal('value')
    })
    it('when key doesn\'t exists should put the value', () => {
        let obj = { 'key': null };
        setattr(obj, 'key', 'value')
        expect(obj.key).to.equal('value')
    })
    it('when key is an array and doesn\'t exists should put the value recursively', () => {
        const obj: any = {};
        setattr(obj, ['key_1', 'key_2'], 'value')
        expect(obj.key_1.key_2).to.equal('value')
    })
    it('when key is an array and exists partially should throw an error', () => {
        let obj = { 'key_1': null }
        const test = () => setattr(obj, ['key_1', 'key_2'], 'value')
        expect(test).to.throw()
    })
    it('when obj isn\'t an object should throw an error', () => {
        let obj = 'not an object';
        const test = () => setattr(obj, ['key_1', 'key_2'], 'value')
        expect(test).to.throw()
    })
    it('when key is an array and exists partially should put the value with force', () => {
        let obj = { 'key_1': null }
        setattr(obj, ['key_1', 'key_2'], 'value', true)
        expect(obj.key_1.key_2).to.equal('value')
    })
    it('force can\'t replace empty object', () => {
        let empty = {}
        let obj = { 'key_1': empty }
        setattr(obj, ['key_1', 'key_2'], 'value', true)
        expect(obj.key_1).to.equal(empty)
    })
    it('when object is null should throw an error', () => {
        let obj = null;
        const test = () => setattr(obj, 'any_key', 'value')
        expect(test).to.throw()
    })
    it('when object is undefined should throw an error', () => {
        let obj = undefined;
        const test = () => setattr(obj, 'any_key', 'value')
        expect(test).to.throw()
    })
})