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


// ///////////////////////////////////////////////////////////////
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const myStrings = ['Hello', 'Whats up', 'Bye', 'Ciao'];
// ///////////////////////////////////////////////////////////////


// let string = 'hello';

// console.log(string.charAt(1));
// console.log(myStrings[0].charAt(1));

// console.log(myStrings[0].concat(string));

// console.log(myNums.indexOf(5));
// console.log(myStrings.indexOf('Bye'));


// const myFunc = () => {
//     return {
//         name: 'Alex Merced', 
//         age: 34
//     }
// }
// myFunc = () => {
//     return [1, 2, 3, 4];
// }

// const myFunc = () => {
//     return () => 5;
// }


// console.log(myFunc()());





///////////////////////////////////// 
///////// Street Figher


// const randomNum = (num) => {
//     return Math.floor(Math.random() * num);
// }

// let gameOver = true
// let kenRyu = true


// class Fighter {
//     constructor(name, special){
//         this.name = name,
//         this.moves = [
//             {name: 'Punch', strength: randomNum(10)},
//             {name: 'Kick', strength: randomNum(10)},
//             {name: special, strength: randomNum(20)}
//         ]
//         this.life = 30
//     }
//     attack(target){
//         const move = randomNum(this.moves.length);
//         const damage = randomNum(this.moves[move].strength);
//         target.life -= damage;
//         console.log(`${this.name} attacked ${target.name} with ${this.moves[move].strength} leaving them with ${target.life}`)
//         if(Ken.life < 1){
//             console.log('Ken is dead, Ryu wins');
//             gameOver = false;
//         }else if(Ryu.life < 1){
//             console.log('Ryu is dead, Ken wins');
//             gameOver = false;
//         }
//     }
// }


// const Ken = new Fighter('Ken', 'Shorzurken');
// const Ryu = new Fighter('Ryu', 'HAMMER CLAW');







// while(gameOver === true){
//     if(kenRyu === true){
//         Ken.attack(Ryu);
//         kenRyu = false;
//     }else{
//         Ryu.attack(Ken);
//         kenRyu = true;
//     }
// }



/////////////////////////////
////////////// end of game

////////////////////// making factory class


// class Car {
//     constructor (maker, serialNumber) {
//       this.serialNumber = serialNumber;
//       this.maker = maker
//     }
//     drive () {
//       console.log('Vroom Vroom');
//     }
//   }
//   const newCar = new Car('Mazda', 12345);
//   console.log(newCar);
//   class Factory {
//     constructor (company) {
//       this.company = company;
//       this.cars = [];
//     }
//     generateCar () {
//       const newCar = new Car(this.company, this.cars.length);
//       this.cars.push(newCar);
//     }
//     findCar (index) {
//       return this.cars[index];
//     }
//     generateMultipleCars(num){
//         for(let i = 0; i < num; i++){
//             this.generateCar();
//         }
//     }
//   }

  
  


//   const chevy = new Factory('Chevy');

// chevy.generateMultipleCars(10);

// console.log(chevy);






// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];






// const newMap = (arr, callback) => {
//   const newArr = [];
//   for(index = 0; index < arr.length; index++) {
//     newArr.push(callback(arr[index], index));
//   }
//   return newArr;
// }

// const addOne = (value, index) => {
//   return value += 1
// }

// console.log(newMap(myArr, addOne));





const attackPrompt = prompt('this prompt');
switch(attackPrompt) {
    case '1':
        console.log('hi');
        break;
    case '2':
        console.log('hi');
        break;
    default:
        console.log('hi default');
}



// var person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }






