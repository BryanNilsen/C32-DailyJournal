// add journal entry objects to array
let journalEntries = [
  {
    date: "04/08/2019",
    concept: "javascript",
    entry: "added my first journal entry",
    mood: "happy"
  },
  {
    date: "04/09/2019",
    concept: "javascript",
    entry: "added my second journal entry",
    mood: "happy"
  },
  {
    date: "04/10/2019",
    concept: "javascript",
    entry: "added my third journal entry",
    mood: "happy"
  }
];

// Journal Entries in the DOM
// The last step in this chapter is to take your raw data structures, and create HTML representations of them so they can be added to the DOM.

// Journal Entry Component Function
// You've worked on exercises in which you wrote functions that returned HTML components. Now write a function that builds a journal entry HTML string template.

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

// Invoke the render function
renderJournalEntries(journalEntries);
