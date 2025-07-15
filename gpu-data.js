
const gpuSpecs = {};
// GTX 10 Series
Object.assign(gpuSpecs, {
  "gtx 1050 ti":    { vram: "4GB", arch: "Pascal", perf: "Entry", release: 2016, tdp: "75W", msrp: "$139", price2025: "$60", psu: "300W",  performance: { gaming: 22, editing: 19 } },
  "gtx 1060 3gb":   { vram: "3GB", arch: "Pascal", perf: "Lower mid-range", release: 2016, tdp: "120W", msrp: "$199", price2025: "$70", psu: "350W", performance: { gaming: 32, editing: 27 } },
  "gtx 1060 6gb":   { vram: "6GB", arch: "Pascal", perf: "Mid-range", release: 2016, tdp: "120W", msrp: "$249", price2025: "$80", psu: "350W", performance: { gaming: 36, editing: 30 } },
  "gtx 1070":       { vram: "8GB", arch: "Pascal", perf: "Upper mid-range", release: 2016, tdp: "150W", msrp: "$379", price2025: "$100", psu: "450W", performance: { gaming: 42, editing: 36 } },
  "gtx 1070 ti":    { vram: "8GB", arch: "Pascal", perf: "High mid-range", release: 2017, tdp: "180W", msrp: "$449", price2025: "$120", psu: "500W", performance: { gaming: 47, editing: 39 } },
  "gtx 1080":       { vram: "8GB", arch: "Pascal", perf: "High-end", release: 2016, tdp: "180W", msrp: "$599", price2025: "$130", psu: "500W", performance: { gaming: 51, editing: 43 } },
  "gtx 1080 ti":    { vram: "11GB", arch: "Pascal", perf: "Ultra high-end", release: 2017, tdp: "250W", msrp: "$699", price2025: "$150", psu: "600W", performance: { gaming: 59, editing: 47 } }
});
