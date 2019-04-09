/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
  date: "04/08/2019",
  concept: "javascript",
  entry: "added my first journal entry",
  mood: "happy"
};
const journalEntry2 = {
  date: "04/09/2019",
  concept: "javascript",
  entry: "added my second journal entry",
  mood: "happy"
};
const journalEntry3 = {
  date: "04/10/2019",
  concept: "javascript",
  entry: "added my third journal entry",
  mood: "happy"
};

// create empty array to contain journal entries
let journalEntries = [];

// push new entries into the journalEntries array
journalEntries.push(journalEntry1, journalEntry2, journalEntry3);
console.log(`Journal Entries:`, journalEntries);
