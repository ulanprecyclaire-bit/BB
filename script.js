let rotation = 0;
let score = 0;
let spinLocked = false;
let answers = [];

/* 🔐 LOGIN (UNCHANGED PASSWORD) */
function unlock() {
  const p = document.getElementById("pass").value;

  if (p === "Babi 0328") {
    document.getElementById("login").style.display = "none";
    document.getElementById("menuScreen").classList.remove("hidden");
  } else {
    document.getElementById("msg").innerHTML = "❌ Incorrect";
  }
}

function togglePass() {
  const i = document.getElementById("pass");
  i.type = i.type === "password" ? "text" : "password";
}

/* 🎮 NAVIGATION */
function openGame(game) {
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

  document.querySelectorAll(".game").forEach(g => g.classList.add("hidden"));
  document.getElementById(game + "Game").classList.remove("hidden");
}

function backMenu() {
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("menuScreen").classList.remove("hidden");
}

/* 🎡 WHEEL */
function spinWheel() {
  if (spinLocked) return;

  const w = document.getElementById("wheel");

  rotation += Math.random() * 360 + 1800;
  w.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const options = ["💋 Kiss","🤗 Hug","😏 Bite","💜 You decide","😢 Sad","🔁 Try again"];
    const r = options[Math.floor(Math.random() * options.length)];

    document.getElementById("wheelResult").innerHTML = r;

    if (r !== "🔁 Try again") spinLocked = true;
    else spinLocked = false;

  }, 4000);
}

/* 💬 TRUTH / DARE + SAVE */
function pickTruth() {
  let t = "Truth question 💬";
  document.getElementById("toldResult").innerHTML = t;

  answers.push("Truth: " + t);
  updateAnswers();
}

function pickDare() {
  let d = "Dare challenge 💘";
  document.getElementById("toldResult").innerHTML = d;

  answers.push("Dare: " + d);
  updateAnswers();
}

function updateAnswers() {
  const list = document.getElementById("answerList");
  list.innerHTML = "";

  answers.forEach(a => {
    let li = document.createElement("li");
    li.innerText = a;
    list.appendChild(li);
  });
}
