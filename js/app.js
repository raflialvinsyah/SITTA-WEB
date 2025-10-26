function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = dataPengguna.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("userLogin", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    // Tampilkan popup error
    showPopup("Email atau password salah!");
  }
}

// Fungsi popup kustom
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup-alert";
  popup.innerHTML = `
    <div class="popup-content">
      <p>${message}</p>
      <button onclick="this.parentElement.parentElement.remove()">Tutup</button>
    </div>
  `;
  document.body.appendChild(popup);
}
