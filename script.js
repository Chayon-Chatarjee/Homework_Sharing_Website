function checkLogin() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  if (password === "homework") {
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("homework").classList.remove("hidden");
  } else {
    alert("Wrong password!");
  }
}
function goAdmin() {
  const password = prompt("Enter admin password:");
  if (password === "admin123") {
    // Redirect to admin page
    window.location.href = "admin.html";
  } else {
    alert("Wrong admin password!");
  }
}
