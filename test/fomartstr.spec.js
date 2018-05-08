import { expect } from 'chai';
import { formatstr } from '../src/main';

describe("#formatstr", function() {
    it("return Hello with first name", function() {
        expect(formatstr("Hello {firstName}",{firstName: 'Clint'})).to.equal("Hello Clint");
    })
    it("return Hello with first and last name ", function() {
        expect(formatstr("Hello {firstName} {lastName}",{firstName: 'Clint', lastName: 'Barton'})).to.equal("Hello Clint Barton");
    })
    it("return Hello with name of a person ", function() {
        expect(formatstr("Hello {person.name}",{person: {name: 'Clint Barton'}})).to.equal("Hello Clint Barton");
    })
    it("when data is empty return message", function() {
        expect(formatstr("Hello {firstName}",{})).to.equal("Hello {firstName}");
    })
    it("when key not in data is return itself", function() {
        expect(formatstr("Hello {firstName}, you\'ve {age} years old",{firstName: 'Clint'})).to.equal("Hello Clint, you've {age} years old");
    })
})