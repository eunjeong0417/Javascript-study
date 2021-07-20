'use strict'

//       let js = "amazing";
//       if ( js === "amazing") alert("javascript is fun!")

// const { stringifyConfiguration } = require("tslint/lib/configuration");

//       console.log(40+18-10);
//   //console에 출력하기 위해서는 console.log 사용


//variable
//값을 변수에 저장하면 반복적으로 사용가능
// let firstName = 'Bob';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


//쓸 수 없는 변수 이름
// let new = "hello"
// let function = "hello"


// let country = "Korea"
// let continent = "South"
// let population = 1000000;

// console.log(country)
// console.log(continent)
// console.log(population)

//object

// let me = {
//     name: 'hello'
// }

// console.log(me)

// true;
// console.log(true);

// let a = true;
// console.log(a)

// console.log(typeof true);

// let age = 30;
// age = 31;
// console.log(age)

//const 상수
//const 변수로 선언하면 값을 재할당 할 수 없다
//immutable variable
// const birthYear = 1991;
// birthYear = 1990;

// console.log(2 ** 3)

// let x = 10 + 5;
// console.log(x)

// x += 10;

// console.log(x)
// x++;
// console.log( >=)

//template literal
// const firstName = "Jhone";
// const job = "teacher";
// const birthYear = 1991;

// const a = `My name is ${firstName}, and my job is ${job}, my birthYear is ${birthYear}`


// console.log(`hello
// i'am ${firstName}
// my job is ${job}`)

const age = 15;
// const a = age >= 18;

// console.log(a)


// if (age >= 20) {
//     console.log("you can drive")
// } else {
//     const yearLeft = 18 - age;
//     console.log(`you are too young. Wait another ${yearLeft}years `)
// }



// const birthYear = 2010
//     ;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)

// const Mark = 28.3;
// const John = 23.9;

// if (Mark > John) {
//     console.log(`Mark's BMI(${Mark}) is higher than John's (${John})!`)
// } else {
//     console.log("")
// }

//type conversion

// const inputYear = '1991';
// console.log(inputYear + 18)
// console.log(Number(inputYear), inputYear)

// console.log(String(23), 23)

// //type coercion

// console.log('I am ' + 23 + ' years old')
// //여기서 출력되는 23은 문자열이다

// console.log('23' - '10' - 3)
// //10
// //숫자는 문자로 변환된다
// console.log('23' + '10' + 3)
//반대로 +연산자를 사용하면
//23, 10 모두 문자열 그대로 출력된다
//더하기 연산자를 제외한 나머지 연산자는
//문자를 숫자로 변환한다

//switch

// const day = 'tuesday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('plan course structure');
//         break;
//     case 'tuesday':
//         console.log('study');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('hello');
//         break;
//     case 'none':
//         console.log("no")
//     default:
//         console.log('default');
// }

// if (day === 'monday') {
//     console.log('plan course structure');
// } else if (day === 'tuesday') {
//     console.log('study');
// } else if (day === 'wednesday' || 'thursday') {
//     console.log('hello')
// }


// const me = 'Jonas';

// console.log(`I'm ${2037 - 1991} years old ${me}`)

const a = 23;
a >= 18 ? 'wine✨' : 'milk🥛';


console.log(`I like drink ${a >= 18 ? 'wine✨' : 'milk🥛'}`)