const data = (await Deno.readTextFile("./input.txt")).split("\n");

let total = 0;

for (const game of data) {
  const sets = game
    .split(":")[1]
    .split(";")
    .map((set) => set.trim());

  let red = 0;
  let green = 0;
  let blue = 0;

  for (const set of sets) {
    const bags = set.split(",").map((bag) => bag.trim());

    for (const bag of bags) {
      const number = parseInt(bag.split(" ")[0]);
      const colour = bag.split(" ")[1];

      if (colour === "red") {
        if (number > red) {
          red = number;
        }
      } else if (colour === "green") {
        if (number > green) {
          green = number;
        }
      } else {
        if (number > blue) {
          blue = number;
        }
      }
    }
  }

  total += red * green * blue;
}

console.log(total);
