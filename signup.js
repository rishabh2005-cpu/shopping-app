// Assuming your signup form has a class name 'form-fields-parent'  
document.addEventListener("DOMContentLoaded", function () {  
    const form = document.querySelector('.form-fields-parent');  

    form.addEventListener('submit', function (event) {  
        event.preventDefault(); // Prevent form submission to handle validation  
        const firstName = form.querySelector('.first-name2').value.trim();  
        const lastName = form.querySelector('.last-name2').value.trim();  
        const email = form.querySelector('.email-address1').value.trim();  
        const phoneNumber = form.querySelector('.phone-number').value.trim();  
        const newPassword = form.querySelector('.new-password').value.trim();  
        const confirmPassword = form.querySelector('.confirm-password').value.trim();  

        // Basic validation checks  
        if (firstName === '' || lastName === '' || email === '' || phoneNumber === '' || newPassword === '' || confirmPassword === '') {  
            alert("Please fill out all fields.");  
            return;  
        }  

        // Email format validation  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        if (!emailPattern.test(email)) {  
            alert("Please enter a valid email address.");  
            return;  
        }  

        // Password matching check  
        if (newPassword !== confirmPassword) {  
            alert("Passwords do not match.");  
            return;  
        }  

        // If all validations pass  
        alert("Account created successfully!");  
        
        // Here you would typically do something with the form data, like sending it to a server.  
        // For example, using fetch:  
        // fetch('your-api-endpoint', {  
        //     method: 'POST',  
        //     body: JSON.stringify({  
        //         firstName,  
        //         lastName,  
        //         email,  
        //         phoneNumber,  
        //         password: newPassword  
        //     }),  
        //     headers: {  
        //         'Content-Type': 'application/json'  
        //     }  
        // })  
        // .then((response) => {  
        //     if (!response.ok) {  
        //         throw new Error('Network response was not ok');  
        //     }  
        //     return response.json();  
        // })  
        // .then((data) => {  
        //     console.log('Success:', data);  
        // })  
        // .catch((error) => {  
        //     console.error('Error:', error);  
        // });  

    });  
});