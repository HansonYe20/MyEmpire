'use strict';

var a = '123';
var b = {
  c: 123,
  d: 456
};
var c = b.c,
    d = b.d;

console.log(d);
var e = function e() {
  for (var _len = arguments.length, f = Array(_len), _key = 0; _key < _len; _key++) {
    f[_key] = arguments[_key];
  }

  var h = f;
  var g = [].concat(f);
  console.log(h);
  console.log(g);
};
e(123, 234, 345);
