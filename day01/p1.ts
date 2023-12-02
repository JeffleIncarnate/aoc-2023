const TEXT: string = await Deno.readTextFile("./input.txt");

const arrLines: string[] = TEXT.split("\n");

let total = 0;

for (let i = 0; i < arrLines.length; i++) {
  const line = arrLines[i];

  let lineNumbers: number[] = [];

  for (let j = 0; j < line.length; j++) {
    if (!Number.isNaN(parseInt(line[j]))) {
      lineNumbers.push(parseInt(line[j]));
    }
  }

  total += parseInt(`${lineNumbers[0]}${lineNumbers[lineNumbers.length - 1]}`);
  lineNumbers = [];
}

console.log(total);
