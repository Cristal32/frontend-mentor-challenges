const sharebar = document.querySelector('.share-bar');
const share_btn = document.querySelector('.share-btn');

share_btn.addEventListener('click', function() {
    if (sharebar.style.visibility === "hidden") {
        sharebar.style.visibility = "visible";
    } else {
        sharebar.style.visibility = "hidden";
    }
});