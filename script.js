
const collapsibleLabels = document.querySelectorAll('.collapsible label');
const collapsibleInputs = document.querySelectorAll('.collapsible input');
const mediaDisplay = document.getElementById('mediaDisplay');
const mediaVideo = document.getElementById('mediaVideo');


collapsibleLabels.forEach(label => {
    label.addEventListener('click', function() {
    
        const checkbox = document.getElementById(label.getAttribute('for'));

      
        setTimeout(() => {
            const media = label.getAttribute('data-media');
            if (checkbox.checked) {
                switch (media) {
                    case 'image1':
                        mediaDisplay.src = './plug.png'; 
                        mediaDisplay.style.display = 'block'; 
                        mediaVideo.style.display = 'none';    
                        break;
                    case 'video2':
                        mediaVideo.style.display = 'block';
                        mediaVideo.src = './855563-hd_1920_1080_24fps.mp4';  
                        mediaDisplay.style.display = 'none'; 
                        break;
                    case 'image3':
                        mediaDisplay.src = './cynthia.png';
                        mediaDisplay.style.display = 'block'; 
                        mediaVideo.style.display = 'none';
                        break;
                }
            }
        }, 50);
        collapsibleInputs.forEach(input => {
            if (input !== checkbox) {
                input.checked = false;
            }
        });
    });
});
