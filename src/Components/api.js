import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Adjust this based on your API base URL

const api = axios.create({
  baseURL: BASE_URL,
});

const handleResponse = (response) => {
  if (response.data.status === 'success') {
    return response;
  } else {
    throw new Error(response.data.message || 'API request failed');
  }
};

const signIn = async (data) => {
    try {
      const response = await api.post('/signin', data);
      return handleResponse(response);
    } catch (error) {
      throw error;
    }
  };

  export const validate = async (data) => {

    var Data = await api.post(`/signin`, data)
      .then(
        (res) => {
          if (res.data.status == "success") {

            let token = res.data.token;
            let userId = res.data.data._id;
            let username = res.data.data.username;
            let name = res.data.data.name;


            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("name", name);

            // Navigate("/home")
          }
          else {
            alert("invalid credentials")
          }
        }
      )
      .catch((err) => {
        console.log(err)
      })
  }