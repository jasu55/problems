const s = "A man, a plan, a canal: Panama";
// var isPalindrome = function (s) {
//   const arr = s.split("");
//   console.log(arr);
//   const newArr = arr.filter((i) => {
//     let char = arr[i].toLowerCase();
//     return char.charCodeAt() > 60 && char.charCodeAt() <123;
//   });

//   console.log(newArr);
//   for (let j = 0; j < parseInt(newArr.length / 2); j++) {
//     if (newArr[j] !== newArr[newArr.length - 1 - j]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPalindrome(s));
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};
console.log(isAlphaNum(","));
function isAlphaNum(c) {
  return /^[a-z0-9]$/i.test(c);
}
console.log(isPalindrome(s));
