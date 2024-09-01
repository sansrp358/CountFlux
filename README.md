##CountFlux Project 

--dataset, textContent, setInterval, clearInterval

--used dataset in JS - need to add a property like data-name, data-value to the HTML element

and now for accessing those in jS we can use dataset.value, dataset.name
In JavaScript, dataset is a property of HTML elements that allows you to access and manipulate custom data attributes (data-\*) directly. The dataset property is an object that contains all the custom data attributes of an element.
For data-name, the property is accessed as dataset.name.
eg - <div id="myElement" data-value="123" data-name="example"></div>
const element = document.getElementById('myElement');
console.log(element.dataset.value); // Outputs: "123"
console.log(element.dataset.name); // Outputs: "example"

--textContent is a property of DOM elements that allows you to get or set the text content of an element. It's a straightforward way to manipulate the text inside an HTML element without affecting its HTML structure.

<div id="myElement">Hello, world!</div>

--To get
const element = document.getElementById('myElement');
console.log(element.textContent); // Outputs: "Hello, world!"
--To set
const element = document.getElementById('myElement');
element.textContent = 'New text content';
console.log(element.textContent); // Outputs: "New text content
