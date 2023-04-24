'use strict';

const getImage = document.getElementById('getImage');
const message = document.getElementById('message');

getImage.addEventListener('click', function get_Image() {
  const dogUrl = 'https://dog.ceo/api/breeds/image/random';
  fetch(dogUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const fetched = data.message;
      document.getElementById('message').hidden = false;
      setTimeout(loadingMessage, 200);
      document.getElementById('flagWindow').src = fetched;
    })
    .catch(function (e) {
      alert('Error: ' + e);
    });
});

function loadingMessage() {
  document.getElementById('message').hidden = true;
}
