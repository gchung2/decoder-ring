// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("polybius", () =>  {
    it ("When encoding, it translates the letters i and j to 42", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(expected).to.equal(actual);
    });
    it ("When decoding, it translates 42 to (i/j)", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(expected).to.equal(actual);
    });
    it ("It ignores capital letters ", () => {
        const expected = "4432423352125413";
        const actual = polybius("THINKFUL");
        expect(actual).to.equal(expected);
    });
    it ("It maintains spaces in the message, before and after encoding or decoding", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
});

