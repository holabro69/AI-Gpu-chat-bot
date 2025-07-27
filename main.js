// ==== BEGIN main.js CYBERPUNK EDITION ====

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

// ==== Chat & Commands ====
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function getSelectedCondition() {
  return document.querySelector('input[name="condition"]:checked').value;
}

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "msg " + sender + (sender === "bot" ? " pulse" : "");
  msgDiv.innerHTML = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Bot typing animated glow
function showBotTyping(callback) {
  const typingDiv = document.createElement("div");
  typingDiv.className = "msg bot pulse";
  typingDiv.innerHTML = `<span style="letter-spacing:0.15em;">...</span>`;
  chatbox.appendChild(typingDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
  setTimeout(() => {
    typingDiv.remove();
    if (callback) callback();
  }, 650 + Math.random() * 500);
}

function showResultsInChat(results, compareType) {
  if (results.length === 0) {
    showBotTyping(() => {
      addMessage("bot", "No GPUs found for your filter!");
      clearChart();
    });
    return;
  }
  let html = "<b>Matching GPUs:</b><ul style='margin-top:4px'>";
  results.forEach(gpu => {
    html += `<li><b>${gpu.name.toUpperCase()}</b>: VRAM ${gpu.vram}, TDP ${gpu.tdp}, PSU ${gpu.psu}, Perf: ${gpu.perf}, Price: <span style=\"color:#18a058\">${gpu.price || gpu.msrp}</span></li>`;
  });
  html += "</ul>";
  showBotTyping(() => {
    addMessage("bot", html);
    if (results.length >= 2 || compareType === 'force') {
      drawChart(results);
    } else {
      clearChart();
    }
  });
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
        { label: 'Gaming', data: gaming, backgroundColor: '#00e5ff99' },
        { label: 'Editing', data: editing, backgroundColor: '#36ff9e99' },
        { label: 'AI', data: ai, backgroundColor: '#bc38ff99' }
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

  // ==== HUMANOID "Best GPU for Budget & Use-case" (UPGRADED) ====
  let bestGpuMatch = input.match(
    /(find|best|recommend)[\s\w]*(gpu|graphics card|vga)?[\s\w]*(?:under|below|<=|less than)?\s*\$?(\d{2,5})?[\s\w]*(?:for)?\s*([\w\s,]*)?/i
  );
  if (bestGpuMatch) {
    let budget = bestGpuMatch[3] ? parseInt(bestGpuMatch[3]) : null;
    let usecaseText = (bestGpuMatch[4] || '').replace(/and|or|,|\s+/gi, ' ').trim();
    let useCases = [];
    if (/ai|ml|deep learning/i.test(usecaseText)) useCases.push('ai');
    if (/edit|video|workstation|render/i.test(usecaseText)) useCases.push('editing');
    if (/game/i.test(usecaseText)) useCases.push('gaming');
    if (useCases.length === 0) useCases = ['gaming', 'editing', 'ai'];
    if (!budget) budget = 400;

    let condition = getSelectedCondition();
    let priceKey = (condition === "used") ? "price2025_used" : "price2025_new";

    let gpus = [];
    for (const [key, spec] of Object.entries(gpuSpecs)) {
      let price = spec[priceKey];
      if (!price) continue;
      let p = parseInt(price.replace('$', ''));
      if (p > budget) continue;
      let hasUseCase = useCases.some(type => typeof spec.performance?.[type] === "number");
      if (!hasUseCase) continue;
      gpus.push({ name: key, ...spec, price });
    }
    gpus.sort((a, b) => {
      let aScore = useCases.reduce((s, type) => s + (a.performance[type] || 0), 0);
      let bScore = useCases.reduce((s, type) => s + (b.performance[type] || 0), 0);
      return bScore - aScore;
    });

    let topList = gpus.slice(0, 4);
    let resp = "";

    if (topList.length === 0) {
      resp = `😔 Bro, nothing found under <b>$${budget}</b> for <b>${useCases.join(' / ')}</b> (${condition}). Try raising your budget or changing use case.`;
    } else {
      resp = `Yo dawg! 🔥 Here’s my top picks under <b>$${budget}</b> for <b>${useCases.join(' / ')}</b> (${condition}):<ul style="margin-top:4px">`;
      topList.forEach(gpu => {
        resp += `<li><b>${gpu.name.toUpperCase()}</b> — ${gpu.vram}, Perf: ${gpu.perf}, Released: ${gpu.release}, Price: <span style="color:#18a058">${gpu.price}</span><br>
        <small>Gaming: ${gpu.performance?.gaming || "-"} | Editing: ${gpu.performance?.editing || "-"} | AI: ${gpu.performance?.ai || "-"}</small></li>`;
      });
      resp += "</ul><div style='margin-top:7px;'>Need to compare? Type <b>3070 vs 4060</b> or similar!</div>";
    }
    showBotTyping(() => {
      addMessage("bot", resp);
      if (topList.length >= 2) drawChart(topList);
      else clearChart();
    });
    return;
  }

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
      showBotTyping(() => {
        addMessage("bot", `
          <b>${key.toUpperCase()}</b><br>
          VRAM: ${spec.vram}, Arch: ${spec.arch}, Perf: ${spec.perf}, Released: ${spec.release}<br>
          TDP: ${spec.tdp}, PSU: ${spec.psu}, Price (New): ${spec.price2025_new || spec.msrp}, Price (Used): ${spec.price2025_used || "-"}<br>
          Gaming: ${spec.performance?.gaming || '-'}, Editing: ${spec.performance?.editing || '-'}, AI: ${spec.performance?.ai || '-'}
        `);
        drawChart([{ name: key, ...spec }]);
      });
    } else {
      showBotTyping(() => {
        addMessage("bot", "GPU not found!");
        clearChart();
      });
    }
    return;
  }

  // VS Comparison (multi-GPU support)
  if (input.includes('vs')) {
    const terms = input.split('vs').map(t => t.trim()).filter(Boolean);
    const foundGpus = [];
    for (const term of terms) {
      let found = Object.entries(gpuSpecs).find(([key]) =>
        key.toLowerCase().includes(term) || key.replace(/\s/g, '').toLowerCase().includes(term.replace(/\s/g, ''))
      );
      if (found) {
        foundGpus.push({ name: found[0], ...found[1] });
      }
    }
    if (foundGpus.length >= 2) {
      let summary = foundGpus.map(gpu =>
        `<b>${gpu.name.toUpperCase()}</b>: VRAM ${gpu.vram}, TDP ${gpu.tdp}, PSU ${gpu.psu}, Price: ${gpu.price2025_new || gpu.msrp}, Perf: ${gpu.perf}`
      ).join('<br>');
      showBotTyping(() => {
        addMessage("bot", summary);
        drawChart(foundGpus);
      });
    } else {
      showBotTyping(() => {
        addMessage("bot", "Comparison failed! (Check your input)");
        clearChart();
      });
    }
    return;
  }

  // Help command
  if (["help"].includes(input)) {
    showBotTyping(() => {
      addMessage("bot", `
        <b>GPU Bot Help</b><br>
        <ul>
          <li><b>spec 4090</b> - Show spec for a GPU + chart</li>
          <li><b>3070 vs 4060</b> - Compare multiple GPUs with chart</li>
          <li><b>price 100 400</b> - List GPUs in $100-400 (uses condition selector)</li>
          <li><b>price 100 400 used</b> - List used GPUs in that range</li>
          <li><b>tdp 150 250</b> - List GPUs with TDP 150-250W</li>
          <li><b>psu 300 600</b> - List GPUs with PSU 300-600W</li>
          <li><b>help</b> - Show this help</li>
        </ul>
      `);
      clearChart();
    });
    return;
  }

  // Test command
  if (["test", "testing", "cek"].includes(input)) {
    showBotTyping(() => {
      addMessage("bot", "Test success ✅ — how can I help you today?");
      clearChart();
    });
    return;
  }

  // Friendly hello command (YOUR STYLE)
  if (["hello", "hallo", "hi", "hey"].includes(input)) {
    showBotTyping(() => {
      addMessage("bot", "hello i was gpu chat bot, how can i help you today? say <b>help</b> if you confused 🙂");
      clearChart();
    });
    return;
  }

  // Credits/About
  if (["credit", "credits", "about"].includes(input)) {
    showBotTyping(() => {
      addMessage("bot", "👋 Hello, I was made by <b>Holabro</b> and powered by <b>ChatGPT</b>.");
      clearChart();
    });
    return;
  }

  // Unknown command fallback
  showBotTyping(() => {
    addMessage("bot", "Unknown command. Type <b>help</b> for available commands.");
    clearChart();
  });
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

// ==== END main.js CYBERPUNK EDITION ====
