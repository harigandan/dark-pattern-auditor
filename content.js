function scanForDarkPatterns() {
  let found = false;

  document.querySelectorAll("button, span, div, p").forEach(el => {
    const text = el.innerText;
    if (text && detectDarkPattern(text)) {
      found = true;
      el.classList.add("dark-pattern-detected");
    }
  });

  if (found) {
    alert("⚠️ Dark Patterns Detected on this page!");
  } else {
    alert("✅ No obvious dark patterns detected.");
  }
}
