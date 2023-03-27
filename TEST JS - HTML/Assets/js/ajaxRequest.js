function ajaxRequest(contactId, body, requestType){
    const xhr = new XMLHttpRequest();
    console.log(body)
    let url='';
    
    if (contactId && ! requestType) {
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
    xhr.send(JSON.stringify(body));
}