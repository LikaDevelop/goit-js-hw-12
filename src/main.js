import * as request from "/js/pixabay-api.js";
import * as render from "/js/render-functions.js";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const formSearh = document.querySelector(".search-form");
const inputSearch = document.querySelector(".search-input");
const btnMore = document.querySelector(".btn-more");
btnMore.hidden = true;
let searchItem;
let hitsState;
let totalHits;
let page = 1;
let imgHeight;

formSearh.addEventListener("submit", async (event) => {
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
    console.log(totalHits)
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

    const loading = document.createElement("span");
    loading.classList.add("loading");
    loading.textContent = "Loading images, please wait..."
    formSearh.append(loading);

    const data = await request.fetchHits(searchItem, page);
    hitsState = data.hits;
    totalHits = data.totalHits;
    loading.remove();
    if (hitsState.length === 0) {
        iziToast.error({
            title: 'Error',
            message: "Sorry, there are no images matching your search query. Please try again!"
        });
    }
    else {
        imgHeight = render.renderingImgs(gallery, hitsState);

        page += 1;
        if (page > 1) {
            btnMore.hidden = false;
        }
    }
}


