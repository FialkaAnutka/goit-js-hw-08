// Add imports above this line
import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryInsert = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryInsert); 

function createGalleryMarkup(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
            
    }).join('')
    return markup
}
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});