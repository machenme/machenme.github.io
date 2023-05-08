const input = document.querySelector('input');
const searchIt = document.getElementsByClassName('search-big-icon')[0];
function google() {
    let search_value = document.getElementById('search_value').value;
    if (search_value) {
        let temp = "https://www.google.com.hk/search?q=" + search_value
        window.location.href = temp
    }
}

searchIt.onclick = function () {
    google();
}
input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        google()
    }
})