const welcome = document.getElementById("welcomeScreen");
const idScreen = document.getElementById("idScreen");
const resultScreen = document.getElementById("resultScreen");
const cardScreen = document.getElementById("cardScreen");
const finalScreen = document.getElementById("finalScreen");

// ENTER support
document.getElementById("continueBtn").addEventListener("click", showIDScreen);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !welcome.classList.contains("hidden")) {
    showIDScreen();
  }
});

function showIDScreen() {
  welcome.classList.add("hidden");
  idScreen.classList.remove("hidden");
}

// Step 2 → 3
function submitID() {
  const id = document.getElementById("serviceId").value.trim();
  const error = document.getElementById("error");

  if (!id) {
    error.textContent = "Please enter a Service ID";
    return;
  }

  error.textContent = "";

  let message = "";

  if (id === "NET-001") {
    message = "Restart modem → Check cables → Run test.";
  } else {
    message = "Press continue to find out what's wrong.";
  }

  idScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  document.getElementById("resultText").textContent = message;
}

// Step 3 → 4
function goToCardScreen() {
  resultScreen.classList.add("hidden");
  cardScreen.classList.remove("hidden");
}

// Step 4 → 5
function finish() {
  cardScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
}
