function toggleDropdown() {
  let dropDownContent = document.querySelector('.dropdown-content');

  // Check if the display style is explicitly set to 'none'
  let isHidden = window.getComputedStyle(dropDownContent).display === 'none';

  // Toggle the display style based on the current state
  dropDownContent.style.display = isHidden ? 'block' : 'none';
}