import axios from "axios";

export const loginApi = axios.create({
    // baseURL: 'http://localhost:3001',
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
});

export const productsApi= axios.create({        
    baseURL: process.env.REACT_APP_API_URL,
    timeout:5000
})

export const signupApi= axios.create({   
    baseURL: process.env.REACT_APP_API_URL,
    timeout:5000
})

export const cloudinaryApi= axios.create({      
    baseURL: process.env.REACT_APP_API_URL,
    timeout:2000
})


































// // Send a POST request
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });
  
//   //Performing multiple concurrent requests

//   function getUserAccount() {
//     return axios.get('/user/12345');
//   }
  
//   function getUserPermissions() {
//     return axios.get('/user/12345/permissions');
//   }
  
//   Promise.all([getUserAccount(), getUserPermissions()])
//     .then(function (results) {
//       const acct = results[0];
//       const perm = results[1];
//     });
  
// //Want to use async/await? Add the `async` keyword to your outer function/method.
//     async function getUser() {
//         try {
//           const response = await axios.get('/user?ID=12345');
//           console.log(response);
//         } catch (error) {
//           console.error(error);
//         }
//       }