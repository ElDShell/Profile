'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}
/**
 * Alert
 */
document.addEventListener("DOMContentLoaded", function() {
  function setupClickHandler(blogId) {
      document.getElementById(blogId).addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default action of the link

          // Redirect to the #home section after the alert is hidden
          window.location.href = "#home"; // Perform the redirection
          const alert = document.getElementById("alert");
          alert.style.display = "block"; // Show the alert

          setTimeout(function() {
              alert.classList.add("hidden"); // Start fade-out
              setTimeout(function() {
                  alert.style.display = "none"; // Hide completely after fade-out

              }, 500); // Match this with the transition duration
          }, 2000); // Show alert for 2 seconds
      });
  }

  // Set up handlers for each blog element
  setupClickHandler("blog1");
  setupClickHandler("blog2");
});

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

