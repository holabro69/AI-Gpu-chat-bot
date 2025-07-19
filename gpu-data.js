const gpuSpecs = {};

// =======================
// NVIDIA GTX 10 Series
// =======================
Object.assign(gpuSpecs, {
  "gtx 1050 ti": {
    vram: "4GB", arch: "Pascal", perf: "Entry", release: 2016, tdp: "75W", msrp: "$139",
    price2025_new: "$72", price2025_used: "$49", psu: "300W",
    performance: { gaming: 22, editing: 19 }
  },
  "gtx 1060 3gb": {
    vram: "3GB", arch: "Pascal", perf: "Lower mid-range", release: 2016, tdp: "120W", msrp: "$199",
    price2025_new: "$87", price2025_used: "$56", psu: "350W",
    performance: { gaming: 32, editing: 27 }
  },
  "gtx 1060 6gb": {
    vram: "6GB", arch: "Pascal", perf: "Mid-range", release: 2016, tdp: "120W", msrp: "$249",
    price2025_new: "$99", price2025_used: "$65", psu: "350W",
    performance: { gaming: 36, editing: 30 }
  },
  "gtx 1070": {
    vram: "8GB", arch: "Pascal", perf: "Upper mid-range", release: 2016, tdp: "150W", msrp: "$379",
    price2025_new: "$121", price2025_used: "$78", psu: "450W",
    performance: { gaming: 42, editing: 36 }
  },
  "gtx 1070 ti": {
    vram: "8GB", arch: "Pascal", perf: "High mid-range", release: 2017, tdp: "180W", msrp: "$449",
    price2025_new: "$138", price2025_used: "$89", psu: "500W",
    performance: { gaming: 47, editing: 39 }
  },
  "gtx 1080": {
    vram: "8GB", arch: "Pascal", perf: "High-end", release: 2016, tdp: "180W", msrp: "$599",
    price2025_new: "$149", price2025_used: "$108", psu: "500W",
    performance: { gaming: 51, editing: 43 }
  },
  "gtx 1080 ti": {
    vram: "11GB", arch: "Pascal", perf: "Ultra high-end", release: 2017, tdp: "250W", msrp: "$699",
    price2025_new: "$186", price2025_used: "$132", psu: "600W",
    performance: { gaming: 59, editing: 47 }
  }
});

// =======================
// NVIDIA GTX 16 Series
// =======================
Object.assign(gpuSpecs, {
  "gtx 1650": {
    vram: "4GB", arch: "Turing", perf: "Entry", release: 2019, tdp: "75W", msrp: "$149",
    price2025_new: "$104", price2025_used: "$72", psu: "300W",
    performance: { gaming: 29, editing: 25 }
  },
  "gtx 1650 super": {
    vram: "4GB", arch: "Turing", perf: "Entry+", release: 2019, tdp: "100W", msrp: "$159",
    price2025_new: "$121", price2025_used: "$86", psu: "350W",
    performance: { gaming: 33, editing: 28 }
  },
  "gtx 1660": {
    vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "120W", msrp: "$219",
    price2025_new: "$127", price2025_used: "$89", psu: "400W",
    performance: { gaming: 41, editing: 33 }
  },
  "gtx 1660 super": {
    vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "125W", msrp: "$229",
    price2025_new: "$143", price2025_used: "$104", psu: "450W",
    performance: { gaming: 44, editing: 36 }
  },
  "gtx 1660 ti": {
    vram: "6GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "120W", msrp: "$279",
    price2025_new: "$157", price2025_used: "$116", psu: "450W",
    performance: { gaming: 46, editing: 39 }
  }
});

