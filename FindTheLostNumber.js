/*
This challenge was asked recently in Apple interviews:

An array of integers contains all the numbers from 1 to 100, except for one. Write a function that finds and returns the lost number.

Input:
     let array = [...Array(101).keys()].splice(1, 100)
     let index = Math.floor(Math.random() * array.length)
     array[index] = undefined

     let lostNumber = findLostNumber(array)

Function to complete:
     function findLostNumber (array) {
        // return the original value of the lost number
     }
*/

let array = [...Array(101).keys()].splice(1, 100)
let index = Math.floor(Math.random() * array.length)
array[index] = undefined

let lostNumber = findLostNumber(array)

function findLostNumber(array) {
  return array.reduce((t, v, i) => {
    return t + (v === undefined ? i : 0)
  })
}

console.log(lostNumber)