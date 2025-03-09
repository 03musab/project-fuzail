/**
 * scroll-fade.js
 * This script adds a fade-in effect to elements as they scroll into view.
 * It targets all direct children of <main> and <footer> elements.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Define the observer options
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1 // Trigger when at least 10% of the element is visible
  };

  // Create the observer callback function
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Check if the element is intersecting with the viewport
      if (entry.isIntersecting) {
        // Add the fade-in class to trigger the animation
        entry.target.classList.add('fade-in');
        // Stop observing the element once it has faded in
        observer.unobserve(entry.target);
      }
    });
  };

  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Select all direct children of <main> and <footer> elements
  const elementsToObserve = document.querySelectorAll('main > *, footer > *');

  // Loop through the selected elements and observe each one
  elementsToObserve.forEach(element => {
    // Check if the element is not within a header tag
    if (!element.closest('header')) {
      // Start observing the element
      observer.observe(element);
    }
  });
});