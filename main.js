let chartObj = null;

window.onload = () => {
  addMessage('bot', `
    Hello! I was made by Holabro and powered by ChatGPT.<br>
    Type: <b>spec 4090</b> | <b>best 400 700</b> | <b>3060 vs 6650 xt</b> | <b>price 200 400</b> | <b>tdp 100 180</b><br>
    Or use the buttons below!
  `);
};

function addMessage(who, text) {
  const chatbox = document.getElementById('chatbox');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'msg ' + who;
  msgDiv.innerHTML = `<b>${who === 'bot' ? 'Bot' : 'You'}:</b> ${text}`;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotReply(cmd) {
  cmd = cmd.trim().toLowerCase();

  // 1. Compare: "vs" or "compare"
  if (cmd.includes(' vs ') || cmd.startsWith('compare ')) {
    let g1, g2;
    if (cmd.includes(' vs ')) {
      [g1, g2] = cmd.split(' vs ').map(s => fuzzyFindGPU(s.trim()));
    } else {
      let [_, name1, ...rest] = cmd.split(' ');
      let name2 = rest.join(' ');
      g1 = fuzzyFindGPU(name1);
      g2 = fuzzyFindGPU(name2);
    }
    return doCompare(g1, g2);
  }

  // 2. Range queries: price, tdp, psu, vram
  if (cmd.startsWith('price ')) {
    const [_, min, max] = cmd.split(' ');
    const gpus = filterByRange("price2025", min, max, "$");
    showChart(gpus.map(g => g.name));
    return formatGPUResults(gpus, "price2025", "$");
  }
  if (cmd.startsWith('tdp ')) {
    const [_, min, max] = cmd.split(' ');
    const gpus = filterByRange("tdp", min, max, "W");
    showChart(gpus.map(g => g.name));
    return formatGPUResults(gpus, "tdp", "W");
  }
  if (cmd.startsWith('psu ')) {
    const [_, min, max] = cmd.split(' ');
    const gpus = filterByRange("psu", min, max, "W");
    showChart(gpus.map(g => g.name));
    return formatGPUResults(gpus, "psu", "W");
  }
  if (cmd.startsWith('vram ')) {
    const [_, min, max] = cmd.split(' ');
    const gpus = filterByRange("vram", min, max, "GB");
    showChart(gpus.map(g => g.name));
    return formatGPUResults(gpus, "vram", "GB");
  }

  // 3. spec command (fuzzy)
  if (cmd.startsWith('spec ')) {
    let key = cmd.replace('spec ','').trim();
    let match = fuzzyFindGPU(key);

    if (match) {
      showChart([match]);
      return formatSpec(match, gpuSpecs[match]);
    }
    else return "Bro, GPU not found!";
  }

  // 4. best [min] [max] (by price)
  if (cmd.startsWith('best ')) {
    const [_, min, max] = cmd.split(' ');
    const gpus = filterByPrice(+min, +max);
    showChart(gpus.map(g=>g.name));
    return formatGPUResults(gpus, "price2025", "$");
  }

  // 5. help
  if (cmd.includes('help')) {
    return `
      <b>Commands:</b><br>
      <b>spec [gpu]</b> — see details (e.g. <b>spec 4090</b>, <b>spec 3060</b>, <b>spec 6600 xt</b>)<br>
      <b>[gpu1] vs [gpu2]</b> or <b>compare [gpu1] [gpu2]</b> — side-by-side compare<br>
      <b>price [min] [max]</b> — filter by price<br>
      <b>tdp [min] [max]</b> — filter by TDP<br>
      <b>psu [min] [max]</b> — filter by PSU<br>
      <b>vram [min] [max]</b> — filter by VRAM<br>
      <b>best [min] [max]</b> — best GPUs by price<br>
      Or use the buttons below.<br>
    `;
  }

  return "Sorry dawg, I didn't get that. Type <b>help</b> for commands!";
}

// --- Fuzzy GPU Finder
function fuzzyFindGPU(query) {
  if (!query) return null;
  if (gpuSpecs[query]) return query;

  let searchKey = query.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  for (const gpuName of Object.keys(gpuSpecs)) {
    const compactName = gpuName.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    if (compactName.includes(searchKey)) {
      return gpuName;
    }
  }
  return null;
}

function formatSpec(name, spec) {
  return `<b>${name.toUpperCase()}</b><br>
  VRAM: ${spec.vram} | Arch: ${spec.arch} | Perf: ${spec.perf}<br>
  Release: ${spec.release} | TDP: ${spec.tdp} | PSU: ${spec.psu}<br>
  MSRP: ${spec.msrp} | Est. Price 2025: ${spec.price2025}<br>
  Performance: Gaming ${spec.performance.gaming} | Editing ${spec.performance.editing}${spec.performance.ai ? " | AI "+spec.performance.ai : ""}`;
}

function filterByPrice(min, max) {
  return Object.entries(gpuSpecs)
    .filter(([_, spec]) => {
      const price = +spec.price2025.replace('$','');
      return (!isNaN(min) ? price >= min : true) && (!isNaN(max) ? price <= max : true);
    })
    .map(([name, spec]) => ({ name, ...spec }));
}

// --- NEW: Range Filter (for tdp, price, psu, vram)
function filterByRange(field, min, max, unit) {
  min = +min;
  max = +max;
  return Object.entries(gpuSpecs)
    .filter(([_, spec]) => {
      let val = spec[field];
      if (!val) return false;
      val = +val.toString().replace(unit,"").replace("$","");
      if (isNaN(val)) return false;
      return (!isNaN(min) ? val >= min : true) && (!isNaN(max) ? val <= max : true);
    })
    .map(([name, spec]) => ({ name, ...spec }));
}

// --- Filter Results Format
function formatGPUResults(gpus, field, unit) {
  if (!gpus.length) return "No GPUs found for that range bro!";
  return gpus.map(g =>
    `<b>${g.name.toUpperCase()}</b>: ${field? (g[field] ? g[field] : "") : ""}${unit||""} / ${g.tdp} / ${g.vram}`
  ).join('<br>');
}

// --- Input Handler
document.getElementById('userInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const val = this.value;
    addMessage('user', val);
    addMessage('bot', getBotReply(val));
    this.value = '';
  }
});

