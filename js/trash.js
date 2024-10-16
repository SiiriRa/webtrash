function toggleDialog(event, id) {
    const dialog = document.getElementById(id);
    const allDialogs = document.querySelectorAll('.dialog');

    allDialogs.forEach(d => {
        if (d !== dialog) d.classList.remove('open');
    });

    dialog.classList.toggle('open');
    
    // Check for scrollbar after toggling the dialog
    checkScrollbar(dialog);

    event.stopPropagation(); // Prevent closing when clicking on the image
}

function checkScrollbar(dialog) {
    if (dialog.scrollHeight > dialog.clientHeight) {
        dialog.classList.add('scrollbar');
    } else {
        dialog.classList.remove('scrollbar');
    }
}

function positionImageDivs() {
    const imageDivs = document.querySelectorAll('.image-div');
    imageDivs.forEach(div => {
        const x = Math.random() * (window.innerWidth - 150); // Adjust based on width of the div
        const y = Math.random() * (window.innerHeight - 150); // Adjust based on header/footer height
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
        dialog.classList.remove('scrollbar'); // Clean up scrollbar class on close
    });
});