// =======================
// NVIDIA RTX 20 Series (ALL VARIANTS)
// =======================
Object.assign(gpuSpecs, {
  "rtx 2060": {
    vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "160W", msrp: "$349",
    price2025_new: "$189", price2025_used: "$121", psu: "500W",
    performance: { gaming: 58, editing: 53, ai: 38 }
  },
  "rtx 2060 12gb": {
    vram: "12GB", arch: "Turing", perf: "Mid-range+", release: 2021, tdp: "185W", msrp: "$339",
    price2025_new: "$219", price2025_used: "$157", psu: "550W",
    performance: { gaming: 61, editing: 56, ai: 42 }
  },
  "rtx 2060 super": {
    vram: "8GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "175W", msrp: "$399",
    price2025_new: "$214", price2025_used: "$147", psu: "550W",
    performance: { gaming: 64, editing: 59, ai: 44 }
  },
  "rtx 2070": {
    vram: "8GB", arch: "Turing", perf: "High-end", release: 2018, tdp: "175W", msrp: "$499",
    price2025_new: "$239", price2025_used: "$165", psu: "550W",
    performance: { gaming: 68, editing: 61, ai: 47 }
  },
  "rtx 2070 super": {
    vram: "8GB", arch: "Turing", perf: "High-end+", release: 2019, tdp: "215W", msrp: "$499",
    price2025_new: "$257", price2025_used: "$181", psu: "600W",
    performance: { gaming: 74, editing: 67, ai: 51 }
  },
  "rtx 2080": {
    vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2018, tdp: "215W", msrp: "$699",
    price2025_new: "$291", price2025_used: "$204", psu: "600W",
    performance: { gaming: 79, editing: 71, ai: 55 }
  },
  "rtx 2080 super": {
    vram: "8GB", arch: "Turing", perf: "Enthusiast+", release: 2019, tdp: "250W", msrp: "$699",
    price2025_new: "$305", price2025_used: "$219", psu: "650W",
    performance: { gaming: 84, editing: 75, ai: 59 }
  },
  "rtx 2080 ti": {
    vram: "11GB", arch: "Turing", perf: "Ultra high-end", release: 2018, tdp: "260W", msrp: "$999",
    price2025_new: "$375", price2025_used: "$288", psu: "650W",
    performance: { gaming: 92, editing: 81, ai: 64 }
  }
});

// =======================
// NVIDIA RTX 30 Series (ALL VARIANTS)
// =======================
Object.assign(gpuSpecs, {
  "rtx 3050 6gb": {
    vram: "6GB", arch: "Ampere", perf: "Entry", release: 2024, tdp: "70W", msrp: "$179",
    price2025_new: "$153", price2025_used: "$105", psu: "300W", performance: { gaming: 66, editing: 58, ai: 45 }
  },
  "rtx 3050 8gb": {
    vram: "8GB", arch: "Ampere", perf: "Entry+", release: 2022, tdp: "130W", msrp: "$249",
    price2025_new: "$184", price2025_used: "$117", psu: "450W", performance: { gaming: 71, editing: 64, ai: 49 }
  },
  "rtx 3060 8gb": {
    vram: "8GB", arch: "Ampere", perf: "Mid-range", release: 2022, tdp: "130W", msrp: "$299",
    price2025_new: "$217", price2025_used: "$153", psu: "450W", performance: { gaming: 74, editing: 67, ai: 58 }
  },
  "rtx 3060 12gb": {
    vram: "12GB", arch: "Ampere", perf: "Mid-range+", release: 2021, tdp: "170W", msrp: "$329",
    price2025_new: "$235", price2025_used: "$171", psu: "550W", performance: { gaming: 83, editing: 75, ai: 63 }
  },
  "rtx 3060 ti": {
    vram: "8GB", arch: "Ampere", perf: "Upper mid", release: 2020, tdp: "200W", msrp: "$399",
    price2025_new: "$285", price2025_used: "$199", psu: "600W", performance: { gaming: 97, editing: 85, ai: 72 }
  },
  "rtx 3070": {
    vram: "8GB", arch: "Ampere", perf: "High-end", release: 2020, tdp: "220W", msrp: "$499",
    price2025_new: "$337", price2025_used: "$230", psu: "650W", performance: { gaming: 111, editing: 95, ai: 80 }
  },
  "rtx 3070 ti": {
    vram: "8GB", arch: "Ampere", perf: "High-end+", release: 2021, tdp: "290W", msrp: "$599",
    price2025_new: "$359", price2025_used: "$259", psu: "750W", performance: { gaming: 116, editing: 99, ai: 85 }
  },
  "rtx 3080 10gb": {
    vram: "10GB", arch: "Ampere", perf: "Enthusiast", release: 2020, tdp: "320W", msrp: "$699",
    price2025_new: "$434", price2025_used: "$300", psu: "750W", performance: { gaming: 121, editing: 100, ai: 90 }
  },
  "rtx 3080 12gb": {
    vram: "12GB", arch: "Ampere", perf: "Enthusiast+", release: 2022, tdp: "350W", msrp: "$799",
    price2025_new: "$476", price2025_used: "$339", psu: "750W", performance: { gaming: 124, editing: 103, ai: 93 }
  },
  "rtx 3080 ti": {
    vram: "12GB", arch: "Ampere", perf: "High-end+", release: 2021, tdp: "350W", msrp: "$1199",
    price2025_new: "$582", price2025_used: "$422", psu: "750W", performance: { gaming: 128, editing: 108, ai: 97 }
  },
  "rtx 3090": {
    vram: "24GB", arch: "Ampere", perf: "Insane", release: 2020, tdp: "350W", msrp: "$1499",
    price2025_new: "$762", price2025_used: "$537", psu: "850W", performance: { gaming: 135, editing: 110, ai: 100 }
  },
  "rtx 3090 ti": {
    vram: "24GB", arch: "Ampere", perf: "Insane+", release: 2022, tdp: "450W", msrp: "$1999",
    price2025_new: "$937", price2025_used: "$639", psu: "1000W", performance: { gaming: 142, editing: 117, ai: 108 }
  }
});

