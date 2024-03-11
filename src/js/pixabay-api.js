import axios from 'axios';


export async function fetchHits(searchWorlds, page) {
    const response = await axios.get("https://pixabay.com/api", {
        params: {
            key: "42798522-d824d0eb072596e07151c9725",
            q: searchWorlds,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: page,
        }
    });
    return await response.data;
};



