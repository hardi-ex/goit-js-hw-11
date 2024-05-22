import { searchPhoto } from './js/pixabay-api';
import { photosTemplate } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iconError from './parts/error.svg';

const lightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
});

const formEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery');
const spanEl = document.querySelector('.loader-span');

formEl.addEventListener('submit', handleForm);

function handleForm(evt) {
  evt.preventDefault();

  galleryEl.innerHTML = '';

  const input = evt.target.elements.query.value.trim();

  if (!input) {
    return warningAlert('Please enter a search term.');
  }

  spanEl.classList.add('loader');

  searchPhoto(input)
    .then(data => {
      if (!data.hits.length) {
        return warningAlert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      const markUp = photosTemplate(data.hits);
      galleryEl.innerHTML = markUp;
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      spanEl.classList.remove('loader');
    });

  evt.target.reset();
}

function warningAlert(message) {
  iziToast.warning({
    title: 'Warning',
    titleColor: '#FAFAFB',
    message: message,
    messageColor: '#FAFAFB',
    color: '#EF4040',
    position: 'topRight',
    timeout: 5000,
    iconUrl: iconError,
  });
}
