'use strict'

//function
// function logger() {
//     console.log("hello")
// }


//calling / running / invoking function
// logger();
// logger();
// logger();
// logger();
// logger();


//parameters(매개변수)
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

//함수를 fruitJuice 변수에 저장해서
//fruitJuice 변수를 console로 호출한다
// const fruitJuice = fruitProcessor(5, 3);
// console.log(fruitJuice)

// console.log(fruitProcessor(5, 3));

// const appleOrorangeUJuice = fruitProcessor(7, 2);
// console.log(appleOrorangeUJuice)

// const a = fruitProcessor(3, 5);
// console.log(fruitProcessor(3, 5))


//매개변수는 함수 안에서만 사용할 수 있다
// function age1(birthYear) {
//     return 2037 - birthYear;

// }

// const Age1 = age1(21);
// console.log(Age1)
// // const birthYear = age1(21);
// console.log(birthYear)

// const birth = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = birth(21);
// console.log(age2)


//함수를 먼저 호출하고
//그 다음에 선언할 수 있다
//함수 호이스팅 
// const age1 = birthYear(21);

// function birthYear(age) {
//     return 2037 - age;
// }

// function call(string) {
//     return `이것은 자바스크립트의 ${string}다`;
// }

// console.log(call(
// ));


// const letUs = function (a, b) { return a * b }
// console.log(letUs(7, 9));


//Arrow function
// const ageCalc = birthYear => 2037 - birthYear;

// const abc = ageCalc(21);
// console.log(abc)

// const ageCalc = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(ageCalc(1991, 'Jonas'));
// console.log(ageCalc(1980, 'Bob'));


// function cutFruit(fruit) {
//     return fruit * 4
// }

// function cutFruit(fruit) {
//     return fruit * 4
// }

// function fruitItems(apple, orange) {
//     const appleFruit = cutFruit(apple);
//     const orangeFruit = cutFruit(orange)

//     const juice = `juice with ${appleFruit} apples and ${orangeFruit} oranges`
//     return juice;
// }
// const abc = fruitItems(4, 5);
// console.log(abc)

// const calcAge = function (year) {
//     return 2037 - year;
// }


// const yearRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear) ;
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement}years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return 0;
//     }
     

//     // return `${firstName} retires in ${retirement}years`

// }

// console.log(yearRetirement(2011, 'Jonas'));
// console.log(yearRetirement(1970, 'Bob'));
// console.log(yearRetirement(1960, 'Jhon'));

// const calcAverage = (score) => {
//     return score / 3
// }


// function checkWinner(avgDolhins, avgKoalas) {
//     const dolphins = calcAverage(avgDolhins);
//     const koalas = calcAverage(avgKoalas);

//     console.log(dolphins,koalas)
//     return `koalas win(${dolphins} vs ${koalas})`
// }

// const avgDolhins = 44 + 23 + 71;
// const avgKoalas = 65 + 54 + 49;
// console.log(checkWinner(avgDolhins, avgKoalas));

// const calcAverage = (a, b, c) => (a + b + c) / 3;

//     const scoreDolphins = calcAverage(44, 23, 71);
//     const scoreKoalas = calcAverage(65, 54, 49);


// function checkWinner(avgDolphins, avgKoalas) {

    
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`dolphins win(${avgDolphins} vs ${avgKoalas})`)
//     } else if(avgKoalas >= avgDolphins * 2 ){
//         console.log(`koalas win(${avgDolphins} vs ${avgKoalas})`)
//     } else {
//         console.log('no team wins')
//     }

// }

// checkWinner(1=00, 400);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);