const makeJournalEntryComponent = {
  build: journalEntry => {
    // Create HTML structure for a journal entry
    return `
  <div class="entry">
    <h1>Concept: ${journalEntry.concept}</h1>
    <h3>Date: ${journalEntry.date}</h3>
    <h3>Mood: ${journalEntry.mood}</h3>
    <p>Entry: ${journalEntry.entry}</p>
  </div>
  `;
  }
};
