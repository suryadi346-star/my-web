// Toggle mobile navigation menu
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
    menuNav.classList.toggle("menu-active");
});

// Tutup menu ketika salah satu link diklik (mobile UX)
const navLinks = document.querySelectorAll(".menu-navigation a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuNav.classList.remove("menu-active");
    });
});

// Handler form contact
function handleSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const gmail = document.getElementById("gmail").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !gmail || !pesan) {
        alert("Mohon isi semua field terlebih dahulu.");
        return;
    }

    // Simulasi pengiriman (ganti dengan integrasi backend/email service sesuai kebutuhan)
    alert(`Terima kasih, ${nama}! Pesan kamu sudah diterima. Kami akan menghubungi kamu di ${gmail}.`);
    event.target.reset();
}
