import { range } from '../src/generator'
import { expect } from 'chai'

describe('generator', () => {
    describe('range', () => {
        it('range(10) should gen [0,1,2...,9]', () => {
            const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            const result = Array.from(range(10))
            expect(result).to.deep.equal(expected)
        })
        it('range(0,10) should gen [0,1,2...,9]', () => {
            const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            const result = Array.from(range(0, 10))
            expect(result).to.deep.equal(expected)
        })
        it('range(-5,5) should gen [-5,-4,...,4]', () => {
            const expected = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
            const result = Array.from(range(-5, 5))
            expect(result).to.deep.equal(expected)
        })
        it('range(5,-5) should gen [5,4,...,-4]', () => {
            const expected = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4]
            const result = Array.from(range(5, -5))
            expect(result).to.deep.equal(expected)
        })
        it('range(0,10,2) should gen [0,2,4,6,8]', () => {
            const expected = [0, 2, 4, 6, 8]
            const result = Array.from(range(0, 10, 2))
            expect(result).to.deep.equal(expected)
        })
        it('range(10,0,-2) should gen [10,8,6,4,2]', () => {
            const expected = [10, 8, 6, 4, 2]
            const result = Array.from(range(10, 0, -2))
            expect(result).to.deep.equal(expected)
        })
    })
})