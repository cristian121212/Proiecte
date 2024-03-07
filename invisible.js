document.addEventListener('DOMContentLoaded', function () {
  // Selectăm butonul și containerul pe care dorim să îl afișăm
  var button = document.querySelector('.button-press');
  var container = document.querySelector('.invisible-container');
  var textContainer = document.querySelector('.container-text');

  container.style.display = 'none';
  textContainer.style.height = 'calc(90vh - 110px)';



  // Adăugăm un ascultător de evenimente pe buton pentru 'click'
  button.addEventListener('click', function (e) {
      e.preventDefault(); // Preveniți comportamentul implicit dacă a fost într-un element <a>
      // Schimbăm proprietatea `display` a containerului
      if (container.style.display === 'none') {
          container.style.display = 'flex';
          textContainer.style.height = '100%';
      } else {
          container.style.display = 'none'; // O opțiune pentru a ascunde containerul dacă este apăsat din nou
          textContainer.style.height = 'calc(90vh - 110px)';
        }
  });
});