const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();

            if (!video.classList.contains("showreel")) {
                video.currentTime = 0;
            }
        }
    });
}, {
    threshold: 0.5
});

videos.forEach(video => observer.observe(video));