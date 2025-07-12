document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const fullscreenImage = document.createElement('div');
    const audio = new Audio();

    fullscreenImage.style.position = 'fixed';
    fullscreenImage.style.top = '0';
    fullscreenImage.style.left = '0';
    fullscreenImage.style.width = '100vw';
    fullscreenImage.style.height = '100vh';
    fullscreenImage.style.backgroundColor = 'black';
    fullscreenImage.style.display = 'flex';
    fullscreenImage.style.justifyContent = 'center';
    fullscreenImage.style.alignItems = 'center';
    fullscreenImage.style.zIndex = '9999';
    fullscreenImage.style.cursor = 'none';
    
    const img = document.createElement('img');
    img.src = 'black-men.png'; 
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.objectFit = 'contain';
    fullscreenImage.appendChild(img);

    function blockInput(e) {
        e.preventDefault();
        return false;
    }

    let imageInterval;
    let isOriginalImage = true;
    
    function toggleImage() {
        if (isOriginalImage) {
            img.src = 'black-men-negative.png';
        } else {
            img.src = 'black-men.png';
        }
        isOriginalImage = !isOriginalImage;
    }
    
    button.addEventListener('click', function() {
        audio.src = 'sound.mp3';
        audio.loop = true;
        audio.play().catch(e => console.log('audio blocked:', e));

        document.body.appendChild(fullscreenImage);

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(e => console.log(e));
        }

        document.addEventListener('keydown', blockInput);
        document.addEventListener('keyup', blockInput);
        document.addEventListener('keypress', blockInput);
        document.addEventListener('mousedown', blockInput);
        document.addEventListener('mouseup', blockInput);
        document.addEventListener('click', blockInput);
        document.addEventListener('contextmenu', blockInput);

        document.body.style.cursor = 'none';

        imageInterval = setInterval(toggleImage, 100);
    });
});