// =======================
// NVIDIA RTX 40 Series (ALL VARIANTS)
// =======================
Object.assign(gpuSpecs, {
  "rtx 4060": {
    vram: "8GB", arch: "Ada Lovelace", perf: "Mid-range", release: 2023, tdp: "115W", msrp: "$299",
    price2025_new: "$265", price2025_used: "$202", psu: "450W", performance: { gaming: 92, editing: 85, ai: 68 }
  },
  "rtx 4060 ti 8gb": {
    vram: "8GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", msrp: "$399",
    price2025_new: "$345", price2025_used: "$253", psu: "550W", performance: { gaming: 102, editing: 89, ai: 80 }
  },
  "rtx 4060 ti 16gb": {
    vram: "16GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", msrp: "$499",
    price2025_new: "$399", price2025_used: "$292", psu: "550W", performance: { gaming: 104, editing: 92, ai: 83 }
  },
  "rtx 4070": {
    vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2023, tdp: "200W", msrp: "$599",
    price2025_new: "$532", price2025_used: "$412", psu: "600W", performance: { gaming: 120, editing: 105, ai: 105 }
  },
  "rtx 4070 super": {
    vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2024, tdp: "220W", msrp: "$599",
    price2025_new: "$565", price2025_used: "$443", psu: "650W", performance: { gaming: 124, editing: 110, ai: 110 }
  },
  "rtx 4070 ti": {
    vram: "12GB", arch: "Ada Lovelace", perf: "High-end+", release: 2023, tdp: "285W", msrp: "$799",
    price2025_new: "$662", price2025_used: "$524", psu: "750W", performance: { gaming: 131, editing: 117, ai: 117 }
  },
  "rtx 4070 ti super": {
    vram: "16GB", arch: "Ada Lovelace", perf: "High-end++", release: 2024, tdp: "285W", msrp: "$899",
    price2025_new: "$769", price2025_used: "$612", psu: "750W", performance: { gaming: 134, editing: 120, ai: 121 }
  },
  "rtx 4080": {
    vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast", release: 2022, tdp: "320W", msrp: "$1199",
    price2025_new: "$999", price2025_used: "$747", psu: "850W", performance: { gaming: 142, editing: 120, ai: 125 }
  },
  "rtx 4080 super": {
    vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast+", release: 2024, tdp: "320W", msrp: "$999",
    price2025_new: "$1100", price2025_used: "$822", psu: "850W", performance: { gaming: 147, editing: 127, ai: 134 }
  },
  "rtx 4090": {
    vram: "24GB", arch: "Ada Lovelace", perf: "Insane", release: 2022, tdp: "450W", msrp: "$1599",
    price2025_new: "$1575", price2025_used: "$1299", psu: "1000W", performance: { gaming: 164, editing: 138, ai: 162 }
  }
  // Add 4090 Ti/refresh here as needed
});

