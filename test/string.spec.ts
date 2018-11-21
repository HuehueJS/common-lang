import { expect } from 'chai'
import { upperCase, lowerCase, upperCaseFirst, lowerCaseFirst } from '../src/string';

describe('#upperCase', () => {
    it('when a string should return a upper case string', () => {
        expect(upperCase('test')).to.equal('TEST')
    })
})

describe('#lowerCase', () => {
    it('when a string should return a lower case string', () => {
        expect(lowerCase('TEST')).to.equal('test')
    })
})

describe('#lowerCaseFisrt', () => {
    it('when a string should return a equal string with only the first letter lower', () => {
        expect(lowerCaseFirst('TeSt')).to.equal('teSt')
    })
})

describe('#upperCaseFirst', () => {
    it('when a string should return a equal string with only the first letter upper', () => {
        expect(upperCaseFirst('tEsT')).to.equal('TEsT')
    })
})