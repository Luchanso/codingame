declare const readline: () => string;

// const ROUNDS = parseInt(readline());
// const CASH = parseInt(readline());
const BET_RATIO = 0.25;
const PLAIN_RATIO = 35;
const EVEN_ODD_RATIO = 1;
const { ceil } = Math;

const ifElse = <A, B>(statement: boolean, trueResult: A, falseResult: B) =>
  statement ? trueResult : falseResult;

const calc = (cash: number, betRatio: number, ratio = 1) =>
  cash + ceil(cash * betRatio) * ratio;

const odd = (cash: number, target: number) =>
  ifElse(
    target % 2 === 0,
    calc(cash, BET_RATIO, EVEN_ODD_RATIO),
    calc(cash, BET_RATIO, -1)
  );
const even = (cash: number, target: number) =>
  ifElse(
    target % 2 === 0,
    calc(cash, BET_RATIO, -1),
    calc(cash, BET_RATIO, EVEN_ODD_RATIO)
  );
const plain = (cash: number, target: number, result: number) =>
  ifElse(
    target === result,
    calc(cash, BET_RATIO, PLAIN_RATIO),
    calc(cash, BET_RATIO, -1)
  );

const process = (currentCash: number, str: string) => {
  const [result, type, target] = str.split(" ");

  if (type === "PLAIN") {
    return plain(currentCash, parseInt(target), parseInt(result));
  }

  if (type === "EVEN") {
    return even(currentCash, parseInt(result));
  }

  if (type === "ODD") {
    return odd(currentCash, parseInt(result));
  }
};

console.error(odd(400, 11) === 300);
console.error(odd(400, 12) === 500);
console.error(even(400, 11) === 500);
console.error(even(400, 12) === 300);
console.error(plain(400, 12, 12) === 3900);
console.error(plain(400, 12, 13) === 300);
console.error(odd(125, 11) === 93);
console.error(odd(125, 12) === 157);
console.error(even(125, 11) === 157);
console.error(even(125, 12) === 93);
console.error(odd(12555, 32) === 15694);
console.error(process(12555, "32 ODD") === 15694);
console.error(process(12555, "32 EVEN") === 9416);
console.error(process(12555, "33 ODD") === 9416);
console.error(process(12555, "33 EVEN") === 15694);
console.error(process(12555, "33 PLAIN 33") === 122420);
console.error(process(12555, "33 PLAIN 32") === 9416);
console.error(process(12555, "32 PLAIN 33") === 9416);

const createCounter = (rounds: number) => {
  let result = [];
  for (let i = 0; i < rounds; i++) {
    result.push(i);
  }

  return result;
}

const run = (rounds: number, readline: () => string, cash: number) => {
  const counter = createCounter(rounds);
  const result = counter.reduce(currentCash => {
    const str = readline();
    const t = process(currentCash, str);
    console.error(str, "current:", currentCash, "next:", t);
    return t;
  }, cash);
  console.error(result);
  console.log(result);
}

const createRreadLine = () => {
  let counter = 0;

  const readlineImpl = () => {
    '32 ODD'; // 1250
    '32 EVEN'; // 937
    '33 ODD';
    '33 EVEN';
    '33 PLAIN 33';
    '33 PLAIN 32';
    '32 PLAIN 31';
  };

  return readlineImpl;
}

run(2, createRreadLine() as any, 1000);
