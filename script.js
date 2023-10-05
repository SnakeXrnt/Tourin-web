document.addEventListener('DOMContentLoaded', () => {
    
    // JavaScript code to handle video and description updates
    const videos = [
        {
            src: "assets/video/jakarta.mp4",
            title: "Wayne Henner Vid1",
            description: "Description for Vid1"
        },
        {
            src: "assets/video/bali.mp4",
            title: "Wayne Henner Vid2",
            description: "Description for Vid2"
        },
        {
            src: "assets/video/jogja.mp4",
            title: "Wayne Henner Vid3",
            description: "Description for Vid3"
        },
        // Add more video objects as needed
    ];

    let currentVideoIndex = 0;

    const backgroundVideo = document.getElementById("background-video");
    const videoTitle = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");

    const prevVideoButton = document.getElementById("prev-video");
    const nextVideoButton = document.getElementById("next-video");

    prevVideoButton.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        updateVideo();
        console.log("prev detected")
    });

    nextVideoButton.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        updateVideo();
        console.log("next detected")
    });

    function updateVideo() {
        const currentVideo = videos[currentVideoIndex];
        backgroundVideo.src = currentVideo.src;
        videoTitle.textContent = currentVideo.title;
        videoDescription.textContent = currentVideo.description;
    }

    // Initialize with the first video
    updateVideo();

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



        



});