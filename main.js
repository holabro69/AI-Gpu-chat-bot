// Make sure gpuSpecs is available (from gpu-data.js)

const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotReply(input) {
  input = input.trim().toLowerCase();
  if (input === "help") {
    return "Type a GPU name (e.g. 'gtx 1050 ti') for specs, or try 'gtx 1060 vs 1070' for comparison.";
  }
  // Simple comparison
  if (input.includes("vs")) {
    const [gpu1, gpu2] = input.split("vs").map(x => x.trim());
    const d1 = gpuSpecs[gpu1];
    const d2 = gpuSpecs[gpu2];
    if (!d1 || !d2) return "One or both GPUs not found.";
    return `${gpu1.toUpperCase()} vs ${gpu2.toUpperCase()}\n- VRAM: ${d1.vram} vs ${d2.vram}\n- Perf: ${d1.perf} vs ${d2.perf}\n- Gaming: ${d1.performance.gaming} vs ${d2.performance.gaming}`;
  }
  // Single GPU info
  const data = gpuSpecs[input];
  if (data) {
    return `${input.toUpperCase()}\n- VRAM: ${data.vram}\n- Perf: ${data.perf}\n- Gaming: ${data.performance.gaming}\n- Editing: ${data.performance.editing}\n- TDP: ${data.tdp}\n- PSU: ${data.psu}`;
  }
  return "Sorry, I don't have info for that GPU. Try 'help' for commands.";
}

// This part was missing! It connects the chat input to the bot logic.
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

