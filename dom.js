<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
let listItem = document.getElementsByTagName('li');
console.log(listItem);
// listItem[0].style.fontSize = '25px';

// let list = document.getElementsByClassName('#list-group-item');
// console.log(list);


//QuerySeelector
// let header = document.querySelector('#main-header');
// console.log(header);
// header.style.border = 'solid 4px black';
// let input = document.querySelector('input');
// input.value = 'enter items';
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';
>>>>>>> 894a68a (Question 5)
=======
//QuerySelector
// let header = document.querySelector('#main-header');
// console.log(header);
// header.style.border = 'solid 4px black';

// let input = document.querySelector('input');
// input.value = 'enter items';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// let items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//Continue watching the video from 30th min uptill 37th min
// Make the 2nd item have green background color
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// Make the 3rd item invisible
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = "hidden";


//QuerySeelectorAll - returns node list and can use array functions
// let titles = document.querySelectorAll('.title')
// console.log(titles);

// titles[0].textContent = 'Hello';
// titles[1].textContent = 'There';

// //to select and modify all odd childs
// let odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// //to select and modify all even childs
// let even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = '#f4f4f4';
// }

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
let secondItem = document.querySelectorAll('li');
console.log(secondItem);
secondItem[1].style.color = 'green';
// Choose all the odd elements and make their background green using QuerySelectorALL﻿
let odd = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}
>>>>>>> d3465c2 (Question 6)
=======
// TRAVERSING THE DOM 
let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]); itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstchild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling 
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement
// Create a div
let newDiv = document.createElement('div');
// Add class
newDiv.className= 'hello';
// Add id newDiv.id = 'hello1';
console.log(newDiv);
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node 
let newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);
let container = document.querySelector('header .container'); let h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);  
>>>>>>> 120196a (Question 7)
