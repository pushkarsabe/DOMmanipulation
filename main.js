//Object serialization using json to store into local storage

const myForm = document.querySelector('#my-form');
const nameInput = document.getElementById('name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const itemList = document.getElementById('items');
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
        delBtn.setAttribute('value', 'Delete');
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

        //for adding edit button functionality 
        const editBtn = document.createElement('input');
        editBtn.setAttribute('type', 'button');
        editBtn.setAttribute('value', 'Edit');
        editBtn.id = emailInput.value;
        editBtn.setAttribute('onclick', 'editUser(this)');
        li.appendChild(editBtn);
        editBtn.style.margin = '10px';
        editBtn.style.marginLeft = '10px';
        editBtn.style.padding = '5px';
        editBtn.style.fontSize = '15px';
        editBtn.style.backgroundColor = '#333';
        editBtn.style.color = 'white';


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

        nameInput.value = '';
        emailInput.value = '';
    }

}//onSubmit

function editUser(val) {
    //remove user details from local storage and edit the user details

    if (confirm('Are You Sure?')) {
        //userName = {"name":"a","email":"aaa"}
        //to featch name and email 
        let userEmail = val.id;
        let stringJSON = localStorage.getItem(val.id);
        let array = stringJSON.split('"');
        let userName;
        for (let i = 0; i < array.length; i++) {
            // console.log('array has = ' + array[i]);
            if (array[i] == 'name') {
                userName = array[i + 2];
            }
        }
        // console.log('userName = ' + userName);
        // console.log('userEmail = ' + userEmail);

        //this will only remove the user from local and the list
        localStorage.removeItem(val.id);
        let parentEle = document.getElementById(val.id).parentElement;
        userList.removeChild(parentEle);

        //to edit the user details
        nameInput.value = userName;
        emailInput.value = userEmail;
    }
}

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






