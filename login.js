var signinEmail=document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var loginMsg = document.querySelector('.login-msg');
let accounts = JSON.parse(localStorage.getItem('accounts'));
console.log(accounts);
function signin(){
    const emailsArray = accounts.map(obj => obj.email);
    const passwordArray = accounts.map(obj => obj.password);
    console.log('suc');

    if(emailsArray.includes(signinEmail.value) && passwordArray.includes(signinPassword.value))
    {   for(var i = 0 ; i < accounts.length;i++){
        if(accounts[i].email==signinEmail.value && accounts[i].password==signinPassword.value){
            localStorage.setItem('registered-account',JSON.stringify(accounts[i]));
            break;
        }
    }
        window.location.href = 'home.html';
       console.log('suc');
    }
    else{
       loginMsg.innerHTML= 'incorrect email or password'
       loginMsg.classList.add('text-fail');


    }

}
var signinBtn = document.getElementById('signinBtn'); 
signinBtn.addEventListener("click",signin);

