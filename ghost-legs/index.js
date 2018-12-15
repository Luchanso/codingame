/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// https://www.codingame.com/ide/puzzle/ghost-legs

var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]) - 1;

const getConnectorIndex = str =>
  str
    .split("|")
    .filter(item => item !== "")
    .findIndex(item => item === "--");

const alphabet = readline().split("  ");
let lines = [];
for (let i = 0; i < H - 1; i++) {
  lines.push(readline());
}
const numerics = readline().split("  ");

for (let j = 0; j < alphabet.length; j++) {
  let state = j;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const connectorIndex = getConnectorIndex(line);
    printErr(`connectorIndex ${connectorIndex} state ${state}`);

    if (connectorIndex !== -1) {
      if (connectorIndex === state) {
        state++;
      } else if (connectorIndex < state) {
        state--;
      } else {
        throw Error("Statement not correct");
      }
    }
  }
  print(alphabet[j] + numerics[state]);
}

// Write an action using print()
// To debug: printErr('Debug messages...');
