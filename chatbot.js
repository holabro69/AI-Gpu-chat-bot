
function getBotReply(msg) {
  msg = msg.toLowerCase().trim();
  if (msg.startsWith("compare ")) msg = msg.replace("compare ", "");

  if (msg.includes(" vs ")) {
    const [gpu1, gpu2] = msg.split(" vs ").map(s => s.trim());
    const spec1 = gpuSpecs[gpu1];
    const spec2 = gpuSpecs[gpu2];
    if (!spec1 || !spec2) return `❌ One or both GPUs not found. Try exact names like 'rtx 3060'.`;
    return `🔍 ${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}
📦 VRAM: ${spec1.vram} vs ${spec2.vram}
🧱 Arch: ${spec1.arch} vs ${spec2.arch}
⚙️ Perf: ${spec1.perf} vs ${spec2.perf}
🔥 TDP: ${spec1.tdp} vs ${spec2.tdp}
🔌 PCIe: ${spec1.pcie} vs ${spec2.pcie}
💵 MSRP: ${spec1.msrp} vs ${spec2.msrp}
🛒 2025 Price: ${spec1.price2025} vs ${spec2.price2025}
🔋 PSU: ${spec1.psu} vs ${spec2.psu}`;
  }

  if (msg.startsWith("spec ")) {
    const name = msg.replace("spec ", "").trim();
    const spec = gpuSpecs[name];
    if (spec) {
      return `📦 ${name.toUpperCase()}
🧠 VRAM: ${spec.vram}
🧱 Architecture: ${spec.arch}
⚙️ Performance: ${spec.perf}
📅 Release: ${spec.release}
🔥 TDP: ${spec.tdp}
🔌 PCIe: ${spec.pcie}
💵 MSRP: ${spec.msrp}
🛒 2025 Price: ${spec.price2025}
🔋 PSU Suggestion: ${spec.psu}`;
    } else return `❌ GPU "${name}" not found. Try exact name like 'rtx 3060'.`;
  }

  if (msg.startsWith("psu ")) {
    const watt = parseInt(msg.replace("psu ", "").replace("w", ""));
    if (isNaN(watt)) return "❌ Invalid PSU value.";
    const list = Object.entries(gpuSpecs).filter(([_, g]) => parseInt(g.psu) <= watt);
    return list.length ? `🔌 GPUs for PSU ≤ ${watt}W:
` + list.map(([n, g]) => `• ${n.toUpperCase()} (${g.psu})`).join("\n") : "❌ No GPUs found for that PSU.";
  }

  if (msg.startsWith("price ")) {
    const price = parseInt(msg.replace("price ", "").replace("$", ""));
    if (isNaN(price)) return "❌ Invalid price value.";
    const list = Object.entries(gpuSpecs).filter(([_, g]) => parseInt(g.price2025.replace("$", "")) <= price);
    return list.length ? `💰 GPUs under $${price}:
` + list.map(([n, g]) => `• ${n.toUpperCase()} (${g.price2025})`).join("\n") : "❌ No GPUs found under that price.";
  }

  if (msg.startsWith("tdp ")) {
    const tdpLimit = parseInt(msg.replace("tdp ", "").replace("w", ""));
    if (isNaN(tdpLimit)) return "❌ Invalid TDP value.";
    const list = Object.entries(gpuSpecs).filter(([_, g]) => parseInt(g.tdp) <= tdpLimit);
    return list.length ? `🔥 GPUs with TDP ≤ ${tdpLimit}W:
` + list.map(([n, g]) => `• ${n.toUpperCase()} (${g.tdp})`).join("\n") : "❌ No GPUs found under that TDP.";
  }

  if (msg.includes("credit")) return "💻 This chatbot was made by Holabro and powered by ChatGPT.";
  if (msg.includes("hello") || msg.includes("halo")) return "Halo! Ask me about any GPU 💼";
  if (msg.includes("test")) return "✅ Test complete. I'm working fine.";
  if (msg.includes("joke")) return "Why did the GPU break up with the CPU? It needed more space 💔";
  if (msg.includes("nvidia")) return "🟢 Great choice! NVIDIA has great drivers and strong AI support.";
  if (msg.includes("amd")) return "🔴 Solid! AMD GPUs offer strong value and FSR tech.";
  if (msg.includes("intel")) return "🔵 Intel is getting better! AV1 support and solid budget picks.";
  if (msg.includes("commands") || msg.includes("help") || msg.includes("feature")) {
    return `🧾 Available Commands:
📦 spec <gpu>
🔍 <gpu1> vs <gpu2>
💰 price <amount>
🔌 psu <wattage>
🔥 tdp <amount>
🎭 joke
📢 test
📋 credit
✅ nvidia / amd / intel`;
  }

  return "🤖 Type 'spec <gpu>', 'compare <gpu1> vs <gpu2>', or 'psu 500w' to get started.";
}
