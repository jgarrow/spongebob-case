import { toSpongebobCase } from './';

describe('toSpongebobCase', () => {
  it('parses single word', () => {
    const expected = 'aVaTaR';
    const word = 'Avatar';
    expect(toSpongebobCase(word)).toBe(expected);
    expect(toSpongebobCase(word.toLowerCase())).toBe(expected);
    expect(toSpongebobCase(word.toUpperCase())).toBe(expected);
  });

  it('parses single sentence', () => {
    const expected = 'tHiS iS a TeSt SeNtEnCe WrItTeN bY jAnE dOe, WhOeVeR tHaT iS.';
    const sentence = 'This is a test sentence written by Jane Doe, whoever that is.';

    expect(toSpongebobCase(sentence)).toBe(expected);
    expect(toSpongebobCase(sentence.toLowerCase())).toBe(expected);
    expect(toSpongebobCase(sentence.toUpperCase())).toBe(expected);
  });

  it('parses a paragraph', () => {
    const expected =
      "tHiS iS a TeSt PaRaGrApH wRiTtEn By JoHnNy ApPlEsEeD. hE iS a FiCtIoNaL cHaRaCtEr. It'S tHe GiRlS'. i WoNdEr WhErE tHaT sToRy CaMe FrOm.";
    const paragraph =
      "This is a test paragraph written by Johnny Appleseed. He is a fictional character. It's the girls'. I wonder where that story came from.";

    expect(toSpongebobCase(paragraph)).toBe(expected);
    expect(toSpongebobCase(paragraph.toLowerCase())).toBe(expected);
    expect(toSpongebobCase(paragraph.toUpperCase())).toBe(expected);
  });
});
