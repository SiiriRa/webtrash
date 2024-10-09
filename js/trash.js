function toggleDialog(event, id) {
    const dialog = document.getElementById(id);
    const allDialogs = document.querySelectorAll('.dialog');

    allDialogs.forEach(d => {
        if (d !== dialog) d.classList.remove('open');
    });

    dialog.classList.toggle('open');
    event.stopPropagation(); // Prevent closing when clicking on the image
}

function positionImageDivs() {
    const imageDivs = document.querySelectorAll('.image-div');
    imageDivs.forEach(div => {
        const x = Math.random() * (window.innerWidth - 500); // Adjust based on width of the div
        const y = Math.random() * (window.innerHeight - 500); // Adjust based on header/footer height
        div.style.position = 'absolute';
        div.style.left = `${Math.max(0, x)}px`; // Ensure x is not negative
        div.style.top = `${Math.max(0, y)}px`; // Ensure y is not negative
    });
}

// Initial positioning
positionImageDivs();

// Update positions on window resize
window.addEventListener('resize', positionImageDivs);

// Optional: close dialogs when clicking outside
document.addEventListener('click', (event) => {
    const dialogs = document.querySelectorAll('.dialog');
    dialogs.forEach(dialog => {
        dialog.classList.remove('open');
    });
});