// =======================
// NVIDIA RTX 5000 Series (NEW ONLY)
// =======================
Object.assign(gpuSpecs, {
  "rtx 5050": {
    vram: "8GB", arch: "Ada Lovelace Refresh", perf: "Entry+", release: 2025, tdp: "100W", msrp: "$229",
    price2025_new: "$220", psu: "450W", performance: { gaming: 86, editing: 72, ai: 58 }
  },
  // Add RTX 5060, 5060 Ti, 5070, 5070 Ti, 5080, 5090 etc. as available
});

// =======================
// AMD RX 500 Series
// =======================
Object.assign(gpuSpecs, {
  "rx 550": {
    vram: "2GB", arch: "GCN 4", perf: "Entry", release: 2017, tdp: "50W", msrp: "$79",
    price2025_new: "$62", price2025_used: "$34", psu: "350W", performance: { gaming: 16, editing: 13 }
  },
  "rx 560": {
    vram: "4GB", arch: "GCN 4", perf: "Entry+", release: 2017, tdp: "80W", msrp: "$99",
    price2025_new: "$83", price2025_used: "$42", psu: "400W", performance: { gaming: 19, editing: 15 }
  },
  "rx 570": {
    vram: "4GB", arch: "GCN 4", perf: "Budget", release: 2017, tdp: "120W", msrp: "$169",
    price2025_new: "$99", price2025_used: "$58", psu: "450W", performance: { gaming: 25, editing: 18 }
  },
  "rx 580 8gb": {
    vram: "8GB", arch: "GCN 4", perf: "Budget+", release: 2017, tdp: "185W", msrp: "$229",
    price2025_new: "$117", price2025_used: "$71", psu: "500W", performance: { gaming: 28, editing: 20 }
  },
  "rx 590": {
    vram: "8GB", arch: "GCN 4.5", perf: "Mid", release: 2018, tdp: "225W", msrp: "$279",
    price2025_new: "$129", price2025_used: "$85", psu: "550W", performance: { gaming: 31, editing: 24 }
  }
});

// =======================
// AMD RX 5000 Series
// =======================
Object.assign(gpuSpecs, {
  "rx 5500 xt": {
    vram: "8GB", arch: "RDNA 1", perf: "Budget", release: 2019, tdp: "130W", msrp: "$199",
    price2025_new: "$148", price2025_used: "$96", psu: "450W", performance: { gaming: 36, editing: 29 }
  },
  "rx 5600 xt": {
    vram: "6GB", arch: "RDNA 1", perf: "Mid-range", release: 2020, tdp: "150W", msrp: "$279",
    price2025_new: "$201", price2025_used: "$124", psu: "500W", performance: { gaming: 46, editing: 34 }
  },
  "rx 5700": {
    vram: "8GB", arch: "RDNA 1", perf: "Upper mid", release: 2019, tdp: "180W", msrp: "$349",
    price2025_new: "$227", price2025_used: "$147", psu: "550W", performance: { gaming: 51, editing: 40 }
  },
  "rx 5700 xt": {
    vram: "8GB", arch: "RDNA 1", perf: "High-end", release: 2019, tdp: "225W", msrp: "$399",
    price2025_new: "$251", price2025_used: "$163", psu: "600W", performance: { gaming: 55, editing: 44 }
  }
});

