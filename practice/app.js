console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);
text = 'JavaScriptをマスターした';
console.log(text);

let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

console.log(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  console.log(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  console.log(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );

  console.log('elephant'); 

  let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

let num1 = 25;
let num2 = 2;

console.log(num1 / num2);

let number = 5;
number += 3;
console.log(number);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

let bigNum = 25;
let smallNum = 2;

console.log(bigNum ** smallNum);

let stringNum1 = '25';
let stringNum2 = '2';

let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);




function getArea(radius) {
 let circle = radius * radius * 3.14;
 console.log('円の面積は' + circle + 'です');
}

getArea(5);


function doFunc(callback) {
    console.log('doFuncが呼び出されました');
    callback();
  }
  doFunc(function() {
    console.log('コールバック関数が呼び出されました');
  });


  let John = {
    name: 'John',  // key（キー）: value（バリュー）
    age: 26,
    bloodType: 'A',
    favorite: 'card',
    sing: function() {
      console.log('LA~LA~LA~~~♪');
    }
  };

John.sing(); 


if (false) {
    console.log('trueです！');
  }
  console.log('処理が終わりました');


  let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');