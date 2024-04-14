import axios, { AxiosRequestConfig } from 'axios';

const FetchResponse = {
  count: 0,
  next: null,
  results: []
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api', // Base URL for all requests
  params: { // Default parameters sent with each request
    key: 'a34f575b1e104a2e9be44b4f8594002c', // API key
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async get(path) {
    try {
      const response = await fetch(`${this.endpoint}${path}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async post(path, data) {
    try {
      const response = await fetch(`${this.endpoint}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      return await response.json();
    } catch (error) {
      // Handle errors
      console.error('Error posting data:', error);
      throw error;
    }
  }

  // Add more methods for other HTTP verbs (PUT, DELETE, etc.) as needed
}

// Example usage:
const apiClient = new APIClient('https://example.com/api');
apiClient.get('/data')
  .then(data => {
    console.log('Retrieved data:', data);
  })
  .catch(error => {
    console.error('Error retrieving data:', error);
  });
