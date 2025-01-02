async function fetchData(url) {
    try {
      // Initiate the fetch request and wait for the response
      const response = await fetch(url);
  
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response as JSON (or another format if needed)
      const data = await response.json();
      console.log(data); // Log or use the data as needed
  
    } catch (error) {
      // Handle any errors that occur during the fetch or JSON parsing
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function with a URL
  fetchData('https://api.example.com/data');
  