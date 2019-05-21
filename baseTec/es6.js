const a = '123';
const b = {
  c: 123,
  d: 456
};
const {
  c,
  d
} = b;
console.log(d);
const e = function (...f) {
  const h = f;
  const g = [...f];
  console.log(h);
  console.log(g);
}
e(123, 234, 345);