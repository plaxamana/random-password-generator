const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
  "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const generatePasswords = document.querySelector('.btn-generate');
const firstPassword = document.getElementById('first-password');
const secondPassword = document.getElementById('second-password');
const subText = document.querySelector('.generated');

firstPassword.disabled = true;
secondPassword.disabled = true;

function generateRandomPassword(passwordBox) {
    let generated = '';
    for (let i = 0; i < 10; i++) {
        let randomCharIndex = Math.floor(Math.random() * characters.length);
        generated += characters[randomCharIndex];
    }
    passwordBox.textContent = generated;
}

function copyPassword(passwordBox) {
  navigator.clipboard.writeText(passwordBox.textContent).then(() => {
    alert('Copying to clipboard was successful!');
  }, (err) => {
    alert('Could not copy text: ', err);
  });
}

generatePasswords.addEventListener('click', () => {
    generateRandomPassword(firstPassword);
    generateRandomPassword(secondPassword);
    firstPassword.disabled = false;
    firstPassword.classList.add('pointer');
    secondPassword.disabled = false;
    secondPassword.classList.add('pointer');
    subText.textContent = 'Click on any of the passwords to copy to clipboard!'
});

firstPassword.addEventListener('click', () => copyPassword(firstPassword));
secondPassword.addEventListener('click', () => copyPassword(secondPassword));
