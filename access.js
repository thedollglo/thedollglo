function submitCode() {
  const codeInput = document.getElementById("accessCode");
  const error = document.getElementById("error");

  const code = codeInput.value.trim().toUpperCase();
  const VALID_CODE = "DOLL15";

  if (code === VALID_CODE) {

    // Send notification to Tally (exact link you provided)
    fetch("https://tally.so/r/jaQe84", {
      method: "POST",
      mode: "no-cors"
    });

    // Optional: show received state (if you have it in HTML)
    const received = document.getElementById("received");
    if (received) {
      received.style.display = "block";
    }

    // Wait 15 seconds, then redirect to Canva subpage
    setTimeout(() => {
      window.location.href = "/home";
    }, 15000);

  } else {
    if (error) {
      error.style.display = "block";
    }
  }
}
