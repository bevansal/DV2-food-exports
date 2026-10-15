# Feeding the world: Australia's food exports

A single-page data story about what food Australia sells overseas, who buys it, and how that has changed from 1988 to 2025.

Created by Bevan Saldanha for FIT2179 Data Visualisation (Data Visualisation 2), Monash University, October 2026.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page |
| `css/style.css` | Layout and typography |
| `js/main.js` | Embeds each chart with vegaEmbed |
| `js/*.vg.json` | One Vega-Lite specification per chart (12 in total) |
| `data/*.csv` | Small extracts of the source data (under 300 KB in total) |
| `data/ne_110m_admin_0_countries.topojson` | Natural Earth 1:110m countries (from the FIT3179 examples, slimmed in mapshaper) |
| `sketch.pdf` | Hand-drawn sketch (add before submitting) |

## Charts

1. Line chart: total food exports, 1988–89 to 2024–25
2. Waffle chart: every $100 of food exports in 2024–25
3. Bump chart: commodity rankings, 2005–06 to 2024–25
4. Heatmap: share of each commodity, 1988–89 to 2024–25
5. Waterfall chart: growth by commodity, 2014–15 to 2024–25
6. Choropleth map with year slider: exports by country, 2006–2025
7. Flow map: top 15 markets, 2025
8. Proportional symbol map with commodity dropdown, 2025
9. Marimekko chart: what each market buys, 2025
10. Slope chart: market share, 2006 vs 2025
11. 100% stacked bar chart: top five markets' share, 2006–2025
12. Dumbbell chart: exports to China before, during and after trade barriers

## Data sources

- ABARES, *Agricultural Commodity Statistics*, September 2026, Table 13.
- DFAT, *Trade statistical pivot tables*, country by SITC, calendar years (based on ABS data).
- ABARES, *Snapshot of Australian Agriculture 2025*.
- Natural Earth 1:110m Admin 0 countries (TopoJSON from the FIT3179 Vega-Lite examples).

Full citations and data notes are at the bottom of the page.
