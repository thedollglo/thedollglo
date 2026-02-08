function submitCode() {
  const input = document.getElementById("accessCode").value.trim();
  const error = document.getElementById("error");

  // VALID ACCESS CODE
  const VALID_CODE = "DOLL15";

  // DESTINATION (your Canva page)
  const DESTINATION_URL = "https://tally.so/r/jaQe84";

  if (input === VALID_CODE) {
    error.style.display = "none";

    // Optional "received" pause (1.5s)
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:#000;
        color:#fff;
        font-family:'Times New Roman', serif;
        text-align:center;
      ">
        <h2>RECEIVED</h2>
        <p style="opacity:.7;">Your signal has been acknowledged.<br>Please wait.</p>
      </div>
    `;

    setTimeout(() => {
      window.location.href = DESTINATION_URL;
    }, 1500);

  } else {
    error.style.display = "block";
  }
}
