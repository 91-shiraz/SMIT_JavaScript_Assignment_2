//Q1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

// function addNumber(num){

//     return function(innerNum){
//         return num + innerNum
//     }
// }

// let add = addNumber(5);

// console.log(add(10));
// console.log(add(20));

//Q2.Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

// let find_Array_Value = (arr,val) =>{

//     if (arr.length==0){
//         return false;
//     }
//     if(arr[0]==val){
//         return true;
//     }
//     return find_Array_Value(arr.slice(1),val);
// }

// let myArray = [1,2,3,4,5,6,7,8,9];

// console.log(find_Array_Value(myArray, 5));
// console.log(find_Array_Value(myArray, 10));

//Q3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

// let addParagraph =(text)=>{
//     let inp = prompt("Enter Data")
//     let data= document.querySelector('p')
//     data.append(inp);
//     document.getElementById("myPara").append(data)
// }
// Function call through the HTML Button

//Q4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

// let addListItem =()=> {
//     let inpData = prompt("Enter List")
//     let ul = document.getElementById("ul"),
//     list = document.createElement('li'),
//     txt = document.createTextNode (inpData);
//     list.appendChild(txt)
//     ul.appendChild(list)
// }
// Function call through the HTML Button

//Q5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

// let changeBackgroundColor = (newColor)=>{
//     document.getElementById('myDiv').style.backgroundColor=newColor;
// }
// changeBackgroundColor("red");

//Q6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

// let myObject = {
//     name : "Shiraz",
//     age : "22",
//     Skills : "Front-End Development"
// }

// let saveObjectToLocalStorage = (key, object)=>{

//     localStorage.setItem(key, JSON.stringify(object));

// }
// saveObjectToLocalStorage("myKey", myObject);
// console.log(myObject)

//Q7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

// let getObjectFromLocalStorage=(keys)=>{

//     let getObjectValue = localStorage.getItem(keys)
//     return getObjectValue ? JSON.parse(getObjectValue) : null;
// }

// let getObject = getObjectFromLocalStorage('myKey');
// console.log(getObject)

//Q8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

// let myObbject = {
//   myName: prompt("Enter Name"),
//   myAge: Number(prompt("Enter Age"))
// };

// let saveDataToLocalStorage = (obj) => {
//   for (let keyy in obj) {
//     localStorage.setItem(keyy, JSON.stringify(obj[keyy]));
//   }
//   let newObject = {};
//   for (let i = 0; i < localStorage.length; i++) {
//     const keyy = localStorage.key(i);
//     newObject[keyy] = JSON.parse(localStorage.getItem(keyy));
//   }
//   return newObject;
// };

// let savedObject = saveDataToLocalStorage(myObbject);
// console.log(savedObject);
