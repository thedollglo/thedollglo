* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: black;
  color: white;
  font-family: "Didot", "Bodoni MT", serif;
  overflow-x: hidden;
}

.panel {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.small {
  font-size: 14px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(48px, 12vw, 140px);
  letter-spacing: 0.08em;
}
