import { expect } from 'chai';
import { format } from '../src/string/index';

describe("#formatstr", () => {
    it("return Hello with first name", () => {
        expect(format("Hello {firstName}", { firstName: 'Clint' })).to.equal("Hello Clint");
    })
    it("return Hello with first and last name ", () => {
        expect(format("Hello {firstName} {lastName}", { firstName: 'Clint', lastName: 'Barton' })).to.equal("Hello Clint Barton");
    })
    it("return Hello with name of a person ", () => {
        expect(format("Hello {person.name}", { person: { name: 'Clint Barton' } })).to.equal("Hello Clint Barton");
    })
    it("when data is empty return message", () => {
        expect(format("Hello {firstName}", {})).to.equal("Hello {firstName}");
    })
    it("when key not in data is return itself", () => {
        expect(format("Hello {firstName}, you\'ve {age} years old", { firstName: 'Clint' })).to.equal("Hello Clint, you've {age} years old");
    })
})