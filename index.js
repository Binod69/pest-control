"use strict";

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  // const mobileMenuButton = document.getElementById("mobile-menu-button");
  // const closeMenuButton = document.getElementById("close-menu");
  // const mobileMenu = document.getElementById("mobile-menu");
  // const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  // const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

  // function toggleMobileMenu() {
  //   mobileMenu.classList.toggle("active");
  //   mobileMenuOverlay.classList.toggle("active");
  //   document.body.style.overflow = mobileMenu.classList.contains("active")
  //     ? "hidden"
  //     : "";
  // }

  // mobileMenuButton.addEventListener("click", toggleMobileMenu);
  // closeMenuButton.addEventListener("click", toggleMobileMenu);
  // mobileMenuOverlay.addEventListener("click", toggleMobileMenu);

  // // Close menu when clicking on a link
  // mobileMenuLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     mobileMenu.classList.remove("active");
  //     mobileMenuOverlay.classList.remove("active");
  //     document.body.style.overflow = "";
  //   });
  // });

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

  // Initially hide mobile menu
  mobileMenu.classList.add("hidden");

  // Function to open mobile menu
  function openMobileMenu() {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add(
      "fixed",
      "inset-0",
      "bg-white",
      "z-50",
      "p-6",
      "overflow-y-auto"
    );
    document.body.style.overflow = "hidden";
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove(
      "fixed",
      "inset-0",
      "bg-white",
      "z-50",
      "p-6",
      "overflow-y-auto"
    );
    document.body.style.overflow = "";
  }

  // Event listeners for opening and closing menu
  mobileMenuButton.addEventListener("click", openMobileMenu);
  closeMenuButton.addEventListener("click", closeMobileMenu);

  // Close menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Testimonials Carousel Code
  const testimonialsContainer = document.getElementById(
    "testimonials-container"
  );
  const prevButton = document.getElementById("prev-testimonial");
  const nextButton = document.getElementById("next-testimonial");
  const dots = document.querySelectorAll(".testimonial-dot");
  let currentIndex = 0;
  let autoSlideInterval;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    testimonialsContainer.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-green-600", index === currentIndex);
      dot.classList.toggle("bg-gray-300", index !== currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event Listeners
  prevButton.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Start auto-sliding
  startAutoSlide();

  // Pause auto-sliding on hover
  testimonialsContainer.addEventListener("mouseenter", stopAutoSlide);
  testimonialsContainer.addEventListener("mouseleave", startAutoSlide);

  // FAQ Accordion Code
  const faqButtons = document.querySelectorAll(".faq-button");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector("i");

      // Close all other FAQ items
      document.querySelectorAll(".faq-content").forEach((item) => {
        if (item !== content) {
          item.classList.add("hidden");
        }
      });

      // Toggle current FAQ item
      content.classList.toggle("hidden");

      // Rotate icon
      icon.style.transform = content.classList.contains("hidden")
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
  });

  // Contact Form Handling with EmailJS
  // const contactForm = document.getElementById("contact-form");
  // const formSuccess = document.getElementById("form-success");
  // const formError = document.getElementById("form-error");

  // contactForm.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   // Show loading state
  //   const submitButton = contactForm.querySelector('button[type="submit"]');
  //   const originalButtonText = submitButton.innerHTML;
  //   submitButton.innerHTML =
  //     '<span>Sending...</span><i class="fas fa-spinner fa-spin ml-2"></i>';
  //   submitButton.disabled = true;

  //   // Get form data
  //   const formData = {
  //     name: document.getElementById("name").value,
  //     email: document.getElementById("email").value,
  //     phone: document.getElementById("phone").value,
  //     service: document.getElementById("service").value,
  //     message: document.getElementById("message").value,
  //   };

  //   // Send email using EmailJS
  //   emailjs
  //     .send(
  //       process.env.EMAILJS_SERVICE_ID,
  //       process.env.EMAILJS_TEMPLATE_ID,
  //       formData
  //     )
  //     .then(function () {
  //       // Show success message
  //       formSuccess.classList.remove("hidden");
  //       formError.classList.add("hidden");
  //       contactForm.reset();
  //     })
  //     .catch(function (error) {
  //       // Show error message
  //       formError.classList.remove("hidden");
  //       formSuccess.classList.add("hidden");
  //       console.error("EmailJS Error:", error);
  //     })
  //     .finally(function () {
  //       // Reset button state
  //       submitButton.innerHTML = originalButtonText;
  //       submitButton.disabled = false;
  //     });
  // });

  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = "Sending...";
    submitButton.disabled = true;

    // Prepare the template parameters
    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      service: document.getElementById("service").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
    emailjs
      .send("service_12hdh1y", "template_1g199kd", templateParams)
      .then(
        function (response) {
          // Show success message
          alert("Thank you! Your message has been sent.");
          contactForm.reset();
        },
        function (error) {
          // Show error message
          alert("Oops! Something went wrong. Please try again later.");
          console.error("EmailJS error:", error);
        }
      )
      .finally(function () {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      });
  });
});
