import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");
const images = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
});
galleryContainer.insertAdjacentHTML("beforeend", images.join(""));

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
