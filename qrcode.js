function showModal() {
    document.getElementById("modal").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modal").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function showQR() {
    closeModal();
    document.getElementById("qrModal").classList.add("active");
    document.getElementById("qrOverlay").classList.add("active");
}

function closeQR() {
    document.getElementById("qrModal").classList.remove("active");
    document.getElementById("qrOverlay").classList.remove("active");
}
