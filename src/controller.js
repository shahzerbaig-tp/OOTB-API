console.log("Script Succefully loaded");
const rootUrl = 'http://localhost:4502/libs/granite/core/content/login.html?resource=%2F&$$login$$=%24%24login%24%24';
const username = 'admin';
const password = 'admin';

const apiUrl = 'https://localhost:4502/api';

// Encode the username and password in base64
const authHeader = 'Basic ' + btoa(username + ':' + password);

// Make a request to the root URL to authenticate
fetch(rootUrl, {
  method: 'GET',
  headers: {
    'Authorization': authHeader
  }
})
.then(response => {
  if (response.ok) {
    // Authentication successful, make a request to the API
    return fetch(apiUrl);
  } else {
    throw new Error('Authentication failed');
  }
})
.then(apiResponse => apiResponse.text())
.then(apiData => {
  console.log(apiData);
})
.catch(error => {
  console.error('Error:', error);
});
