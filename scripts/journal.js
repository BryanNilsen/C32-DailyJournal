// learning objective in this chapter is to set up JSON Server to store data for daily journal entries, query data from the API, and then use your knowledge of Promises (remember, fetch is a fancy Promise) and then() to render the entries to the DOM.

// Create a new directory in your project named api, and create a new file in that directory named entries.json.

// Next step is to remove the array of entries that you have in journal.js, and transplant it to api/entries.json as a JSON object.

// Refactor: At this point, the journalEntries array should be completely removed from your JavaScript. You are now going to get the data from your API server.

fetch("http://localhost:3000/entries") // Fetch from the API
  .then(response => response.json()) // Parse as JSON
  .then(entries => {
    // render the journal entries to the DOM
    renderJournalEntries(entries);
  });

const makeJournalEntryComponent = journalEntry => {
  // Create HTML structure for a journal entry
  return `
  <div class="entry">
    <h1>Concept: ${journalEntry.concept}</h1>
    <h3>Date: ${journalEntry.date}</h3>
    <h3>Mood: ${journalEntry.mood}</h3>
    <p>Entry: ${journalEntry.entry}</p>
  </div>
  `;
};

// render all journal entry objects to the DOM

const renderJournalEntries = journalEntries => {
  // select the article container with the 'entryLog' class
  let entriesContainer = document.querySelector(".entryLog");
  // loop through all entries in journalEntries array
  for (let i = 0; i < journalEntries.length; i++) {
    entriesContainer.innerHTML += makeJournalEntryComponent(journalEntries[i]);
  }
};
