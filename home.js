var userName = document.getElementById('userName');
var registeredAccount = JSON.parse(localStorage.getItem('registered-account'));
userName.innerHTML= registeredAccount.name;