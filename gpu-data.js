const gpuSpecs = {};

// =======================
// NVIDIA LINEUP
// =======================

// GTX 10 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "gtx 1050 ti":    { vram: "4GB", arch: "Pascal", perf: "Entry", release: 2016, tdp: "75W", msrp: "$139", price2025_new: "$60", price2025_used: "$45", psu: "300W",  performance: { gaming: 22, editing: 19 } },
  "gtx 1060 3gb":   { vram: "3GB", arch: "Pascal", perf: "Lower mid-range", release: 2016, tdp: "120W", msrp: "$199", price2025_new: "$70", price2025_used: "$55", psu: "350W", performance: { gaming: 32, editing: 27 } },
  "gtx 1060 6gb":   { vram: "6GB", arch: "Pascal", perf: "Mid-range", release: 2016, tdp: "120W", msrp: "$249", price2025_new: "$80", price2025_used: "$60", psu: "350W", performance: { gaming: 36, editing: 30 } },
  "gtx 1070":       { vram: "8GB", arch: "Pascal", perf: "Upper mid-range", release: 2016, tdp: "150W", msrp: "$379", price2025_new: "$100", price2025_used: "$75", psu: "450W", performance: { gaming: 42, editing: 36 } },
  "gtx 1070 ti":    { vram: "8GB", arch: "Pascal", perf: "High mid-range", release: 2017, tdp: "180W", msrp: "$449", price2025_new: "$120", price2025_used: "$90", psu: "500W", performance: { gaming: 47, editing: 39 } },
  "gtx 1080":       { vram: "8GB", arch: "Pascal", perf: "High-end", release: 2016, tdp: "180W", msrp: "$599", price2025_new: "$130", price2025_used: "$95", psu: "500W", performance: { gaming: 51, editing: 43 } },
  "gtx 1080 ti":    { vram: "11GB", arch: "Pascal", perf: "Ultra high-end", release: 2017, tdp: "250W", msrp: "$699", price2025_new: "$150", price2025_used: "$120", psu: "600W", performance: { gaming: 59, editing: 47 } }
});

// GTX 16 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "gtx 1650":         { vram: "4GB", arch: "Turing", perf: "Entry", release: 2019, tdp: "75W", msrp: "$149", price2025_new: "$70", price2025_used: "$50", psu: "300W", performance: { gaming: 29, editing: 25 } },
  "gtx 1650 super":   { vram: "4GB", arch: "Turing", perf: "Entry+", release: 2019, tdp: "100W", msrp: "$159", price2025_new: "$80", price2025_used: "$60", psu: "350W", performance: { gaming: 33, editing: 28 } },
  "gtx 1660":         { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "120W", msrp: "$219", price2025_new: "$100", price2025_used: "$70", psu: "400W", performance: { gaming: 41, editing: 33 } },
  "gtx 1660 super":   { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "125W", msrp: "$229", price2025_new: "$110", price2025_used: "$85", psu: "450W", performance: { gaming: 44, editing: 36 } },
  "gtx 1660 ti":      { vram: "6GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "120W", msrp: "$279", price2025_new: "$120", price2025_used: "$90", psu: "450W", performance: { gaming: 46, editing: 39 } }
});

