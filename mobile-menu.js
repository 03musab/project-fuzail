document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navMenu = document.querySelector("nav ul");
    const menuOverlay = document.querySelector(".menu-overlay");
  
    // Function to toggle menu state
    function toggleMenu() {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      const newExpandedState = !isExpanded;
  
      // Update ARIA state
      menuBtn.setAttribute("aria-expanded", newExpandedState.toString());
  
      // Toggle visual classes
      navMenu.classList.toggle("show");
      hamburgerIcon.classList.toggle("open");
      menuOverlay.classList.toggle("show");
      document.querySelector("nav").classList.toggle("active");
  
      // Prevent body scrolling when menu is open
      if (newExpandedState) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
  
      // Announce menu state for screen readers
      const menuState = newExpandedState ? "opened" : "closed";
      menuBtn.setAttribute("aria-label", `Menu ${menuState}`);
    }
  
    // Toggle menu on button click
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });
  
    // Close menu when clicking on overlay
    menuOverlay.addEventListener("click", function () {
      toggleMenu();
    });
  
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (navMenu.classList.contains("show")) {
          toggleMenu();
        }
      });
  
      // Add keyboard accessibility for menu items
      link.setAttribute("role", "menuitem");
      link.addEventListener("keydown", function (e) {
        // Close menu on Enter or Space after selecting an item
        if (
          (e.key === "Enter" || e.key === " ") &&
          navMenu.classList.contains("show")
        ) {
          e.preventDefault();
          toggleMenu();
          // Follow the link after closing menu
          setTimeout(() => {
            window.location.href = this.href;
          }, 300);
        }
      });
    });
  
    // Handle touch events better for mobile
    navMenu.addEventListener(
      "touchstart",
      function (e) {
        e.stopPropagation();
      },
      { passive: true }
    );
  
    // Add swipe to close functionality
    let touchStartX = 0;
    navMenu.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
  
    navMenu.addEventListener(
      "touchend",
      function (e) {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
  
        // If swiped left (for right-side menu)
        if (diff > 50) {
          toggleMenu();
        }
      },
      { passive: true }
    );
  
    // Adjust menu on window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        if (navMenu.classList.contains("show")) {
          toggleMenu(); // Close the menu
        }
        // Reset styles for desktop view
        document.body.style.overflow = "";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Toggle menu");
      }
    });
  
    // Add keyboard navigation support
    menuBtn.addEventListener("keydown", function (e) {
      // Toggle on Enter or Space
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });
  
    // Allow Escape key to close the menu
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("show")) {
        toggleMenu();
      }
    });
  });