/* Create an object with three items in it, then write a JavaScript function that accepts
 an object and tells you the length (tells you how many items are in it) of the object.*/

 // Create an object with three items in it
 const carInfo = {
    make: "Ferrari",
    model: "Portofino",
    fuel: "Petrol"
 };

 // Write a function with a obj parameter
 function numOfItems(obj) {

 //return length of object    
    return Object.keys(obj).length;
 }

 console.log("This object has " + numOfItems(carInfo) + " items in it.");