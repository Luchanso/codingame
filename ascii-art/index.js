/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const transformToCodePoints = (str) => {
  const offset = -65;
  const alphabetSize = 25;
  const offsetQuestionMark = 1;
  const questionMarkCode = alphabetSize + offsetQuestionMark;

  const indexString = str
    .toUpperCase()
    .split('')
    .map((symbol) => {
      const ASCII = symbol.charCodeAt(0);
      printErr(ASCII + offset);
      if (ASCII + offset < 0 || ASCII + offset > alphabetSize) {
        return questionMarkCode;
      }

      return ASCII + offset;
    });

  return indexString;
};

const transformASCIIArt = (indexString, alphabet, width, height) =>
  indexString.map((index) => {
    const offsetX = index * width;
    const offsetY = 0;

    const symbol = [];

    for (let y = offsetY; y < offsetY + height; y++) {
      symbol.push(alphabet[y].slice(offsetX, offsetX + width));
    }

    return symbol;
  });

const joinArrays = arrays => arrays.reduce((prev, curr) => {
  const nextResult = [];
  for (let y = 0; y < curr.length; y++) {
    if (prev[y]) {
      nextResult[y] = prev[y] + curr[y];
    } else {
      nextResult[y] = curr[y];
    }
  }

  return nextResult;
}, []);

const width = parseInt(readline());
const height = parseInt(readline());
const indexString = transformToCodePoints(readline());
const alphabet = [];

for (let i = 0; i < height; i++) {
  alphabet.push(readline());
}

const symbolsASCII = transformASCIIArt(indexString, alphabet, width, height);
const result = joinArrays(symbolsASCII);

for (let y = 0; y < result.length; y++) {
  print(result[y]);
}

// Write an action using print()
// To debug: printErr('Debug messages...');

