//localStorage
// localStorage.setItem('myName', 'Pushkar');
// console.log(localStorage.getItem('myName'));
// localStorage.removeItem('myName');

// sessionStorage
// sessionStorage.setItem('email', 'oldmail.com');
// sessionStorage.removeItem('email');
//values are overwritten for same keys like hashmap from java
// sessionStorage.setItem('email', 'newmail.com');
// console.log(sessionStorage.getItem('email'));

// cookie
// document.cookie = `name=Kyle; expires=${new Date(2025, 0, 1).toUTCString()}`;   
// document.cookie = `lastName=Patel; expires=${new Date(9999, 0, 1).toUTCString()}`;
// console.log(document.cookie);

const myForm = document.querySelector('#my-form');
const nameInput = document.getElementById('name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        msg.classList.add('success');
        msg.innerHTML = 'Successfully loged in';
        setTimeout(() => msg.remove(), 2000);

        localStorage.setItem('name', `${nameInput.value}`);
        localStorage.setItem('email', `${emailInput.value}`);

        nameInput.value = '';
        emailInput.value = '';
    }
}
                                     