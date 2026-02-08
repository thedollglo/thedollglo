const ACCESS_CODE = "DOLL15";

function checkAccess() {
  const input = document.getElementById("accessInput").value.trim();
  const error = document.getElementById("errorMsg");

  if (input === ACCESS_CODE) {
    sessionStorage.setItem("dollglo_access", "granted");
    window.location.href = "/home";
  } else {
    error.textContent = "Invalid access source.";
  }
}
