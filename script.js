document.querySelector('.rocket').addEventListener('click', function() {
    const rocketPhoto = document.querySelector('.rocket_photo');
    const rocketText = document.querySelector('.rocket_text');
    
    if (rocketText.classList.contains('visible')) {
        rocketPhoto.style.width = '400px';
        rocketText.classList.remove('visible');
    } else {
        rocketPhoto.style.width = '500px';
        rocketText.classList.add('visible');
    }
});