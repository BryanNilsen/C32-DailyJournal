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
  } else {
    alert("please complete form or fix errors.");
  }
});

// grab text inputs
const inputEntry = document.querySelector("#journalEntry");
const inputConcept = document.querySelector("#journalConcept");

// validate text inputs
function validateInputs(input) {
  input.addEventListener("keyup", () => {
    console.log(input.value);
    if (input.value == "") {
      alert("Error: Please fill out the text field");
      input.focus();
      input.classList.add("alert");
      submitBtn.classList.add("btn_disabled");
      return false;
    }
    if (!charRegex.test(input.value)) {
      alert(charErrors);
      input.focus();
      input.classList.add("alert");
      submitBtn.classList.add("btn_disabled");
      return false;
    }
    if (!swearRegEx.test(input.value)) {
      alert(swearErrors);
      input.focus();
      input.classList.add("alert");
      submitBtn.classList.add("btn_disabled");
      return false;
    } else {
      return true;
    }
  });
}

validateInputs(inputConcept);
validateInputs(inputEntry);

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

// FORM VALIDATION
function checkForm(form) {
  // validation fails if concept input is blank
  if (form.journalConcept.value == "") {
    alert("Error: Please fill out the Concept field");
    form.journalConcept.focus();
    form.journalConcept.classList.add("alert");
    submitBtn.classList.add("btn_disabled");
    return false;
  }
  if (!charRegex.test(form.journalConcept.value)) {
    alert(charErrors);
    form.journalConcept.focus();
    form.journalConcept.classList.add("alert");
    submitBtn.classList.add("btn_disabled");
    return false;
  }
  // validation fails if entry form.journalConcept is blank
  if (form.journalEntry.value == "") {
    alert("Error: Please fill out the Entry field");
    form.journalEntry.focus();
    inputEntry.classList.add("alert");
    submitBtn.classList.add("btn_disabled");
    return false;
  } else {
    return true;
  }
}
