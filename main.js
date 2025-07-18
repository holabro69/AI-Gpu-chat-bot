// ==== BEGIN main.js ====

// Example: gpuSpecs should have both price2025_new and price2025_used for price filters.
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

// Theme toggler
document.getElementById("toggleMode").onclick = function () {
  document.body.classList.toggle("dark");
};

// Get the selected price condition (used/new)
function getSelectedCondition() {
  return document.querySelector('input[name="condition"]:checked').value;
}

// Display chat messages
function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "msg " + sender;
  msgDiv.innerHTML = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Display filtered GPU results in chat
function showResultsInChat(results) {
  if (results.length === 0) {
    addMessage("bot", "No GPUs found for your filter!");
    return;
  }
  let html = "<b>Matching GPUs:</b><ul style='margin-top:4px'>";
  results.forEach(gpu => {
    html += `<li><b>${gpu.name.toUpperCase()}</b>: VRAM ${gpu.vram}, TDP ${gpu.tdp}, PSU ${gpu.psu}, Perf: ${gpu.perf}, Price: <span style="color:#18a058">${gpu.price || gpu.msrp}</span></li>`;
  });
  html += "</ul>";
  addMessage("bot", html);
}

// Parse chat commands (price filter, tdp filter, spec, vs, etc)
function handleUserInput(input) {
  input = input.trim().toLowerCase();
  if (!input) return;

  // --- Price filter: price min max [used|new] ---
  let match = input.match(/price\s+(\d+)\s+(\d+)(?:\s+(used|new))?/i);
  if (match) {
    let min = parseInt(match[1]);
    let max = parseInt(match[2]);
    let condition = match[3] || getSelectedCondition();
    let priceKey = (condition === "used") ? "price2025_used" : "price2025_new";
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let price = spec[priceKey];
      if (!price) continue;
      let p = parseInt(price.replace('$', ''));
      if (p >= min && p <= max) results.push({ name: key, ...spec, price: price });
    }
    showResultsInChat(results);
    return;
  }

  // --- TDP filter: tdp min max ---
  match = input.match(/tdp\s+(\d+)\s+(\d+)/i);
  if (match) {
    let min = parseInt(match[1]);
    let max = parseInt(match[2]);
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let tdp = parseInt(spec.tdp);
      if (tdp >= min && tdp <= max) results.push({ name: key, ...spec });
    }
    showResultsInChat(results);
    return;
  }

  // --- PSU filter: psu min max ---
  match = input.match(/psu\s+(\d+)\s+(\d+)/i);
  if (match) {
    let min = parseInt(match[1]);
    let max = parseInt(match[2]);
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let psu = parseInt(spec.psu);
      if (psu >= min && psu <= max) results.push({ name: key, ...spec });
    }
    showResultsInChat(results);
    return;
  }

  // --- Single GPU spec: spec [model/number] ---
  match = input.match(/spec\s+([a-zA-Z0-9 ]+)/i);
  if (match) {
    let term = match[1].trim();
    // Allow searching by just the number (e.g. 'spec 3060')
    let found = Object.entries(gpuSpecs).find(([key, spec]) =>
      key.includes(term) || key.replace(/\s/g, '').includes(term.replace(/\s/g, ''))
    );
    if (!found) {
      // Try fallback: only match the number
      found = Object.entries(gpuSpecs).find(([key, spec]) => key.includes(term));
    }
    if (found) {
      let [key, spec] = found;
      addMessage("bot", `
        <b>${key.toUpperCase()}</b><br>
        VRAM: ${spec.vram}, Arch: ${spec.arch}, Perf: ${spec.perf}, Released: ${spec.release}<br>
        TDP: ${spec.tdp}, PSU: ${spec.psu}, Price (New): ${spec.price2025_new || spec.msrp}, Price (Used): ${spec.price2025_used || "-"}<br>
        Gaming: ${spec.performance?.gaming || '-'}, Editing: ${spec.performance?.editing || '-'}, AI: ${spec.performance?.ai || '-'}
      `);
    } else {
      addMessage("bot", "GPU not found!");
    }
    return;
  }

  // --- VS Comparison: [model1] vs [model2] ---
  match = input.match(/([a-zA-Z0-9 ]+)\s+vs\s+([a-zA-Z0-9 ]+)/i);
  if (match) {
    let gpu1 = match[1].trim(), gpu2 = match[2].trim();
    let [a, specA] = Object.entries(gpuSpecs).find(([k]) => k.includes(gpu1) || k.replace(/\s/g, '').includes(gpu1.replace(/\s/g, ''))) || [];
    let [b, specB] = Object.entries(gpuSpecs).find(([k]) => k.includes(gpu2) || k.replace(/\s/g, '').includes(gpu2.replace(/\s/g, ''))) || [];
    if (specA && specB) {
      addMessage("bot", `
        <b>${a.toUpperCase()}</b> vs <b>${b.toUpperCase()}</b><br>
        <b>${a}:</b> VRAM ${specA.vram}, TDP ${specA.tdp}, PSU ${specA.psu}, Price: ${specA.price2025_new || specA.msrp}, Perf: ${specA.perf}<br>
        <b>${b}:</b> VRAM ${specB.vram}, TDP ${specB.tdp}, PSU ${specB.psu}, Price: ${specB.price2025_new || specB.msrp}, Perf: ${specB.perf}<br>
      `);
    } else {
      addMessage("bot", "Comparison failed! (Check your input)");
    }
    return;
  }

  // --- Help ---
  if (input === "help") {
    addMessage("bot", `
      <b>GPU Bot Help</b><br>
      <ul>
        <li><b>spec 4090</b> - Show spec for a GPU</li>
        <li><b>3070 vs 4060</b> - Compare two GPUs</li>
        <li><b>price 100 400</b> - List GPUs in $100-400 (uses selected condition)</li>
        <li><b>price 100 400 used</b> - List used GPUs in that range</li>
        <li><b>tdp 150 250</b> - List GPUs with TDP 150-250W</li>
        <li><b>psu 300 600</b> - List GPUs with PSU 300-600W</li>
        <li><b>help</b> - Show this help</li>
      </ul>
    `);
    return;
  }

  // --- Credits / About ---
  if (input === "credit" || input === "credits" || input === "about" || input === "hello") {
    addMessage("bot", "👋 Hello, I was made by <b>Holabro</b> and powered by <b>ChatGPT</b>.");
    return;
  }

  // --- Fallback ---
  addMessage("bot", "Unknown command. Type <b>help</b> for available commands.");
}

