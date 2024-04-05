import * as request from "/js/pixabay-api.js";
import * as render from "/js/render-functions.js";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const formSearch = document.querySelector(".search-form");
const inputSearch = document.querySelector(".search-input");
const btnMore = document.querySelector(".btn-more");
const loading = document.createElement("span");
loading.textContent = "Loading images, please wait..."
formSearch.append(loading);

loading.hidden = true;
btnMore.hidden = true;
let searchItem;
let hitsState;
let totalHits;
let page = 1;
let imgHeight;

formSearch.addEventListener("submit", async (event) => {
    event.preventDefault();
    page = 1
    searchItem = inputSearch.value.trim();

    if (searchItem == "") {
        iziToast.error({
            title: 'Error',
            message: "Search field can't be empty"
        });
    }
    else {
        await createGallery(searchItem);
    }
    inputSearch.value = '';
});

btnMore.addEventListener("click", async (event) => {
    const totalPages = Math.ceil(totalHits / 15);
    if (page > totalPages) {
        btnMore.hidden = true;
        return iziToast.error({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results."
        });
    }
    else {
        await createGallery(searchItem);
        window.scrollBy({
            top: imgHeight.height * 2,
            left: 0,
            behavior: "smooth",
        });
    }
});


async function createGallery(searchItem) {
    const gallery = document.querySelector('.gallery');
    if (page == 1) {
        gallery.innerHTML = "";
    }

    loading.hidden = false;
    btnMore.hidden = true;

    const data = await request.fetchHits(searchItem, page);
    hitsState = data.hits;
    totalHits = data.totalHits;
    if (hitsState.length < 15) {
        btnMore.hidden = true;
    }
    else {
        btnMore.hidden = false;
    }
    loading.hidden = true;
    if (hitsState.length === 0) {
        iziToast.error({
            title: 'Error',
            message: "Sorry, there are no images matching your search query. Please try again!"
        });
    }

    else {
        imgHeight = render.renderingImgs(gallery, hitsState);
        if (page > 1) {
            btnMore.hidden = false;
        }
        page += 1;
    }
}


