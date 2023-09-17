//Object serialization using json to store into local storage

const myForm = document.querySelector('#my-form');
const nameInput = document.getElementById('name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const itemList = document.getElementById('items');
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

        //for adding delete button functionality 
        const delBtn = document.createElement('input');
        delBtn.setAttribute('type', 'button');
        delBtn.setAttribute('value', 'delete');
        //setting id as an email of user so we can pass the value
        delBtn.id = emailInput.value;
        delBtn.setAttribute('onclick', 'deleteUser(this)');
        li.appendChild(delBtn);
        delBtn.style.margin = '10px';
        delBtn.style.marginLeft = '10px';
        delBtn.style.padding = '5px';
        delBtn.style.fontSize = '15px';
        delBtn.style.backgroundColor = '#333';
        delBtn.style.color = 'white';
        // console.log(li.textContent);


        msg.classList.add('success');
        msg.innerHTML = 'Successfully loged in';
        setTimeout(() => msg.remove(), 2000);

        let obj = {
            name: nameInput.value,
            email: emailInput.value
        };
        // console.log(obj);
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

function deleteUser(val) {
    //get a parent node element and delete the user details from the list

    if (confirm('Are You Sure?')) {
        // console.log('val = ', val);
        localStorage.removeItem(val.id);
        let parentEle = document.getElementById(val.id).parentElement;
        // console.log('parent element = ', parentEle);
        userList.removeChild(parentEle);
    }
}

//to count the number of users inside the local storage
// function addCount() {
//     count = parseInt(localStorage.getItem('count')) + 1;
//     // console.log('count in localStorage add funct = ', localStorage.getItem('count'));
//     localStorage.setItem('count', count);
// }





