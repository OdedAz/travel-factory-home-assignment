function getFormContact() {
  const contactName = document.getElementById("contactName");
  const contactId = contactName.getAttribute("data-contact-id");

  // Get form data
  const contact_name = document.getElementById("contactName").value;
  const contact_address = document.getElementById("contactAddress").value;
  //   const email = document.getElementById("email").value;
  const work_place = document.getElementById("companyName").value;
  const work_address_line_1 = document.getElementById("companyAddress_1").value;
  const work_address_line_2 = document.getElementById("companyAddress_2").value;
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
    contactId,
  };
  return {contact, contactId};
}
