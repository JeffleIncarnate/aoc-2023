const data = (await Deno.readTextFile("./input.txt")).split("\n");

const constraints: { [key: string]: number } = {
  red: 12,
  green: 13,
  blue: 14,
};

let total = 0;

for (const game of data) {
  const gameNumber = parseInt(game.split(":")[0].split(" ")[1]);
  const sets = game
    .split(":")[1]
    .split(";")
    .map((set) => set.trim());

  let possible = true;

  for (const set of sets) {
    const bags = set.split(",").map((bag) => bag.trim());

    for (const bag of bags) {
      const number = parseInt(bag.split(" ")[0]);
      const colour = bag.split(" ")[1];

      if (number > constraints[colour]) {
        possible = false;
      }
    }
  }

  if (possible) {
    total += gameNumber;
  }
}

console.log(total);
