const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

assertEqual(head([1, 2, 3]), 1);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head(["foo", "bar"]), "foo");