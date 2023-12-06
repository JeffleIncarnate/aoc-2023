const data = (await Deno.readTextFile("./input.txt")).split("\n");

const times = data[0]
  .split(":")[1]
  .split(" ")
  .map((time) => time.trim())
  .filter((time) => time !== "")
  .map((time) => parseInt(time));

const distances = data[1]
  .split(":")[1]
  .split(" ")
  .map((time) => time.trim())
  .filter((time) => time !== "")
  .map((time) => parseInt(time));

let total = 0;

for (const [index, time] of times.entries()) {
  let ways: string[] = [];

  for (let i = 0; i <= time; i++) {
    const distanceWithMethod = i * (time - i);

    if (distanceWithMethod > distances[index]) {
      ways.push("e");
    }
  }

  total === 0 ? (total += ways.length) : (total *= ways.length);
  ways = [];
}

console.log(total);
