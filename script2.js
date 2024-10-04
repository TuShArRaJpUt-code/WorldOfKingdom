  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event and apply animations
function handleScroll() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (isInViewport(content)) {
            content.style.animationName = content.getAttribute('data-animation');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
// Run the function on page load as well
window.addEventListener('load', handleScroll);