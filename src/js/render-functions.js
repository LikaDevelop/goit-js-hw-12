// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderingImgs(gallery, hits) {

    let list = [];
    hits.forEach(function (i) {
        const galleryItem = document.createElement("li");
        galleryItem.classList.add("gallery-item");
        const galleryLink = document.createElement("a");
        galleryLink.classList.add("gallery-link");
        galleryLink.setAttribute("href", i.largeImageURL);
        const galleryImage = document.createElement("img");
        galleryImage.classList.add("gallery-image");
        galleryImage.src = i.webformatURL;
        galleryImage.alt = i.tags;
        galleryLink.append(galleryImage);
        galleryItem.append(galleryLink);
        const description = `<div class="description">
                                <div class="likes">
                                    <h4>Likes</h4>
                                    <p>${i.likes}</p>
                                </div>
                                <div class="views">
                                    <h4>Views</h4>
                                    <p>${i.views}</p>
                                </div>
                                <div class="comments">
                                    <h4>Comments</h4>
                                    <p>${i.comments}</p>
                                </div>
                                <div class="dowloads">
                                    <h4>Downloads</h4>
                                    <p>${i.downloads}</p>
                                </div>
                            </div >`;
        galleryItem.innerHTML += description;
        list.push(galleryItem);
    });

    gallery.append(...list);

    let lightbox = new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionDelay: 250 });
    return gallery.children[0].getBoundingClientRect();
}


