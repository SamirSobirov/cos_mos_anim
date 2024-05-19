        document.querySelector('.rocket').addEventListener('click', function() {
            const rocketPhoto = document.querySelector('.rocket_photo');
            const textBlock = document.querySelector('.text');
            
            if (textBlock.classList.contains('visible')) {
                rocketPhoto.style.width = '400px';
                textBlock.classList.remove('visible');
            } else {
                rocketPhoto.style.width = '500px';
                textBlock.classList.add('visible');
            }
        });
    