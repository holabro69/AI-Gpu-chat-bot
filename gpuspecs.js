
const gpuSpecs = {};

// BEGIN GPU DATA

Object.assign(gpuSpecs, {
  "gtx 1050 ti": { vram: "4GB", arch: "Pascal", perf: "Entry", release: 2016, tdp: "75W", pcie: "3.0 x16", msrp: "$139", price2025: "$60", psu: "300W" },
  "gtx 1060 3gb": { vram: "3GB", arch: "Pascal", perf: "Lower mid-range", release: 2016, tdp: "120W", pcie: "3.0 x16", msrp: "$199", price2025: "$70", psu: "350W" },
  "gtx 1060 6gb": { vram: "6GB", arch: "Pascal", perf: "Mid-range", release: 2016, tdp: "120W", pcie: "3.0 x16", msrp: "$249", price2025: "$80", psu: "350W" },
"gtx 1070": { vram: "8GB", arch: "Pascal", perf: "Upper mid-range", release: 2016, tdp: "150W", pcie: "3.0 x16", msrp: "$379", price2025: "$100", psu: "450W" },
  "gtx 1070 ti": { vram: "8GB", arch: "Pascal", perf: "High mid-range", release: 2017, tdp: "180W", pcie: "3.0 x16", msrp: "$449", price2025: "$120", psu: "500W" },
  "gtx 1080": { vram: "8GB", arch: "Pascal", perf: "High-end", release: 2016, tdp: "180W", pcie: "3.0 x16", msrp: "$599", price2025: "$130", psu: "500W" },
  "gtx 1080 ti": { vram: "11GB", arch: "Pascal", perf: "Ultra high-end", release: 2017, tdp: "250W", pcie: "3.0 x16", msrp: "$699", price2025: "$150", psu: "600W" }
});
Object.assign(gpuSpecs, {
  "gtx 1650": { vram: "4GB", arch: "Turing", perf: "Entry", release: 2019, tdp: "75W", pcie: "3.0 x16", msrp: "$149", price2025: "$70", psu: "300W" },
  "gtx 1650 super": { vram: "4GB", arch: "Turing", perf: "Entry+", release: 2019, tdp: "100W", pcie: "3.0 x16", msrp: "$159", price2025: "$80", psu: "350W" },
  "gtx 1660": { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "120W", pcie: "3.0 x16", msrp: "$219", price2025: "$100", psu: "400W" },
  "gtx 1660 super": { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "125W", pcie: "3.0 x16", msrp: "$229", price2025: "$110", psu: "450W" },
  "gtx 1660 ti": { vram: "6GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "120W", pcie: "3.0 x16", msrp: "$279", price2025: "$120", psu: "450W" },

  "rtx 2060": { vram: "6GB", arch: "Turing", perf: "Mid-range", release: 2019, tdp: "160W", pcie: "3.0 x16", msrp: "$349", price2025: "$120", psu: "500W" },
  "rtx 2060 super": { vram: "8GB", arch: "Turing", perf: "Mid-high", release: 2019, tdp: "175W", pcie: "3.0 x16", msrp: "$399", price2025: "$140", psu: "550W" },
  "rtx 2070": { vram: "8GB", arch: "Turing", perf: "High-end", release: 2018, tdp: "175W", pcie: "3.0 x16", msrp: "$499", price2025: "$160", psu: "550W" },
  "rtx 2070 super": { vram: "8GB", arch: "Turing", perf: "High-end", release: 2019, tdp: "215W", pcie: "3.0 x16", msrp: "$499", price2025: "$180", psu: "600W" },
  "rtx 2080": { vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2018, tdp: "215W", pcie: "3.0 x16", msrp: "$699", price2025: "$200", psu: "600W" },
  "rtx 2080 super": { vram: "8GB", arch: "Turing", perf: "Enthusiast", release: 2019, tdp: "250W", pcie: "3.0 x16", msrp: "$699", price2025: "$220", psu: "650W" },
  "rtx 2080 ti": { vram: "11GB", arch: "Turing", perf: "Ultra high-end", release: 2018, tdp: "260W", pcie: "3.0 x16", msrp: "$999", price2025: "$250", psu: "650W" }
});
Object.assign(gpuSpecs, {
  "rtx 3050 8gb": { vram: "8GB", arch: "Ampere", perf: "Entry-mid", release: 2022, tdp: "130W", pcie: "4.0 x8", msrp: "$249", price2025: "$160", psu: "450W" },
  "rtx 3060 12gb": { vram: "12GB", arch: "Ampere", perf: "Mid-range", release: 2021, tdp: "170W", pcie: "4.0 x16", msrp: "$329", price2025: "$220", psu: "550W" },
  "rtx 3060 ti": { vram: "8GB", arch: "Ampere", perf: "Upper mid", release: 2020, tdp: "200W", pcie: "4.0 x16", msrp: "$399", price2025: "$260", psu: "600W" },
  "rtx 3070": { vram: "8GB", arch: "Ampere", perf: "High-end", release: 2020, tdp: "220W", pcie: "4.0 x16", msrp: "$499", price2025: "$300", psu: "650W" },
  "rtx 3080": { vram: "10GB", arch: "Ampere", perf: "Enthusiast", release: 2020, tdp: "320W", pcie: "4.0 x16", msrp: "$699", price2025: "$400", psu: "750W" },
  "rtx 3080 ti": { vram: "12GB", arch: "Ampere", perf: "High-end", release: 2021, tdp: "350W", pcie: "4.0 x16", msrp: "$1199", price2025: "$600", psu: "750W" },
  "rtx 3090": { vram: "24GB", arch: "Ampere", perf: "Insane", release: 2020, tdp: "350W", pcie: "4.0 x16", msrp: "$1499", price2025: "$700", psu: "850W" },
  "rtx 3090 ti": { vram: "24GB", arch: "Ampere", perf: "Insane+", release: 2022, tdp: "450W", pcie: "4.0 x16", msrp: "$1999", price2025: "$850", psu: "1000W" }
});
Object.assign(gpuSpecs, {
  "rtx 4060": { vram: "8GB", arch: "Ada Lovelace", perf: "Mid-range", release: 2023, tdp: "115W", pcie: "4.0 x8", msrp: "$299", price2025: "$230", psu: "450W" },
  "rtx 4060 ti": { vram: "8GB", arch: "Ada Lovelace", perf: "Upper mid", release: 2023, tdp: "160W", pcie: "4.0 x8", msrp: "$399", price2025: "$300", psu: "550W" },
  "rtx 4070": { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2023, tdp: "200W", pcie: "4.0 x16", msrp: "$599", price2025: "$450", psu: "600W" },
  "rtx 4070 super": { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2024, tdp: "220W", pcie: "4.0 x16", msrp: "$599", price2025: "$500", psu: "650W" },
  "rtx 4070 ti": { vram: "12GB", arch: "Ada Lovelace", perf: "High-end", release: 2023, tdp: "285W", pcie: "4.0 x16", msrp: "$799", price2025: "$600", psu: "750W" },
  "rtx 4080": { vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast", release: 2022, tdp: "320W", pcie: "4.0 x16", msrp: "$1199", price2025: "$900", psu: "850W" },
  "rtx 4080 super": { vram: "16GB", arch: "Ada Lovelace", perf: "Enthusiast", release: 2024, tdp: "320W", pcie: "4.0 x16", msrp: "$999", price2025: "$950", psu: "850W" },
  "rtx 4090": { vram: "24GB", arch: "Ada Lovelace", perf: "Insane", release: 2022, tdp: "450W", pcie: "4.0 x16", msrp: "$1599", price2025: "$1200", psu: "1000W" },

  "rx 550": { vram: "2GB", arch: "GCN 4", perf: "Entry", release: 2017, tdp: "50W", pcie: "3.0 x8", msrp: "$79", price2025: "$40", psu: "350W" },
  "rx 560": { vram: "4GB", arch: "GCN 4", perf: "Entry+", release: 2017, tdp: "80W", pcie: "3.0 x8", msrp: "$99", price2025: "$50", psu: "400W" },
  "rx 570": { vram: "4GB", arch: "GCN 4", perf: "Budget", release: 2017, tdp: "120W", pcie: "3.0 x16", msrp: "$169", price2025: "$60", psu: "450W" },
  "rx 580 8gb": { vram: "8GB", arch: "GCN 4", perf: "Budget+", release: 2017, tdp: "185W", pcie: "3.0 x16", msrp: "$229", price2025: "$80", psu: "500W" },
  "rx 590": { vram: "8GB", arch: "GCN 4.5", perf: "Mid", release: 2018, tdp: "225W", pcie: "3.0 x16", msrp: "$279", price2025: "$90", psu: "550W" },

  "rx 5500 xt": { vram: "8GB", arch: "RDNA 1", perf: "Budget", release: 2019, tdp: "130W", pcie: "4.0 x8", msrp: "$199", price2025: "$90", psu: "450W" },
  "rx 5600 xt": { vram: "6GB", arch: "RDNA 1", perf: "Mid-range", release: 2020, tdp: "150W", pcie: "4.0 x16", msrp: "$279", price2025: "$120", psu: "500W" },
  "rx 5700": { vram: "8GB", arch: "RDNA 1", perf: "Upper mid", release: 2019, tdp: "180W", pcie: "4.0 x16", msrp: "$349", price2025: "$150", psu: "550W" },
  "rx 5700 xt": { vram: "8GB", arch: "RDNA 1", perf: "High-end", release: 2019, tdp: "225W", pcie: "4.0 x16", msrp: "$399", price2025: "$180", psu: "600W" }
});
Object.assign(gpuSpecs, {
  "rx 6600": { vram: "8GB", arch: "RDNA 2", perf: "Mid", release: 2021, tdp: "132W", pcie: "4.0 x8", msrp: "$329", price2025: "$160", psu: "450W" },
  "rx 6600 xt": { vram: "8GB", arch: "RDNA 2", perf: "Mid+", release: 2021, tdp: "160W", pcie: "4.0 x8", msrp: "$379", price2025: "$190", psu: "500W" },
  "rx 6650 xt": { vram: "8GB", arch: "RDNA 2", perf: "Mid+", release: 2022, tdp: "180W", pcie: "4.0 x8", msrp: "$399", price2025: "$210", psu: "550W" },
  "rx 6700 xt": { vram: "12GB", arch: "RDNA 2", perf: "Upper mid", release: 2021, tdp: "230W", pcie: "4.0 x16", msrp: "$479", price2025: "$230", psu: "600W" },
  "rx 6750 xt": { vram: "12GB", arch: "RDNA 2", perf: "High-end", release: 2022, tdp: "250W", pcie: "4.0 x16", msrp: "$549", price2025: "$280", psu: "650W" },
  "rx 6800": { vram: "16GB", arch: "RDNA 2", perf: "High-end", release: 2020, tdp: "250W", pcie: "4.0 x16", msrp: "$579", price2025: "$300", psu: "650W" },
  "rx 6800 xt": { vram: "16GB", arch: "RDNA 2", perf: "Enthusiast", release: 2020, tdp: "300W", pcie: "4.0 x16", msrp: "$649", price2025: "$350", psu: "750W" },
  "rx 6900 xt": { vram: "16GB", arch: "RDNA 2", perf: "Ultra high-end", release: 2020, tdp: "300W", pcie: "4.0 x16", msrp: "$999", price2025: "$400", psu: "750W" },
  "rx 6950 xt": { vram: "16GB", arch: "RDNA 2", perf: "Insane", release: 2022, tdp: "335W", pcie: "4.0 x16", msrp: "$1099", price2025: "$450", psu: "800W" },

  "rx 7600": { vram: "8GB", arch: "RDNA 3", perf: "Budget+", release: 2023, tdp: "165W", pcie: "4.0 x8", msrp: "$269", price2025: "$230", psu: "500W" },
  "rx 7600 xt": { vram: "16GB", arch: "RDNA 3", perf: "Mid-range", release: 2024, tdp: "190W", pcie: "4.0 x8", msrp: "$329", price2025: "$260", psu: "550W" },
  "rx 7700 xt": { vram: "12GB", arch: "RDNA 3", perf: "Mid-high", release: 2023, tdp: "245W", pcie: "4.0 x16", msrp: "$449", price2025: "$340", psu: "650W" },
  "rx 7800 xt": { vram: "16GB", arch: "RDNA 3", perf: "High-end", release: 2023, tdp: "263W", pcie: "4.0 x16", msrp: "$499", price2025: "$400", psu: "750W" },
  "rx 7900 xt": { vram: "20GB", arch: "RDNA 3", perf: "Ultra high-end", release: 2022, tdp: "300W", pcie: "4.0 x16", msrp: "$899", price2025: "$600", psu: "800W" },
  "rx 7900 xtx": { vram: "24GB", arch: "RDNA 3", perf: "Insane", release: 2022, tdp: "355W", pcie: "4.0 x16", msrp: "$999", price2025: "$700", psu: "850W" },

  "arc a310": { vram: "4GB", arch: "Alchemist", perf: "Entry", release: 2022, tdp: "75W", pcie: "4.0 x8", msrp: "$99", price2025: "$60", psu: "350W" },
  "arc a380": { vram: "6GB", arch: "Alchemist", perf: "Entry+", release: 2022, tdp: "75W", pcie: "4.0 x8", msrp: "$139", price2025: "$90", psu: "400W" },
  "arc a580": { vram: "8GB", arch: "Alchemist", perf: "Mid-range", release: 2023, tdp: "185W", pcie: "4.0 x16", msrp: "$179", price2025: "$120", psu: "500W" },
  "arc a750": { vram: "8GB", arch: "Alchemist", perf: "Mid-high", release: 2022, tdp: "225W", pcie: "4.0 x16", msrp: "$249", price2025: "$150", psu: "600W" },
  "arc a770": { vram: "16GB", arch: "Alchemist", perf: "High-end", release: 2022, tdp: "225W", pcie: "4.0 x16", msrp: "$349", price2025: "$180", psu: "600W" },

  "arc b570": { vram: "8GB", arch: "Battlemage", perf: "Mid-range", release: 2025, tdp: "180W", pcie: "5.0 x8", msrp: "$249", price2025: "$200", psu: "550W" },
  "arc b580": { vram: "12GB", arch: "Battlemage", perf: "High-end", release: 2025, tdp: "250W", pcie: "5.0 x16", msrp: "$349", price2025: "$250", psu: "650W" }
});
Object.assign(gpuSpecs, {
  "rtx 5050": { vram: "8GB", arch: "Ada Lovelace Refresh", perf: "Entry+", release: 2025, tdp: "100W", pcie: "4.0 x8", msrp: "$229", price2025: "$190", psu: "450W" },
  "rtx 5060": { vram: "12GB", arch: "Ada Lovelace Refresh", perf: "Mid", release: 2025, tdp: "130W", pcie: "4.0 x16", msrp: "$299", price2025: "$250", psu: "500W" },
  "rtx 5060 ti": { vram: "12GB", arch: "Ada Lovelace Refresh", perf: "Mid+", release: 2025, tdp: "160W", pcie: "4.0 x16", msrp: "$349", price2025: "$300", psu: "550W" },
  "rtx 5070": { vram: "12GB", arch: "Ada Lovelace Refresh", perf: "Upper mid", release: 2025, tdp: "200W", pcie: "4.0 x16", msrp: "$449", price2025: "$370", psu: "600W" },
  "rtx 5070 ti": { vram: "16GB", arch: "Ada Lovelace Refresh", perf: "High-end", release: 2025, tdp: "225W", pcie: "4.0 x16", msrp: "$549", price2025: "$420", psu: "650W" },
  "rtx 5080": { vram: "16GB", arch: "Ada Lovelace Refresh", perf: "Enthusiast", release: 2025, tdp: "320W", pcie: "4.0 x16", msrp: "$799", price2025: "$650", psu: "750W" },
  "rtx 5090": { vram: "24GB", arch: "Ada Lovelace Refresh", perf: "Insane", release: 2025, tdp: "450W", pcie: "4.0 x16", msrp: "$1599", price2025: "$1200", psu: "850W" }
});
Object.assign(gpuSpecs, {
  "rx 9060 xt": {
    vram: "8 GB or 16 GB",
    arch: "RDNA 4",
    perf: "Mid-range",
    release: 2025,
    tdp: "150 W (8 GB) / 160 W (16 GB)",
    pcie: "5.0 x16",
    msrp: "$299 / $349",
    price2025: "$300",
    psu: "500W"
  },
  "rx 9070": {
    vram: "12 GB",
    arch: "RDNA 4",
    perf: "Upper mid",
    release: 2025,
    tdp: "160 W",
    pcie: "5.0 x16",
    msrp: "$549",
    price2025: "$500",
    psu: "550W"
  },
  "rx 9070 xt": {
    vram: "16 GB",
    arch: "RDNA 4",
    perf: "High-end",
    release: 2025,
    tdp: "304 W",
    pcie: "5.0 x16",
    msrp: "$599",
    price2025: "$550",
    psu: "750W"
  }
});
