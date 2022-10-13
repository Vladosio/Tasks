1;
function arr(a, b) {
  return a.concat(b);
}
console.log(arr(["a", "b", "c"], [1, 2, 3]));
2;
let arr = (a) => {
  a.push(1, 2, 3);
  return a;
};
console.log(arr(["a", "b", "c"]));

3;
let arr = (a) => a.reverse();
console.log(arr([1, 2, 3]));

4;
let arr = (a) => {
  a.push(4, 5, 6);
  return a;
};
console.log(arr([1, 2, 3]));

5;
let arr = (a) => a.unshift(4, 5, 6);
console.log(arr([1, 2, 3]));

6;
let arr = function (a) {
  return a[0];
};
console.log(arr(["js", "css", "jq"]));

7;
function arr(a) {
  return a[a.length - 1];
}
console.log(arr(["js", "css", "jq"]));

8;
let arr = (a) => a.slice(0, 3);
console.log(arr([1, 2, 3, 4, 5]));

9;
let arr = function (a) {
  return a.slice(3);
};
console.log(arr([1, 2, 3, 4, 5]));

10;
let arr = (a) => {
  a.splice(1, 2);
  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

11;
let arr = (a) => {
  a.splice(0, 1);
  a.splice(3, 1);

  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

12;
let arr = (a) => {
  a.splice(3, 0, "a", "b", "c");
  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

13;
let arr = (a) => {
  a.splice(1, 0, "a", "b");
  a.splice(6, 0, "c");
  a.splice(8, 0, "e");
  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

14;
let arr = (a) => {
  a.sort();
  return a;
};
console.log(arr([3, 4, 1, 2, 7]));

1;
let styles = (a) => {
  a.push("Рок-н-ролл");
  a[Math.floor(a.length / 2)] = "Классика";
  a.shift();
  a.unshift("Рэп", "Регги");
  return a;
};
console.log(styles(["Джаз", "Блюз"]));

// 3
let styles = (a) => {
  a.toString();
  return a;
};
console.log(styles(["Джаз", "Блюз"]));

let styles = (a) => {
  a.join(", ");
  return a;
};
console.log(styles(["Джаз", "Блюз"]));

// 5
let styles = (a, n) => {
  return a.slice(0, (n = 2));
};
console.log(styles([1, 2, 3, 4, 5]));

6;
let styles = (a, n) => {
  return a.splice(-1, (n = 1));
};
console.log(styles([1, 2, 3, 4, 5]));

7;
let styles = (a) => {
  let sum = 0;
  for (let b of a) {
    sum += b;
  }
  return sum;
};
console.log(styles([1, 2, 3, 4, 5]));

8;
let styles = (a) => {
  let sum = 0;
  for (let b of a) {
    sum += b * b;
  }
  return sum;
};
console.log(styles([1, 2, 3]));

9;
let styles = (a) => {
  let ym = 1;
  let sum = 0;
  let g = 0;
  for (let b of a) {
    sum += b;
    ym *= b;
    g = sum + ym;
  }
  return g;
};
console.log(styles([2, 2, 3]));
