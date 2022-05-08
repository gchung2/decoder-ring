// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("caesar", () =>  {
    it ("if shift value is undefined or null or 0", () => {
        const actual = caesar();
        expect(actual).to.be.false;
    });
    it ("if shift value is less than -25", () => {
        const expected = false;
        const actual = caesar('thinkful', -26);
        expect(actual).to.eql(expected);
    });
    it ("if shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("thinkful", 26);
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "wklqnixo";
        const actual = caesar("ThInkfUl", 3);
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that wrap around end of the alphabet", () => {
        const expected = "iwxczuja";
        const actual = caesar("thinkful", 15);
        expect(actual).to.equal(expected);
    });
    it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
      const expected = "grhv & z r u n?";
      const actual = caesar("Does & w o r k?", 3);
      expect(actual).to.equal(expected);
    });
});