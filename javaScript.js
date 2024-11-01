document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightboxVideo = document.querySelector('.close-btn');

    function openLightBox(videoUrl) {
        if (lightboxModal && lightboxVideo) {
            lightboxModal.style.display = 'flex';
            lightboxVideo.src = `${videoUrl}?autoplay=1&controls=1`;
            console.log('Lightbox opened with video:', videoUrl);
        }
    }

    
    function closeLightBox(event) {
        if (lightboxModal && lightboxVideo) {
            lightboxModal.style.display = 'none';
            lightboxVideo.src = ''; 
            console.log('Lightbox closed');
            if (event) event.stopPropagation(); 
        }
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', function(event) {
            if (event.target === lightboxModal) {
                closeLightBox(event);
            }
        });
    }

    // Add event listener to each video thumbnail
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            if (videoUrl) {
                openLightBox(videoUrl);
            }
        });
    });

    // Close lightbox when 'X' button is clicked
    if (closeLightboxVideo) {
        closeLightboxVideo.addEventListener('click', function(event) {
            closeLightBox(event);
        });
    }
});
