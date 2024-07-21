document.addEventListener("DOMContentLoaded", function () {  
    // Get elements  
    const emailInput = document.querySelector('.email2');  
    const passwordInput = document.querySelector('.password1');  
    const signInButton = document.querySelector('.rectangle-parent11');  
    const forgotPasswordLink = document.querySelector('.forget-password a');  
    
    // Add event listener for sign-in button  
    signInButton.addEventListener('click', function (event) {  
      event.preventDefault();  

      const email = emailInput.value.trim();  
      const password = passwordInput.value.trim();  

      // Simple validation check  
      if (!email || !password) {  
        alert("Both email and password are required.");  
        return;  
      }  

      // If validation passes, simulate a sign-in process  
      console.log("Sign In Attempt: ", { email, password });  
      // Additional logic to handle the sign-in should go here  
      alert("Sign-in logic goes here");  
    });  

    // Optional: Toggle visibility of the password field  
    const passwordToggleButton = document.createElement('button');  
    passwordToggleButton.innerText = 'Show/Hide Password';  
    passwordToggleButton.style.marginTop = '10px';  
    
    passwordToggleButton.addEventListener('click', function () {  
      if (passwordInput.type === "password") {  
        passwordInput.type = "text";  
      } else {  
        passwordInput.type = "password";  
      }  
    });  

    // Append the toggle button for better UX  
    document.querySelector('.password-group').appendChild(passwordToggleButton);  
  });