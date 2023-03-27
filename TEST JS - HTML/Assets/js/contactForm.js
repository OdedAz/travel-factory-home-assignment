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
  
  // submitting form function
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const contactName = document.getElementById("contactName");
    const contactId = contactName.getAttribute("data-contact-id");

    // Get form data
    const contact_name = document.getElementById("contactName").value;
    const contact_address = document.getElementById("contactAddress").value;
    //   const email = document.getElementById("email").value;
    const work_place = document.getElementById("companyName").value;
    const work_address_line_1 =
      document.getElementById("companyAddress_1").value;
    const work_address_line_2 =
      document.getElementById("companyAddress_2").value;
    const contact_phone = document.getElementById("telephone").value;
    const contact_job_title = document.getElementById("contactJobTitle").value;

    const contact = {
      contact_name,
      contact_address,
      work_place,
      work_address_line_1,
      work_address_line_2,
      contact_phone,
      contact_job_title,
      contact_logo: "./Assets/img/michael zimber.jpg",
    };

    // submitting form
    if ((!contact.contact_name || !contact.contact_phone) && (CancelBtn) ) {
      console.error("the fields email, phone, name must be full");
      return;
    }
    function validatePhoneNumber(phoneNumber) {
      const regex = /^[+()0-9\s-]*$/;
      return regex.test(phoneNumber);
    }
    const phoneValidated = validatePhoneNumber(contact.contact_phone)
    if (!phoneValidated) return console.error("the phone field accept only numbers,+,(,) please type the correct number")
    // making Ajax request to post the new contact to the server
    const xhr = new XMLHttpRequest();
    let url='';
    let requestType=""
    if (contactId) {
        url = "http://localhost:3001/contacts/update";
        requestType = "PATCH"
        contact.id = contactId
    } else {
        url = "http://localhost:3001/contacts/create";
        requestType = "POST"
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

    // Hide popup form
    popupForm.style.display = "none";
    location.reload();
  });
}
