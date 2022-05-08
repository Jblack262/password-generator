

const characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`-=;[]\',./~!@#$%^&*()_+:{}|<>?";
const passLengthRangeInput = document.getElementById('pass-length');
const passwordListDOM = document.getElementById('password-list');
// let savedPasswords = [];
// const savedPasswords = localStorage.getItem('savedPasswords');
let savedPasswords = (localStorage.getItem('savedPasswords') ? localStorage.getItem('savedPasswords').split(',') : [])
console.log(savedPasswords)

const generatePassword = (e) => {
  e.preventDefault();
  console.log('generate')
  const service =  document.getElementById('service').value;
  const length = document.getElementById('pass-length').value;

  let password = '';

  for (let i = 0; i < length; i ++) {
    const rng = Math.floor(Math.random() * (characters.length - 0) + 0);
    password += characters[rng]
  }
  
  const passwordListItemDOM = `<li><p>${service}</p><p class="password">${password}</p></li>`
  savedPasswords.push(passwordListItemDOM)
  updateList()
  localStorage.setItem('savedPasswords', savedPasswords);
}

const updateList = () => {
  if (savedPasswords.length < 1) {
    passwordListDOM.innerHTML = '<li><p class="no-passwords">No Passwords Saved</p></li>';
  } else {
    passwordListDOM.innerHTML = '';
    savedPasswords.map(passwords => {
      passwordListDOM.innerHTML += passwords;
    })
  }
}
updateList();

const updateLabel = () => {
  const label = document.getElementById('pass-length-label');
  const length = document.getElementById('pass-length').value;
  label.innerHTML = length;
}
updateLabel();

// generatePassword();