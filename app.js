// Grab DOM elements
const fileInput = document.getElementById('file-input');
const uploadBox = document.getElementById('upload-box');
const mediaGallery = document.getElementById('media-gallery');

// Handle file selection
fileInput.addEventListener('change', handleFileSelect);

// Handle drag and drop events
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = '#ecf0f1'; // Change color on hover
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.backgroundColor = ''; // Revert color on drag leave
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = ''; // Revert color after drop
    const files = e.dataTransfer.files;
    handleFileSelect({ target: { files } }); // Handle dropped files
});

// Function to display file previews in the gallery
function handleFileSelect(event) {
    const files = event.target.files;
    Array.from(files).forEach(file => {
        const fileUrl = URL.createObjectURL(file);

        // Create an image element for the file
        const imgElement = document.createElement('img');
        imgElement.src = fileUrl;

        // Append the image to the gallery
        mediaGallery.appendChild(imgElement);
    });
}
