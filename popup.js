document.addEventListener("DOMContentLoaded", () => {
  const scanBtn = document.getElementById("scan");

  scanBtn.addEventListener("click", async () => {
    // Get current active tab
    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    // Inject scan logic into the webpage
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {

        // ------------------------------
        // Dark Pattern Definitions
        // ------------------------------
        const patterns = {
          Urgency: ["limited time", "hurry", "last chance"],
          Scarcity: ["only few left", "almost sold out"],
          Pressure: ["buy now", "deal expires"]
        };

        let detected = {};
        let totalHits = 0;

        // ------------------------------
        // Scan DOM Content
        // ------------------------------
        document.querySelectorAll("button, div, span, p").forEach(el => {
          const text = el.innerText?.toLowerCase();
          if (!text) return;

          for (const [type, words] of Object.entries(patterns)) {
            if (words.some(w => text.includes(w))) {
              detected[type] = (detected[type] || 0) + 1;
              totalHits++;
              el.style.border = "2px solid red";
              el.style.background = "rgba(255,0,0,0.08)";
              el.title = `⚠️ ${type} dark pattern detected`;
            }
          }
        });

        // ------------------------------
        // Render Floating Audit Panel
        // ------------------------------
        renderAuditPanel(detected, totalHits);

        function renderAuditPanel(detected, totalHits) {
          // Prevent duplicate panel
          if (document.getElementById("dp-panel")) return;

          const confidence = Math.min(95, totalHits * 20);

          const panel = document.createElement("div");
          panel.id = "dp-panel";

          panel.innerHTML = `
            <strong>🛡️ FairBuy AI – Audit Report</strong><br><br>
            <b>Detected Patterns:</b><br>
            ${Object.keys(detected).length > 0 
              ? Object.keys(detected).map(p => `• ${p}`).join("<br>") 
              : "No suspicious patterns detected"}<br><br>

            <b>Risk Level:</b> ${confidence > 60 ? "HIGH 🔴" : "LOW 🟢"}<br>
            <b>Detection Confidence:</b> ${confidence}%<br><br>

            <small>
              This website uses psychological techniques that may
              influence impulsive purchasing decisions.
            </small><br><br>

            <button id="dp-close">Dismiss</button>
          `;

          panel.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 260px;
            background: #111;
            color: #fff;
            padding: 14px;
            border-radius: 10px;
            font-size: 13px;
            z-index: 999999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          `;

          document.body.appendChild(panel);

          document.getElementById("dp-close").onclick = () => panel.remove();
        }
      }
    });
  });
});
