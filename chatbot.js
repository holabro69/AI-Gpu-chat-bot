function getBotReply(msg) {
  msg = msg.toLowerCase().trim();

  if (msg.includes(" vs ")) {
    const [gpu1, gpu2] = msg.split(" vs ").map(s => s.trim());
    const spec1 = gpuSpecs[gpu1];
    const spec2 = gpuSpecs[gpu2];
    if (!spec1 || !spec2) return `❌ GPU not found.`;
    return `🔍 ${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}
VRAM: ${spec1.vram} vs ${spec2.vram}
Perf: ${spec1.perf} vs ${spec2.perf}
Price: ${spec1.price2025} vs ${spec2.price2025}`;
  }

  if (msg.startsWith("spec ")) {
    const name = msg.replace("spec ", "").trim();
    const spec = gpuSpecs[name];
    if (!spec) return `❌ GPU not found.`;
    return `📦 ${name.toUpperCase()} - ${spec.vram}, ${spec.perf}, ${spec.price2025}`;
  }

  return "❓ Try: 'spec rtx 3060' or 'rx 6600 vs rtx 3060'";
}

function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");
  const msg = input.value.trim();
  if (!msg) return;

  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.textContent = "🧑 " + msg;
  chat.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot";
  botMsg.textContent = "🤖 " + getBotReply(msg);
  chat.appendChild(botMsg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

