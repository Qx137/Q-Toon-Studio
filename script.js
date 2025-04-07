// 1. Mobile Navigation Toggle
// Get the hamburger menu and navigation links
const mobileMenuButton = document.querySelector('.burger');
const navigationLinks = document.querySelector('.nav-links');

// When hamburger is clicked, toggle the menu
mobileMenuButton.addEventListener('click', function() {
    // Toggle the 'nav-active' class on the navigation links
    navigationLinks.classList.toggle('nav-active');
    
    // Toggle the 'toggle' class on the hamburger (for animation)
    mobileMenuButton.classList.toggle('toggle');
});

// 2. Smooth Scrolling for Navigation
// Get all navigation links that start with #
const navAnchors = document.querySelectorAll('a[href^="#"]');

// Add click event to each navigation link
navAnchors.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent default anchor behavior
        event.preventDefault();
        
        // Get the target section ID from the href
        const targetId = this.getAttribute('href');
        
        // Find the target section
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Contact Form Handling
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('confirmation-message');

contactForm.addEventListener('submit', function(event) {
    // Prevent form from submitting normally
    event.preventDefault();
    
    // Get form values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Basic email validation
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Hide the form
    contactForm.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Reset form after 5 seconds
    setTimeout(function() {
        contactForm.reset();
        contactForm.style.display = 'block';
        successMessage.style.display = 'none';
    }, 5000);
});

// this is for add project button

document.getElementById("add-project-btn").addEventListener("click", function () {
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const imageInput = document.getElementById("project-image");
    
    if (title.trim() === "" || description.trim() === "") {
        alert("Please enter both a title and description.");
        return;
    }

    const file = imageInput.files[0];

    if (!file) {
        alert("Please upload an image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const projectContainer = document.getElementById("projects-container");

        const projectCard = document.createElement("div");
        projectCard.classList.add("card");

        projectCard.innerHTML = `
            <img src="${event.target.result}" alt="Project Image">
            <h3>${title}</h3>
            <p>${description}</p>
        `;

        projectContainer.appendChild(projectCard);

        // Clear form fields
        document.getElementById("project-title").value = "";
        document.getElementById("project-description").value = "";
        document.getElementById("project-image").value = "";
    };

    reader.readAsDataURL(file);
});
