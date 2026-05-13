# 🚦 Traffic Light Simulator

A modern, interactive traffic light simulator built with vanilla HTML, CSS, and JavaScript.  
Click a button → a random light activates → the console shows the full instruction.

![Dark premium traffic light UI](screenshot.png)

---

## ✨ Features

- **Random light selection** – Red, Yellow, or Green every time you click **Simulate**.
- **Console output** – Open DevTools (F12) to see the light color and driver instruction.
- **Premium visual design** – Dark theme, glowing active lights, smooth transitions, and a polished glass‑morphism traffic light housing.
- **Pure frontend** – No frameworks, no dependencies. Just drop the files into a browser.
- **Responsive** – Looks great on desktop and mobile.

---

## 🚀 Quick Start

1. **Clone or download** the repository.
2. Open `index.html` in any modern browser.
3. Click the **SIMULATE** button (or press it repeatedly).
4. (Optional) Open the browser console (`F12` → Console) to see the detailed output.

That’s it – no build steps, no server required.

---

## 📁 Project Structure
traffic-light-simulator/
├── index.html # Main page layout
├── style.css # Premium dark‑themed styling
└── script.js # Random light logic + console output

text

---

## 🎨 Styling Highlights

- **Dark colour palette** (`#0f0f13` background) for a night‑time road feel.
- **CSS custom properties** – easily tweak colours, glows, and dimensions.
- **Glow animations** – active lights pulse with a subtle drop‑shadow.
- **Smooth transitions** – all states change with a 0.35s cubic‑bezier ease.
- **SVG icons** – clean, scalable vehicle, warning, and pedestrian symbols inside the lights.

---

## 🔧 How It Works

The JavaScript uses `Math.random()` and `Math.floor()` to generate a random integer (0, 1, or 2).  
A `switch` statement maps the number to a traffic light:

| Number | Light  | Instruction |
|--------|--------|-------------|
| 0      | Red    | STOP        |
| 1      | Yellow | SLOW DOWN   |
| 2      | Green  | GO          |

The result is printed to the **console**, and the corresponding light is visually activated on the page.

---

## 🖌️ Customisation

All main colours and glow values are in `style.css` inside `:root`:

```css
:root {
    --bg: #0f0f13;
    --red-glow: #ff3b3b;
    --yellow-glow: #ffb300;
    --green-glow: #00e64d;
    /* ... */
}
Change them to match your own brand or mood.

📄 License
MIT – use it, modify it, share it freely.