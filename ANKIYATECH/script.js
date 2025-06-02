document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".navbar ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll animations
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInOnScroll = function () {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  };

  // Initial check
  fadeInOnScroll();

  // Check on scroll
  window.addEventListener("scroll", fadeInOnScroll);

  // Form submission
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Here you would typically send the data to a server
      console.log("Form submitted:", data);

      // Show success message
      alert("Thank you for your message! We will get back to you soon.");

      // Reset form
      this.reset();
    });
  }

  // Testimonial slider navigation (simplified)
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll(".testimonial-card");

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }

  // Auto-advance testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Initialize
  showTestimonial(0);
});
