// Get the search bar container element
const searchContainer = document.querySelector('.search-container');

// Get the search input element
const searchImput = document.getElementById('search-input');

// Flag variable to track if the search input is focused
let isSearchImputFocused = false;

// Add event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
  // Check if the pressed key is "s"
  if (event.key === 'n') {
    if (!isSearchImputFocused) {
      // If the search input is not focused, trigger the shortcut behavior
      // Toggle the visibility of the search bar container
      searchContainer.style.display = (searchContainer.style.display === 'none') ? 'flex' : 'block';

      // If the search bar becomes visible, focus on the search input
      if (searchContainer.style.display === 'block') {
        searchImput.focus();
      }

      event.preventDefault(); // Prevent the letter "s" from being typed into the input
    }
  }
});

// Add a blur event listener to the search input to update the focus flag variable
searchImput.addEventListener('blur', function () {
  isSearchImputFocused = false;
});

// Add a focus event listener to the search input to update the focus flag variable
searchImput.addEventListener('focus', function () {
  isSearchImputFocused = true;
});
