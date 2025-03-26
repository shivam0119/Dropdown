const collapsibleLabels = document.querySelectorAll('.collapsible label');
const collapsibleInputs = document.querySelectorAll('.collapsible input');
const imageDisplay = document.getElementById('imageDisplay');

collapsibleLabels.forEach(label => {
    label.addEventListener('click', function() {
        const checkbox = document.getElementById(label.getAttribute('for'));
        
        setTimeout(() => {
            if (checkbox.checked) {
                const image = label.getAttribute('data-image');
                switch (image) {
                    case 'image1':
                        imageDisplay.src = './plug.png';
                        break;
                    case 'image2':
                        imageDisplay.src = './cynthia.png';
                        break;
                    case 'image3':
                        imageDisplay.src = './hudu.png';
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
