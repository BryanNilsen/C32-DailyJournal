/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

// set default date in date picker to today's date
let todaysDate = new Date().toISOString().split("T")[0];
document.querySelector("#journalDate").setAttribute("value", todaysDate);

// show entries button - click to see journal entries
const showEntriesBtn = document.querySelector("#showEntries");
showEntriesBtn.addEventListener("click", () => {
  API.getJournalEntries().then(addToDom.renderJournalEntries);
});

// grab the journal entry submit button and add event listener
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
  event.preventDefault();
  if (checkForm(this)) {
    buildJournalDataFromInput();
  }
});

// grab form input and build journal entry object and post to DB
function buildJournalDataFromInput() {
  const newEntry = {
    date: document.querySelector("#journalDate").value,
    concept: document.querySelector("#journalConcept").value,
    entry: document.querySelector("#journalEntry").value,
    mood: document.querySelector("#journalMood").value
  };
  console.log(newEntry);
  API.postJournalEntry(newEntry);
}

let inputEntry = document.querySelector("#journalEntry");

// FORM VALIDATION
function checkForm(form) {
  // validation fails if the input is blank
  if (form.journalConcept.value == "") {
    alert("Error: Please fill out the Concept field");
    form.journalConcept.focus();
    inputEntry.classList.add("alert");
    return false;
  }

  // validation fails if the input doesn't match our regular expression
  if (!re.test(form.journalConcept.value)) {
    alert("Concept" + charErrors);
    form.journalConcept.focus();
    inputEntry.classList.add("alert");
    return false;
  }

  if (!swearReg.test(form.journalConcept.value)) {
    alert("Concept" + swearErrors);
    form.journalConcept.focus();
    inputEntry.classList.add("alert");
    return false;
  }

  if (form.journalEntry.value == "") {
    alert("Error: Please fill out the Entry field");
    form.journalEntry.focus();
    return false;
  }

  if (!re.test(form.journalEntry.value)) {
    alert("Entry" + charErrors);
    form.journalEntry.focus();
    return false;
  } else {
    // validation was successful
    inputEntry.classList.remove("alert");
    return true;
  }
}
