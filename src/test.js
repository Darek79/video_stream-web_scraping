const selectors = [
  {p: "raptastisch", s: ".rpwe-title>a"},
  {p: "hiphopdx", s: ".text-wrap>a"},
];
var str = "hiphopdx.com";
var res = selectors.find((el) => str.includes(el.p));
console.log(res);
