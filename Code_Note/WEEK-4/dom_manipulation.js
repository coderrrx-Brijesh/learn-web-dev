/*                          DOCUMENT OBJECT MODULE
1.When we convert a html code into js object then that object is said to be a document.
                          [[HTML CODE-->JS OBJECT]-->DOCUMENT]->DOM
2.DOM is tree node like structure where each node is a tag, structured in a parent child tag stucture.
3.BOM refers to body object module that keep all things that interact with browser.
4.Window is a global object that comes on top. all the other object comes under this object. For Example
DOM, BOM, JS core features.

Basicly it is a way to manipulate css and html code using js code and logic
*/
                                        // ****HTML MANIPULATION****
//A. Fetching of the elements
// 1.getElementBy________->Get all elements with same id,class,tag in a array 
document.getElementById('#id_name')
document.getElementsByTagName('tag_name')
document.getElementsByClassName('.class_name')
// 2.querySelector
document.querySelector('tag_name or .class_name or #id_name')/*returns first matched*/ 
document.querySelectorAll('tag_name or class_name or #id_name')/*returns an array of that type*/ 


// B.Update html content
let button=document.getElementById('id__name')
button.innerHTML//->return inner child tags inside that elements
button.innerHTML='<p>Hello bro!</p>'//->set the inner html child tags to the given tag info
button.innerText//->return text as visible on page
button.textContent//-?return text as return in html code

// C.Add elements
let heading=document.createElement('h1')
fheading.textContent="Hello Bro!"
let bodyTag=document.querySelector('body')
bodyTag.appendChild(heading)//->add elemnts at the end of the body tag or given tag

// Create a new element
var newElement = document.createElement("div");
newElement.textContent = "Welcome to CodeHelp";

// Get the reference to the existing element
var existingElement = document.getElementById("existingElement");

// Insert the new element before after or at specific position of the existing element
existingElement.insertAdjacentElement('beforebegin', newElement);
existingElement.insertAdjacentElement('afterbegin', newElement);
existingElement.insertAdjacentElement('beforeend', newElement);
existingElement.insertAdjacentElement('afterend', newElement);

                                // ****CSS MANIPULATION****
// Accessing an element
const element = document.getElementById("myElement");

// Setting a style property
element.style.property = "value";//->SYNTTAX FOR CSS MANIPULATION USING CSS

// Getting a style property
const propertyValue = element.style.property;

// 1.Modifying Individual Properties
// We can manipulate various style properties individually using the style method. But this method only change one peoperty at a time
// For Example :
element.style.color = "blue";
element.style.fontSize = "20px";


// 2.The cssText is similar to the style method but the only difference is, using cssText we can
//  handle multiple CSS properties in single string. The basic syntax
//  involves accessing an element's style property and setting or getting its cssText property.
// Accessing an element
const element = document.getElementById("myElement");
// Setting cssText property
element.style.cssText = "property1: value1; property2: value2;";
// Select the element
const element = document.getElementById('exampleElement');
// Modify its CSS properties using cssText
element.style.cssText = 'color: blue; font-size: 18px; background-color: green;';
// Getting cssText property
const currentStyles = element.style.cssText;


// 3.CLASS NAME 
//Get the element from the HTML DOM using 'getElementById' method
let myElement = document.getElementById("babbar");
//Now we can add multiple class names to it if there is no class
myElement.className += 'class1 class3'
//We can also replace an existing class with a new class
myElement.classList = myElement.className.replace("class1", 'class2');
console.log(myElement);

// 4.CLASS LIST
//Get the element from the HTML DOM using 'getElementById' method
let myElement = document.getElementById("babbar");
//Print all the classes using 'classList' method
let existingClasses = myElement.classList;
console.log(existingClasses);
/* OUTPUT : 
DOMTokenList(3) ['class1', 'class2', 'class3', value: 'class1 class2 class3']
  0: "class1"
  1: "class2"
  2: "class3"
  length: 3
  value: "class1 class2 class3"
  [[Prototype]]: DOMTokenList
*/

//We can add new classes
myElement.classList.add('class4');

//We can remove the existing class
myElement.classList.remove('class2');
console.log(myElement);

//We can check if the specific classname is present of not
let isPresent = myElement.classList.contains('class2');
console.log(isPresent); //False

//We can also toggle the classes
myElement.classList.toggle('class5');

