function addSubmitFormEvent() {
  // submitting form function
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {contact, contactId} = getFormContact();

    // submitting form
    if ((!contact.contact_name || !contact.contact_phone) && CancelBtn) {
      alert("the fields email, phone, name must be full");
      return;
    }
    function validatePhoneNumber(phoneNumber) {
      const regex = /^[+()0-9\s-]*$/;
      return regex.test(phoneNumber);
    }
    const phoneValidated = validatePhoneNumber(contact.contact_phone);
    if (!phoneValidated)
      alert(
        "the phone field accept only numbers,+,(,) please type the correct number"
      );
    // making Ajax request to post the new contact to the server
    const xhr = new XMLHttpRequest();
    let url = "";
    let requestType = "";
    
    if (contactId) {
      url = "http://localhost:3001/contacts/update";
      requestType = "PATCH";
      contact.id = contactId;
    } else {
      url = "http://localhost:3001/contacts/create";
      requestType = "POST";
    }
    xhr.open(requestType, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log(xhr.response);
      } else {
        console.error(xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Error making the request.");
    };
    xhr.send(JSON.stringify(contact));
    const popupForm = document.getElementById("popup-form");
    // Hide popup form
    popupForm.style.display = "none";
    location.reload();
  });
}
