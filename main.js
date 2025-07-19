// ==== BEGIN main.js ====

// ==== Theme Switcher ====
const themeBtn = document.getElementById("toggleMode");
themeBtn.onclick = function () {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
};
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
});

// Handles chatbox & commands (rest is your original code)
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function getSelectedCondition() {
  return document.querySelector('input[name="condition"]:checked').value;
}

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "msg " + sender;
  msgDiv.innerHTML = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function showResultsInChat(results, compareType) {
  if (results.length === 0) {
    addMessage("bot", "No GPUs found for your filter!");
    clearChart();
    return;
  }
  let html = "<b>Matching GPUs:</b><ul style='margin-top:4px'>";
  results.forEach(gpu => {
    html += `<li><b>${gpu.name.toUpperCase()}</b>: VRAM ${gpu.vram}, TDP ${gpu.tdp}, PSU ${gpu.psu}, Perf: ${gpu.perf}, Price: <span style="color:#18a058">${gpu.price || gpu.msrp}</span></li>`;
  });
  html += "</ul>";
  addMessage("bot", html);

  if (results.length >= 2 || compareType === 'force') {
    drawChart(results);
  } else {
    clearChart();
  }
}

let chartInstance = null;
function drawChart(gpus) {
  const ctx = document.getElementById('perfChart').getContext('2d');
  const labels = gpus.map(g => g.name.toUpperCase());
  const gaming = gpus.map(g => g.performance?.gaming || 0);
  const editing = gpus.map(g => g.performance?.editing || 0);
  const ai = gpus.map(g => g.performance?.ai || 0);

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        { label: 'Gaming', data: gaming, backgroundColor: '#007bff99' },
        { label: 'Editing', data: editing, backgroundColor: '#28a74599' },
        { label: 'AI', data: ai, backgroundColor: '#ff980099' }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'GPU Performance Score (higher is better)' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
function clearChart() {
  if (chartInstance) chartInstance.destroy();
  chartInstance = null;
}

function handleUserInput(input) {
  input = input.trim().toLowerCase();
  if (!input) return;

  // Price filter
  let match = input.match(/price\s+(\d+)\s+(\d+)(?:\s+(used|new))?/i);
  if (match) {
    let min = parseInt(match[1]), max = parseInt(match[2]);
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

  // TDP filter
  match = input.match(/tdp\s+(\d+)\s+(\d+)/i);
  if (match) {
    let min = parseInt(match[1]), max = parseInt(match[2]);
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let tdp = parseInt(spec.tdp);
      if (tdp >= min && tdp <= max) results.push({ name: key, ...spec });
    }
    showResultsInChat(results);
    return;
  }

  // PSU filter
  match = input.match(/psu\s+(\d+)\s+(\d+)/i);
  if (match) {
    let min = parseInt(match[1]), max = parseInt(match[2]);
    let results = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let psu = parseInt(spec.psu);
      if (psu >= min && psu <= max) results.push({ name: key, ...spec });
    }
    showResultsInChat(results);
    return;
  }

  // Single GPU spec
  match = input.match(/spec\s+([a-zA-Z0-9 ]+)/i);
  if (match) {
    let term = match[1].trim();
    let found = Object.entries(gpuSpecs).find(([key]) =>
      key.includes(term) || key.replace(/\s/g, '').includes(term.replace(/\s/g, ''))
    );
    if (!found) found = Object.entries(gpuSpecs).find(([key]) => key.includes(term));
    if (found) {
      let [key, spec] = found;
      addMessage("bot", `
        <b>${key.toUpperCase()}</b><br>
        VRAM: ${spec.vram}, Arch: ${spec.arch}, Perf: ${spec.perf}, Released: ${spec.release}<br>
        TDP: ${spec.tdp}, PSU: ${spec.psu}, Price (New): ${spec.price2025_new || spec.msrp}, Price (Used): ${spec.price2025_used || "-"}<br>
        Gaming: ${spec.performance?.gaming || '-'}, Editing: ${spec.performance?.editing || '-'}, AI: ${spec.performance?.ai || '-'}
      `);
      drawChart([{ name: key, ...spec }]);
    } else {
      addMessage("bot", "GPU not found!");
      clearChart();
    }
    return;
  }

  // VS Comparison
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
      drawChart([
        { name: a, ...specA },
        { name: b, ...specB }
      ]);
    } else {
      addMessage("bot", "Comparison failed! (Check your input)");
      clearChart();
    }
    return;
  }

  // Help & Credit/About
  if (["help"].includes(input)) {
    addMessage("bot", `
      <b>GPU Bot Help</b><br>
      <ul>
        <li><b>spec 4090</b> - Show spec for a GPU + chart</li>
        <li><b>3070 vs 4060</b> - Compare two GPUs with chart</li>
        <li><b>price 100 400</b> - List GPUs in $100-400 (uses condition selector)</li>
        <li><b>price 100 400 used</b> - List used GPUs in that range</li>
        <li><b>tdp 150 250</b> - List GPUs with TDP 150-250W</li>
        <li><b>psu 300 600</b> - List GPUs with PSU 300-600W</li>
        <li><b>help</b> - Show this help</li>
      </ul>
    `);
    clearChart();
    return;
  }
  if (["credit", "credits", "about", "hello"].includes(input)) {
    addMessage("bot", "👋 Hello, I was made by <b>Holabro</b> and powered by <b>ChatGPT</b>.");
    clearChart();
    return;
  }

  addMessage("bot", "Unknown command. Type <b>help</b> for available commands.");
  clearChart();
}

userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let val = userInput.value;
    addMessage("user", val);
    handleUserInput(val);
    userInput.value = "";
  }
});

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
