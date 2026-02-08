const VALID_CODE = "DOLL15";
const WAIT_TIME = 15 * 60 * 1000; // 15 minutes
const CANVA_URL = "https://your-published-canva-link";
const TALLY_WEBHOOK = "https://tally.so/r/jaQe84";

function submitCode() {
  const input = document.getElementById("codeInput").value.trim();
  const error = document.getElementById("error");

  if (input !== VALID_CODE) {
    error.textContent = "Invalid access code";
    return;
  }

  const timestamp = Date.now();
  localStorage.setItem("accessGrantedAt", timestamp);

  // Fire Tally silently
  fetch(TALLY_WEBHOOK, { method: "POST", mode: "no-cors" });

  window.location.href = "received.html";
}

(function autoRedirectIfReady() {
  const grantedAt = localStorage.getItem("accessGrantedAt");
  if (!grantedAt) return;

  if (Date.now() - grantedAt >= WAIT_TIME) {
    window.location.href = CANVA_URL;
  }
})();