// User input event
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let val = userInput.value;
    addMessage("user", val);
    handleUserInput(val);
    userInput.value = "";
  }
});

// Filter buttons (will prompt user for min/max then filter)
function promptFilter(type) {
  let min = prompt(`Minimum ${type}?`);
  let max = prompt(`Maximum ${type}?`);
  if (!min || !max) return;
  min = parseInt(min); max = parseInt(max);
  if (type === "Price") {
    let results = filterByPrice(min, max);
    showResultsInChat(results);
  }
  if (type === "TDP") {
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let tdp = parseInt(spec.tdp);
      if (tdp >= min && tdp <= max) results.push({ name: key, ...spec });
    }
    showResultsInChat(results);
  }
  if (type === "PSU") {
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let psu = parseInt(spec.psu);
      if (psu >= min && psu <= max) results.push({ name: key, ...spec });
    }
    showResultsInChat(results);
  }
}
document.getElementById("filterPrice").onclick = () => promptFilter("Price");
document.getElementById("filterTDP").onclick = () => promptFilter("TDP");
document.getElementById("filterPSU").onclick = () => promptFilter("PSU");

// Core filter function for price, respects used/new selector
function filterByPrice(min, max) {
  let condition = getSelectedCondition();
  let priceKey = (condition === "used") ? "price2025_used" : "price2025_new";
  let results = [];
  for (const [key, spec] of Object.entries(gpuSpecs)) {
    let price = spec[priceKey];
    if (!price) continue;
    let p = parseInt(price.replace('$', ''));
    if (p >= min && p <= max) {
      results.push({ name: key, ...spec, price: price });
    }
  }
  return results;
}

// ==== END main.js ====

