# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @hotzappas/lotide`

**Require it:**

`const _ = require('@hotzappas/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arr)`: Function takes an array and extracts the first element, then returns it.
- `tail(arr)`: Function takes an array and returns a shallow copy of it.
- `middle(arr)`: Function takes array and returns an array with the middle element or elements of the input array.
- `countLetters(sentence)`: Function takes a sentence and will return a count of each letter.
- `countOnly(allItems, itemsToCount)`: Function takes an array of items and returns a count for a specific subset of those items.
- `eqArrays(arr1, arr2)`: Function takes in two arrays and returns true or false, based on a perfect match.
- `eqObjects(object1, object2)`: Function takes two objects and returns true if both objects have identical keys with identical values.
- `findKey(object, callback)`: Function takes object and returns the first key for which the callback returns a truthy value.
- `findKeyByValue(object, inputValue)`: Function takes object and a variable, and returns the first property key that matches with the value given.
- `flatten(arr)`: Function takes in a nested array, one level deep, and 'flattens' it by turning it into an unnested array.
- `letterPositions(sentence)`: Function takes a string/sentence and returns an object with properties of each letter as keys and an array containing the original indeces for that letter.
- `takeUntil(array, callback)`: Function takes an array and callback function. It returns a slice of the array with elements taken from the beggining, until the callback returns a truthy value.
- `without(sourceArr, itemsToRemove)`: Function takes a source array and a second array with the items to remove from the source array. It returns a third array similar to the source array but without the elements from itemsToRemove.
- `assertArraysEqual(actual, expected)`: Function takes in two arrays and prints whether they are equal or not.
- `assertEqual(actual, expected)`: Function takes two variables and compares them with the strict equality operator, and prints whether they are equal or not.
- `assertObjectsEqual(actual, expected)`: Function takes two objects, compares them and prints whether they are equal or not.