// --- Modal Logic - Filter
const filterModal = document.getElementById('filterModal');
document.getElementById('filterPrice').onclick = () => filterModal.style.display = 'flex';
document.getElementById('closeFilter').onclick = () => filterModal.style.display = 'none';
document.getElementById('applyFilter').onclick = () => {
  const minPrice = +document.getElementById('minPrice').value;
  const maxPrice = +document.getElementById('maxPrice').value;
  const minTDP = +document.getElementById('minTDP').value;
  const maxTDP = +document.getElementById('maxTDP').value;
  filterModal.style.display = 'none';
  const result = Object.entries(gpuSpecs)
    .filter(([_, spec]) => {
      const price = +spec.price2025.replace('$','');
      const tdp = +spec.tdp.replace('W','');
      let ok = true;
      if (!isNaN(minPrice) && minPrice !== 0) ok &= price >= minPrice;
      if (!isNaN(maxPrice) && maxPrice !== 0) ok &= price <= maxPrice;
      if (!isNaN(minTDP) && minTDP !== 0) ok &= tdp >= minTDP;
      if (!isNaN(maxTDP) && maxTDP !== 0) ok &= tdp <= maxTDP;
      return ok;
    })
    .map(([name, spec]) => ({ name, ...spec }));
  addMessage('bot', formatGPUResults(result));
  showChart(result.map(g=>g.name));
};

// --- Theme Toggle
document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('light');
};

