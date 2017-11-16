/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const WIDTH = parseInt(readline()); // the number of cells on the X axis
const HEIGHT = parseInt(readline()); // the number of cells on the Y axis
const CELL_EMPTY = '.';

const compare = (grid, x, y) => {
  const result = {
    empty: false,
    right: false,
    bottom: false,
  };

  // printErr(JSON.stringify(grid, null, 4), `x: ${x}`, `y: ${y}`);

  if (grid[y][x] === CELL_EMPTY) {
    result.empty = true;
    return result;
  }

  for (let xTemp = x + 1; xTemp < WIDTH; xTemp++) {
    if (grid[y][xTemp] !== CELL_EMPTY) {
      result.right = {
        x: xTemp,
        y,
      };
      break;
    }
  }
  for (let yTemp = y + 1; yTemp < HEIGHT; yTemp++) {
    if (grid[yTemp][x] !== CELL_EMPTY) {
      result.bottom = {
        x,
        y: yTemp,
      };
      break;
    }
  }

  // if (x + 1 < WIDTH) {
  //   result.right = grid[y][x + 1] !== CELL_EMPTY;
  // }
  // if (y + 1 < HEIGHT) {
  //   result.bottom = grid[y + 1][x] !== CELL_EMPTY;
  // }

  return result;
};

const grid = [];
for (let i = 0; i < HEIGHT; i++) {
  grid.push(readline());
}


for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    const compareResult = compare(grid, x, y);

    if (!compareResult.empty) {
      let result = `${x} ${y} `;

      if (compareResult.right) {
        result += `${compareResult.right.x} ${compareResult.right.y}`;
      } else {
        result += '-1 -1';
      }
      result += ' ';
      if (compareResult.bottom) {
        result += `${compareResult.bottom.x} ${compareResult.bottom.y}`;
      } else {
        result += '-1 -1';
      }

      print(result);
    }
  }
}

// Three coordinates: a node, its right neighbor, its bottom neighbor
// print('0 0 1 0 0 1');
// xCompare yCompare xRight yRight xBottom yBottom
