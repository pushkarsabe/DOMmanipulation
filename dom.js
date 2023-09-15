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

// //dom Manipulating 
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

// let item = document.getElementsByClassName('list-group-item');
// console.log(item);

//question 2 -  Watch uptill the 17th min
// Watch uptill 23min - Make the title have a black border as the youtuber does
// Now make ADD ITEM bold and chage the font color to greeen

let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

document.getElementById('headtitle').innerHTML = '<h1 id="test">Add Items</h1>'
document.getElementById('test').style.color= 'green';
