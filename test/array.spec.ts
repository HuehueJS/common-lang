import { expect } from 'chai';
import { Mappers, Reducers, Iter } from "../src/array"

describe("Mappers", () => {
    describe("Value", () => {
        it("map only the value", () => {
            const origin = { a: 1, b: 2 };
            const expected = [['a', 2], ['b', 4]];
            const result =
                Object.entries(origin)
                    .map(Mappers.Value(it => it * 2))
            expect(result).to.deep.equal(expected);
        })
    })
    describe("Swap", () => {
        it("swap values", () => {
            const origin = [[1, 'a'], [2, 'b']];
            const expected = [['a', 1], ['b', 2]];
            const result = origin.map(Mappers.Swap);
            expect(result).to.deep.equal(expected);
        })
    })
    describe("Compine", () => {
        it('Cartesian product', () => {
            const origin = [['a', [1, 2, 3]], ['b', [3, 2, 1]]];
            const expected = [
                [
                    ['a', 1],
                    ['a', 2],
                    ['a', 3],
                ], [
                    ['b', 3],
                    ['b', 2],
                    ['b', 1],
                ]
            ]
            const result = origin.map(Mappers.Combine);
            expect(result).to.deep.equal(expected);
        })
    })
})
describe("Reducers", () => {
    describe("Object", () => {
        it("", () => {
            const origin = { a: 1, b: 2 };
            const result =
                Object.entries(origin)
                    .reduce(Reducers.Object, {})
            expect(result).to.deep.equal(origin)
        })
    })
    describe("Flat", () => {
        it("", () => {
            const origin = [[1, 2], [3, 4], [5, 6]];
            const expected = [1, 2, 3, 4, 5, 6];
            const result = origin.reduce(Reducers.Flat);
            expect(result).to.deep.equal(expected);
        })
    })
})
describe("Iter", () => {
    describe("SetAt", () => {
        it("", () => {
            const origin = { a: 1, b: 2 };
            const result = {}
            Object.entries(origin)
                .forEach(Iter.SetAt(result))
            expect(result).to.deep.equal(origin);
        })
    })
})

