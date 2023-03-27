function createContactForm(rowElement, contactToEdit) {
  // we build the contact form
  const contactForm = document.createElement("div");
  // we add to the form classes attributes
  contactForm.classList.add(
    "contact-form",
    "col-lg-4",
    "col-md-6",
    "col-sm-12",
    "flex-column"
  );
  // we build the form html
  contactForm.innerHTML = `<div id="popup-form">
    <form>
        <label for="contactName">Contact Name:</label>
        <input type="text" id="contactName" name="contactName"><br>

        <label for="contactAddress">Contact Address:</label>
        <input type="text" id="contactAddress" name="contactAddress"><br>

        <label for="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName"><br>

        <label for="companyAddress_1">Company Address:</label>
        <input type="text" id="companyAddress_1" name="companyAddress_1"><br>

        <label for="companyAddress_2">Company Address:</label>
        <input type="text" id="companyAddress_2" name="companyAddress_2"><br>

        <label for="telephone">Telephone:</label>
        <input id="telephone" name="telephone"></input><br>

        <label for="contactJobTitle">Contact Job Title:</label>
        <input id="contactJobTitle" name="contactJobTitle"></input><br>
        
        <button type="submit">Send</button>
        <button type="cancel" id="cancel">Cancel</button>
    </form>
    </div>`;
  // we insert the form in to the row
  rowElement.appendChild(contactForm);

  const popupBtn = document.getElementById("popup-btn");
  const CancelBtn = document.getElementById("cancel-btn");
  const popupForm = document.getElementById("popup-form");
  const popupDiv = document.getElementById("add-contact-wrapper");
  // add contact toggler
  popupBtn.addEventListener("click", () => {
    popupForm.style.display = "block";
    popupDiv.style.display = "none";
  });
  // cancel btn logic
  if(CancelBtn) {
    CancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      popupForm.style.display = "block";
      popupDiv.style.display = "none";
      CancelBtn = false;
    });
  }
}
