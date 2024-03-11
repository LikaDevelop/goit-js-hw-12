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
        // add discription for img
        const divForDescription = document.createElement("div");
        divForDescription.classList.add("description");
        // likes
        const divForLikes = document.createElement("div");
        divForLikes.classList.add("likes")
        const likesTitle = document.createElement("h4");
        likesTitle.textContent = "Likes";
        const likes = document.createElement("p");
        likes.textContent = i.likes;
        divForLikes.append(likesTitle);
        divForLikes.append(likes);
        divForDescription.append(divForLikes);
        // views
        const divForViews = document.createElement("div");
        divForViews.classList.add("views")
        const viewsTitle = document.createElement("h4");
        viewsTitle.textContent = "Views";
        const view = document.createElement("p");
        view.textContent = i.views;
        divForViews.append(viewsTitle);
        divForViews.append(view);
        divForDescription.append(divForViews);
        //comments
        const divForComments = document.createElement("div");
        divForComments.classList.add("comments")
        const commentsTitle = document.createElement("h4");
        commentsTitle.textContent = "Comments";
        const comment = document.createElement("p");
        comment.textContent = i.comments;
        divForComments.append(commentsTitle);
        divForComments.append(comment);
        divForDescription.append(divForComments);
        // downloads
        const divForDownloads = document.createElement("div");
        divForDownloads.classList.add("dowloads")
        const downloadsTitle = document.createElement("h4");
        downloadsTitle.textContent = "Downloads";
        const download = document.createElement("p");
        download.textContent = i.downloads;
        divForDownloads.append(downloadsTitle);
        divForDownloads.append(download);
        divForDescription.append(divForDownloads);

        galleryItem.append(divForDescription);
        list.push(galleryItem);
    });

    gallery.append(...list);

    let lightbox = new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionDelay: 250 });
    return gallery.children[0].getBoundingClientRect();
}


