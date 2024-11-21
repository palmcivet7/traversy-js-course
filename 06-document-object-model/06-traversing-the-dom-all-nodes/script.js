let output;

const parent = document.querySelector('.parent');

output = parent.childNodes; // NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]
output = parent.childNodes[0].textContent; //
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3].textContent; // Child 1
output = parent.childNodes[3].outerHTML; // <div class="child">Child 1</div>
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild; // #text
output = parent.lastChild; // #text

parent.lastChild.textContent = 'Hello';

// parent node
const child = document.querySelector('.child');
output = child.parentNode; // div.parent
output = child.parentElement; // div.parent

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem; // div.child
output = secondItem.nextSibling; // #text
output = secondItem.previousSibling; // #text

console.log(output);
