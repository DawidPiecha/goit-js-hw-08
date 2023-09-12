import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(
    element => `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
  <img class="gallery__image" alt="${element.description}" src="${element.preview}" title="${element.description}">
  </a>
  </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryElements);

const options = {
  captionData: 'alt',
  captionDelay: 250,
};
const lightbox = new SimpleLightbox('.gallery__item a', options);
