// n =4**x find x

let n = 16;
function divideBy4(n) {
  n /= 4;
  if (n === 1) {
    return console.log(true);
  } else if (n < 1) {
    return console.log(false);
  }
  return divideBy4(n);
}
divideBy4(n);
