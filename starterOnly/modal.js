function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelector(".bground");
const modalContent = document.getElementById("modalContent");
const close = document.querySelectorAll(".close");
const form = document.getElementById("form");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioContainer = document.getElementById("radioContainer");
const checkboxOne = document.getElementById("checkbox1");
const formConfirmation = document.getElementById("formConfirmation");
const confirmationBody = document.getElementById("confirmationBody");
const submitButton = document.getElementById("button"); //"c'est parti"
const closeForm = document.getElementById("closeForm"); //"fermer"

//Adjust the top margin of the modal
//Reveal navigation bar in mobile view
modalContent.style.margin = "20% auto";
formConfirmation.style.margin = "20% auto";

/****************************
    Open the Modal
****************************/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  //display the form content
  modalContent.style.display = "block";
  //display the form submission confirmation content
  formConfirmation.style.display = "none";
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
    Add a confirmation
    message for successful
    form submission

    Issue #4
****************************/

//formConfirmation styling
formConfirmation.style.display = "none";
formConfirmation.style.alignItems = "center";
formConfirmation.style.textAlign = "center";
formConfirmation.style.height = "100%";
formConfirmation.style.marginBottom = "90%";

//confirmationBody styling
confirmationBody.style.height = "50%";
confirmationBody.style.flexDirection = "column";
confirmationBody.style.justifyContent = "end";
confirmationBody.style.gap = "10em";

//The function launchConfirmation()
//launches form submission confirmation message and window
function launchConfirmation() {
  formConfirmation.style.display = "flex";
  modalContent.style.display = "none";
  confirmationBody.style.display = "flex";
}

//closeFormConfirmation() event listener
closeForm.addEventListener("click", closeModal);
closeForm.addEventListener("click", closeFormConfirmation);

//The function closeFormConfirmation() closes both the modal and the confirmation window
function closeFormConfirmation() {
  formConfirmation.style.display = "none";
  confirmationBody.style.display = "none";
}
/****************************
    Implement Form Entries
    Issue #2

    Add validation 
    error messages
    Issue #3
****************************/

//The function validFirstName() validates the user first name input against the constant regexFirstName - issue #2
function validFirstName() {
  const regexFirstName = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  if (firstName.value.trim().match(regexFirstName)) {
      firstName.parentElement.setAttribute("data-error-visible", "false");
      console.log("I'm a valid first name!");
      return true;
  }
//firstName.parentElement.setAttribute adds an error message if the first name does not match the regex - issue #3
  firstName.parentElement.setAttribute("data-error-visible", "true");
  firstName.parentElement.setAttribute("data-error", "Veuillez saisir un prénom valide.");
  console.log("I am NOT a valid first name.");
  return false;
}

//The function validLastName() validates the user first name input against the constant regexLastName - issue #2
function validLastName() {
  const regexLastName = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  if (lastName.value.trim().match(regexLastName)) {
      lastName.parentElement.setAttribute("data-error-visible", "false");
      console.log("I'm a valid last name!");
      return true;
  }
//lastName.parentElement.setAttribute adds an error message if the last name does not match the regex - issue #3
  lastName.parentElement.setAttribute("data-error-visible", "true");
  lastName.parentElement.setAttribute("data-error", "Veuillez saisir un nom de famille valide.");
  console.log("I am NOT a valid last name.");
  return false;
}

//The function validEmail() validates the user email input against the constant regexEmail - issue #2
function validEmail() {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().match(regexEmail)) {
      email.parentElement.setAttribute("data-error-visible", "false");
      console.log("I'm a valid email!");
      return true;
  }
//email.parentElement.setAttribute adds an error message if the email does not match the regex - issue #3  
  email.parentElement.setAttribute("data-error-visible", "true");
  email.parentElement.setAttribute("data-error", "Veuillez saisir un email valide.");
  console.log("I am NOT a valid email address.");
  return false;
}

//The function validBirthdate() validates the user birthdate input against the constant regexBirthdate - issue #2
function validBirthdate() {
  const regexBirthdate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  if (birthdate.value.trim().match(regexBirthdate)) {
      birthdate.parentElement.setAttribute("data-error-visible", "false");
      console.log("I'm a valid birthday!");
      return true;
  }
//birthdate.parentElement.setAttribute adds an error message if the birthdate does not match the regex - issue #3  
  birthdate.parentElement.setAttribute("data-error-visible", "true");
  birthdate.parentElement.setAttribute("data-error", "Veuillez saisir une date de naissance valide.");
  console.log("I am NOT a valid birthday.");
  return false;
}