// RTX 20 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "rtx 2060":         { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "160W", msrp: "$349", price2025_new: "$120", price2025_used: "$90", psu: "500W", performance: { gaming: 58, editing: 53, ai: 38 } },
  "rtx 2060 super":   { vram: "8GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "175W", msrp: "$399", price2025_new: "$140", price2025_used: "$110", psu: "550W", performance: { gaming: 64, editing: 59, ai: 44 } },
  "rtx 2070":         { vram: "8GB", arch: "Turing", perf: "High-end", release: 2018, tdp: "175W", msrp: "$499", price2025_new: "$160", price2025_used: "$120", psu: "550W", performance: { gaming: 68, editing: 61, ai: 47 } },
  "rtx 2070 super":   { vram: "8GB", arch: "Turing", perf: "High-end", release: 2019, tdp: "215W", msrp: "$499", price2025_new: "$180", price2025_used: "$140", psu: "600W", performance: { gaming: 74, editing: 67, ai: 51 } },
  "rtx 2080":         { vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2018, tdp: "215W", msrp: "$699", price2025_new: "$200", price2025_used: "$160", psu: "600W", performance: { gaming: 79, editing: 71, ai: 55 } },
  "rtx 2080 super":   { vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2019, tdp: "250W", msrp: "$699", price2025_new: "$220", price2025_used: "$170", psu: "650W", performance: { gaming: 84, editing: 75, ai: 59 } },
  "rtx 2080 ti":      { vram: "11GB", arch: "Turing", perf: "Ultra high-end", release: 2018, tdp: "260W", msrp: "$999", price2025_new: "$250", price2025_used: "$200", psu: "650W", performance: { gaming: 92, editing: 81, ai: 64 } }
});

// RTX 30 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "rtx 3050 6gb":    { vram: "6GB", arch: "Ampere", perf: "Entry", release: 2024, tdp: "70W", msrp: "$179", price2025_new: "$140", price2025_used: "$110", psu: "300W", performance: { gaming: 66, editing: 58, ai: 45 } },
  "rtx 3050 8gb":    { vram: "8GB", arch: "Ampere", perf: "Entry+", release: 2022, tdp: "130W", msrp: "$249", price2025_new: "$160", price2025_used: "$120", psu: "450W", performance: { gaming: 71, editing: 64, ai: 49 } },
  "rtx 3060 8gb":    { vram: "8GB", arch: "Ampere", perf: "Mid-range", release: 2022, tdp: "130W", msrp: "$299", price2025_new: "$180", price2025_used: "$140", psu: "450W", performance: { gaming: 74, editing: 67, ai: 58 } },
  "rtx 3060 12gb":   { vram: "12GB", arch: "Ampere", perf: "Mid-range", release: 2021, tdp: "170W", msrp: "$329", price2025_new: "$220", price2025_used: "$170", psu: "550W", performance: { gaming: 83, editing: 75, ai: 63 } },
  "rtx 3060 ti":     { vram: "8GB", arch: "Ampere", perf: "Upper mid", release: 2020, tdp: "200W", msrp: "$399", price2025_new: "$260", price2025_used: "$200", psu: "600W", performance: { gaming: 97, editing: 85, ai: 72 } },
  "rtx 3070":        { vram: "8GB", arch: "Ampere", perf: "High-end", release: 2020, tdp: "220W", msrp: "$499", price2025_new: "$300", price2025_used: "$230", psu: "650W", performance: { gaming: 111, editing: 95, ai: 80 } },
  "rtx 3070 ti":     { vram: "8GB", arch: "Ampere", perf: "High-end+", release: 2021, tdp: "290W", msrp: "$599", price2025_new: "$320", price2025_used: "$250", psu: "750W", performance: { gaming: 116, editing: 99, ai: 85 } },
  "rtx 3080 10gb":   { vram: "10GB", arch: "Ampere", perf: "Enthusiast", release: 2020, tdp: "320W", msrp: "$699", price2025_new: "$400", price2025_used: "$300", psu: "750W", performance: { gaming: 121, editing: 100, ai: 90 } },
  "rtx 3080 12gb":   { vram: "12GB", arch: "Ampere", perf: "Enthusiast+", release: 2022, tdp: "350W", msrp: "$799", price2025_new: "$420", price2025_used: "$330", psu: "750W", performance: { gaming: 124, editing: 103, ai: 93 } },
  "rtx 3080 ti":     { vram: "12GB", arch: "Ampere", perf: "High-end+", release: 2021, tdp: "350W", msrp: "$1199", price2025_new: "$600", price2025_used: "$450", psu: "750W", performance: { gaming: 128, editing: 108, ai: 97 } },
  "rtx 3090":        { vram: "24GB", arch: "Ampere", perf: "Insane", release: 2020, tdp: "350W", msrp: "$1499", price2025_new: "$700", price2025_used: "$520", psu: "850W", performance: { gaming: 135, editing: 110, ai: 100 } },
  "rtx 3090 ti":     { vram: "24GB", arch: "Ampere", perf: "Insane+", release: 2022, tdp: "450W", msrp: "$1999", price2025_new: "$850", price2025_used: "$600", psu: "1000W", performance: { gaming: 142, editing: 117, ai: 108 } }
});

// RTX 40 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "rtx 4060":           { vram: "8GB", arch: "Ada Lovelace", perf: "Mid-range", release: 2023, tdp: "115W", msrp: "$299", price2025_new: "$230", price2025_used: "$170", psu: "450W", performance: { gaming: 92, editing: 85, ai: 68 } },
  "rtx 4060 ti 8gb":    { vram: "8GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", msrp: "$399", price2025_new: "$300", price2025_used: "$230", psu: "550W", performance: { gaming: 102, editing: 89, ai: 80 } },
  "rtx 4060 ti 16gb":   { vram: "16GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", msrp: "$499", price2025_new: "$350", price2025_used: "$260", psu: "550W", performance: { gaming: 104, editing: 92, ai: 83 } },
  "rtx 4070":           { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2023, tdp: "200W", msrp: "$599", price2025_new: "$450", price2025_used: "$340", psu: "600W", performance: { gaming: 120, editing: 105, ai: 105 } },
  "rtx 4070 super":     { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2024, tdp: "220W", msrp: "$599", price2025_new: "$500", price2025_used: "$370", psu: "650W", performance: { gaming: 124, editing: 110, ai: 110 } },
  "rtx 4070 ti":        { vram: "12GB", arch: "Ada Lovelace", perf: "High-end+", release: 2023, tdp: "285W", msrp: "$799", price2025_new: "$600", price2025_used: "$440", psu: "750W", performance: { gaming: 131, editing: 117, ai: 117 } },
  "rtx 4070 ti super":  { vram: "16GB", arch: "Ada Lovelace", perf: "High-end++", release: 2024, tdp: "285W", msrp: "$899", price2025_new: "$650", price2025_used: "$480", psu: "750W", performance: { gaming: 134, editing: 120, ai: 121 } },
  "rtx 4080":           { vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast", release: 2022, tdp: "320W", msrp: "$1199", price2025_new: "$900", price2025_used: "$660", psu: "850W", performance: { gaming: 142, editing: 120, ai: 125 } },
  "rtx 4080 super":     { vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast+", release: 2024, tdp: "320W", msrp: "$999", price2025_new: "$950", price2025_used: "$700", psu: "850W", performance: { gaming: 147, editing: 127, ai: 134 } },
  "rtx 4090":           { vram: "24GB", arch: "Ada Lovelace", perf: "Insane", release: 2022, tdp: "450W", msrp: "$1599", price2025_new: "$1200", price2025_used: "$900", psu: "1000W", performance: { gaming: 164, editing: 138, ai: 162 } },
  "rtx 4090 ti":        { vram: "24GB", arch: "Ada Lovelace", perf: "Insane+", release: 2025, tdp: "500W", msrp: "$1999", price2025_new: "$1600", price2025_used: "$1200", psu: "1200W", performance: { gaming: 176, editing: 149, ai: 170 } }
});

// RTX 5000 Series (NEW PRICE ONLY)
Object.assign(gpuSpecs, {
  "rtx 5050": {
    vram: "8GB", arch: "Ada Lovelace Refresh", perf: "Entry+", release: 2025, tdp: "100W", msrp: "$229", price2025_new: "$190", psu: "450W",
    performance: { gaming: 86, editing: 72, ai: 58 }
  },
  "rtx 5060": {
    vram: "8GB", arch: "Ada Lovelace Refresh", perf: "Mid", release: 2025, tdp: "130W", msrp: "$299", price2025_new: "$250", psu: "500W",
    performance: { gaming: 101, editing: 87, ai: 71 }
  },
  "rtx 5060 ti": {
    vram: "8/16GB", arch: "Ada Lovelace Refresh", perf: "Mid+", release: 2025, tdp: "160W", msrp: "$349", price2025_new: "$300", psu: "550W",
    performance: { gaming: 109, editing: 94, ai: 76 }
  },
  "rtx 5070": {
    vram: "12GB", arch: "Ada Lovelace Refresh", perf: "Upper mid", release: 2025, tdp: "200W", msrp: "$449", price2025_new: "$370", psu: "600W",
    performance: { gaming: 128, editing: 110, ai: 94 }
  },
  "rtx 5070 ti": {
    vram: "16GB", arch: "Ada Lovelace Refresh", perf: "High-end", release: 2025, tdp: "225W", msrp: "$549", price2025_new: "$420", psu: "650W",
    performance: { gaming: 139, editing: 121, ai: 106 }
  },
  "rtx 5080": {
    vram: "16GB", arch: "Ada Lovelace Refresh", perf: "Enthusiast", release: 2025, tdp: "320W", msrp: "$799", price2025_new: "$650", psu: "750W",
    performance: { gaming: 161, editing: 140, ai: 136 }
  },
  "rtx 5090": {
    vram: "24GB", arch: "Ada Lovelace Refresh", perf: "Insane", release: 2025, tdp: "450W", msrp: "$1599", price2025_new: "$1200", psu: "850W",
    performance: { gaming: 189, editing: 165, ai: 180 }
  }
});

// =======================
// AMD LINEUP
// =======================

// RX 500 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "rx 550":        { vram: "2GB", arch: "GCN 4", perf: "Entry", release: 2017, tdp: "50W", msrp: "$79", price2025_new: "$40", price2025_used: "$25", psu: "350W", performance: { gaming: 16, editing: 13 } },
  "rx 560":        { vram: "4GB", arch: "GCN 4", perf: "Entry+", release: 2017, tdp: "80W", msrp: "$99", price2025_new: "$50", price2025_used: "$30", psu: "400W", performance: { gaming: 19, editing: 15 } },
  "rx 570":        { vram: "4GB", arch: "GCN 4", perf: "Budget", release: 2017, tdp: "120W", msrp: "$169", price2025_new: "$60", price2025_used: "$40", psu: "450W", performance: { gaming: 25, editing: 18 } },
  "rx 580 8gb":    { vram: "8GB", arch: "GCN 4", perf: "Budget+", release: 2017, tdp: "185W", msrp: "$229", price2025_new: "$80", price2025_used: "$60", psu: "500W", performance: { gaming: 28, editing: 20 } },
  "rx 590":        { vram: "8GB", arch: "GCN 4.5", perf: "Mid", release: 2018, tdp: "225W", msrp: "$279", price2025_new: "$90", price2025_used: "$70", psu: "550W", performance: { gaming: 31, editing: 24 } }
});

// RX 5000 Series (with new & used prices)
Object.assign(gpuSpecs, {
  "rx 5500 xt":    { vram: "8GB", arch: "RDNA 1", perf: "Budget", release: 2019, tdp: "130W", msrp: "$199", price2025_new: "$90", price2025_used: "$70", psu: "450W", performance: { gaming: 36, editing: 29 } },
  "rx 5600 xt":    { vram: "6GB", arch: "RDNA 1", perf: "Mid-range", release: 2020, tdp: "150W", msrp: "$279", price2025_new: "$120", price2025_used: "$90", psu: "500W", performance: { gaming: 46, editing: 34 } },
  "rx 5700":       { vram: "8GB", arch: "RDNA 1", perf: "Upper mid", release: 2019, tdp: "180W", msrp: "$349", price2025_new: "$150", price2025_used: "$115", psu: "550W", performance: { gaming: 51, editing: 40 } },
  "rx 5700 xt":    { vram: "8GB", arch: "RDNA 1", perf: "High-end", release: 2019, tdp: "225W", msrp: "$399", price2025_new: "$180", price2025_used: "$130", psu: "600W", performance: { gaming: 55, editing: 44 } }
});

// RX 6000 Series (GRE/XT/XTX/6950XT, new & used)
Object.assign(gpuSpecs, {
  "rx 6600":       { vram: "8GB", arch: "RDNA 2", perf: "Mid", release: 2021, tdp: "132W", msrp: "$329", price2025_new: "$160", price2025_used: "$120", psu: "450W", performance: { gaming: 69, editing: 60, ai: 44 } },
  "rx 6600 xt":    { vram: "8GB", arch: "RDNA 2", perf: "Mid+", release: 2021, tdp: "160W", msrp: "$379", price2025_new: "$190", price2025_used: "$140", psu: "500W", performance: { gaming: 75, editing: 68, ai: 52 } },
  "rx 6650 xt":    { vram: "8GB", arch: "RDNA 2", perf: "Mid+", release: 2022, tdp: "180W", msrp: "$399", price2025_new: "$210", price2025_used: "$160", psu: "550W", performance: { gaming: 79, editing: 70, ai: 56 } },
  "rx 6700 xt":    { vram: "12GB", arch: "RDNA 2", perf: "Upper mid", release: 2021, tdp: "230W", msrp: "$479", price2025_new: "$230", price2025_used: "$175", psu: "600W", performance: { gaming: 88, editing: 78, ai: 65 } },
  "rx 6750 xt":    { vram: "12GB", arch: "RDNA 2", perf: "High-end", release: 2022, tdp: "250W", msrp: "$549", price2025_new: "$280", price2025_used: "$210", psu: "650W", performance: { gaming: 93, editing: 80, ai: 64 } },
  "rx 6800":       { vram: "16GB", arch: "RDNA 2", perf: "High-end", release: 2020, tdp: "250W", msrp: "$579", price2025_new: "$300", price2025_used: "$230", psu: "650W", performance: { gaming: 105, editing: 91, ai: 79 } },
  "rx 6800 xt":    { vram: "16GB", arch: "RDNA 2", perf: "Enthusiast", release: 2020, tdp: "300W", msrp: "$649", price2025_new: "$350", price2025_used: "$270", psu: "750W", performance: { gaming: 112, editing: 98, ai: 83 } },
  "rx 6900 xt":    { vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end", release: 2020, tdp: "300W", msrp: "$999", price2025_new: "$400", price2025_used: "$300", psu: "750W", performance: { gaming: 119, editing: 104, ai: 91 } },
  "rx 6950 xt":    { vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end", release: 2022, tdp: "335W", msrp: "$1099", price2025_new: "$500", price2025_used: "$360", psu: "850W", performance: { gaming: 123, editing: 110, ai: 96 } },
  "rx 6750 gre":   { vram: "12GB", arch: "RDNA 2", perf: "High-end", release: 2023, tdp: "220W", msrp: "$319", price2025_new: "$250", price2025_used: "$190", psu: "650W", performance: { gaming: 91, editing: 79, ai: 62 } },
  "rx 6800 gre":   { vram: "16GB", arch: "RDNA 2", perf: "High-end", release: 2023, tdp: "220W", msrp: "$369", price2025_new: "$270", price2025_used: "$200", psu: "650W", performance: { gaming: 102, editing: 87, ai: 70 } }
});

// RX 7000 Series (RDNA 3, XT/XTX, GRE, new & used)
Object.assign(gpuSpecs, {
  "rx 7600":       { vram: "8GB", arch: "RDNA 3", perf: "Budget+", release: 2023, tdp: "165W", msrp: "$269", price2025_new: "$230", price2025_used: "$180", psu: "500W", performance: { gaming: 81, editing: 72, ai: 59 } },
  "rx 7600 xt":    { vram: "16GB", arch: "RDNA 3", perf: "Mid-range", release: 2024, tdp: "190W", msrp: "$329", price2025_new: "$260", price2025_used: "$210", psu: "550W", performance: { gaming: 87, editing: 77, ai: 66 } },
  "rx 7700 xt":    { vram: "12GB", arch: "RDNA 3", perf: "Mid-high", release: 2023, tdp: "245W", msrp: "$449", price2025_new: "$340", price2025_used: "$260", psu: "650W", performance: { gaming: 101, editing: 87, ai: 74 } },
  "rx 7800 xt":    { vram: "16GB", arch: "RDNA 3", perf: "High-end", release: 2023, tdp: "263W", msrp: "$499", price2025_new: "$400", price2025_used: "$300", psu: "750W", performance: { gaming: 110, editing: 98, ai: 88 } },
  "rx 7900 gre":   { vram: "16GB", arch: "RDNA 3", perf: "Ultra high-end", release: 2023, tdp: "260W", msrp: "$549", price2025_new: "$420", price2025_used: "$320", psu: "750W", performance: { gaming: 114, editing: 105, ai: 91 } },
  "rx 7900 xt":    { vram: "20GB", arch: "RDNA 3", perf: "Ultra high-end", release: 2022, tdp: "300W", msrp: "$899", price2025_new: "$600", price2025_used: "$430", psu: "800W", performance: { gaming: 134, editing: 110, ai: 99 } },
  "rx 7900 xtx":   { vram: "24GB", arch: "RDNA 3", perf: "Insane", release: 2022, tdp: "355W", msrp: "$999", price2025_new: "$700", price2025_used: "$520", psu: "850W", performance: { gaming: 145, editing: 125, ai: 102 } }
});

// RX 9000 Series (NEW PRICE ONLY)
Object.assign(gpuSpecs, {
  "rx 9060 xt":    { vram: "8GB", arch: "RDNA 4", perf: "Mid-range", release: 2025, tdp: "150W", msrp: "$299", price2025_new: "$300", psu: "500W", performance: { gaming: 112, editing: 100, ai: 87 } },
  "rx 9070":       { vram: "16GB", arch: "RDNA 4", perf: "Upper mid", release: 2025, tdp: "160W", msrp: "$549", price2025_new: "$500", psu: "550W", performance: { gaming: 122, editing: 109, ai: 96 } },
  "rx 9070 xt":    { vram: "16GB", arch: "RDNA 4", perf: "High-end", release: 2025, tdp: "304W", msrp: "$599", price2025_new: "$550", psu: "750W", performance: { gaming: 129, editing: 115, ai: 102 } }
});

// =======================
// INTEL ARC LINEUP (A-SERIES ONLY, with new & used price)
// =======================

Object.assign(gpuSpecs, {
  "arc a310":      { vram: "4GB", arch: "Alchemist", perf: "Entry", release: 2022, tdp: "75W", msrp: "$99", price2025_new: "$60", price2025_used: "$45", psu: "350W", performance: { gaming: 21, editing: 19, ai: 20 } },
  "arc a380":      { vram: "6GB", arch: "Alchemist", perf: "Entry+", release: 2022, tdp: "75W", msrp: "$139", price2025_new: "$90", price2025_used: "$65", psu: "400W", performance: { gaming: 34, editing: 25, ai: 23 } },
  "arc a580":      { vram: "8GB", arch: "Alchemist", perf: "Mid-range", release: 2023, tdp: "185W", msrp: "$179", price2025_new: "$120", price2025_used: "$90", psu: "500W", performance: { gaming: 49, editing: 34, ai: 33 } },
  "arc a750":      { vram: "8GB", arch: "Alchemist", perf: "Mid-high", release: 2022, tdp: "225W", msrp: "$249", price2025_new: "$150", price2025_used: "$110", psu: "600W", performance: { gaming: 58, editing: 43, ai: 38 } },
  "arc a770":      { vram: "16GB", arch: "Alchemist", perf: "High-end", release: 2022, tdp: "225W", msrp: "$349", price2025_new: "$180", price2025_used: "$135", psu: "600W", performance: { gaming: 66, editing: 49, ai: 42 } }
});


