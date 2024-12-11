
  // Smooth Scroll for CTA button
document.querySelector('.explore-button').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
});
// Smooth Scroll for "Start Exploring" Button
document.querySelector('.btn-primary').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
});

// script.js

// Automatically slide testimonials every 5 seconds
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}, 5000); // Change slide every 5 seconds

// Optional JavaScript functionality for social icons or footer animations

// Smooth scrolling for anchor links
document.querySelectorAll('.footer-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
      });
  });
});

// JavaScript to handle smooth scroll to a section (e.g., when button is clicked)
document.getElementById('ctaButton').addEventListener('click', function() {
  // Example: Scroll to a section called 'about' when CTA button is clicked
  const targetSection = document.getElementById('about');
  window.scrollTo({
      top: targetSection.offsetTop - 80, // Adjust offset to account for any fixed header
      behavior: 'smooth'
  });
});


