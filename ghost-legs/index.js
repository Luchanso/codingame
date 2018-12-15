/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// https://www.codingame.com/ide/puzzle/ghost-legs

var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]) - 1;

const getNearConnectorIndex = (str, state) => {
  const connectors = str.split("|").filter(item => item !== "");
  if (connectors[state] === "--") {
    return state;
  } else if (connectors[state - 1] === "--") {
    return state - 1;
  }

  return -1;
};

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
    const connectorIndex = getNearConnectorIndex(line, state);
    printErr(`connectorIndex ${connectorIndex} state ${state}`);

    if (connectorIndex !== -1) {
      if (connectorIndex === state) {
        state++;
      } else if (connectorIndex === state - 1) {
        state--;
      } else {
        throw Error("Statement not correct");
      }
    }
  }
  print(alphabet[j] + numerics[state]);
}

/*
13 8
A  B  C  D  E
|  |  |  |  |
|  |--|  |  |
|--|  |  |  |
|  |  |--|  |
|  |--|  |--|
|  |  |  |  |
1  2  3  4  5
*/