// =======================
// AMD RX 6000 Series (ALL + GRE)
// =======================
Object.assign(gpuSpecs, {
  "rx 6600": {
    vram: "8GB", arch: "RDNA 2", perf: "Mid", release: 2021, tdp: "132W", msrp: "$329",
    price2025_new: "$191", price2025_used: "$137", psu: "450W", performance: { gaming: 69, editing: 60, ai: 44 }
  },
  "rx 6600 xt": {
    vram: "8GB", arch: "RDNA 2", perf: "Mid+", release: 2021, tdp: "160W", msrp: "$379",
    price2025_new: "$219", price2025_used: "$153", psu: "500W", performance: { gaming: 75, editing: 68, ai: 52 }
  },
  "rx 6650 xt": {
    vram: "8GB", arch: "RDNA 2", perf: "Mid+", release: 2022, tdp: "180W", msrp: "$399",
    price2025_new: "$243", price2025_used: "$167", psu: "550W", performance: { gaming: 79, editing: 70, ai: 56 }
  },
  "rx 6700 xt": {
    vram: "12GB", arch: "RDNA 2", perf: "Upper mid", release: 2021, tdp: "230W", msrp: "$479",
    price2025_new: "$297", price2025_used: "$204", psu: "600W", performance: { gaming: 88, editing: 78, ai: 65 }
  },
  "rx 6750 xt": {
    vram: "12GB", arch: "RDNA 2", perf: "High-end", release: 2022, tdp: "250W", msrp: "$549",
    price2025_new: "$323", price2025_used: "$229", psu: "650W", performance: { gaming: 93, editing: 80, ai: 64 }
  },
  "rx 6750 gre": {
    vram: "12GB", arch: "RDNA 2", perf: "High-end", release: 2023, tdp: "220W", msrp: "$319",
    price2025_new: "$239", price2025_used: "$167", psu: "650W", performance: { gaming: 91, editing: 79, ai: 62 }
  },
  "rx 6800": {
    vram: "16GB", arch: "RDNA 2", perf: "High-end", release: 2020, tdp: "250W", msrp: "$579",
    price2025_new: "$389", price2025_used: "$285", psu: "650W", performance: { gaming: 105, editing: 91, ai: 79 }
  },
  "rx 6800 xt": {
    vram: "16GB", arch: "RDNA 2", perf: "Enthusiast", release: 2020, tdp: "300W", msrp: "$649",
    price2025_new: "$449", price2025_used: "$317", psu: "750W", performance: { gaming: 112, editing: 98, ai: 83 }
  },
  "rx 6800 gre": {
    vram: "16GB", arch: "RDNA 2", perf: "High-end", release: 2023, tdp: "220W", msrp: "$369",
    price2025_new: "$269", price2025_used: "$192", psu: "650W", performance: { gaming: 102, editing: 87, ai: 70 }
  },
  "rx 6900 xt": {
    vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end", release: 2020, tdp: "300W", msrp: "$999",
    price2025_new: "$579", price2025_used: "$422", psu: "750W", performance: { gaming: 119, editing: 104, ai: 91 }
  },
  "rx 6950 xt": {
    vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end+", release: 2022, tdp: "335W", msrp: "$1099",
    price2025_new: "$619", price2025_used: "$458", psu: "850W", performance: { gaming: 123, editing: 110, ai: 96 }
  }
});

// =======================
// AMD RX 7000 Series (ALL + GRE)
// =======================
Object.assign(gpuSpecs, {
  "rx 7600": {
    vram: "8GB", arch: "RDNA 3", perf: "Budget+", release: 2023, tdp: "165W", msrp: "$269",
    price2025_new: "$257", price2025_used: "$186", psu: "500W", performance: { gaming: 81, editing: 72, ai: 59 }
  },
  "rx 7600 xt": {
    vram: "16GB", arch: "RDNA 3", perf: "Mid-range", release: 2024, tdp: "190W", msrp: "$329",
    price2025_new: "$309", price2025_used: "$224", psu: "550W", performance: { gaming: 87, editing: 77, ai: 66 }
  },
  "rx 7700 xt": {
    vram: "12GB", arch: "RDNA 3", perf: "Mid-high", release: 2023, tdp: "245W", msrp: "$449",
    price2025_new: "$418", price2025_used: "$306", psu: "650W", performance: { gaming: 101, editing: 87, ai: 74 }
  },
  "rx 7800 xt": {
    vram: "16GB", arch: "RDNA 3", perf: "High-end", release: 2023, tdp: "263W", msrp: "$499",
    price2025_new: "$459", price2025_used: "$337", psu: "750W", performance: { gaming: 110, editing: 98, ai: 88 }
  },
  "rx 7900 gre": {
    vram: "16GB", arch: "RDNA 3", perf: "Ultra high-end", release: 2023, tdp: "260W", msrp: "$549",
    price2025_new: "$486", price2025_used: "$348", psu: "750W", performance: { gaming: 114, editing: 105, ai: 91 }
  },
  "rx 7900 xt": {
    vram: "20GB", arch: "RDNA 3", perf: "Ultra high-end+", release: 2022, tdp: "300W", msrp: "$899",
    price2025_new: "$729", price2025_used: "$532", psu: "800W", performance: { gaming: 134, editing: 110, ai: 99 }
  },
  "rx 7900 xtx": {
    vram: "24GB", arch: "RDNA 3", perf: "Insane", release: 2022, tdp: "355W", msrp: "$999",
    price2025_new: "$839", price2025_used: "$623", psu: "850W", performance: { gaming: 145, editing: 125, ai: 102 }
  }
});