//The function validQuantity() validates the user quantity of tournaments input against the constant regexQuantity - issue #2
function validQuantity() {
  const regexQuantity = /^[1-9]$|^[1-9][0-9]$|^(99)$/;
  if (quantity.value.trim().match(regexQuantity)) {
      quantity.parentElement.setAttribute("data-error-visible", "false");
      console.log("I'm a valid quantity!");
      return true;
  }
//quantity.parentElement.setAttribute adds an error message if the quantity of tournaments does not match the regex - issue #3  
  quantity.parentElement.setAttribute("data-error-visible", "true");
  quantity.parentElement.setAttribute("data-error", "Veuillez saisir une quantité valide.");
  console.log("I am NOT a valid quantity of tournaments.");
  return false;
}

//The function validRadios() validates the user radio button input to verify that a city has been selected - issue #2
function validRadios() {
//const locations retrieves all 6 radio buttons with the name "location" and puts them into a Node List.
  const locations = document.querySelectorAll('input[name="location"]');
//the for...of loop "for (const location of locations)" looks for a radio button with the name "location" in the Node List.
  for (const location of locations) {
//if the first radio button with the name "location" is selected by the user, the function validRadios() returns true
    if (location.checked) {
      radioContainer.setAttribute("data-error-visible", "false");
      console.log("I'm a valid city!");
      return true;
    }
//if the first radio button was not selected by the user, then the "continue" statement breaks one iteration in the for...of loop.
//then, the "continue" statement continues with the next iteration in the for...of loop.
//this iteration continues until either
/////-a CHECKED radio button with the name "location" returns true
/////-OR, until the for...of loop iterates through all 6 radio buttons.
//if at least one of the radio buttons has been selected, the function validRadios() will return true.
    else {
      continue;
    }
  }
//radioContainer.setAttribute adds an error message if none of the radio buttons with the name "location" have been selected - issue #3
  radioContainer.setAttribute("data-error-visible", "true");
  radioContainer.setAttribute("data-error", "Veuillez choisir une ville.");
  console.log("I am NOT a valid city.");
  return false;
}

//The function validCheckbox() validates the user checkbox input to verify that the conditions of use checkbox has been selected - issue #2
function validCheckbox() {
  if (document.getElementById("checkbox1").checked) {
      checkboxOne.parentElement.setAttribute("data-error-visible", "false");
      console.log("I'm a valid checkbox!");
      return true;
  }
//checkboxOne.parentElement.setAttribute adds an error message if the conditions of use checkbox has not been selected - issue #3
  checkboxOne.parentElement.setAttribute("data-error-visible", "true");
  checkboxOne.parentElement.setAttribute("data-error", "Veuillez lire et accepter nos conditions d'utilisation.");
  console.log("I am NOT a valid checkbox.");
  return false;
}

//The function validate() validates all of the form inputs when the user clicks the submit button.
//The form inputs are validated one by one, in the order that they appear in the HTML form.
function validate(){
  event.preventDefault();
  let valid = false;
//The if statement below checks each input validation function to see if it returns true.
//If ALL of the input functions from the form return true, then valid = true.
  if(validFirstName() && 
      validLastName() && 
      validEmail() && 
      validBirthdate() && 
      validQuantity() && 
      validRadios() && 
      validCheckbox()){
    valid = true;
  }
//If valid = true, then the form is valid, and the form validation function validate() returns true.
  if(valid){
    //launch the form confirmation if the form is validated
    launchConfirmation();
    //reset the form input fields if the form is validated
    form.reset();
    console.log("The form has been validated!");
    return true;
  }
//If valid does not = true, then valid continues to = false, and the form validation function validate() returns false.
  else{
    console.log("The form has NOT passed validation.");
    return false;
  }
}

//The three parameters of the function validForm() are element, method, and event.
//The element is the DOM element that has been declared as a constant.
//The method is the function that is being used to validate the corresponding element's user input.
//The event is the focusout event, which fires when an element is about to lose focus.
function validForm(element, method, event) {
//The function executes the event listener "focusout"
  element.addEventListener(event, method);
}
//The function validForm() is called for all of the form entries, except for the radio buttons and checkbox.
//The function validForm() validates each user input field as the "focusout" event is triggered.
validForm(firstName, validFirstName, "focusout");
validForm(lastName, validLastName, "focusout");
validForm(email, validEmail, "focusout");
validForm(birthdate, validBirthdate, "focusout");
validForm(quantity, validQuantity, "focusout");