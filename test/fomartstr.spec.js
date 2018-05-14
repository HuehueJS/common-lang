import { expect } from 'chai';
import { format } from '../src/string';

describe("#formatstr", function() {
    it("return Hello with first name", function() {
        expect(format("Hello {firstName}",{firstName: 'Clint'})).to.equal("Hello Clint");
    })
    it("return Hello with first and last name ", function() {
        expect(format("Hello {firstName} {lastName}",{firstName: 'Clint', lastName: 'Barton'})).to.equal("Hello Clint Barton");
    })
    it("return Hello with name of a person ", function() {
        expect(format("Hello {person.name}",{person: {name: 'Clint Barton'}})).to.equal("Hello Clint Barton");
    })
    it("when data is empty return message", function() {
        expect(format("Hello {firstName}",{})).to.equal("Hello {firstName}");
    })
    it("when key not in data is return itself", function() {
        expect(format("Hello {firstName}, you\'ve {age} years old",{firstName: 'Clint'})).to.equal("Hello Clint, you've {age} years old");
    })
})