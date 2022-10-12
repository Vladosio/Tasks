let styles = (a) => {
  a.push("Рок-н-ролл");
  a[Math.floor(a.length / 2)] = "Классика";
  a.shift();
  a.unshift("Рэп", "Регги");
  return a;
};
console.log(styles(["Джаз", "Блюз"]));
