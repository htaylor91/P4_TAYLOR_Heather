function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/****************************
    Close the Modal
    Issue #1
****************************/

//close modal event listener
close.forEach((close) => close.addEventListener("click", closeModal));

//close modal function
function closeModal() {
  modalbg.style.display = "none";
}

/****************************
    Implement Form Entries
    Issue #2

    Add validation 
    error messages
    Issue #3
****************************/

//The function validFirstName validates the user first name input against the constant regexFirstName - issue #2
function validFirstName() {
  const regexFirstName = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  if (firstName.value.trim().match(regexFirstName)) {
      firstName.parentElement.setAttribute('data-error-visible', 'false');
      console.log("I'm a valid first name!");
      return true;
  }
//firstName.parentElement.setAttribute adds an error message if the first name does not match the regex - issue #3
  firstName.parentElement.setAttribute('data-error-visible', 'true');
  firstName.parentElement.setAttribute("data-error", "Veuillez saisir un prénom valide.");
  console.log("I am NOT a valid first name.");
  return false;
}

//The function validLastName validates the user first name input against the constant regexLastName - issue #2
function validLastName() {
  const regexLastName = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  if (lastName.value.trim().match(regexLastName)) {
      lastName.parentElement.setAttribute('data-error-visible', 'false');
      console.log("I'm a valid last name!");
      return true;
  }
//lastName.parentElement.setAttribute adds an error message if the last name does not match the regex - issue #3
  lastName.parentElement.setAttribute('data-error-visible', 'true');
  lastName.parentElement.setAttribute("data-error", "Veuillez saisir un nom de famille valide.");
  console.log("I am NOT a valid last name.");
  return false;
}

//The function validEmail validates the user email input against the constant regexEmail - issue #2
function validEmail() {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().match(regexEmail)) {
      email.parentElement.setAttribute('data-error-visible', 'false');
      console.log("I'm a valid email!");
      return true;
  }
//email.parentElement.setAttribute adds an error message if the email does not match the regex - issue #3  
  email.parentElement.setAttribute('data-error-visible', 'true');
  email.parentElement.setAttribute("data-error", "Veuillez saisir un email valide.");
  console.log("I am NOT a valid email address.");
  return false;
}

//The function validBirthdate validates the user birthdate input against the constant regexBirthdate - issue #2
function validBirthdate() {
  const regexBirthdate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  if (birthdate.value.trim().match(regexBirthdate)) {
      birthdate.parentElement.setAttribute('data-error-visible', 'false');
      console.log("I'm a valid birthday!");
      return true;
  }
//birthdate.parentElement.setAttribute adds an error message if the birthdate does not match the regex - issue #3  
  birthdate.parentElement.setAttribute('data-error-visible', 'true');
  birthdate.parentElement.setAttribute("data-error", "Veuillez saisir une date de naissance valide.");
  console.log("I am NOT a valid birthday.");
  return false;
}

//The function validQuantity validates the user quantity of tournaments input against the constant regexQuantity - issue #2
function validQuantity() {
  const regexQuantity = /^[1-9]$|^[1-9][0-9]$|^(99)$/;
  if (quantity.value.trim().match(regexQuantity)) {
      quantity.parentElement.setAttribute('data-error-visible', 'false');
      console.log("I'm a valid quantity!");
      return true;
  }
//quantity.parentElement.setAttribute adds an error message if the quantity of tournaments does not match the regex - issue #3  
  quantity.parentElement.setAttribute('data-error-visible', 'true');
  quantity.parentElement.setAttribute("data-error", "Veuillez saisir une quantité valide.");
  console.log("I am NOT a valid quantity of tournaments.");
  return false;
}


//The function validForm validates each input field as the user exists the input field with the event listener "focusout"
//Error messages appear underneath each input, if the input does not match the regex rules when the user leaves the input field.
function validForm(element, method, event) {
  element.addEventListener(event, method);
}
validForm(firstName, validFirstName, "focusout");
validForm(lastName, validLastName, "focusout");
validForm(email, validEmail, "focusout");
validForm(birthdate, validBirthdate, "focusout");
validForm(quantity, validQuantity, "focusout");