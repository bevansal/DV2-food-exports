// Embeds each Vega-Lite chart into its div on index.html
// Saves each Vega-Lite chart to be used later in the HTML file

// Section 1: the big picture
var vg_1 = "js/1_total_line.vg.json";
vegaEmbed("#chart-line", vg_1, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/2_waffle.vg.json";
vegaEmbed("#chart-waffle", vg_2, { "actions": false }).then(function (result) {
}).catch(console.error);

// Section 2: what we sell
var vg_3 = "js/3_bump_ranks.vg.json";
vegaEmbed("#chart-bump", vg_3, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_4 = "js/4_heatmap.vg.json";
vegaEmbed("#chart-heatmap", vg_4, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_5 = "js/5_waterfall.vg.json";
vegaEmbed("#chart-waterfall", vg_5, { "actions": false }).then(function (result) {
}).catch(console.error);

// Section 3: who buys it (the three maps)
var vg_6 = "js/6_choropleth.vg.json";
vegaEmbed("#map-choropleth", vg_6, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_7 = "js/7_flow_map.vg.json";
vegaEmbed("#map-flow", vg_7, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_8 = "js/8_symbol_map.vg.json";
vegaEmbed("#map-symbols", vg_8, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_9 = "js/9_marimekko.vg.json";
vegaEmbed("#chart-marimekko", vg_9, { "actions": false }).then(function (result) {
}).catch(console.error);

// Section 4: a changing table
var vg_10 = "js/10_slope.vg.json";
vegaEmbed("#chart-slope", vg_10, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_11 = "js/11_stacked_share.vg.json";
vegaEmbed("#chart-stacked", vg_11, { "actions": false }).then(function (result) {
}).catch(console.error);

var vg_12 = "js/12_china_dumbbell.vg.json";
vegaEmbed("#chart-dumbbell", vg_12, { "actions": false }).then(function (result) {
}).catch(console.error);
