function createAllCards(contactsList, rowElement) {
  
  contactsList.forEach((contact) => {
    // contact card wrapping div
    const contactCard = document.createElement("div");
    // we add to the card classes attributes
    contactCard.classList.add(
      "col-lg-4",
      "col-md-6",
      "col-sm-12",
      "flex-column",
      "main-card-container"
    );
    // we build the card html
    contactCard.innerHTML = `<div class="card mb-3" style="max-width: 540px;" id=${contact.id}>
          <div class="row g-0">
            <div class="col-md-4 logo-section">
              <img src="${contact.contact_logo}" class="img-fluid rounded-pill logo" alt="${contact.contact_name}">
              <p class="card-job-title"><class="text-muted">${contact.contact_job_title}</small></p>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${contact.contact_name} </h5>
                <p class="card-text"><small class="text-muted"><i class="bi bi-geo-alt-fill"></i>  ${contact.contact_address} </small></p>
                <div class="small-inline">
                    <p class="card-text font-weight-bold">${contact.work_place} </p>
                    <p class="card-text"><small class="text-muted">${contact.work_address_line_1} </small></p>
                    <p class="card-text"><small class="text-muted">${contact.work_address_line_2} </small></p>
                    <p class="card-text"><small class="text-muted"><i class="bi bi-telephone-fill"></i> : ${contact.contact_phone}</small></p>
                </div>
                <div class="editing-icons-wrapper">
                    <button class="btn btn-icon">
                        <i class="bi bi-pencil-fill pencil-icon" data-contact-id=${contact.id}></i>
                    </button>
                    <button class="btn btn-icon">
                        <i class="bi bi-trash trash-icon" data-contact-id=${contact.id}></i>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    // we insert the new card to our row
    rowElement.appendChild(contactCard);
  });
  // we build the last add contact button
  const addContactBtn = document.createElement("div");
  // we add to the button id attribute
  addContactBtn.id = "add-contact-wrapper";
  // we add to the button classes attributes
  addContactBtn.classList.add(
    "add-contact-btn",
    "col-lg-4",
    "col-md-6",
    "col-sm-12",
    "flex-column"
  );
  // we build the button html
  addContactBtn.innerHTML = `<button id="popup-btn""><i class="bi bi-plus-circle"></i></button>`;
  rowElement.appendChild(addContactBtn);
}
