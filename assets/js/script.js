document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');
    const popup = document.querySelector('.popup');

    images.forEach(image => {
        image.addEventListener('click', function () {
            const imageUrl = this.querySelector('img').src;
            const popupImage = popup.querySelector('img');
            popupImage.src = imageUrl;
            popup.classList.add('active');
        });
    });

    popup.addEventListener('click', function () {
        this.classList.remove('active');
    });
});