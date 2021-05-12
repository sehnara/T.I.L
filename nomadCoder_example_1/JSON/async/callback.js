'use strict';

// 1. JavaScript는 동기적이다.(순서대로 실행)

console.log(1);
setTimeout(()=>console.log(2), 1000)
console.log(3);

// 2. 동기 콜백
function printImmediately(print){
  print();
}

// 3. 비동기 콜백

// 4. callback hell
class UserStorage{
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=>{
      if((id === 'ellie' && password==='dream')){
        onSuccess(id);
      }
      else{
        onError(new Error('not found'));
      }
    },2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'ellie'){
        onSuccess({name : 'ellie', role : "admin"});
      }else{
        onError(new Error('no access'));
      }
    },1000);   
  }
}

function loginSuccess(id){
  getRoles(id);
}

function roleSuccess(obj){
  console.log(`${obj.name}의 직급은 ${obj.role}`);
}
function onError(error){
  console.log(error);
}

UserStorage.loginUser('ellie', 'dream', loginSuccess,onError);