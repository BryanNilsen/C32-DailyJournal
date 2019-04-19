/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

const showEntriesBtn = document.querySelector("#showEntries");
showEntriesBtn.addEventListener("click", () => {
  API.getJournalEntries().then(addToDom.renderJournalEntries);
});

// grab the submit button and add event listener
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => buildJournalDataFromInput());

function buildJournalDataFromInput() {
  const newEntry = {
    date: document.querySelector("#journalDate").value,
    concept: document.querySelector("#journalConcept").value,
    entry: document.querySelector("#journalEntry").value,
    mood: document.querySelector("#journalMood").value
  };
  API.postJournalEntry(newEntry);
}
