// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("substitution", () =>  {
    it ("It returns false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution('thinkful', "short");
        expect(actual).to.be.false;
    });
    it ("It correctly translates the given phrase, based on the alphabet given to the function", () => {
        const expected = 'ykrrpik';
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    });
    it ("It returns false if there are any duplicate characters in the given alphabet", () => {
        const expected = "thinkful";
        const actual = substitution('jrufscpw', "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
    it ("It maintains spaces in the message, before and after encoding or decoding", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it ("It ignores capital letters", () => {
        const expected = 'jrufscpw';
        const actual = substitution("ThiNkfUl", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
});