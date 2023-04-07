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

/*********************************
 * addEventListener(event, listener, useCapture) = You can add many event
 *                 handlers to one element.
 *                 Even the same event that invokes different functions.
 *
 * */

const outerContent = document.getElementById("outer-content");
const innerContent = document.getElementById("inner-content");

innerContent.addEventListener("mouseover", function () {
  innerContent.style.backgroundColor = "Orange";
});

innerContent.addEventListener("mouseout", function () {
  innerContent.style.backgroundColor = "lightgreen";
});

const changeColor = function () {
  alert(`Change color for DIV: ${this.id}`);
  this.style.backgroundColor = "red";
};

outerContent.addEventListener("click", changeColor, true);

innerContent.addEventListener("click", changeColor);

/*********************************
 * window = interface used to talk to the web browser.
 *          DOM is a property of the window
 * */
console.log("*************************");
console.log("window.innerWidth = " + window.innerWidth);
console.log("window.innerHeight = " + window.innerHeight);

console.log("window.outerWidth = " + window.outerWidth);
console.log("window.outerHeight = " + window.outerHeight);

console.log("window.location.href = " + window.location.href);
console.log("window.location.hostname = " + window.location.hostname);
console.log("window.location.pathname = " + window.location.pathname);

const btnRole = document.querySelector("#btn-role");

btnRole.addEventListener("click", () => {
  window.open("https://google.com"); // open a new tab in the browser
  // window.close(); // close current tab
});

/*********************************
 * cookies = a small text file stored on your computer used
 *           to remember information about the user saved
 *           in name=value pairs
 * */

console.log("navigator.cookieEnabled:", navigator.cookieEnabled);

// add Cookies Manually
document.cookie =
  "firstName=Nabil; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/";
document.cookie =
  "lastName=GAYL; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/";

// add Cookies generally
const setCookie = (name, value, numberOfDay, path = "/") => {
  const date = new Date();
  date.setTime(date.getTime() + numberOfDay * 1000 * 60 * 60 * 24);
  let expires = date.toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
};

setCookie("email", "gaylnabil@gmail.com", 356, "/");
document.cookie = "";
console.log("document.cookie:", document.cookie);

// get value of the cookie
const getCookie = (name) => {
  const cookieDecode = decodeURIComponent(document.cookie);

  const cookieArray = cookieDecode.split("; ");
  console.log("cookieArray:", cookieArray);

  let value = null;

  cookieArray.forEach((element, index, array) => {
    if (element.indexOf(name) === 0) {
      value = element.substring(name.length + 1);
    }
  });

  return value;
};

const email = getCookie("email");
console.log("get email from the Cookie:", email);

// delete cookie
const deleteCookie = (name) => {
  setCookie(name, null, null, null);
};

// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");

// get Cookies from DOM

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const btnAddCookie = document.querySelector("#btn-add-cookie");
const btnGetCookie = document.querySelector("#btn-get-cookie");
const btnDeleteCookie = document.querySelector("#btn-delete-cookie");
const btnClear = document.querySelector("#btn-clear");
const alertDiv = document.querySelector("#alert-message");

btnAddCookie.addEventListener("click", () => {
  console.log("btnAddCookie:", firstName.name, "=", firstName.value);
  console.log("btnAddCookie:", lastName.name, "=", lastName.value);

  setCookie(firstName.name, firstName.value, 356, "/");
  setCookie(lastName.name, lastName.value, 356, "/");
});

btnGetCookie.addEventListener("click", () => {
  firstName.value = getCookie(firstName.name);
  lastName.value = getCookie(lastName.name);
});

btnDeleteCookie.addEventListener("click", () => {
  deleteCookie(firstName.name);
  deleteCookie(lastName.name);
});

btnClear.addEventListener("click", () => {
  firstName.value = lastName.value = "";
});
