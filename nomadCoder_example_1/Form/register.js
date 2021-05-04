const id = document.querySelector('#id');
const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
const pwdRe = document.querySelector('#pwdRe');
const emailConf = document.querySelector('#emailConf');

function handleChange(){
  const idVal = id.value;  
  if(idVal.length<4 || idVal.length>15){
    alert('4~15자리의 영문과 숫자를 사용하세요.');
    id.select();
  }
  
}
function handleChangePwd(){
  const pwdVal = pwd.value;  
  if(id.value.length<=0 || (id.value.length<4 || id.value.length>15)){
    alert('아이디 재입력해주세요.');
  } 
  else if(pwdVal.length<8){
    alert('비밀번호는 8자리 이상이어야 합니다..');
    pwd.select();
  }
  
}

function handleChangePwdRe(){
  const pwdVal = pwd.value;  
  const pwdReVal = pwdRe.value;
  if(pwdVal !== pwdReVal){
    alert('암호가 다릅니다. 다시 입력하세요.')
    pwdRe.value = '';
    pwdRe.focus();
  }
}


id.addEventListener('change',handleChange);
pwd.addEventListener('change',handleChangePwd);
pwdRe.addEventListener('change',handleChangePwdRe);

