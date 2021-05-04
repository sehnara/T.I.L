//1. make object(만드는 방법)

// 1) const obj1 = {};
// 2) const obj2 = new Object();

const obj2 = new Object();
obj2.name = 'sehoon';
console.log(obj2.name);

delete obj2.name;
console.log(obj2.name);

// 2. computed properties
// ellie.name 
// ellie['name'] : 런타임 시 object와 key의 정체가 밝혀질 때! 사용

// 3. 

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

// 4. 'in' : object에 해당 key가 존재하는 지를 boolean으로 반환

// 5. for..in vs for ..of
console.clear();
for(key in obj2){
  console.log(key);
}

// for (value of iterable : 순차적인거(배열))
const arr = [1,2,3,4,55,3];
for (const i of arr) {
  console.log(i);
}


// 5. cloning
const user = {name : 'sehoon', age : 12};
const user2 = user;

// [깊은 복사]
const user3= {};
Object.assign(user3, user);
console.log(user3);
user3.name = 'chizue';
console.log(user3);
console.log(user);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : "big"};
const mixed = Object.assign({}, fruit1,fruit2); // 뒤에 거일 수록 덮어씀

// 7. class 복습

class Person1{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(age){
    if(age<0){
      this._age = 0;
    }    
    this._age = age;
  }
  speak(){
    console.log(`${this.firstName} ${this.lastName} ${this.age}`);
  }
}

const seh = new Person1('sehoon', 'kang', 12);
seh.speak();



