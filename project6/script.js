// Function to hide all components
function componentsOff() {
    document.querySelectorAll('#bigimages img').forEach(img => img.style.display = 'none');
    document.querySelectorAll('#componentinfo > div').forEach(div => div.style.display = 'none');
}

// Function to show a specific component
function showComponent(id) {
    componentsOff();
    document.getElementById(id).style.display = 'block';
    document.getElementById(id + 'info').style.display = 'block';
}

// Initialize default component on page load
window.onload = function() {
    showComponent('cpu');
};