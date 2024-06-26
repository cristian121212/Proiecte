const proiectList = [
  { title: "Megatsunamiul din 1958 din golful Lituya", page: "Megatsunamiul din 1958 din golful Lituya.html" },
  { title: "Golful Lituya", page: "Golful Lituya.html" },
  { title: "Insula Cenotaph", page: "Cenotaph.html" },
  { title: "Cutremur", page: "Cutremur.html" },
  { title: "Miguel de Cervates", page: "Miguel-de-Cervantes.html" },
  { title: "Parcul National Domogled", page: "Parc-Nat-Domogled.html" },
  { title: "Realismul", page: "holocaust-din-romania.html" },
  { title: "Ion", page: "Ion.html" },
  { title: "Baltagul", page: "Baltagul.html" },
  { title: "Morometii", page: "Morometii.html" },
  { title: "Moara cu Noroc", page: "MCN.html" },
  { title: "Ultima noapte de dragoste, intaia noapte de razboi", page: "UNDDINDR.html" },
  { title: "Hanul Ancutei", page: "Hanul Ancutei.html" },
];

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');
const errorMessage = document.getElementById('error-message');

function showSuggestions() {
  const userInput = searchInput.value.toLowerCase();
  suggestionsContainer.innerHTML = '';

  if (userInput === '') {
    suggestionsContainer.style.display = 'none';
    return;
  }

  const filteredSuggestions = proiectList.filter((proiect) => proiect.title.toLowerCase().startsWith(userInput));

  if (filteredSuggestions.length === 0) {
    redirectToErrorPage();
  } else {
    errorMessage.style.display = 'none';
  }

  filteredSuggestions.forEach((proiect) => {
    const li = document.createElement('li');
    li.textContent = proiect.title;
    li.addEventListener('click', () => {
      searchInput.value = proiect.title;
      suggestionsContainer.innerHTML = '';
      redirectToPage(proiect.page);
    });
    suggestionsContainer.appendChild(li);
  });

  suggestionsContainer.style.display = 'block';
}

function redirectToPage(page) {
  window.location.href = page;
}

function redirectToErrorPage() {
  errorMessage.style.display = 'block';
}

searchInput.addEventListener('input', showSuggestions);

document.addEventListener('click', (event) => {
  if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
    suggestionsContainer.style.display = 'none';
  }
});
