"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
describe('toSpongebobCase', () => {
    it('parses single word', () => {
        const expected = 'aVaTaR';
        const word = 'Avatar';
        expect((0, _1.toSpongebobCase)(word)).toBe(expected);
        expect((0, _1.toSpongebobCase)(word.toLowerCase())).toBe(expected);
        expect((0, _1.toSpongebobCase)(word.toUpperCase())).toBe(expected);
    });
    it('parses single sentence', () => {
        const expected = "tHiS iS a TeSt SeNtEnCe WrItTeN bY jAnE dOe, WhOeVeR tHaT iS.";
        const sentence = "This is a test sentence written by Jane Doe, whoever that is.";
        expect((0, _1.toSpongebobCase)(sentence)).toBe(expected);
        expect((0, _1.toSpongebobCase)(sentence.toLowerCase())).toBe(expected);
        expect((0, _1.toSpongebobCase)(sentence.toUpperCase())).toBe(expected);
    });
    it('parses a paragraph', () => {
        const expected = "tHiS iS a TeSt PaRaGrApH wRiTtEn By JoHnNy ApPlEsEeD. hE iS a FiCtIoNaL cHaRaCtEr. It'S tHe GiRlS'. i WoNdEr WhErE tHaT sToRy CaMe FrOm.";
        const paragraph = "This is a test paragraph written by Johnny Appleseed. He is a fictional character. It's the girls'. I wonder where that story came from.";
        expect((0, _1.toSpongebobCase)(paragraph)).toBe(expected);
        expect((0, _1.toSpongebobCase)(paragraph.toLowerCase())).toBe(expected);
        expect((0, _1.toSpongebobCase)(paragraph.toUpperCase())).toBe(expected);
    });
});
