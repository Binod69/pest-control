"use strict";

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// (function () {
//   emailjs.init(apiKeys.publicKey);
// })();

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

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

  // Close menu when clicking on a link
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

  // const mobileMenuButton = document.getElementById("mobile-menu-button");
  // const mobileMenu = document.getElementById("mobile-menu");
  // const hamburgerIcon = document.getElementById("hamburger-icon");
  // const closeIcon = document.getElementById("close-icon");

  // mobileMenuButton.addEventListener("click", () => {
  //   const isHidden = mobileMenu.classList.contains("hidden");

  //   if (isHidden) {
  //     mobileMenu.classList.remove("hidden");
  //     mobileMenu.classList.add("animate-slide-down");
  //     hamburgerIcon.classList.add("hidden");
  //     closeIcon.classList.remove("hidden");
  //   } else {
  //     mobileMenu.classList.add("hidden");
  //     mobileMenu.classList.remove("animate-slide-down");
  //     hamburgerIcon.classList.remove("hidden");
  //     closeIcon.classList.add("hidden");
  //   }
  // });

  // Close mobile menu when clicking on a link
  // const mobileLinks = mobileMenu.querySelectorAll("a");
  // mobileLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     mobileMenu.classList.add("hidden");
  //     mobileMenu.classList.remove("animate-slide-down");
  //     hamburgerIcon.classList.remove("hidden");
  //     closeIcon.classList.add("hidden");
  //   });
  // });

  // Smooth scrolling for anchor links
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const target = document.querySelector(this.getAttribute("href"));
  //     if (target) {
  //       target.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   });
  // });

  // Add scroll effect to navbar
  // let lastScrollY = window.scrollY;
  // window.addEventListener("scroll", () => {
  //   const navbar = document.querySelector("nav");
  //   const currentScrollY = window.scrollY;

  //   if (currentScrollY > 100) {
  //     navbar.classList.add("backdrop-blur-sm", "bg-white/95");
  //   } else {
  //     navbar.classList.remove("backdrop-blur-sm", "bg-white/95");
  //   }

  //   lastScrollY = currentScrollY;
  // });

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
    currentIndex = (currentIndex + 1) % 2;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 2) % 2;
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

  //contact form
  // const contactForm = document.getElementById("contact-form");

  // contactForm.addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   // Show loading state
  //   const submitButton = contactForm.querySelector('button[type="submit"]');
  //   const originalButtonText = submitButton.innerHTML;
  //   submitButton.innerHTML = "Sending...";
  //   submitButton.disabled = true;

  //   // Prepare the template parameters
  //   const templateParams = {
  //     from_name: document.getElementById("name").value,
  //     from_email: document.getElementById("email").value,
  //     service: document.getElementById("service").value,
  //     phone: document.getElementById("phone").value,
  //     preferredDate: document.getElementById("preferred-date").value,
  //     preferredTime: document.getElementById("preferred-time").value,
  //     message: document.getElementById("message").value,
  //   };

  //   // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
  //   emailjs
  //     // .send("service_12hdh1y", "template_1g199kd", templateParams)
  //     .send(
  //       process.env.EMAILJS_SERVICE_ID,
  //       process.env.EMAILJS_TEMPLATE_ID,
  //       templateParams
  //     )
  //     .then(
  //       function (response) {
  //         // Show success message
  //         alert("Thank you! Your message has been sent.");
  //         contactForm.reset();
  //       },
  //       function (error) {
  //         // Show error message
  //         alert("Oops! Something went wrong. Please try again later.");
  //         console.error("EmailJS error:", error);
  //       }
  //     )
  //     .finally(function () {
  //       // Reset button state
  //       submitButton.innerHTML = originalButtonText;
  //       submitButton.disabled = false;
  //     });
  // });

  function showToast(message, type = "success") {
    // Remove any existing toasts
    const existingToasts = document.querySelectorAll(".toast-notification");
    existingToasts.forEach((toast) => toast.remove());

    // Create toast element
    const toast = document.createElement("div");
    toast.classList.add(
      "toast-notification",
      "fixed",
      "top-4",
      "right-4",
      "z-50",
      "px-6",
      "py-4",
      "rounded-lg",
      "shadow-lg",
      "transform",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "opacity-0",
      "translate-x-full"
    );

    // Set toast type
    if (type === "success") {
      toast.classList.add("bg-green-600", "text-white");
      toast.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-check-circle mr-3"></i>
        <span>${message}</span>
      </div>
    `;
    } else if (type === "error") {
      toast.classList.add("bg-red-600", "text-white");
      toast.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-exclamation-circle mr-3"></i>
        <span>${message}</span>
      </div>
    `;
    }

    // Append to body
    document.body.appendChild(toast);

    // Trigger reflow to enable transition
    toast.offsetWidth;

    // Show toast
    toast.classList.remove("opacity-0", "translate-x-full");
    toast.classList.add("opacity-100", "translate-x-0");

    // Auto-remove toast
    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-x-0");
      toast.classList.add("opacity-0", "translate-x-full");

      // Remove from DOM after transition
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  // Contact Form Handling with EmailJS
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");
  const formError = document.getElementById("form-error");

  // Date Picker Initialization
  document.addEventListener("DOMContentLoaded", function () {
    const preferredDateInput = document.getElementById("preferred-date");

    // Set the minimum date to today
    const today = new Date().toISOString().split("T")[0];
    preferredDateInput.setAttribute("min", today);

    // Limit booking dates (max 30 days in advance)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    const maxDateString = maxDate.toISOString().split("T")[0];
    preferredDateInput.setAttribute("max", maxDateString);

    // Disable weekends
    preferredDateInput.addEventListener("change", function () {
      const selectedDate = new Date(this.value);
      const dayOfWeek = selectedDate.getDay();

      // 0 = Sunday, 6 = Saturday
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        showToast(
          "We do not offer services on weekends. Please select a weekday."
        );
        this.value = ""; // Clear the selected date
      }
    });
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML =
      '<span>Sending...</span><i class="fas fa-spinner fa-spin ml-2"></i>';
    submitButton.disabled = true;

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value,
      preferredDate: document.getElementById("preferred-date").value,
      preferredTime: document.getElementById("preferred-time").value,
      message: document.getElementById("message").value,
    };

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "preferred-date",
      "message",
    ];

    const missingFields = requiredFields.filter((fieldId) => {
      const field = document.getElementById(fieldId);
      return !field.value.trim();
    });

    if (missingFields.length > 0) {
      showToast(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;
      return;
    }

    // Send email using EmailJS
    emailjs
      .send("service_12hdh1y", "template_1g199kd", formData)
      .then(function () {
        // Show success message
        showToast("Your message has been sent successfully!");
        // formSuccess.classList.remove("hidden");
        // formError.classList.add("hidden");
        contactForm.reset();
      })
      .catch(function (error) {
        // Show error message
        showToast("Failed to send message. Please try again.", "error");
        // formError.classList.remove("hidden");
        // formSuccess.classList.add("hidden");
        console.error("EmailJS Error:", error);
      })
      .finally(function () {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      });
  });
});
