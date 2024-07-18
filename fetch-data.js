// Initialize the async function
async function fetchUserData() {
  // Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
      // Fetch data using try-catch
      const response = await fetch(apiUrl);
      
      // Check if fetch was successful
      if (!response.ok) {
          throw new Error('Failed to fetch user data');
      }
      
      const users = await response.json(); // Convert response to JSON

      // Clear the loading message
      dataContainer.innerHTML = '';

      // Create and append user list
      const userList = document.createElement('ul');
      userList.classList.add('user-list'); // Optional: Add a class for styling

      users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
      });

      dataContainer.appendChild(userList);

  } catch (error) {
      // Error handling
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching data:', error);
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
