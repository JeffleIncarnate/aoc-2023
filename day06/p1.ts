const data = (await Deno.readTextFile("./input.txt")).split("\n");

const time = parseInt(
  data[0]
    .split(":")[1]
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => x !== "")
    .map((x) => parseInt(x))
    .join("")
);

const distance = parseInt(
  data[1]
    .split(":")[1]
    .split(" ")
    .map((y) => y.trim())
    .filter((y) => y !== "")
    .map((y) => parseInt(y))
    .join("")
);

let total = 0;

let ways: string[] = [];

for (let i = 14; i <= time; i++) {
  const distanceWithMethod = i * (time - i);

  if (distanceWithMethod > distance) {
    ways.push("e");
  }
}

total === 0 ? (total += ways.length) : (total *= ways.length);
ways = [];

console.log(total);
