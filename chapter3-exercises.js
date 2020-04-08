//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CHAPTER 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//CLOSURE
//multiplier is called and it creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.

// function multiplier(factor){
//     return number => number * factor
// }

// //must assign function to variable to access closure. 
// let twice = multiplier(2)
// let three = multiplier(3)

// console.log(multiplier(5))
// console.log(three(4))
// console.log(twice(5))

//Recursive Countdown

// function countdown(n){
//     if(n < 1){
//       return [];
//     }else{
//       const countArr = countdown(n - 1)
//       countArr.unshift(n)
//       return countArr
//     }
//   }
//   console.log(countdown(10)); // [5, 4, 3, 2, 1]

// function minimum(num1, num2){
//     if(num1 < num2){
//         return num1
//     }else{
//         return num2
//     }
// }

// console.log(minimum(10,4))
// console.log(minimum(2,4))
// console.log(minimum(3,4))

//Recursive isEven
// function isEven(n){
//     if(n === 0){
//         return true
//     }else if(n === 1){
//         return false 
//     }else if(n < 0){
//         return isEven(-n);
//     }else{
//         return isEven(n - 2)
//     }
// }

// console.log(isEven(-2))

//Bean Counting Exercises
// function countBs(str){
//     return countChar(str, 'B')
// }
// console.log(countBs('BIG BS and little bs'))

// function countChar(str, char){
//     let charCounter = 0;
//     let splitStr = str.split('')

//     for(let i = 0; i < splitStr.length; i++){
//         if(splitStr[i] === char){
//             charCounter++
//         }
//     }
//     return charCounter
// }

// console.log(countChar('how man letter is are inside this little ol string', 'i'))

// function findSolution(target){
//     function find(current, history){
//         if(current == target){
//             return history;
//         }else if (current > target){
//             return null;
//         }else{
//             return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1")
// }

// console.log(findSolution(24));