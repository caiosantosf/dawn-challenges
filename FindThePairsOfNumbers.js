/*
Find the pairs of numbers
This challenge was asked in one of Microsoft's interviews,
Receive an array of unordered integers and a "sum" number, find the pair of numbers whose sum represents the "sum" value.

Example:
Input:
    var arr = [8, 7, 2, 5, 3, 1]
    var sum = 10
    
Output:
    Sum pair found in index 0 e 2 (8 + 2) 
    Sum pair found in index 1 e 4 (7 + 3)
*/

var arr = [8, 7, 2, 5, 3, 1]
var sum = 10

arr.forEach((n, i) => {
  arr.forEach((n2, i2) => {
    if (i2 > i) {
      if (n + n2 === sum) {
        console.log(`Sum pair found in index ${i} e ${i2} (${n} + ${n2})`)
      }
    }
  })
})