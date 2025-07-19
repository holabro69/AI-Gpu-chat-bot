const gpuSpecs = {};
const gpuSpecs = {};

// ===== NVIDIA GTX 10 Series =====
Object.assign(gpuSpecs, {
  "gtx 1050 ti":    { vram: "4GB", arch: "Pascal", perf: "Entry", release: 2016, tdp: "75W", msrp: "$139", price2025_new: "$66", price2025_used: "$37", psu: "300W",  performance: { gaming: 22, editing: 19 } },
  "gtx 1060 3gb":   { vram: "3GB", arch: "Pascal", perf: "Lower mid-range", release: 2016, tdp: "120W", msrp: "$199", price2025_new: "$78", price2025_used: "$49", psu: "350W", performance: { gaming: 32, editing: 27 } },
  "gtx 1060 6gb":   { vram: "6GB", arch: "Pascal", perf: "Mid-range", release: 2016, tdp: "120W", msrp: "$249", price2025_new: "$97", price2025_used: "$57", psu: "350W", performance: { gaming: 36, editing: 30 } },
  "gtx 1070":       { vram: "8GB", arch: "Pascal", perf: "Upper mid-range", release: 2016, tdp: "150W", msrp: "$379", price2025_new: "$120", price2025_used: "$76", psu: "450W", performance: { gaming: 42, editing: 36 } },
  "gtx 1070 ti":    { vram: "8GB", arch: "Pascal", perf: "High mid-range", release: 2017, tdp: "180W", msrp: "$449", price2025_new: "$135", price2025_used: "$89", psu: "500W", performance: { gaming: 47, editing: 39 } },
  "gtx 1080":       { vram: "8GB", arch: "Pascal", perf: "High-end", release: 2016, tdp: "180W", msrp: "$599", price2025_new: "$149", price2025_used: "$98", psu: "500W", performance: { gaming: 51, editing: 43 } },
  "gtx 1080 ti":    { vram: "11GB", arch: "Pascal", perf: "Ultra high-end", release: 2017, tdp: "250W", msrp: "$699", price2025_new: "$172", price2025_used: "$123", psu: "600W", performance: { gaming: 59, editing: 47 } }
});

