/* task 1
1. Use querySelectorAll() to select all elements with the class item.
2. Change the second item’s text to "Updated Item 2".
3. Print the NodeList of items using console.log( ).
*/

// solution
 const listItems = document.querySelectorAll(".item");
 const liItems = document.querySelectorAll(".items")
 
 liItems.textContent = "Updated Item 2";
 console.log(liItems);
 
 console.log(listItems);
 
 

 /* task 2
 
 1. Use JavaScript to select all elements with the class box using getElementsByClassName().

2. Change the background color of the second box to "yellow".

3. Print the collection of elements using console.log( ).
 
 */

// solution
const Boxes = document.getElementsByClassName("box");
const Box = document.getElementById("Box");

Box.style.backgroundColor ="yellow";
console.log(Boxes);


/* task 3
1. Use JavaScript to select all <p> elements using getElementsByTagName( ).
2.Change the content of the first paragraph to "This is the updated paragraph 1".
3. Print the <p> elements collection using console.log( ).
*/

// solution
const paragraph = document.getElementsByTagName("p");
const paragraph1 = document.getElementById("paragraph1")

paragraph1.textContent = "This is the updated paragraph 1"
console.log(paragraph);


/* task 4
1. Use JavaScript to select the <h2> element using querySelector() with the class .header.
2. Change its content to "Welcome to FiTech!".
3. Print the selected element using console.log( ).
*/
// solution
const header = document.querySelector(".header");

header.textContent = "Welcome to Fitech";
console.log(header);



/* task 5
1. Use JavaScript to select the button using getElementById( ).
2. Add a click event listener that changes the button text to "Button Clicked!" when clicked.
3. Print "Button was clicked" inside the event handler using console.log( ).
*/
// solution
const Button = document.getElementById("bttn");

Button.addEventListener("click", function(){
    Button.textContent = "Button Clicked";
    console.log("Button was clicked");
    

});
 


/* task 6
1. Use JavaScript to select the <img> element using getElementById( ).
2. Add a title attribute with the value "Bootcamp Image".
3. Print the <img> element using console.log( ).
*/
//  solution
const PicImg = document.getElementById("PicImg");


PicImg.setAttribute("title", "Bootcamp Image")
console.log(PicImg.getAttribute("title"));


/* task 7
1. Use querySelector() to select the input field with the class user-input.
2. Add a keydown event listener that prints "Key pressed" whenever a key is pressed.
3. Also print the current value of the input field using console.log() inside the event handler.
*/
// solution
const inpType = document.querySelector(".user-input");



inpType.addEventListener("keydown", function(){
    console.log("key pressed");
    console.log(inpType.value);
    
    
})

/* task 8
1. Use JavaScript to select the <h1> element using getElementById( )

2. Change the content to "DOM Manipulation is Amazing!".

3. Print the modified element using console.log( )
*/
// solution
 const heading = document.getElementById("welcome-message");

 heading.textContent = "Dom Manipulation is amazing";
 console.log(heading.textContent);

 /* task 9
 1. Select the <div> element using getElementById().
2. Change its width to 200px and background color to "green".
3. Print the modified element using console.log( ).
 */
//  solution
const divBox = document.getElementById("dynamic-box") 

divBox.style.width = "200px";
divBox.style.backgroundColor = "green";

console.log(divBox.style.width);
console.log(divBox.style.backgroundColor);

/* task 10
1. Use JavaScript to select the <a> element using getElementById( ).
2. Retrieve the value of the href attribute using getAttribute( ).
3. Print the value of the href attribute using console.log( )
*/
// solution
const anchLink = document.getElementById("github-link");

const href= anchLink.getAttribute('href');
console.log(href);

