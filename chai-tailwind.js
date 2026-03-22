(function () {
  function init() {
    const elements = document.querySelectorAll("*");

    elements.forEach((el) => {
      const classes = [...el.classList];

      classes.forEach((cls) => {
        if (!cls.startsWith("chai-")) return;

        // Handle responsive (md)
        if (cls.startsWith("chai-md-")) {
          if (window.innerWidth >= 768) {
            applyUtility(el, cls.replace("chai-md-", "chai-"));
          }
          return;
        }

        // Handle hover
        if (cls.startsWith("chai-hover-")) {
          handleHover(el, cls);
          return;
        }

        applyUtility(el, cls);
        el.classList.remove(cls);
      });
    });
  }

  function handleHover(el, cls) {
    const parts = cls.replace("chai-hover-", "").split("-");
    const type = parts[0];
    const value = parts.slice(1).join("-");
  
    let originalValue;
  
    el.addEventListener("mouseenter", () => {
      originalValue = el.style.backgroundColor;
      applyUtility(el, `chai-${type}-${value}`);
    });
  
    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = originalValue;
    });
  }

  function applyUtility(el, cls) {
    const parts = cls.split("-");
    const type = parts[1];
    const value = parts.slice(2).join("-");

    const utilities = {
      // SPACING
      p: () => (el.style.padding = px(value)),
      m: () => (el.style.margin = px(value)),

      px: () => {
        el.style.paddingLeft = px(value);
        el.style.paddingRight = px(value);
      },

      py: () => {
        el.style.paddingTop = px(value);
        el.style.paddingBottom = px(value);
      },

      // MARGIN
      mx: () => {
        el.style.marginLeft = px(value);
        el.style.marginRight = px(value);
      },

      my: () => {
        el.style.marginTop = px(value);
        el.style.marginBottom = px(value);
      },

      // COLORS
      bg: () => (el.style.backgroundColor = value),
      text: () => {
        if (["center", "left", "right"].includes(value)) {
          el.style.textAlign = value;
        } else {
          el.style.color = value;
        }
      },

      // TYPOGRAPHY
      fs: () => (el.style.fontSize = px(value)),
      fw: () => (el.style.fontWeight = value),

      // BORDER
      border: () => (el.style.border = `${value}px solid black`),
      rounded: () => (el.style.borderRadius = px(value)),

      // LAYOUT
      flex: () => (el.style.display = "flex"),
      block: () => (el.style.display = "block"),
      inline: () => (el.style.display = "inline"),
      hidden: () => (el.style.display = "none"),

      justify: () => (el.style.justifyContent = value),
      items: () => (el.style.alignItems = value),

      // SIZE
      w: () => (el.style.width = px(value)),
      h: () => (el.style.height = px(value)),

      // EXTRA (BONUS)
      shadow: () =>
        (el.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)"),

      opacity: () => (el.style.opacity = value),

      cursor: () => (el.style.cursor = value),
    };

    if (utilities[type]) {
      utilities[type]();
    }
  }

  function px(value) {
    // If number → add px
    if (!isNaN(value)) return value + "px";

    // Allow % , rem , vh , etc
    return value;
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", init);

  // Expose globally (optional)
  window.ChaiTailwind = { init };
})();

// chai-p-20 or chai-bg-red

// chai-p-20 becomes padding 20 pixels
// chai-bg-red becomes background color red