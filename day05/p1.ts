const [e, ...blocks] = (await Deno.readTextFile("./test.txt")).split("\n\n");

const seeds = e
  .split(":")[1]
  .split(" ")
  .map((seed) => parseInt(seed));

console.log(seeds);
