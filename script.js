document.addEventListener('DOMContentLoaded', () => {
    // Get references to the checkbox element and the status display element
    const switchCheckbox = document.getElementById("mySwitch");
    const switchStatus = document.getElementById("switchStatus");

    // Add an event listener to the checkbox
    switchCheckbox.addEventListener("change", function() {
        if (switchCheckbox.checked) {
            // Checkbox is checked (switch is ON)
            switchStatus.textContent = "Search by keyword";
            window.location.href = "region.html"; // Redirect to search.html
        } else {
            // Checkbox is not checked (switch is OFF)
            switchStatus.textContent = "Search by region";
            window.location.href = "search.html"; // Redirect to region.html
        }
    });

    const videoFeed = document.querySelector('.video-feed');
    const videos = videoFeed.querySelectorAll('video');

    videoFeed.addEventListener('scroll', function() {
    const currentVideo = this.querySelector('video:playing');
    const nextVideo = this.querySelector('video:not(:playing)');

    const currentVideoTop = currentVideo.getBoundingClientRect().top;
    const nextVideoTop = nextVideo.getBoundingClientRect().top;

    if (currentVideoTop + currentVideo.clientHeight <= nextVideoTop) {
        currentVideo.pause();
        nextVideo.play();
    }
    });

    



});