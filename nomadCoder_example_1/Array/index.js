'use strict';

// Array 

// 1. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

// 2. looping

// a. for
for(let i =0; i<fruits.length; i++){
  console.log(fruits[i]);
}

// b. for of
for(let i of fruits){
  console.log(i);
}

// c. forEach
fruits.forEach((fruit, index, array )=>{ // forEach함수는 value, index, array를 매개변수로하여 한번에 받아올 수 있구나!
  console.log(fruit, index, array);
})


// 3. Add, delete, copy
// push : add <-> unshift(느림)
fruits.push('strawberry', 'orange');
console.log(fruits);
// pop : delete(뒤에서 뺌) <-> shift(느림)
fruits.pop();
console.log(fruits);

// unshift : 앞에서 더한다.
fruits.unshift('grape');
console.log(fruits);

// shift : 앞에부터 제거한다.
fruits.shift();
console.log(fruits);

// splice : 지정된 지역에 원소 delete
fruits.splice(0,2);
console.log(fruits);
fruits.splice(1,1,'apple', 'straw');
console.log(fruits);

// 병합 concat
const fruits2 = ['pear', 'durian'];
const newFruit = fruits.concat(fruits2);
console.log(newFruit);

//-----------------------------------------------------------
// 1. push(뒤에서 넣는다) <-> unshift(앞에서 넣는다 / 느림)
// 2. pop(뒤에서 뺀다) <-> shift(앞에서 뺀다 / 느림)
// 3. concat 배열
// 4. splice(which, total, [], [],....) : 특정 원소 지우거나 넣기
//-----------------------------------------------------------

// 4. searching
// find the index
console.log(fruits.indexOf('apple'));
console.log(fruits2.includes('apple'));
console.log(fruits2.lastIndexOf('')); // element가 두 개 이상일 때, 뒤에 element를 리턴한다. 

//-----------------------------------------------------------
// indexOf
// includes
// lastIndexOf
//-----------------------------------------------------------

const animals = ['lion', 'birds', 'tiger'];

// 1. toString()
console.log(animals.toString());

// 2. join() : 매개변수를 기준으로 string으로 합쳐줌
const str1 = animals.join(', ');
console.log(str1);

// 3. slice(first, last) : first ~ last까지 element 반환
console.log(animals.slice(1,2));

// 4. every
const arr = [1,2,3,4,5,7,9]

const a = arr.every(i =>i<10);
console.log(a);

// 5. some
const b = arr.some(j=>j>10);
console.log(b);

// 6. map() : 배열의 각 element에 mapping한다고 생각해볼까?
const c = arr.map((e,i)=>{
  if(i>3){
    console.log(e);
  }
});

// 7. filter()
const d = arr.filter(a =>{
  return a>5
});
console.log(d);

// 8. reduce(누적값, element, index) <-> reduceRight
const e = arr.reduce((b,a)=>{
  console.log(b,a);
  return b+=a;
});
console.log(e);


// [quiz]

//1. 
{
  const fruits = ['apple', 'banana', 'orange'];
  const str = fruits.toString();
  console.log(str);
}

//2. split(구분자, 제한자(몇 개까지 보낼래?))
{
  const fruits = 'apple, banana, orange,kiwi';
  const arr = fruits.split(',',3);
  console.log(arr);
}

//3. reverse()
{
  const arr = [5,4,3,2,1];
  console.log(arr.reverse());
}

//4. splice() : 원래 배열의 변형이 발생 // slice() : 원래 배열의 변형없이, 새로운 배열을 생성 // 마지막은 배제된다.
{
  const arr = [1,2,3,4,5];
  // const newArr = arr.splice(2,4);
  const newArr = arr.slice(2,5);
  console.log(arr);
  console.log(newArr);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

//5. find()
{
  const arr = students.find(student=>{ // find는 조건에 만족하는 거 있으면 반환하고 바로 끝
    return student.score===90;
  })
  console.log(arr.name);
}

//6.
{
  const arr = students.filter(student =>{
    return student.enrolled;
  });
  console.log(arr);
}

//7.
{
  const newArr = students.map(student=>{
    return student.score;
  });
  console.log(newArr);
}

//8.
{
  console.clear();
  // 1차 시도 : 좀 지저분
  // const arr = students.filter(student =>{
  //   return student.score<50;
  // });
  // if(arr.length>0){
  //   console.log('There is the score lower than 50 in students group.')
  // }

  // 2차 시도
  const scores = students.map(student=>student.score);
  console.log(scores.some(score=>score<50));
}

//9. 
{
  const scores = students.map(student=>student.score);
  console.log(scores);

  const tot = scores.reduce((acc, cur)=>{        
    return acc += cur;
  },0); // initial value = 0;
  console.log(`평균값은 ${tot/scores.length}`);
}

//10.
{
  const score = [45,80, 90, 66, 88];
  const str = score.sort().join(', ');
  console.log(str);
}
