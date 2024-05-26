document.addEventListener('DOMContentLoaded', function() {
    const categoriesLink = document.getElementById('categories-link');
    const categoriesPopup = document.getElementById('categories-popup');

    categoriesLink.addEventListener('click',function(event){
        event.preventDefault();
        categoriesPopup.style.display = categoriesPopup.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#categories-link') && !categoriesPopup.contains(event.target)) {
            categoriesPopup.style.display = 'none';
        }
    });
    const searchLink = document.getElementById('search-link');
    const searchBox = document.getElementById('search-box');

    searchLink.addEventListener('click', function(event) {
        event.preventDefault();
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#search-link') && !searchBox.contains(event.target)) {
            searchBox.style.display = 'none';
        }
    });
});
