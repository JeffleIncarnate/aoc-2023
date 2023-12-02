// regex broken af 💀💀💀

const fileLines: string[] = (await Deno.readTextFile("./input.txt")).split(
  "\n"
);

let total = 0;

const wordsToNumbers: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

for (const line of fileLines) {
  const regex = new RegExp(
    /one|two|three|four|five|six|seven|eight|nine|[1-9]/g
  );

  const found = [...line.matchAll(regex)];
  const firstNum = found[0][0];
  const lastNum = found[found.length - 1][0];

  const literal = [];

  !Number.isNaN(parseInt(firstNum))
    ? literal.push(firstNum)
    : literal.push(wordsToNumbers[firstNum]);

  !Number.isNaN(parseInt(lastNum))
    ? literal.push(lastNum)
    : literal.push(wordsToNumbers[lastNum]);

  total += parseInt(literal.join(""));
}

console.log(total);