// =======================
// AMD RX 9000 Series (NEW ONLY!)
// =======================
Object.assign(gpuSpecs, {
  "rx 9060 xt": {
    vram: "8GB", arch: "RDNA 4", perf: "Mid-range", release: 2025, tdp: "150W", msrp: "$299",
    price2025_new: "$325", psu: "500W", performance: { gaming: 112, editing: 100, ai: 87 }
  },
  "rx 9070": {
    vram: "16GB", arch: "RDNA 4", perf: "Upper mid", release: 2025, tdp: "160W", msrp: "$549",
    price2025_new: "$525", psu: "550W", performance: { gaming: 122, editing: 109, ai: 96 }
  },
  "rx 9070 xt": {
    vram: "16GB", arch: "RDNA 4", perf: "High-end", release: 2025, tdp: "304W", msrp: "$599",
    price2025_new: "$579", psu: "750W", performance: { gaming: 129, editing: 115, ai: 102 }
  }
});

// =======================
// Intel Arc A & B Series
// =======================
Object.assign(gpuSpecs, {
  "arc a310": {
    vram: "4GB", arch: "Alchemist", perf: "Entry", release: 2022, tdp: "75W", msrp: "$99",
    price2025_new: "$91", price2025_used: "$57", psu: "350W", performance: { gaming: 21, editing: 19, ai: 20 }
  },
  "arc a380": {
    vram: "6GB", arch: "Alchemist", perf: "Entry+", release: 2022, tdp: "75W", msrp: "$139",
    price2025_new: "$110", price2025_used: "$68", psu: "400W", performance: { gaming: 34, editing: 25, ai: 23 }
  },
  "arc a580": {
    vram: "8GB", arch: "Alchemist", perf: "Mid-range", release: 2023, tdp: "185W", msrp: "$179",
    price2025_new: "$149", price2025_used: "$87", psu: "500W", performance: { gaming: 49, editing: 34, ai: 33 }
  },
  "arc a750": {
    vram: "8GB", arch: "Alchemist", perf: "Mid-high", release: 2022, tdp: "225W", msrp: "$249",
    price2025_new: "$176", price2025_used: "$112", psu: "600W", performance: { gaming: 58, editing: 43, ai: 38 }
  },
  "arc a770": {
    vram: "16GB", arch: "Alchemist", perf: "High-end", release: 2022, tdp: "225W", msrp: "$349",
    price2025_new: "$225", price2025_used: "$151", psu: "600W", performance: { gaming: 66, editing: 49, ai: 42 }
  },
  // Arc Battlemage B-series (new only)
  "arc b570": {
    vram: "10GB", arch: "Battlemage", perf: "Mid-range", release: 2025, tdp: "180W", msrp: "$249",
    price2025_new: "$255", psu: "550W", performance: { gaming: 75, editing: 58, ai: 50 }
  },
  "arc b580": {
    vram: "12GB", arch: "Battlemage", perf: "High-end", release: 2025, tdp: "250W", msrp: "$349",
    price2025_new: "$344", psu: "650W", performance: { gaming: 87, editing: 69, ai: 61 }
  }
});

