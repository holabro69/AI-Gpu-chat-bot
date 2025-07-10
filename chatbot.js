const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const tdpBtn = document.getElementById("tdp-filter");
const psuBtn = document.getElementById("psu-filter");
const compareBtn = document.getElementById("compare-btn");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender;
  msg.innerText = text;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function botReply(input) {
  const msg = input.trim().toLowerCase();
  if (msg === "hello") return "Hello, how can I help you today?";
  if (msg === "credit") return "Created by Hola Bro. 🤖 Powered by ChatGPT.";
  if (msg.startsWith("spec ")) {
    const name = msg.slice(5);
    const spec = gpuSpecs[name];
    if (spec) {
      return `📊 ${name.toUpperCase()}\nVRAM: ${spec.vram}\nArch: ${spec.arch}\nPerformance: ${spec.perf}\nRelease: ${spec.release}\nTDP: ${spec.tdp}\nPCIe: ${spec.pcie}\nMSRP: ${spec.msrp}\nPrice (2025): ${spec.price2025}\nPSU Req: ${spec.psu}`;
    } else {
      return `❌ GPU '${name}' not found.`;
    }
  }
  if (msg.startsWith("compare ")) {
    const parts = msg.slice(8).split(" vs ");
    if (parts.length === 2) {
      const a = gpuSpecs[parts[0]];
      const b = gpuSpecs[parts[1]];
      if (a && b) {
        return `📊 Comparing ${parts[0].toUpperCase()} vs ${parts[1].toUpperCase()}\n\n` +
               `${parts[0]} - VRAM: ${a.vram}, Perf: ${a.perf}, TDP: ${a.tdp}, Price: ${a.price2025}\n` +
               `${parts[1]} - VRAM: ${b.vram}, Perf: ${b.perf}, TDP: ${b.tdp}, Price: ${b.price2025}`;
      } else {
        return "❌ One or both GPUs not found.";
      }
    }
  }
  return "❓ I didn’t understand. Try commands like 'spec rtx 3060', 'compare rtx 3060 vs rx 6600', 'credit', or use the buttons.";
}

sendBtn.onclick = () => {
  const input = userInput.value;
  if (!input) return;
  appendMessage("user-msg", "🧑 " + input);
  const reply = botReply(input);
  appendMessage("bot-msg", "🤖 " + reply);
  userInput.value = "";
};

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

tdpBtn.onclick = () => {
  let results = Object.entries(gpuSpecs)
    .filter(([_, spec]) => parseInt(spec.tdp) <= 200)
    .map(([name, spec]) => `• ${name} (${spec.tdp})`);
  appendMessage("bot-msg", "🤖 GPUs with TDP ≤ 200W:\n" + results.join("\n"));
};

psuBtn.onclick = () => {
  let results = Object.entries(gpuSpecs)
    .filter(([_, spec]) => parseInt(spec.psu) <= 500)
    .map(([name, spec]) => `• ${name} (PSU: ${spec.psu})`);
  appendMessage("bot-msg", "🤖 GPUs with PSU ≤ 500W:\n" + results.join("\n"));
};

compareBtn.onclick = () => {
  userInput.value = "compare rtx 3060 vs rx 6600";
  sendBtn.click();
};

