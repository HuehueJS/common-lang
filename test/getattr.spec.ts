import { getattr } from '../src/index';
import { expect } from 'chai';

describe('#getattr', () => {
    it('when key exists should return the value', () => {
        let obj = { 'key': 1 }
        expect(getattr(obj, 'key')).to.equal(1)
    })
    it('when key exists should return the value', () => {
        let obj = [1]
        expect(getattr(obj, 0)).to.equal(1)
    })
    it('when key is an array with a valid key should return the value', () => {
        let obj = { 'key': 1 }
        expect(getattr(obj, ['key'])).to.equal(1)
    })
    it('when key is an array with a valid key should return the value', () => {
        let obj = [1]
        expect(getattr(obj, [0])).to.equal(1)
    })
    it('when key is an array with recursive valid keys should return the value', () => {
        let obj = { 'key_1': { 'key_2': 1 } }
        expect(getattr(obj, ['key_1', 'key_2'])).to.equal(1)
    })
    it('when key is an array with recursive valid keys should return the value', () => {
        let obj = [[0, 0], [1, 0]]
        expect(getattr(obj, [1, 0])).to.equal(1)
    })
    it('when key is an array with recursive valid keys should return the value', () => {
        let obj = { 'key_1': [1] }
        expect(getattr(obj, ['key_1', 0])).to.equal(1)
    })
    it('when key doesn\'t exists should return the default value', () => {
        let obj = { 'key': 1 }
        expect(getattr(obj, 'wrong_key', 'default')).to.equal('default')
    })
    it('when key is an array and doesn\'t exists should return the default value',  () => {
        let obj = { 'key': 1 }
        expect(getattr(obj, ['wrong_key','another_key'], 'default')).to.equal('default')
    })
    it('when obj is null should return the default value', () => {
        let obj = null;
        expect(getattr(obj, 'key', 'default')).to.equal('default')
    })
    it('when obj is undefined should return the default value', () => {
        let obj = undefined;
        expect(getattr(obj, 'key', 'default')).to.equal('default')
    })
    it('when obj isn\'t a object or a array should throw an error', () => {
        let obj = 1;
        expect(() => getattr(obj, 'key')).to.throw()
    })
})
