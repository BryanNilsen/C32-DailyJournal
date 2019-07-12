// Replace the code in src/scripts/data.js with the code below. Since you moved the code to this file, you should consider this file an independent, helper module now. It should not directly execute any logic for the application. The responsbility for how the application should operate should reside in src/scripts/journal.js now.

// The code in the data.js module, then, should only define functionality for how to access the data, but should not immediately run it.

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  },
  postJournalEntry(journalEntry) {
    return fetch("http://localhost:3000/entries", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalEntry)
    });
  }
};
