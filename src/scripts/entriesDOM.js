const addToDom = {
  renderJournalEntries: journalEntries => {
    // select the article container with the 'entryLog' class
    let entriesContainer = document.querySelector(".entryLog");
    entriesContainer.innerHTML = "";
    // loop through all entries in journalEntries array
    for (let i = 0; i < journalEntries.length; i++) {
      entriesContainer.innerHTML += makeJournalEntryComponent.build(
        journalEntries[i]
      );
    }
  }
};
