let output;

// get child elements
const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// get parent elements (from a child)
const child = document.querySelector('.child');

output = child.parentElement; // div.parent
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem; // div.child
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);
