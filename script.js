function fetchData() {
    // Path and Query Parameters
    const userId = 1; // Example user ID as path parameter
    const status = 'active'; // Example status as query parameter

    // Construct the URL with path and query parameters
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}?status=${status}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Display the fetched data
            document.getElementById('data').innerHTML = `
                <h2>User ID: ${data.id}</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Status:</strong> ${status}</p>
            `;
        })
        .catch(error => {
            // Handle any errors
            document.getElementById('data').innerHTML = `
                <p>Error fetching data: ${error.message}</p>
            `;
                });
        }
                // Add event listener to the button
                document.getElementById('fetchButton').addEventListener('click', fetchData);
                
            