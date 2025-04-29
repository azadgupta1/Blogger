// console.log('Script loaded successfully');
// console.log('Register form:', document.getElementById('registerForm'));
// console.log('Login form:', document.getElementById('loginForm'));


// document.getElementById('registerForm').addEventListener('submit', async (event) => {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     try {
//       const response = await fetch('http://localhost:3000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });
  
//       if (response.ok) {
//         alert('Registration successful! Please log in.');
//         window.location.href = './login.html';
//       } else {
//         const data = await response.json();
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   });
  

// document.getElementById('loginForm').addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   console.log('Login attempt with:', { email, password }); // Log the credentials being sent (for debugging only)

//   try {
//     const response = await fetch('http://localhost:3000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     console.log('Response:', response); // Log the response object

//     if (response.ok) {
//       const data = await response.json();
//       console.log('Login success data:', data); // Log the success data
//       localStorage.setItem('token', data.token); // Save JWT token
//       alert('Login successful!');
//       window.location.href = './dashboard.html'; // Redirect to dashboard
//     } else {
//       const data = await response.json();
//       console.error('Error response data:', data); // Log the error response
//       alert(`Error: ${data.message}`);
//     }
//   } catch (error) {
//     console.error('Error logging in:', error); // Log unexpected errors
//     alert('An error occurred. Please try again later.');
//   }
// });


// Log a message to confirm the script is loaded
console.log('Script loaded successfully');

// Log the forms (useful for debugging)
console.log('Register form:', document.getElementById('registerForm'));
console.log('Login form:', document.getElementById('loginForm'));

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  // Handle registration if the register form exists
  if (registerForm) {
    console.log('Register form found:', registerForm);
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
    
      try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
    
        if (response.ok) {
          alert('Registration successful! Please log in.');
          window.location.href = './login.html';
        } else {
          const data = await response.json();
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error registering user:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  } else {
    console.log('Register form not found on this page.');
  }

  // Handle login if the login form exists
  if (loginForm) {
    console.log('Login form found:', loginForm);
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();


      const b = 23;

      b = true

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log('Login attempt with:', { email, password }); // Log the credentials being sent (for debugging only)

      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        console.log('Response:', response); // Log the response object

        if (response.ok) {
          const data = await response.json();
          console.log('Login success data:', data); // Log the success data
          localStorage.setItem('token', data.token); // Save JWT token
          alert('Login successful!');
          window.location.href = './dashboard.html'; // Redirect to dashboard
        } else {
          const data = await response.json();
          console.error('Error response data:', data); // Log the error response
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error logging in:', error); // Log unexpected errors
        alert('An error occurred. Please try again later.');
      }
    });
  } else {
    console.log('Login form not found on this page.');
  }
});
