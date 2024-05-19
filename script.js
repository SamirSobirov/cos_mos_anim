
document.querySelector('.rocket_photo').addEventListener('click', function() {
    const rocketPhoto = document.querySelector('.rocket_photo');
    const textBlock = document.querySelector('.text');
    const rocket = document.querySelector('.rocket');

    if (textBlock.classList.contains('visible')) {
        rocketPhoto.style.width = '400px';
        rocket.style.transform = 'translateX(0)';
        textBlock.classList.remove('visible');
    } else {
        rocketPhoto.style.width = '600px';
        rocket.style.transform = 'translateX(800)'; // Перемещение вправо
        textBlock.classList.add('visible');
    }
});
