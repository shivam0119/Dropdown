// Get all collapsible labels and checkboxes
const collapsibleLabels = document.querySelectorAll('.collapsible label');
const collapsibleInputs = document.querySelectorAll('.collapsible input');
const mediaDisplay = document.getElementById('mediaDisplay');
const mediaVideo = document.getElementById('mediaVideo');

// Add event listeners to each label
collapsibleLabels.forEach(label => {
    label.addEventListener('click', function() {
        // Get the corresponding checkbox for the clicked label
        const checkbox = document.getElementById(label.getAttribute('for'));

        // Ensure the media changes immediately on the first click
        setTimeout(() => {
            const media = label.getAttribute('data-media');
            if (checkbox.checked) {
                switch (media) {
                    case 'image1':
                        mediaDisplay.src = './plug.png'; // Path to image1
                        mediaDisplay.style.display = 'block';  // Show image
                        mediaVideo.style.display = 'none';    // Hide video
                        break;
                    case 'video2':
                        mediaVideo.style.display = 'block'; // Show video
                        mediaVideo.src = './855563-hd_1920_1080_24fps.mp4';    // Path to video2
                        mediaDisplay.style.display = 'none'; // Hide image
                        break;
                    case 'image3':
                        mediaDisplay.src = './cynthia.png'; // Path to image3
                        mediaDisplay.style.display = 'block'; // Show image
                        mediaVideo.style.display = 'none'; // Hide video
                        break;
                }
            }
        }, 50); // Use a small delay to make sure the checkbox has toggled its state

        // Close all other collapsibles when one is opened
        collapsibleInputs.forEach(input => {
            if (input !== checkbox) {
                input.checked = false; // Uncheck the other checkboxes
            }
        });
    });
});
