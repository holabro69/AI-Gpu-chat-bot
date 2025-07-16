// Make sure gpuSpecs is available (from gpu-data.js)

const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

// Add chat message
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Bot reply logic — now supports "which better"
function getBotReply(input) {
  input = input.trim().toLowerCase();

  // "which better" logic
  if (/which( one)? is? better/.test(input) || input.includes("which better")) {
    // Try to parse the GPUs (supports "or", "vs", or commas)
    let gpus = input.split(/which( one)? is? better|which better|or|vs|,/i)
      .filter(s => s.trim().length)
      .map(s => s.replace(/[\?]/g, '').trim());
    if (gpus.length < 2) return "Please specify two GPUs to compare.";
    const gpu1 = gpus[0];
    const gpu2 = gpus[1];
    const d1 = gpuSpecs[gpu1];
    const d2 = gpuSpecs[gpu2];
    if (!d1 || !d2) return "One or both GPUs not found.";
    // Winner function
    function winnerText(a, b) {
      if (a === undefined || b === undefined) return "N/A";
      if (a > b) return `${gpu1.toUpperCase()}`;
      if (a < b) return `${gpu2.toUpperCase()}`;
      return "Tie";
    }
    return `Which is better? ${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}
- Gaming: ${winnerText(d1.performance.gaming, d2.performance.gaming)}
- Editing: ${winnerText(d1.performance.editing, d2.performance.editing)}
- AI: ${winnerText(d1.performance.ai, d2.performance.ai)}`;
  }

  // "vs" comparison
  if (input.includes("vs")) {
    const [gpu1, gpu2] = input.split("vs").map(x => x.trim());
    const d1 = gpuSpecs[gpu1];
    const d2 = gpuSpecs[gpu2];
    if (!d1 || !d2) return "One or both GPUs not found.";
    return `${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}
- VRAM: ${d1.vram} vs ${d2.vram}
- Perf: ${d1.perf} vs ${d2.perf}
- Gaming: ${d1.performance.gaming} vs ${d2.performance.gaming}
- Editing: ${d1.performance.editing} vs ${d2.performance.editing}
- AI: ${(d1.performance.ai ?? "N/A")} vs ${(d2.performance.ai ?? "N/A")}
- TDP: ${d1.tdp} vs ${d2.tdp}
- PSU: ${d1.psu} vs ${d2.psu}
- Price (2025): ${d1.price2025} vs ${d2.price2025}`;
  }

  // Single GPU info
  const data = gpuSpecs[input];
  if (data) {
    return `${input.toUpperCase()}
- VRAM: ${data.vram}
- Perf: ${data.perf}
- Gaming: ${data.performance.gaming}
- Editing: ${data.performance.editing}
- AI: ${data.performance.ai !== undefined ? data.performance.ai : "N/A"}
- TDP: ${data.tdp}
- PSU: ${data.psu}
- MSRP: ${data.msrp}
- Price (2025): ${data.price2025}`;
  }

  // Help command
  if (input === "help") {
    return "Type a GPU name (e.g. 'gtx 1050 ti') for specs, try 'gtx 1060 vs 1070' for a direct comparison, or 'which better rtx 4060 or rx 7600' for a winner! Use filter buttons for quick lists.";
  }

  return "Sorry, I don't have info for that GPU. Try 'help' for commands.";
}

// Chat input event
userInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const text = userInput.value;
    if (!text) return;
    addMessage("user", text);
    const reply = getBotReply(text);
    addMessage("bot", reply);
    userInput.value = "";
  }
});

// Price Filter Button
document.getElementById("filterPrice").addEventListener("click", function() {
  let results = [];
  for (let name in gpuSpecs) {
    let priceStr = gpuSpecs[name].price2025.replace("$", "");
    let price = parseInt(priceStr);
    if (price <= 100) {
      results.push(`${name.toUpperCase()}: ${gpuSpecs[name].price2025}`);
    }
  }
  addMessage("bot", results.length ? "GPUs under $100 (2025):\n" + results.join("\n") : "No GPUs under $100 found.");
});

// PSU Filter Button
document.getElementById("filterPSU").addEventListener("click", function() {
  let results = [];
  for (let name in gpuSpecs) {
    let psu = parseInt(gpuSpecs[name].psu.replace("W", ""));
    if (psu <= 350) {
      results.push(`${name.toUpperCase()}: PSU ${gpuSpecs[name].psu}`);
    }
  }
  addMessage("bot", results.length ? "GPUs needing ≤350W PSU:\n" + results.join("\n") : "No GPUs found with PSU ≤350W.");
});

// TDP Filter Button
document.getElementById("filterTDP").addEventListener("click", function() {
  let results = [];
  for (let name in gpuSpecs) {
    let tdp = parseInt(gpuSpecs[name].tdp.replace("W", ""));
    if (tdp <= 120) {
      results.push(`${name.toUpperCase()}: TDP ${gpuSpecs[name].tdp}`);
    }
  }
  addMessage("bot", results.length ? "GPUs with TDP ≤120W:\n" + results.join("\n") : "No GPUs found with TDP ≤120W.");
});

// Theme toggle button (NO chat message!)
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
});

// Help Button
document.querySelectorAll('.btns button')[4].addEventListener("click", function() {
  addMessage('user', 'help');
  addMessage('bot', getBotReply('help'));
});
