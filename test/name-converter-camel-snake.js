import { expect } from 'chai'
import { CamelToSnakeSplitter } from '../src/case-converter/name-convention-splitter/camel-to-snake.splitter';
import { CamelToSnakeGluer } from '../src/case-converter/name-convention-gluer/camel-to-snake.gluer';
import { NameConventionConverter } from '../src/case-converter/name-convention-converter';

describe('Name Convention Converter', function () {
    let camelToSnakeGluer = null;
    let camelToSnakeSplitter = null;

    let nameConverter = null;

    beforeEach(() => {
        camelToSnakeGluer = new CamelToSnakeGluer();
        camelToSnakeSplitter = new CamelToSnakeSplitter();
        nameConverter = new NameConventionConverter(camelToSnakeGluer, camelToSnakeSplitter); 
    });

    describe("#String camelCase to snake_case", () => {
        it("parse camelCase to snake_case", () => {
            expect(nameConverter.parse("firstName")).to.equal("first_name");
        });

        it("what return when name is already parsed", () => {
            expect(nameConverter.parse("first_name")).to.equal("first_name");
        });

        it("parse camelCase to snake_case and expect a wrong value", () => {
            expect(nameConverter.parse("firstName")).to.not.equal("firstName");
        });
    });

    describe("#Array with string camelCase to snake_case", () => {
        it("parse camelCase to snake_case", () => {
            const toParseArr = ['firstName', 'lastName'];
            const expectedArr = ['first_name', 'last_name'];
            expect(nameConverter.parse(toParseArr)).to.deep.equal(expectedArr);
        });

        it("what return when name is already parsed", () => {
            const arr = ['first_name', 'last_name'];
            expect(nameConverter.parse(arr)).to.deep.equal(arr);
        });

        it("parse camelCase to snake_case and expect a wrong value", () => {
            const arr = ['firstName', 'lastName'];
            expect(nameConverter.parse(arr)).to.not.deep.equal(arr);
        });
    });

    describe("#Object camelCase to snake_case", () => {
        it("parse camelCase to snake_case", () => {
            const toParseObject = {
                firstName: "Tony",
                lastName: "Stark"
            };
            const expectedObject = {
                first_name: "Tony",
                last_name: "Stark"
            };
            expect(nameConverter.parse(toParseObject)).to.deep.equal(expectedObject);
        });

        it("parse nested object camelCase to snake_case", () => {
            const toParseObject = {
                firstName: "Tony",
                lastName: "Stark",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "tony.stark@avengers.com" 
                }
            };
            const expectedObject = {
                first_name: "Tony",
                last_name: "Stark",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "tony.stark@avengers.com" 
                }
            };
            expect(nameConverter.parse(toParseObject)).to.deep.equal(expectedObject);
        });

        it("what return when object keys is already parsed", () => {
            const object = {
                first_name: "Tony",
                last_name: "Stark",
            };
            expect(nameConverter.parse(object)).to.deep.equal(object);
        });

        it("what return when object keys and nested object keys is already parsed", () => {
            const object = {
                first_name: "Tony",
                last_name: "Stark",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "tony.stark@avengers.com" 
                }
            };
            expect(nameConverter.parse(object)).to.deep.equal(object);
        });

        it("parse camelCase to snake_case and expect a wrong value", () => {
            const object = {
                firstName: "Tony",
                lastName: "Stark"
            };
            expect(nameConverter.parse(object)).to.not.deep.equal(object);
        });
    });

    describe("#Array with Objects camelCase to snake_case", () => {
        it("parse Array with multiple nested object camelCase to snake_case", () => {
            const toParseArr = [{
                firstName: "Natasha",
                lastName: "Romanoff",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "natasha.romanoff@avengers.com" 
                }
            },
            {
                firstName: "Steve",
                lastName: "Rogers",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "steve.rogers@avengers.com" 
                }
            }];
            const expectedArr = [{
                first_name: "Natasha",
                last_name: "Romanoff",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "natasha.romanoff@avengers.com" 
                }
            },
            {
                first_name: "Steve",
                last_name: "Rogers",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "steve.rogers@avengers.com" 
                }
            }];
            expect(nameConverter.parse(toParseArr)).to.deep.equal(expectedArr);
        });

        it("parse an array with one nested object camelCase to snake_case", () => {
            const toParseArr = [{
                firstName: "Natasha",
                lastName: "Romanoff",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "natasha.romanoff@avengers.com" 
                }
            }];
            const expectedArr = [{
                first_name: "Natasha",
                last_name: "Romanoff",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "natasha.romanoff@avengers.com" 
                }
            }]; 
            expect(nameConverter.parse(toParseArr)).to.deep.equal(expectedArr);
        });
    });
});