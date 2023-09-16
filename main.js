//Object serialization using json to store into local storage

const myForm = document.querySelector('#my-form');
const nameInput = document.getElementById('name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
let count = 0;
myForm.addEventListener('submit', onSubmit);
//to remove the no of count and object after user refreshes the tabe page
localStorage.removeItem('count');
localStorage.removeItem('obj');

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
        // let myobj = {
        //     name: "Pushkar",
        //     age: 30,
        //     job: ['student', 'intern', 'CRE', 'SD'],
        // };
        //this will only add just object in the storage not data
        // console.log(myobj);
        // localStorage.setItem('obj', myobj);
        // console.log(localStorage.getItem('myobj'));

        //this will add  object in the storage as well as data
        // let myobjSerialized = JSON.stringify(myobj);
        // localStorage.setItem('obj', myobjSerialized);
        // console.log(localStorage.getItem('myobjSerialized'));
        //to convert the json back to object for use
        // let myobjDeserialized = JSON.parse(localStorage.getItem('obj'));
        // console.log(myobjDeserialized);

        //to only allow clicks on the submit button and nowhere else

        let obj = {
            name: nameInput.value,
            email: emailInput.value
        };
        console.log(obj);
        let myobjSerialized = JSON.stringify(obj);
        localStorage.setItem('obj', myobjSerialized);

        if (localStorage.getItem('count') == NaN || localStorage.getItem('count') == null) {
            localStorage.setItem('count', 1);
        }
        else {
            addCount();
        }
        console.log('count in localStorage= ', localStorage.getItem('count'));

        nameInput.value = '';
        emailInput.value = '';
    }

}//onSubmit

function addCount() {
    count = parseInt(localStorage.getItem('count')) + 1;
    // console.log('count in localStorage add funct = ', localStorage.getItem('count'));
    localStorage.setItem('count', count);
}





