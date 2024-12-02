
document.addEventListener('DOMContentLoaded', () => {
    const monitorSection = document.querySelector('#monitorizare-resurse');
    const images = monitorSection.querySelectorAll('img');
    let currentIndex = 0;
    let interval;
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }
    function startSlideshow() {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
    }
    monitorSection.addEventListener('dblclick', () => {
        if (!interval) {  
            interval = setInterval(startSlideshow, 3000); 
        }
    });
    showImage(currentIndex);
});
