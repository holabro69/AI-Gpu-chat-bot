
const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const toggle = document.getElementById("toggleMode");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "message " + sender;
  msgDiv.innerHTML = (sender === "user" ? "🧑‍💻 " : "🤖 ") + message;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const text = input.value.trim();
    if (!text) return;
    appendMessage("user", text);
    handleCommand(text.toLowerCase());
    input.value = "";
  }
});

function handleCommand(input) {
  if (input.startsWith("/spec ")) {
    const gpu = input.replace("/spec ", "").trim();
    const data = gpuSpecs[gpu];
    appendMessage("bot", data ? JSON.stringify(data, null, 2).replaceAll('\n', '<br>') : "GPU not found.");
  } else if (input.includes(" vs ")) {
    const [gpu1, gpu2] = input.split(" vs ");
    const g1 = gpuSpecs[gpu1.trim()];
    const g2 = gpuSpecs[gpu2.trim()];
    appendMessage("bot", g1 && g2 ? compareSpecs(gpu1.trim(), g1, gpu2.trim(), g2) : "One or both GPUs not found.");
  } else if (input.startsWith("/price ")) {
    const max = parseInt(input.replace("/price ", ""));
    const matches = Object.entries(gpuSpecs).filter(([k, v]) => v.price <= max);
    appendMessage("bot", matches.length ? matches.map(([k]) => k).join(", ") : "No GPUs under that price.");
  } else if (input.startsWith("/psu ")) {
    const watt = parseInt(input.replace("/psu ", ""));
    const matches = Object.entries(gpuSpecs).filter(([k, v]) => v.recommendedPSU <= watt);
    appendMessage("bot", matches.length ? matches.map(([k]) => k).join(", ") : "No GPUs fit that PSU.");
  } else if (input.startsWith("/tdp ")) {
    const tdp = parseInt(input.replace("/tdp ", ""));
    const matches = Object.entries(gpuSpecs).filter(([k, v]) => v.tdp <= tdp);
    appendMessage("bot", matches.length ? matches.map(([k]) => k).join(", ") : "No GPUs under that TDP.");
  } else if (input === "/help") {
    appendMessage("bot", `📋 Commands:<br>
    /spec <gpu><br>
    <gpu1> vs <gpu2><br>
    /price <amount><br>
    /psu <wattage><br>
    /tdp <watts><br>
    /test, /joke, /credit`);
  } else if (input === "/test") {
    appendMessage("bot", "✅ I'm working fine!");
  } else if (input === "/joke") {
    appendMessage("bot", "Why did the GPU break up with the CPU? Because it needed more *space* 💔😂");
  } else if (input === "/credit") {
    appendMessage("bot", "Made by Beacon Cake ⚡");
  } else {
    appendMessage("bot", "❓ Unknown command. Type /help for a list of commands.");
  }
}

function compareSpecs(g1Name, g1, g2Name, g2) {
  return `🔍 ${g1Name} vs ${g2Name}<br>
  VRAM: ${g1.vram} vs ${g2.vram}<br>
  TDP: ${g1.tdp}W vs ${g2.tdp}W<br>
  Price: $${g1.price} vs $${g2.price}<br>
  Recommended PSU: ${g1.recommendedPSU}W vs ${g2.recommendedPSU}W`;
}
