const sharebar = document.querySelector('.share-bar');
const share_btns = document.querySelectorAll('.share-btn');

share_btns.forEach((share_btn) => {
    share_btn.addEventListener('click', function() {
            sharebar.classList.toggle('visible');
    });
});