// Code your solutions in this file

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names
}


function tailsNeverFails() {
  function flipcoin() {
    return Math.random() >= 0.5
  }
  let num_flips = 0
  while (flipcoin()) {
    num_flips += 1
  }
  return `You got ${num_flips} tails in a row!`
}