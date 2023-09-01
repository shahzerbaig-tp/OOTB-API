// Import the API object in another file
import apiObject from '..entities/apiObject';

// Access the API URL
fetch(apiObject.apiUrl)
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then((data) => {
    // Print the response data
    console.log('Response Data:', data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });
