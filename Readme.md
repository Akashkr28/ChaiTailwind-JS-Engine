# ChaiTailwind

*A lightweight utility-first CSS engine powered by JavaScript*

---

## About the Project

ChaiTailwind is a small project I built to understand how utility-first CSS frameworks like Tailwind work internally.

Instead of writing traditional CSS, you can directly use utility-style class names like:

```html
<div class="chai-p-20 chai-bg-red chai-text-white"></div>
```

A JavaScript engine scans the DOM, reads these class names, and dynamically applies the corresponding styles.

The goal was to explore whether Tailwind-like behavior could be achieved at runtime using only JavaScript.

---

## How It Works

1. The script runs after the page loads
2. It scans all elements in the DOM
3. It identifies class names starting with `chai-`
4. Each class is parsed into:

   * a utility type (e.g., `p`, `bg`, `text`)
   * a value (e.g., `20`, `red`)
5. The corresponding styles are applied using inline CSS

---

## Features

* Utility-first styling without writing CSS
* Supports common utilities:

  * Spacing (padding, margin)
  * Colors (background, text)
  * Typography (font size, alignment, weight)
  * Borders and radius
  * Basic layout utilities (flex, alignment)
* Smart value handling (px, %, rem, etc.)
* Hover support (`chai-hover-*`)
* Responsive support (`chai-md-*`)
* Reusable and re-runnable engine

---

## Example Usage

```html
<script src="chai-tailwind.js"></script>

<div class="chai-p-20 chai-bg-blue chai-text-white chai-rounded-10">
  Hello ChaiTailwind
</div>
```

---

## Installation

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/gh/your-username/chai-tailwind/chai-tailwind.js"></script>
```

### Using NPM (optional)

```bash
npm install chai-tailwind
```

```javascript
import { init } from "chai-tailwind";

init();
```

---

## Manual Initialization (Optional)

The library initializes automatically on page load.

If elements are added dynamically, you can re-run it:

```javascript
ChaiTailwind.init();
```

---

## Supported Utilities

| Class               | Output                  |
| ------------------- | ----------------------- |
| chai-p-20           | padding: 20px           |
| chai-m-10           | margin: 10px            |
| chai-bg-red         | background-color: red   |
| chai-text-blue      | color: blue             |
| chai-text-center    | text-align: center      |
| chai-fs-18          | font-size: 18px         |
| chai-rounded-10     | border-radius: 10px     |
| chai-flex           | display: flex           |
| chai-justify-center | justify-content: center |

---

## Why I Built This

The purpose of this project was to move beyond using frameworks and understand how they work internally.

It helped me explore DOM traversal, pattern parsing, and dynamic styling in a practical way.

---

## Demo Video

https://youtu.be/268bE0KNoDs


---

## Future Improvements

* Expand utility coverage (gap, grid, transitions)
* Add configuration support
* Introduce dark mode support
* Improve performance and optimization

---

## Final Thoughts

This project started as a learning exercise and helped me better understand how utility-first CSS frameworks function behind the scenes.

---

**Created by Akash Kumar Singh**
