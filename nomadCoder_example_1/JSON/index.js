'use strict';

// JSON

// 1. Object to Json
// JSON.stringify()
let json = JSON.stringify(true);
console.log(typeof json);

// - array to JSON
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// - object to JSON
const human = {
  name : 'sehoon',
  height : 180,
  job : 'programmer',
  run : ()=>{
    console.log('힘들다요');
  },
  date : new Date()
};
json = JSON.stringify(human);
console.log(json);
json = JSON.stringify(human, ['name','height']); // replacer
console.log(json);
json = JSON.stringify(human, (key, value) =>{    //replacer에 callback 함수 이용
  return key === name ? 'eunjung':'hansoo';
}); // replacer
console.log(json);

// - object to JSON

console.clear();
json = JSON.stringify(human);
const obj = JSON.parse(json, (key, value)=>{
  console.log(`key:${key}, value : ${value}`);
  return key === 'date' ? new Date() : value;
});

console.log(obj.date.getDate());

// JSON Diff
// JSON Beautifier