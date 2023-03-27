$(document).on("click", ".trash-icon", function () {
  const contactId = this.getAttribute("data-contact-id");
  const contact = { id: contactId };
  
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:3001/contacts/delete";
  xhr.open("DELETE", url);
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

  // Hide popup form
  const popupForm = document.getElementById("popup-form");
  popupForm.style.display = "none";
  location.reload();
});