// --- Compare Modal Logic
const compareModal = document.getElementById('compareModal');
document.getElementById('compareBtn').onclick = () => {
  compareModal.style.display = 'flex';
  document.getElementById('gpuCompare1').value = "";
  document.getElementById('gpuCompare2').value = "";
  document.getElementById('compareResult').innerHTML = "";
};
document.getElementById('closeCompare').onclick = () => compareModal.style.display = 'none';
document.getElementById('compareGo').onclick = () => {
  const gpu1 = fuzzyFindGPU(document.getElementById('gpuCompare1').value.trim().toLowerCase());
  const gpu2 = fuzzyFindGPU(document.getElementById('gpuCompare2').value.trim().toLowerCase());
  document.getElementById('compareResult').innerHTML = doCompare(gpu1, gpu2);
  showChart([gpu1, gpu2]);
};

function doCompare(g1, g2) {
  if (!g1 || !g2 || !gpuSpecs[g1] || !gpuSpecs[g2]) return "Bro, one or both GPUs not found!";
  const s1 = gpuSpecs[g1], s2 = gpuSpecs[g2];
  return `
    <b>${g1.toUpperCase()}</b> vs <b>${g2.toUpperCase()}</b><br>
    <table style="width:100%;margin-top:0.8em;">
      <tr><td><b>VRAM</b></td><td>${s1.vram}</td><td>${s2.vram}</td></tr>
      <tr><td><b>Arch</b></td><td>${s1.arch}</td><td>${s2.arch}</td></tr>
      <tr><td><b>Perf</b></td><td>${s1.perf}</td><td>${s2.perf}</td></tr>
      <tr><td><b>Release</b></td><td>${s1.release}</td><td>${s2.release}</td></tr>
      <tr><td><b>TDP</b></td><td>${s1.tdp}</td><td>${s2.tdp}</td></tr>
      <tr><td><b>PSU</b></td><td>${s1.psu}</td><td>${s2.psu}</td></tr>
      <tr><td><b>MSRP</b></td><td>${s1.msrp}</td><td>${s2.msrp}</td></tr>
      <tr><td><b>2025 Price</b></td><td>${s1.price2025}</td><td>${s2.price2025}</td></tr>
      <tr><td><b>Gaming</b></td><td>${s1.performance.gaming}</td><td>${s2.performance.gaming}</td></tr>
      <tr><td><b>Editing</b></td><td>${s1.performance.editing}</td><td>${s2.performance.editing}</td></tr>
      ${(s1.performance.ai||s2.performance.ai)?`<tr><td><b>AI</b></td><td>${s1.performance.ai||'-'}</td><td>${s2.performance.ai||'-'}</td></tr>`:""}
    </table>
  `;
}

// --- Export CSV
document.getElementById('exportBtn').onclick = () => {
  let rows = [["GPU","VRAM","Arch","Perf","Release","TDP","PSU","MSRP","2025 Price","Gaming","Editing","AI"]];
  for(const [name, spec] of Object.entries(gpuSpecs)) {
    rows.push([
      name,
      spec.vram,
      spec.arch,
      spec.perf,
      spec.release,
      spec.tdp,
      spec.psu,
      spec.msrp,
      spec.price2025,
      spec.performance.gaming,
      spec.performance.editing,
      spec.performance.ai||""
    ]);
  }
  let csv = rows.map(r=>r.join(",")).join("\n");
  let blob = new Blob([csv], {type: "text/csv"});
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "gpu-data.csv";
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>a.remove(),500);
};

// --- Chart Drawing (Chart.js)
function showChart(namesArr) {
  const ctx = document.getElementById('perfChart');
  if (!namesArr || !namesArr.length || !namesArr[0]) {
    ctx.style.display = "none";
    if (chartObj) chartObj.destroy();
    return;
  }
  let labels = [], gaming = [], editing = [], ai = [];
  for (const name of namesArr) {
    if (!name || !gpuSpecs[name]) continue;
    const perf = gpuSpecs[name].performance;
    labels.push(name.toUpperCase());
    gaming.push(perf.gaming || 0);
    editing.push(perf.editing || 0);
    ai.push(perf.ai || 0);
  }
  ctx.style.display = "block";
  if (chartObj) chartObj.destroy();
  chartObj = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Gaming', data: gaming },
        { label: 'Editing', data: editing },
        { label: 'AI', data: ai }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } }
    }
  });
}

