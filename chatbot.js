const chat = document.getElementById("chat");
const userInput = document.getElementById("user-input");

function appendMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = "msg " + sender;
  msg.innerText = (sender === "user" ? "🧑 " : "🤖 ") + text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function handleUserInput(e) {
  if (e.key === "Enter") {
    const text = userInput.value.trim();
    if (!text) return;
    appendMessage(text, "user");
    respondToUser(text.toLowerCase());
    userInput.value = "";
  }
}

userInput.addEventListener("keydown", handleUserInput);

function respondToUser(text) {
  if (text.includes("hello")) {
    appendMessage("Hello! How can I help you today?");
  } else if (text.includes("credit")) {
    appendMessage("Made by Hola Bro. 🤖 Powered by ChatGPT.");
  } else if (text.startsWith("/spec")) {
    const name = text.replace("/spec", "").trim();
    const spec = gpuSpecs[name];
    if (spec) {
      appendMessage(`${name.toUpperCase()} - VRAM: ${spec.vram}, Arch: ${spec.arch}, Perf: ${spec.perf}, TDP: ${spec.tdp}, PSU: ${spec.psu}, MSRP: ${spec.msrp}, Price (2025): ${spec.price2025}`);
    } else {
      appendMessage("GPU not found.");
    }
  } else if (text.startsWith("compare")) {
    const gpus = text.replace("compare", "").trim().split("vs");
    if (gpus.length === 2) {
      compare(gpus[0].trim(), gpus[1].trim());
    } else {
      appendMessage("Use format: compare rtx 3060 vs rx 6600");
    }
  } else {
    appendMessage("I'm not sure. Try `/spec rtx 3060` or `compare rtx 3060 vs rx 6600`.");
  }
}

function compare(gpu1, gpu2) {
  const spec1 = gpuSpecs[gpu1.toLowerCase()];
  const spec2 = gpuSpecs[gpu2.toLowerCase()];
  if (!spec1 || !spec2) {
    appendMessage("One or both GPUs not found.");
    return;
  }
  appendMessage(`🔍 ${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}
- VRAM: ${spec1.vram} vs ${spec2.vram}
- Perf: ${spec1.perf} vs ${spec2.perf}
- TDP: ${spec1.tdp} vs ${spec2.tdp}
- PSU: ${spec1.psu} vs ${spec2.psu}
- Price 2025: ${spec1.price2025} vs ${spec2.price2025}`);
}

function filterByTDP() {
  const filtered = Object.entries(gpuSpecs).filter(([_, spec]) => parseInt(spec.tdp) <= 200);
  appendMessage("GPUs with TDP ≤ 200W:");
  filtered.forEach(([name]) => appendMessage("- " + name.toUpperCase()));
}

function filterByPSU() {
  const filtered = Object.entries(gpuSpecs).filter(([_, spec]) => parseInt(spec.psu) <= 500);
  appendMessage("GPUs needing PSU ≤ 500W:");
  filtered.forEach(([name]) => appendMessage("- " + name.toUpperCase()));
}