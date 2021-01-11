# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @armeenhadizadeh/lotide`

**Require it:**

`const _ = require('@armeenhadizadeh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: head accepts an array and returns the first element of that array
* `tail(array)`: tail accepts an array and returns the tail of that array(all elements besides first one)
* `middle(array)`: middle accepts an array and returns the middle elements of the array. If the array has an odd number of elements it will return only one element, if it has an even number of elements it will return the two middle elemnts
* `assertEqual(actual, expected)`: will log "🤑🤑🤑Assertion Passed:" if the `actual === expected`, and "😡😡😡Assertion Failed:" if the `actual !== expected`
* `assertArraysEqual(array1, array2)`: will log "🤑🤑🤑Assertion Passed:" if `array1 === array2`, and "😡😡😡Assertion Failed:" if the `array1 !== array2`
* `assertObjectsEqual(object1, object2)`: will log "🤑🤑🤑Assertion Passed:" if `object1 === object2`, and "😡😡😡Assertion Failed:" if the `object1 !== object2`
* `countLetters(string)`: will return an object with the number of occurences of a specific character
* `countOnly(allItems, itemsToCount)`: will return an object with the number of occurences of the characters specified in the items to count object
* `eqArrays(array1, array2)`: checks if `array1 === array2`
* `eqObjects(object1, object2)`: checks if `object1 === object2`
* `findKey(obj, callback)`: returns the key that meets the criteria specified by the callback function
* `findKeyByValue(obj, value)`: returns the key that contains the specified `value` returns undefined if key does not exist
* `flatten(array)` : returns a the given array one level flatter 
* `letterPositions(string)` : returns an object with the location of each letter specified in an array
* `map(array, callback)`: returns a new array of elements that were modified by the callback function
* `takeUntil(array, callback)` : returns a slice of the given array until the specified callback criteria is met 
* `without(source, itemsToRemove)`: returns a new array with the `itemsToRemove` items removed from the source array