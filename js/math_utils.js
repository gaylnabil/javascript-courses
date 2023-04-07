const PI = Math.PI;

const getCircumference = (radius) => {
  return (2 * PI * radius).toFixed(2);
};

const getArea = (radius) => {
  return (2 * PI * Math.pow(radius, 2)).toFixed(2);
};

export { PI, getCircumference, getArea };

/*********************************
 * DOM = Document Object Module, it's an (API)
 *       An interface for changing the content of page.
 *
 *      add/change HTL elements
 *      .innerHTML = vulnerable to XSS attacks
 *      .textContext = more secure
 *
 * */

// get <ul></ul> tag with id="fruit"
const fruitList = document.querySelector("#fruits");
console.log(fruitList);

// Create <li></li> tag
const listItem = document.createElement("li");
listItem.textContent = "Banana";

// insert <li></li> created in the <ul></ul> tag
console.log(fruitList.lastElementChild);
fruitList.insertBefore(listItem, fruitList.lastElementChild);

listItem.style.backgroundColor = "rgba(60,60,255)";
listItem.style.fontFamily = "Fira Code";
listItem.style.border = "2px solid #990000";
