// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CHAPTER 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let day1 = {
//     squirrel: false,
//     events: ['work', 'touched tree', 'pizza', 'running']
// }

// day1.wolf = false

// console.log(day1)

// let journal = []

// function addEntry(events, squirrel){
//     journal.push({events, squirrel})
// }

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false); 
// addEntry(["weekend", "cycling", "break", "peanuts",
// "beer"], true);

// console.log(journal)

// let personObj = JSON.stringify({
//     name: 'Terrell',
//     age: 27
// })

// // let {name, age} = personObj

// // console.log(name, age)

// console.log(JSON.parse(personObj).name)

// EXERCISE: The Sum of a Range

// function range(num1, num2, step){
//     let rangeArr = [];
//     for(let i = num1; i <= num2; i += step){
//         rangeArr.push(i)
//     }
//     return rangeArr
// }

// // console.log(range(1, 10, 2))

// function sum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sum(range(1,10,2)))

// function reverseArr(arr){
//     let reversedArr = [];
//     for(let i = arr.length - 1; i >= 0; i--){
//         reversedArr.push(arr[i])
//     }
//     return reversedArr
// }

// console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]))

// function reverseArrInPlace(arr){
//     for(let i = 0 ; i < arr.length/2 ; i++){
//         //set tempVal = to arr[i]
//         //arr[i] = 0
//         let temp = arr[i]
//         //sets arr[i] to last value in array
//         //arr[i] = 10
//         arr[i] = arr[arr.length - 1 - i];
//         //swaps last value of arr with first value

//         arr[arr.length - 1 - i] = temp
//     } 
//     return arr
// }

// console.log(reverseArrInPlace([1,2,3,4,5,6,7,8,9,10]))



function arrayToList(arr){
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--){
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list
}

console.log(arrayToList([1,2,3]))