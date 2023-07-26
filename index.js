
// sign up
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var msg = document.getElementById('msg');
let  accounts=[];
let wrongName = document.getElementById('wrongName');
let wrongEmail = document.getElementById('wrongEmail');
function validateForm(){
const nameRegex =/^[A-Za-z][A-Za-z0-9_]{7,29}$/ ;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

if (!nameRegex.test(signupName.value)){

wrongName.innerHTML = "invalid user name";
wrongName.classList.add('text-fail');
return false;
}


else if (!emailRegex.test(signupEmail.value)){
    if(wrongName.classList.contains('text-fail')){
        wrongName.classList.replace('text-fail','d-none')
    }
    wrongEmail.innerHTML = "invalid email";
    wrongEmail.classList.add('text-fail');
    return false;
    }
 
else if (!passwordRegex.test(signupPassword.value)){
    if(wrongEmail.classList.contains('text-fail')){
        wrongEmail.classList.replace('text-fail','d-none')
    }
    wrongPassword.innerHTML = "invalid Password";
    wrongPassword.classList.add('text-fail');
    return false;
    }





    return true;
}

function signup(){
   if (signupName.value == '' || signupEmail.value == '' || signupPassword.value =='' ){
   msg.innerHTML ='All inputs is required';
   msg.classList.add('text-fail');
   return
   }
   const emailsArray = accounts.map(obj => obj.email);
   if(emailsArray.includes(signupEmail.value)){
       msg.innerHTML='email already exists';
       msg.classList.add('text-fail');
    return;

   }
   
  
    if(!validateForm()){
     return;
    }
    var account = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value

    };
    accounts.push(account);
    msg.innerHTML='Success';
    if(msg.classList.contains('text-fail')){
    msg.classList.replace('text-fail','text-success');
    }
    msg.classList.add('text-success');
    localStorage.setItem('accounts',JSON.stringify(accounts));
    window.location.href = 'index.html';


}



let signupBtn = document.querySelector('.login');
signupBtn.addEventListener("click", signup);


//signin
