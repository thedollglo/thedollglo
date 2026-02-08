const VALID_CODE = "DOLL15"; // change this if needed

function grantAccess() {
  const input = document.getElementById("accessCode");
  const error = document.getElementById("error");

  if (!input || !error) {
    alert("Page not wired correctly.");
    return;
  }

  if (input.value.trim() !== VALID_CODE) {
    error.textContent = "Invalid access code";
    return;
  }

  // Start 15-minute access window
  const expiresAt = Date.now() + 15 * 60 * 1000;
  localStorage.setItem("dg_access_expiry", expiresAt);

  // Optional notification (safe even if URL not active)
  fetch("https://tally.so/r/YOUR_FORM_ID", {
    method: "POST",
    mode: "no-cors"
  });

  // Redirect to Canva site
  window.location.href = https://www.canva.com/design/DAHAklIMxck/6ypTz3IR0h_EtIWDtGGY-w/view
}
