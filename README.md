# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @splcurran/lotide`

**Require it:**

`const _ = require('@splcurran/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `countOnly(allItems, itemsToCount)`: counts elements from list `allItems` as defined properties with truthy values in `itemsToCount`
* `eqArrays(list1, list2)`: shallow equality check for arrays
* `eqObjects(obj1, obj2)`: shallow equality check for objects
* `findKey(obj, test)`: return the first key in `obj` whose value passes function `test`
* `findKeyByValue(obj, value)`: return the first key in `obj` whose value is `value`
* `head(list)`: returns the first element of the list
* `map(list, func)`: returns a new array where each element is the result of passing the corresponding element from `list` into `func`
* `middle(list)`: returns a list with 1 or 2 elements which are in the middle of `list`
* `takeUntil(list, test)`: returns a new list of all the elements of `list` up to, but not including, the first which passes function `test`
* `without(source, itemsToRemove)`: Returns an array resulting from removing all copies of the elements in `itemsToRemove` from `source`