let num = "230003119";
console.log(num.split(""));
let arr = num.split("");
let sameIntegers = [];
arr.forEach((el, i) => {
  //   console.log("element = ", el, "next+1", arr[i + 1], "next+2", arr[i + 2]);
  if (el === arr[i + 1] && el === arr[i + 2]) {
    sameIntegers.push(el);
    console.log(sameIntegers);
  }
});
let maxEl = Math.max(...sameIntegers).toString();
console.log(maxEl + maxEl + maxEl);
