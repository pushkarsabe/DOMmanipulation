// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'Item Listener';

// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);

// // document.all[10].textContent ='123';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

<<<<<<< HEAD
// //dom Manipulating 
=======
// //dom Manipulating
>>>>>>> 37d6dde (Question 4)
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
//innerText pays attention to the styles and textContent doesen't

//style change
// let headerTitle = document.getElementById('header-title');
// headerTitle.style.borderBottom = 'solid 3px #000';

// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

<<<<<<< HEAD
// let item = document.getElementsByClassName('list-group-item');
// console.log(item);

//question 2 -  Watch uptill the 17th min
// Watch uptill 23min - Make the title have a black border as the youtuber does
// Now make ADD ITEM bold and chage the font color to greeen

let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

document.getElementById('headtitle').innerHTML = '<h1 id="test">Add Items</h1>'
document.getElementById('test').style.color= 'green';
=======
//question 4 -  Follow the youtber uptill the 27th min
// Write the code as per the youtuber does
// Make the 3 rd element in the list have green background color
// Make all the elements in the list have bold color font

// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// document.getElementById('headtitle').innerHTML = '<h1 id="test">Add Items</h1>'
// document.getElementById('test').style.color= 'green';

// let item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent = 'hello';
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'yellow';

// item.style.backgroundColor = 'red'; // can not apply becuase the item is array of collections

// for(let i =0; i< item.length; i++){
//     item[i].style.backgroundColor = 'red';
//     item[i].style.color = 'white';
// }

let item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor = 'green';
for(let i =0; i< item.length; i++){
    item[i].style.fontWeight = 'bold';
}
>>>>>>> 37d6dde (Question 4)