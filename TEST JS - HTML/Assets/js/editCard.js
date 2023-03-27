// we add an event listener to all the pencil icons
function addEditFunctionality(rowElement, contactsList) {
  $(document).on("click", ".pencil-icon", function () {
    const cardId = this.getAttribute("data-contact-id");
    const contact = contactsList.filter(
      (contact) => parseInt(contact.id) === parseInt(cardId)
    );
    const popupForm = document.getElementById("popup-form");
    const popupDiv = document.getElementById("add-contact-wrapper");

    popupForm.style.display = "block";
    popupDiv.style.display = "none";

    // getting the form input elements
    const contactToEdit = contact[0];
    const contactName = document.getElementById("contactName");
    contactName.setAttribute("data-contact-id", contact[0].id);

    const contactAddress = document.getElementById("contactAddress");
    // const email = document.getElementById("email");
    const companyName = document.getElementById("companyName");
    const companyAddress_1 = document.getElementById("companyAddress_1");
    const companyAddress_2 = document.getElementById("companyAddress_2");
    const telephone = document.getElementById("telephone");
    const contactJobTitle = document.getElementById("contactJobTitle");

    // inserting the values to edit in the form
    contactName.value = contactToEdit.contact_name;
    contactAddress.value = contactToEdit.contact_address;
    // email.value = contactToEdit.
    companyName.value = contactToEdit.work_place;
    companyAddress_1.value = contactToEdit.work_address_line_1;
    companyAddress_2.value = contactToEdit.work_address_line_2;
    telephone.value = contactToEdit.contact_phone;
    contactJobTitle.value = contactToEdit.contact_job_title;

    const popupBtn = document.getElementById("popup-btn");

    // add contact toggler
    popupBtn.addEventListener("click", () => {
      popupForm.style.display = "block";
      popupDiv.style.display = "none";
    });
  });
}
