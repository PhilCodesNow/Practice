// let Arr = ['hello', 'hi', 'how are you?', 'good'];

// for(let i = 0; i < Arr.length; i++){
//     let newArr = Arr[i].split('');
//     let upperCase = newArr[0].toUpperCase();
//     newArr = newArr - newArr[0];
//     upperCase = upperCase + newArr;
//     console.log(upperCase);
// }


// object.values, object.keys, object.entries iterating over objects
// const myArr = [1, 2, 3, 4, 5, 6];
// const myObj = {name: 'alex', age: 34, byear: 1985};


// myArr.forEach((value, index) => {
//     console.log(index, value);
// });


// for(key in myObj){
//     console.log(myObj[key]);
// }



// const objIt = Object.values(myObj);

// for(let i = 0; i < objIt.length; i++){
//     console.log(objIt[i]);
// }

// let objIt = Object.keys(myObj);

// for(let i = 0; i < objIt.length; i++){
//     console.log(myObj[objIt[i]]);
// }



// const myArr = [1, 2, 3, 4, 5, 6];
// const myObj = {names:['alex', 'phil', 'john'], age: 34, byear: 1985}; 

// Keys = Object.keys(myObj);



// for(let i = 0; i < Keys.length; i++){
//     if(myObj[Keys[i]] instanceof Array){
//         for(let x = 0; x < Keys[i].length; i++){
//             console.log(myObj[Keys[i][x]]);
//         }
//     }else{
//         console.log(myObj[Keys[i]]);
//     }
// }




// let myArr = ['hi', 'bye', 'hello'];


// let myObj = {
//     name: 'alex',
//     age: 34,
//     byear: 1985
// }

// const objIt = Object.keys(myObj);



// for(let i = 0; i < objIt.length; i++){
//     console.log(myObj[objIt[i]]);
// }

// const checkPrime = (num) => {
//     for(let i = 2; i <= num; i++){
//         if(num % i === 0){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }


// const printPrimes = (limit) => {
//     for(let i = 2; i <= limit; i++){
//         checkPrime(i) ? console.log(i) : null;
//     }
// }
// printPrimes(50);





























