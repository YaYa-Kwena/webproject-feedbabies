document.addEventListener("DOMContentLoaded", function() {
    // Handle active state for main navigation
    var navLinks = document.querySelectorAll("nav a");
    var currentUrl = window.location.href;

    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === currentUrl) {
            navLinks[i].classList.add("active");
        }
    }

    // Handle sidebar navigation
    var sidebarLinks = document.querySelectorAll(".sidebar a");
    var contentSections = document.querySelectorAll(".content-section");

    sidebarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Deactivate all sidebar links and content sections
            sidebarLinks.forEach(function(sLink) {
                sLink.classList.remove("active");
            });
            contentSections.forEach(function(section) {
                section.classList.remove("active");
            });

            // Activate the clicked link and corresponding content section
            this.classList.add("active");
            var targetId = this.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Lightbox Gallery
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-image");
    const galleryContainer = document.getElementById("gallery-container");
    const closeModal = document.getElementsByClassName("close")[0];

    if (galleryContainer) {
        galleryContainer.addEventListener("click", function(event) {
            if (event.target.tagName === "IMG") {
                modal.style.display = "block";
                modalImg.src = event.target.src;
            }
        });
    }

    if (modal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            formStatus.innerHTML = "";

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
                formStatus.innerHTML = "Please fill in all fields.";
                formStatus.style.color = "red";
                return;
            }

            if (!validateEmail(email)) {
                formStatus.innerHTML = "Please enter a valid email address.";
                formStatus.style.color = "red";
                return;
            }

            // Simulate AJAX submission
            formStatus.innerHTML = "Sending message...";
            formStatus.style.color = "orange";

            setTimeout(() => {
                formStatus.innerHTML = "Message sent successfully!";
                formStatus.style.color = "green";
                contactForm.reset();
            }, 2000);
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Enquiry Form Validation
    const enquiryForm = document.getElementById("enquiry-form");
    const enquiryFormStatus = document.getElementById("enquiry-form-status");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(event) {
            event.preventDefault();
            enquiryFormStatus.innerHTML = "";

            const name = document.getElementById("enquiry-name").value;
            const email = document.getElementById("enquiry-email").value;
            const subject = document.getElementById("enquiry-subject").value;
            const message = document.getElementById("enquiry-message").value;

            if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
                enquiryFormStatus.innerHTML = "Please fill in all fields.";
                enquiryFormStatus.style.color = "red";
                return;
            }

            if (!validateEmail(email)) {
                enquiryFormStatus.innerHTML = "Please enter a valid email address.";
                enquiryFormStatus.style.color = "red";
                return;
            }

            // Simulate AJAX submission
            enquiryFormStatus.innerHTML = "Sending enquiry...";
            enquiryFormStatus.style.color = "orange";

            setTimeout(() => {
                enquiryFormStatus.innerHTML = "Enquiry sent successfully!";
                enquiryFormStatus.style.color = "green";
                enquiryForm.reset();
            }, 2000);
        });
    }
});
