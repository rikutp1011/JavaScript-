//Q1
let name = '陸人';
let age ='24';
let Q1 = '私のニックネームは' + name + 'です。' + '年齢は' + age + '歳です。';
console.log(Q1);


//Q2
let names = ['JavaScript', 'PHP', 'Ruby', 'Python','Go'];
let Q2 = '私の好きな言語は' + names[0] + 'です。' + '次は' + names[3] + 'を勉強してみたいです。';
console.log(Q2);


//Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
    //  sayHello: function() {
    //     console.log("");
    //  },
};
console.log(user.age);


//Q4
let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];
console.log(playerList[1].favorites[1]);


//Q5
let average =playerList[0].age + playerList[1].age + playerList[2].age / 3;
console.log(average)


//Q6
// teigi
function sayHello() {
    console.log('Hello')
}
// jikkou
sayHello();

let sayWorld = function() {
    console.log('World')
}
sayWorld();


// Q7
user.birthday = '2000-09-27';
user.sayHello = function(){
    console.log('Hello！')
}
user.sayHello();


//Q8
let calc = {};

    calc.add = function(x , y) {
        console.log(x + y);
      }
    calc.subtract = function(x , y) {
        console.log(x - y);
      }
    calc.multiply = function(x , y) {
        console.log(x * y);
      }
    calc.divide = function(x , y) {
        console.log(x / y);
      }

calc.add(3,4);
calc.subtract(15,5)
calc.multiply(7,7)
calc.divide(25,5)


//Q9
function remainder(x, y) {
    return (x % y);
  }
  
  let result = remainder(5, 3);
  console.log("5 を 3 で割った余りは " + result + " です。");


  //Q10
  //関数fooの中で変数Xを定義しているが関数内だけスコープが有効なので関数の外で使おうとしてもエラーが出る
  


  //応用

  //Q1
  var random = Math.random() * 10;

console.log( random );


//Q2
setTimeout (function() {
  console.log("Hello World!");
}, 3000);


//Q3
let num = 5;

if (num > 0);
  console.log('num is greater than 0');

if (num < 0);
  console.log('num is less than 0');

if (num == 0);
  console.log('num is 0');


//Q4
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);


//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];
  if (typeof element === 'number') {
    if (element % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}