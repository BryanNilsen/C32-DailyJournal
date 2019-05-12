function buildJournalForm() {
  // location in html for form output
  const formSection = document.getElementById("inputForm");

  // build form elements
  const journalForm = document.createElement("form");
  setAttributes(journalForm, {
    id: "journalForm"
    // TODO also needs attribute: onsubmit="return checkForm(this)"
  });
  const journalFieldset = document.createElement("fieldset");

  // Date label and input
  const journalDateLabel = document.createElement("label");
  journalDateLabel.setAttribute("for", "journalDate");
  journalDateLabel.textContent = "Date of Entry";
  const journalDateInput = document.createElement("input");
  setAttributes(journalDateInput, {
    id: "journalDate",
    type: "date",
    name: "journalDate",
    required: true
  });

  // set default date in date picker to today's date
  let todaysDate = new Date().toISOString().split("T")[0];
  journalDateInput.setAttribute("value", todaysDate);

  // Concepts label and input
  const journalConceptLabel = document.createElement("label");
  journalConceptLabel.setAttribute("for", "journalConcept");
  journalConceptLabel.textContent = "Concepts Covered";
  const journalConceptInput = document.createElement("input");
  setAttributes(journalConceptInput, {
    id: "journalConcept",
    type: "text",
    name: "journalConcept",
    maxLength: "30",
    required: true
  });
  // check maxLength
  journalConceptInput.addEventListener("keyup", () =>
    maxLengthCheck(journalConceptInput)
  );

  // Journal Entry label and input
  const journalEntryLabel = document.createElement("label");
  journalEntryLabel.setAttribute("for", "journalEntry");
  journalEntryLabel.textContent = "Journal Entry";
  const journalEntryInput = document.createElement("textarea");
  setAttributes(journalEntryInput, {
    id: "journalEntry",
    rows: "4",
    cols: "50",
    name: "journalEntry",
    required: true
  });

  // Journal Mood label and input
  const journalMoodLabel = document.createElement("label");
  journalMoodLabel.setAttribute("for", "journalMood");
  journalMoodLabel.textContent = "Mood for the day";
  const journalMoodInput = document.createElement("select");
  setAttributes(journalMoodInput, {
    id: "journalMood",
    name: "journalMood"
  });

  const journalMoodOptionHappy = document.createElement("option");
  journalMoodOptionHappy.textContent = "happy";
  setAttributes(journalMoodOptionHappy, {
    value: "happy"
  });
  const journalMoodOptionFrustrated = document.createElement("option");
  journalMoodOptionFrustrated.textContent = "frustrated";
  setAttributes(journalMoodOptionFrustrated, {
    value: "frustrated"
  });
  const journalMoodOptionExcited = document.createElement("option");
  journalMoodOptionExcited.textContent = "excited";
  setAttributes(journalMoodOptionExcited, {
    value: "excited"
  });
  // append Date elements
  journalFieldset.appendChild(journalDateLabel);
  journalFieldset.appendChild(journalDateInput);
  // append Concept elements
  journalFieldset.appendChild(journalConceptLabel);
  journalFieldset.appendChild(journalConceptInput);
  // append Entry elements
  journalFieldset.appendChild(journalEntryLabel);
  journalFieldset.appendChild(journalEntryInput);
  // append Mood options to select element
  journalMoodInput.appendChild(journalMoodOptionHappy);
  journalMoodInput.appendChild(journalMoodOptionFrustrated);
  journalMoodInput.appendChild(journalMoodOptionExcited);
  // append Mood elements
  journalFieldset.appendChild(journalMoodLabel);
  journalFieldset.appendChild(journalMoodInput);
  // append Fieldset
  journalForm.appendChild(journalFieldset);
  formSection.appendChild(journalForm);
  // TODO move submit button from index
}

buildJournalForm();

// set multiple attributes to element - (el, { key: "value", ...})
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// check character limit on form input
function maxLengthCheck(input) {
  if (input.value.length == input.maxLength) {
    alert("full");
  } else if (input.value.length == input.maxLength - 5) {
    alert("you have 5 characters left");
  }
}
