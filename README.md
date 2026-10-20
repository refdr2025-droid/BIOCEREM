# 🌱 BioCerem

**Hear what your crops are saying.** BioCerem is a precision-agriculture platform that pairs plant biosensors and soil probes with one live web dashboard.

This repository contains the **project website / pitch site**. It is a plain HTML, CSS and JavaScript site. No installs, no Node, no build step.

## How to run it
1. Download or clone this repo.
2. Double-click `index.html`. It opens in your browser.
3. To host free on GitHub Pages: **Settings → Pages → Deploy from branch → main / (root)**.

An internet connection is only needed for the Google Fonts. Without it, the site falls back to system fonts.

## What is BioCerem?
### The problem
- **Inaccurate soil and crop monitoring:** farming relies on guesswork or generic weather data, so diseases go unnoticed.
- **Resource wastage:** farmers over-irrigate and overuse fertilizer, hurting soil and raising costs.
- **Fragmented data:** existing tools rarely combine biological, soil and environmental data.

### The solution
An integrated multi-sensor ecosystem. Biosensors and soil probes capture real-time data from the plant and soil. A unified web dashboard turns it into actionable insight.

### How it works
1. **Sense:** field node with biosensors (sap pH, moisture stress) and soil probes (NPK, temperature, moisture).
2. **Send:** a low-power LoRaWAN transmitter sends data to a central gateway.
3. **Process:** cloud storage and ML models (Scikit-learn) predict risks.
4. **Act:** the dashboard shows health scores, automated alerts and irrigation recommendations.

### Business model
Hardware kit sales (B2B and B2C), tiered SaaS subscription with predictive analytics, and anonymized regional data insights for researchers and insurers.

### Target customers
Commercial and precision farmers, agronomists and agri-consultants, agricultural cooperatives.

### Feasibility
Technically feasible thanks to mature IoT, low-cost biosensors and cloud hosting. Economically, savings on water, fertilizer and crop loss repay the hardware cost within a few harvest cycles.

### Advantages
Granular plant-level data, an all-in-one dashboard, and proactive instead of reactive risk management.

### Limitations
High initial cost for small farms, patchy rural connectivity, and sensor bio-fouling that needs periodic maintenance.

### Future scope
AI-driven disease mapping, drone and NDVI integration, Android/iOS apps with offline sync and SMS alerts.

### Benefits and impact
Environmental sustainability (less runoff, less water use), food security, and better farmer profits.

## What I built for this website
**Front end only.** The site is static, so there is no back end or database. It has three files:

| File | Purpose |
|---|---|
| `index.html` | Page structure and content for every section of the proposal |
| `style.css` | Design: CSS variables, Grid and Flexbox layout, animations, responsive breakpoints |
| `script.js` | Vanilla JavaScript for interactions |

**Technologies:** HTML5, CSS3, vanilla JavaScript (no frameworks, no libraries).
**Fonts:** Bricolage Grotesque (headings) and DM Sans (body) from Google Fonts.

**Design and features**
- Bold Gen Z look: bento-style cards, chunky outlines, offset shadows, lilac, leaf-green and sun-yellow palette.
- **Interactive demo dashboard** in the hero. Values update every few seconds and a button simulates drought stress. The data is **simulated** to show the product idea. It is not from real sensors.
- Animated gradient blobs, scrolling marquee, scroll reveal on sections, count-up impact numbers.
- Fully responsive (mobile, tablet, desktop), keyboard focus styles, and `prefers-reduced-motion` support.
- The impact numbers (30% water, 25% fertilizer) are **illustrative targets**, not measured results. Replace them with real figures once you have pilot data.

## Planned production stack (from the proposal)
ESP32/Arduino, LoRaWAN/NB-IoT, Node.js or Python (FastAPI/Django), React or Vue, InfluxDB and PostgreSQL, AWS or GCP with Scikit-learn. This website is the public presentation layer and does not use them yet.

## To customize
Change the contact email in `index.html` (search `hello@biocerem.example`) and update the text in any section.
