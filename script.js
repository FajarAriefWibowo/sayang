document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const correctName = "Cindy Aulia Rachma";  // Nama yang diizinkan
    const correctDOB = "2004-09-07";  // Tanggal lahir yang diizinkan

    const inputName = document.getElementById("name").value;
    const inputDOB = document.getElementById("dob").value;

    if (inputName === correctName && inputDOB === correctDOB) {
        document.getElementById("message").textContent = "Login berhasil!";
        document.getElementById("message").style.color = "green";

        // Tampilkan halaman kedua
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("secondPage").style.display = "flex";
    } else {
        document.getElementById("message").textContent = "Nama atau Tanggal Lahir salah!";
        document.getElementById("message").style.color = "red";
    }
});

function exitWebsite() {
    // Kode untuk keluar dari website
    window.location.href = 'about:blank';
}

// Tambahkan event listener untuk tombol Exit
document.getElementById("exitButton").addEventListener("click", exitWebsite);
