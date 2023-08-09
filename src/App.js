
import React from 'react';
import axios from 'axios';
// import app from 'app';
const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend server URL

const App = () => {
  const handleButtonClick = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-UIPATH-OrganizationUnitId': '4201673', // Replace with your organization unit ID
        'X-UIPATH-TenantName': 'DefaultTenant', // Replace with your tenant name
      };

      const response = await axios.post(`${API_BASE_URL}/runBot`, {
        accessToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJUTkVOMEl5T1RWQk1UZEVRVEEzUlRZNE16UkJPVU00UVRRM016TXlSalUzUmpnMk4wSTBPQSJ9.eyJodHRwczovL3VpcGF0aC9lbWFpbCI6ImFzd2F0aHlrOTg3NkBnbWFpbC5jb20iLCJodHRwczovL3VpcGF0aC9lbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LnVpcGF0aC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTc5MjE0ODY1NDk4NDg3NDEzNDgiLCJhdWQiOlsiaHR0cHM6Ly9vcmNoZXN0cmF0b3IuY2xvdWQudWlwYXRoLmNvbSIsImh0dHBzOi8vdWlwYXRoLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTE1NTk4NDUsImV4cCI6MTY5MTY0NjI0NSwiYXpwIjoiOERFdjFBTU5YY3pXM3k0VTE1TEwzallmNjJqSzkzbjUiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIn0.tGv9YSx1EJnZXgYvRIJWKE8rG45ZLmcvvMdHhvsh1-qH2l-qO0-6DfyCh4fwGFeDeXUfd2Li3cY_8afuJQwzGU0WbYxrQKKBb-otejI7yr0yj_XwA13MpE00pts5QWPm9-X3uIvsCrXBAoWdJjDHwSB-gK3JdD6ll3hesOHh0T9GIVNRkQXufQezL9xGRzrI6PtadAyZaLTzBz1-Xuv9Y32MjML7hdrJJtJmG2-ol_ZuIUUOsD_tGPED3tt6Rgrq-FtRhjgs04F658L_at8xnXSJXCnGWC3SbgYX5da-vnnnSNuKJIzM6WEnaumltvpGPcxY8LkYBZew0ujFUJfpzg',
        releaseKey: '151e5836-9ed5-455f-bede-e1db6e5e7e2f', // Replace with the process release key in UiPath Orchestrator
        headers,
      });

      console.log('Job Started:', response.data.jobResponse);
      // You can handle the response or update the UI as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully and update the UI accordingly
    }
  };

  console.log('Entering');
  return (
    <div>
      <h1>Run Bot</h1>
      <button onClick={handleButtonClick}>Start Robot </button>
    </div>
  );
};

export default App;
