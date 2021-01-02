const form = document.querySelector('#searchForm');
form.addEventListener('input', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    //form.elements.query.value = '';
});


const makeImages = (shows) => {
    const showsContainer = document.querySelector('#show');
    showsContainer.innerHTML = '';
    shows.forEach(element => {
        if(element.show.image){
            const img = document.createElement('img');
            img.src = element.show.image.medium;
            showsContainer.append(img);
        }
    });
}