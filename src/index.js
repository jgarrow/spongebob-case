"use strict";
// export function toSpongebobCase(str: string): string {
//   const arrOfWords = str.split(" ");
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSpongebobCase = void 0;
//   const spongebobWordsArr = arrOfWords.reduce(
//     (acc: string[], currWord: string, i) => {
//       let spongebobCaseWord = "";
//       // "normal" spongebob case for first word
//       if (!i) {
//         spongebobCaseWord = currWord
//           .split("")
//           .map((char, index) =>
//             index % 2 ? char.toUpperCase() : char.toLowerCase()
//           )
//           .join("");
//       } else {
//         const prevWord = acc[i - 1];
//         // if the prev word ends w/ a non-word character, get the penultimate character
//         // const prevWordLastLetter = prevWord[prevWord.length - 1].match(/\W/g) ? prevWord[prevWord.length - 2] : prevWord[prevWord.length - 1];
//         let prevWordLastLetter: string;
//         for (let j = prevWord.length - 1; j >= 0; j--) {
//           if (prevWord[j].match(/\w/g)) {
//             prevWordLastLetter = prevWord[j];
//             break;
//           }
//         }
//         // var previousInShapeType, index = fruits.length - 1;
//         // for ( ; index >= 0; index--) {
//         //     if (fruits[index].shape == currentShape) {
//         //         previousInShapeType = fruits[index];
//         //         break;
//         //     }
//         // }
//         spongebobCaseWord = currWord
//           .split("")
//           .map((char, index) => {
//             // if the last letter of the previous word is lowercase, start currWord w/ uppercase
//             if (prevWordLastLetter === prevWordLastLetter.toLowerCase()) {
//               return index % 2 ? char.toLowerCase() : char.toUpperCase();
//             } else {
//               return index % 2 ? char.toUpperCase() : char.toLowerCase();
//             }
//           })
//           .join("");
//       }
//       acc.push(spongebobCaseWord);
//       return acc;
//     },
//     []
//   );
//   return spongebobWordsArr.join(" ");
// }
function toSpongebobCase(str) {
    const singleCharacter = /[a-zA-Z]/; // any word character
    const lowerCaseLetters = /[a-z]+/;
    return str.split("").reduce((acc, currChar) => {
        var _a;
        // check if currChar is a word character
        if (singleCharacter.test(currChar)) {
            const existingWordChars = (_a = acc.match(/[a-zA-Z]/g)) !== null && _a !== void 0 ? _a : [''];
            const lastMatch = existingWordChars[existingWordChars.length - 1];
            // if lastMatch is lowercase
            return lowerCaseLetters.test(lastMatch)
                ? acc + currChar.toUpperCase()
                : acc + currChar.toLowerCase();
        }
        else {
            return acc + currChar;
        }
    }, "");
}
exports.toSpongebobCase = toSpongebobCase;
