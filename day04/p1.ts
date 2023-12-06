const data = (await Deno.readTextFile("./test.txt")).split("\n");

let total = 0;

for (const [_i, card] of data.entries()) {
  const ourNumbers = card
    .split("|")[1]
    .split(" ")
    .map((num) => num.trim())
    .filter((item) => item !== "");

  const winningNumbers = card
    .split("|")[0]
    .split(":")[1]
    .split(" ")
    .map((num) => num.trim())
    .filter((item) => item !== "");

  let cardTotal = 0;

  for (let i = 0; i < ourNumbers.length; i++) {
    for (let j = 0; j < winningNumbers.length; j++) {
      if (ourNumbers[i] === winningNumbers[j]) {
        if (cardTotal === 0) {
          cardTotal = 1;
        } else {
          cardTotal += cardTotal;
        }
      }
    }
  }

  total += cardTotal;
}

console.log(total);
