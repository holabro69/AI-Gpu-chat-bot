function getBotReply(msg) {
  msg = msg.toLowerCase().trim();
  if (msg.startsWith("compare ")) msg = msg.replace("compare ", "");

  if (msg.includes(" vs ")) {
    const [gpu1, gpu2] = msg.split(" vs ").map(s => s.trim());
    const spec1 = gpuSpecs[gpu1];
    const spec2 = gpuSpecs[gpu2];
    if (!spec1 || !spec2) return `❌ GPU not found.`;
    return `🔍 ${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}
VRAM: ${spec1.vram} vs ${spec2.vram}
Arch: ${spec1.arch} vs ${spec2.arch}
Perf: ${spec1.perf} vs ${spec2.perf}
TDP: ${spec1.tdp} vs ${spec2.tdp}
PCIe: ${spec1.pcie} vs ${spec2.pcie}
MSRP: ${spec1.msrp} vs ${spec2.msrp}
2025 Price: ${spec1.price2025} vs ${spec2.price2025}
PSU: ${spec1.psu} vs ${spec2.psu}`;
  }

  if (msg.startsWith("spec ")) {
    const name = msg.replace("spec ", "").trim();
    const spec = gpuSpecs[name];
    if (!spec) return `❌ GPU not found.`;
    return `📦 ${name.toUpperCase()}
VRAM: ${spec.vram}
Architecture: ${spec.arch}
Performance: ${spec.perf}
Release: ${spec.release}
TDP: ${spec.tdp}
PCIe: ${spec.pcie}
MSRP: ${spec.msrp}
2025 Price: ${spec.price2025}
PSU: ${spec.psu}`;
  }

  return "❓ Try: 'spec rtx 3060' or 'rx 6600 xt vs rtx 3060'";
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
