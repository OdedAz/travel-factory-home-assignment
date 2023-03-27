async function renderContacts() {
  // fetch all contacts from DB
  const contactsList = await fetch("http://localhost:3001/contacts/get_all")
    .then((response) => response.json())
    .then((contacts) => {
      // Process the contacts data
      return contacts;
    })
    .catch((error) => {
      console.error("Error fetching contacts:", error);
    });
  const listContainer = document.getElementById("main-container");
  const rowElement = document.createElement("div");
  rowElement.classList.add("row", "flex-row");
  listContainer.appendChild(rowElement);
  // we loop throw all the contacts and for each contact we build an html
  createAllCards(contactsList, rowElement);
  addEditFunctionality(contactsList)
  // we create the contact form so we can add/edit a contact
  createContactForm(rowElement);
  addSubmitFormEvent()
}

renderContacts();
