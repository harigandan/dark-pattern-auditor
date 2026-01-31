const darkPatternKeywords = [
  "only few left",
  "limited time",
  "hurry",
  "last chance",
  "offer ends",
  "buy now",
  "deal expires",
  "almost sold out"
];

function detectDarkPattern(text) {
  return darkPatternKeywords.some(keyword =>
    text.toLowerCase().includes(keyword)
  );
}
