'use strict'

//function
function logger() {
    console.log("hello")
}


//calling / running / invoking function
logger();
logger();
logger();
logger();
logger();


//parameters(매개변수)
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

//함수를 fruitJuice 변수에 저장해서
//fruitJuice 변수를 console로 호출한다
const fruitJuice = fruitProcessor(5, 3);
console.log(fruitJuice)

console.log(fruitProcessor(5, 3));

const appleOrorangeUJuice = fruitProcessor(7, 2);
console.log(appleOrorangeUJuice)



