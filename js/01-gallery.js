import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imgCardMake = createImgCard(galleryItems);

function createImgCard(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
        />
    </a>
    </div>`})
    .join("");
};

    galleryEl.insertAdjacentHTML("afterBegin", imgCardMake);
    galleryEl.addEventListener("click", clickModal);

    
    function clickModal(evt) {
        evt.preventDefault();
        if (!evt.target.dataset.source) {
            return;
        };
        console.log(evt.target);
    
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600"/>`        
    );
    
    instance.show();

    };