// ===== NVIDIA GTX 16 Series =====
Object.assign(gpuSpecs, {
  "gtx 1650":         { vram: "4GB", arch: "Turing", perf: "Entry", release: 2019, tdp: "75W", msrp: "$149", price2025_new: "$112", price2025_used: "$67", psu: "300W", performance: { gaming: 29, editing: 25 } },
  "gtx 1650 super":   { vram: "4GB", arch: "Turing", perf: "Entry+", release: 2019, tdp: "100W", msrp: "$159", price2025_new: "$128", price2025_used: "$82", psu: "350W", performance: { gaming: 33, editing: 28 } },
  "gtx 1660":         { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "120W", msrp: "$219", price2025_new: "$156", price2025_used: "$99", psu: "400W", performance: { gaming: 41, editing: 33 } },
  "gtx 1660 super":   { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "125W", msrp: "$229", price2025_new: "$179", price2025_used: "$110", psu: "450W", performance: { gaming: 44, editing: 36 } },
  "gtx 1660 ti":      { vram: "6GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "120W", msrp: "$279", price2025_new: "$191", price2025_used: "$122", psu: "450W", performance: { gaming: 46, editing: 39 } }
});

// ===== NVIDIA RTX 20 Series =====
Object.assign(gpuSpecs, {
  "rtx 2060":         { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "160W", msrp: "$349", price2025_new: "$189", price2025_used: "$121", psu: "500W", performance: { gaming: 58, editing: 53, ai: 38 } },
  "rtx 2060 super":   { vram: "8GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "175W", msrp: "$399", price2025_new: "$214", price2025_used: "$147", psu: "550W", performance: { gaming: 64, editing: 59, ai: 44 } },
  "rtx 2070":         { vram: "8GB", arch: "Turing", perf: "High-end", release: 2018, tdp: "175W", msrp: "$499", price2025_new: "$239", price2025_used: "$165", psu: "550W", performance: { gaming: 68, editing: 61, ai: 47 } },
  "rtx 2070 super":   { vram: "8GB", arch: "Turing", perf: "High-end", release: 2019, tdp: "215W", msrp: "$499", price2025_new: "$257", price2025_used: "$181", psu: "600W", performance: { gaming: 74, editing: 67, ai: 51 } },
  "rtx 2080":         { vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2018, tdp: "215W", msrp: "$699", price2025_new: "$291", price2025_used: "$204", psu: "600W", performance: { gaming: 79, editing: 71, ai: 55 } },
  "rtx 2080 super":   { vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2019, tdp: "250W", msrp: "$699", price2025_new: "$305", price2025_used: "$219", psu: "650W", performance: { gaming: 84, editing: 75, ai: 59 } },
  "rtx 2080 ti":      { vram: "11GB", arch: "Turing", perf: "Ultra high-end", release: 2018, tdp: "260W", msrp: "$999", price2025_new: "$375", price2025_used: "$288", psu: "650W", performance: { gaming: 92, editing: 81, ai: 64 } }
});

// ===== NVIDIA RTX 30 Series (all models) =====
Object.assign(gpuSpecs, {
  "rtx 3050 8gb":    { vram: "8GB", arch: "Ampere", perf: "Entry+", release: 2022, tdp: "130W", msrp: "$249", price2025_new: "$188", price2025_used: "$136", psu: "450W", performance: { gaming: 71, editing: 64, ai: 49 } },
  "rtx 3060 12gb":   { vram: "12GB", arch: "Ampere", perf: "Mid-range", release: 2021, tdp: "170W", msrp: "$329", price2025_new: "$259", price2025_used: "$185", psu: "550W", performance: { gaming: 83, editing: 75, ai: 63 } },
  "rtx 3060 ti":     { vram: "8GB", arch: "Ampere", perf: "Upper mid", release: 2020, tdp: "200W", msrp: "$399", price2025_new: "$319", price2025_used: "$224", psu: "600W", performance: { gaming: 97, editing: 85, ai: 72 } },
  "rtx 3070":        { vram: "8GB", arch: "Ampere", perf: "High-end", release: 2020, tdp: "220W", msrp: "$499", price2025_new: "$377", price2025_used: "$261", psu: "650W", performance: { gaming: 111, editing: 95, ai: 80 } },
  "rtx 3070 ti":     { vram: "8GB", arch: "Ampere", perf: "High-end+", release: 2021, tdp: "290W", msrp: "$599", price2025_new: "$425", price2025_used: "$305", psu: "750W", performance: { gaming: 116, editing: 99, ai: 85 } },
  "rtx 3080 10gb":   { vram: "10GB", arch: "Ampere", perf: "Enthusiast", release: 2020, tdp: "320W", msrp: "$699", price2025_new: "$545", price2025_used: "$410", psu: "750W", performance: { gaming: 121, editing: 100, ai: 90 } },
  "rtx 3080 12gb":   { vram: "12GB", arch: "Ampere", perf: "Enthusiast+", release: 2022, tdp: "350W", msrp: "$799", price2025_new: "$590", price2025_used: "$435", psu: "750W", performance: { gaming: 124, editing: 103, ai: 93 } },
  "rtx 3080 ti":     { vram: "12GB", arch: "Ampere", perf: "High-end+", release: 2021, tdp: "350W", msrp: "$1199", price2025_new: "$729", price2025_used: "$479", psu: "750W", performance: { gaming: 128, editing: 108, ai: 97 } },
  "rtx 3090":        { vram: "24GB", arch: "Ampere", perf: "Insane", release: 2020, tdp: "350W", msrp: "$1499", price2025_new: "$898", price2025_used: "$618", psu: "850W", performance: { gaming: 135, editing: 110, ai: 100 } },
  "rtx 3090 ti":     { vram: "24GB", arch: "Ampere", perf: "Insane+", release: 2022, tdp: "450W", msrp: "$1999", price2025_new: "$1020", price2025_used: "$735", psu: "1000W", performance: { gaming: 142, editing: 117, ai: 108 } }
});

  // ===== NVIDIA RTX 40 Series =====
Object.assign(gpuSpecs, {
  "rtx 4060":           { vram: "8GB", arch: "Ada Lovelace", perf: "Mid-range", release: 2023, tdp: "115W", msrp: "$299", price2025_new: "$299", price2025_used: "$240", psu: "450W", performance: { gaming: 92, editing: 85, ai: 68 } },
  "rtx 4060 ti 8gb":    { vram: "8GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", msrp: "$399", price2025_new: "$389", price2025_used: "$299", psu: "550W", performance: { gaming: 102, editing: 89, ai: 80 } },
  "rtx 4060 ti 16gb":   { vram: "16GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", msrp: "$499", price2025_new: "$469", price2025_used: "$369", psu: "550W", performance: { gaming: 104, editing: 92, ai: 83 } },
  "rtx 4070":           { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2023, tdp: "200W", msrp: "$599", price2025_new: "$599", price2025_used: "$484", psu: "600W", performance: { gaming: 120, editing: 105, ai: 105 } },
  "rtx 4070 super":     { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2024, tdp: "220W", msrp: "$599", price2025_new: "$609", price2025_used: "$529", psu: "650W", performance: { gaming: 124, editing: 110, ai: 110 } },
  "rtx 4070 ti":        { vram: "12GB", arch: "Ada Lovelace", perf: "High-end+", release: 2023, tdp: "285W", msrp: "$799", price2025_new: "$799", price2025_used: "$699", psu: "750W", performance: { gaming: 131, editing: 117, ai: 117 } },
  "rtx 4070 ti super":  { vram: "16GB", arch: "Ada Lovelace", perf: "High-end++", release: 2024, tdp: "285W", msrp: "$899", price2025_new: "$899", price2025_used: "$799", psu: "750W", performance: { gaming: 134, editing: 120, ai: 121 } },
  "rtx 4080":           { vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast", release: 2022, tdp: "320W", msrp: "$1199", price2025_new: "$1099", price2025_used: "$899", psu: "850W", performance: { gaming: 142, editing: 120, ai: 125 } },
  "rtx 4090":           { vram: "24GB", arch: "Ada Lovelace", perf: "Insane", release: 2022, tdp: "450W", msrp: "$1599", price2025_new: "$1999", price2025_used: "$1750", psu: "1000W", performance: { gaming: 164, editing: 138, ai: 162 } }
});

// ===== NVIDIA RTX 5000 Series (New Only) =====
Object.assign(gpuSpecs, {
  "rtx 5050":       { vram: "8GB", arch: "Ada Lovelace Refresh", perf: "Entry+", release: 2025, tdp: "100W", msrp: "$229", price2025_new: "$229", psu: "450W", performance: { gaming: 86, editing: 72, ai: 58 } },
  "rtx 5060":       { vram: "8GB", arch: "Ada Lovelace Refresh", perf: "Mid", release: 2025, tdp: "130W", msrp: "$299", price2025_new: "$299", psu: "500W", performance: { gaming: 101, editing: 87, ai: 71 } },
  "rtx 5060 ti":    { vram: "8/16GB", arch: "Ada Lovelace Refresh", perf: "Mid+", release: 2025, tdp: "160W", msrp: "$349", price2025_new: "$349", psu: "550W", performance: { gaming: 109, editing: 94, ai: 76 } },
  "rtx 5070":       { vram: "12GB", arch: "Ada Lovelace Refresh", perf: "Upper mid", release: 2025, tdp: "200W", msrp: "$449", price2025_new: "$449", psu: "600W", performance: { gaming: 128, editing: 110, ai: 94 } },
  "rtx 5070 ti":    { vram: "16GB", arch: "Ada Lovelace Refresh", perf: "High-end", release: 2025, tdp: "225W", msrp: "$549", price2025_new: "$549", psu: "650W", performance: { gaming: 139, editing: 121, ai: 106 } },
  "rtx 5080":       { vram: "16GB", arch: "Ada Lovelace Refresh", perf: "Enthusiast", release: 2025, tdp: "320W", msrp: "$799", price2025_new: "$799", psu: "750W", performance: { gaming: 161, editing: 140, ai: 136 } },
  "rtx 5090":       { vram: "24GB", arch: "Ada Lovelace Refresh", perf: "Insane", release: 2025, tdp: "450W", msrp: "$1599", price2025_new: "$1599", psu: "850W", performance: { gaming: 189, editing: 165, ai: 180 } }
});

// ===== AMD RX 500/5000/6000/7000/9000 (XT/XTX/GRE) =====
Object.assign(gpuSpecs, {
  // RX 6000 GRE/XT/XTX
  "rx 6600":      { vram: "8GB", arch: "RDNA 2", perf: "Mid",          release: 2021, tdp: "132W", msrp: "$329", price2025_new: "$189", price2025_used: "$120", psu: "450W", performance: { gaming: 69, editing: 60, ai: 44 } },
  "rx 6600 xt":   { vram: "8GB", arch: "RDNA 2", perf: "Mid+",         release: 2021, tdp: "160W", msrp: "$379", price2025_new: "$210", price2025_used: "$142", psu: "500W", performance: { gaming: 75, editing: 68, ai: 52 } },
  "rx 6650 xt":   { vram: "8GB", arch: "RDNA 2", perf: "Mid+",         release: 2022, tdp: "180W", msrp: "$399", price2025_new: "$229", price2025_used: "$164", psu: "550W", performance: { gaming: 79, editing: 70, ai: 56 } },
  "rx 6700 xt":   { vram: "12GB", arch: "RDNA 2", perf: "Upper mid",   release: 2021, tdp: "230W", msrp: "$479", price2025_new: "$299", price2025_used: "$192", psu: "600W", performance: { gaming: 88, editing: 78, ai: 65 } },
  "rx 6750 xt":   { vram: "12GB", arch: "RDNA 2", perf: "High-end",    release: 2022, tdp: "250W", msrp: "$549", price2025_new: "$349", price2025_used: "$225", psu: "650W", performance: { gaming: 93, editing: 80, ai: 64 } },
  "rx 6750 gre":  { vram: "12GB", arch: "RDNA 2", perf: "High-end",    release: 2023, tdp: "220W", msrp: "$319", price2025_new: "$249", price2025_used: "$179", psu: "650W", performance: { gaming: 91, editing: 79, ai: 62 } },
  "rx 6800":      { vram: "16GB", arch: "RDNA 2", perf: "High-end",    release: 2020, tdp: "250W", msrp: "$579", price2025_new: "$419", price2025_used: "$285", psu: "650W", performance: { gaming: 105, editing: 91, ai: 79 } },
  "rx 6800 xt":   { vram: "16GB", arch: "RDNA 2", perf: "Enthusiast",  release: 2020, tdp: "300W", msrp: "$649", price2025_new: "$519", price2025_used: "$352", psu: "750W", performance: { gaming: 112, editing: 98, ai: 83 } },
  "rx 6800 gre":  { vram: "16GB", arch: "RDNA 2", perf: "High-end",    release: 2023, tdp: "220W", msrp: "$369", price2025_new: "$339", price2025_used: "$219", psu: "650W", performance: { gaming: 99, editing: 87, ai: 70 } },
  "rx 6900 xt":   { vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end", release: 2020, tdp: "300W", msrp: "$999", price2025_new: "$589", price2025_used: "$410", psu: "750W", performance: { gaming: 119, editing: 104, ai: 91 } },
  "rx 6950 xt":   { vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end", release: 2022, tdp: "335W", msrp: "$1099", price2025_new: "$629", price2025_used: "$440", psu: "850W", performance: { gaming: 123, editing: 110, ai: 96 } },

  // RX 7000 incl. GRE (price example, update as needed)
  "rx 7600":      { vram: "8GB", arch: "RDNA 3", perf: "Budget+", release: 2023, tdp: "165W", msrp: "$269", price2025_new: "$244", price2025_used: "$179", psu: "500W", performance: { gaming: 81, editing: 72, ai: 59 } },
  "rx 7600 xt":   { vram: "16GB", arch: "RDNA 3", perf: "Mid-range", release: 2024, tdp: "190W", msrp: "$329", price2025_new: "$295", price2025_used: "$215", psu: "550W", performance: { gaming: 87, editing: 77, ai: 66 } },
  "rx 7700 xt":   { vram: "12GB", arch: "RDNA 3", perf: "Mid-high", release: 2023, tdp: "245W", msrp: "$449", price2025_new: "$385", price2025_used: "$268", psu: "650W", performance: { gaming: 101, editing: 87, ai: 74 } },
  "rx 7800 xt":   { vram: "16GB", arch: "RDNA 3", perf: "High-end", release: 2023, tdp: "263W", msrp: "$499", price2025_new: "$445", price2025_used: "$314", psu: "750W", performance: { gaming: 110, editing: 98, ai: 88 } },
  "rx 7900 gre":  { vram: "16GB", arch: "RDNA 3", perf: "Ultra high-end", release: 2023, tdp: "260W", msrp: "$549", price2025_new: "$520", price2025_used: "$375", psu: "750W", performance: { gaming: 114, editing: 105, ai: 91 } },
  "rx 7900 xt":   { vram: "20GB", arch: "RDNA 3", perf: "Ultra high-end", release: 2022, tdp: "300W", msrp: "$899", price2025_new: "$729", price2025_used: "$509", psu: "800W", performance: { gaming: 134, editing: 110, ai: 99 } },
  "rx 7900 xtx":  { vram: "24GB", arch: "RDNA 3", perf: "Insane", release: 2022, tdp: "355W", msrp: "$999", price2025_new: "$829", price2025_used: "$625", psu: "850W", performance: { gaming: 145, editing: 125, ai: 102 } }
});

// RX 9000 Series (new price only)
Object.assign(gpuSpecs, {
  "rx 9060 xt":   { vram: "8GB/16GB", arch: "RDNA 4", perf: "Mid-range", release: 2025, tdp: "150W", msrp: "$299", price2025_new: "$329", psu: "500W", performance: { gaming: 112, editing: 100, ai: 87 } },
  "rx 9070":      { vram: "16GB", arch: "RDNA 4", perf: "Upper mid", release: 2025, tdp: "160W", msrp: "$549", price2025_new: "$570", psu: "550W", performance: { gaming: 122, editing: 109, ai: 96 } },
  "rx 9070 xt":   { vram: "16GB", arch: "RDNA 4", perf: "High-end", release: 2025, tdp: "304W", msrp: "$599", price2025_new: "$639", psu: "750W", performance: { gaming: 129, editing: 115, ai: 102 } }
});

// ===== INTEL ARC A/B Series (example prices) =====
Object.assign(gpuSpecs, {
  "arc a310":      { vram: "4GB", arch: "Alchemist", perf: "Entry", release: 2022, tdp: "75W", msrp: "$99", price2025_new: "$74", price2025_used: "$47", psu: "350W", performance: { gaming: 21, editing: 19, ai: 20 } },
  "arc a380":      { vram: "6GB", arch: "Alchemist", perf: "Entry+", release: 2022, tdp: "75W", msrp: "$139", price2025_new: "$109", price2025_used: "$69", psu: "400W", performance: { gaming: 34, editing: 25, ai: 23 } },
  "arc a580":      { vram: "8GB", arch: "Alchemist", perf: "Mid-range", release: 2023, tdp: "185W", msrp: "$179", price2025_new: "$146", price2025_used: "$93", psu: "500W", performance: { gaming: 49, editing: 34, ai: 33 } },
  "arc a750":      { vram: "8GB", arch: "Alchemist", perf: "Mid-high", release: 2022, tdp: "225W", msrp: "$249", price2025_new: "$195", price2025_used: "$125", psu: "600W", performance: { gaming: 58, editing: 43, ai: 38 } },
  "arc a770":      { vram: "16GB", arch: "Alchemist", perf: "High-end", release: 2022, tdp: "225W", msrp: "$349", price2025_new: "$245", price2025_used: "$170", psu: "600W", performance: { gaming: 66, editing: 49, ai: 42 } },
  "arc b570":      { vram: "10GB", arch: "Battlemage", perf: "Mid-range", release: 2025, tdp: "180W", msrp: "$249", price2025_new: "$249", psu: "550W", performance: { gaming: 75, editing: 58, ai: 50 } },
  "arc b580":      { vram: "12GB", arch: "Battlemage", perf: "High-end", release: 2025, tdp: "250W", msrp: "$349", price2025_new: "$349", psu: "650W", performance: { gaming: 87, editing: 69, ai: 61 } }
});

