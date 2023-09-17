//Object serialization using json to store into local storage

const myForm = document.querySelector('#my-form');
const nameInput = document.getElementById('name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
let count = 0;
myForm.addEventListener('submit', onSubmit);
//to remove the no of count after user refreshes the page
// localStorage.removeItem('count');

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

        let obj = {
            name: nameInput.value,
            email: emailInput.value
        };
        console.log(obj);
        let myobjSerialized = JSON.stringify(obj);
        //store email of the user as a key instead of object name for adding multiple 
        // users in the local storage
        localStorage.setItem(emailInput.value, myobjSerialized);

        // if (localStorage.getItem('count') == NaN || localStorage.getItem('count') == null) {
        //     localStorage.setItem('count', 1);
        // }
        // else {
        //     addCount();
        // }
        // console.log('count in localStorage= ', localStorage.getItem('count'));

        nameInput.value = '';
        emailInput.value = '';
    }

}//onSubmit

//to count the number of users inside the local storage
// function addCount() {
//     count = parseInt(localStorage.getItem('count')) + 1;
//     // console.log('count in localStorage add funct = ', localStorage.getItem('count'));
//     localStorage.setItem('count', count);
// }





