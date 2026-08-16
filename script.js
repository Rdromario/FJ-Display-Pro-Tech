// ============================================================
// FJ DisplayPro Tech — Landing Page (Google Ads)
// ============================================================

// Ano no rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Sliders "antes/depois" — funciona para todos os cards com [data-compare]
document.querySelectorAll("[data-compare]").forEach((panel) => {
  const range = panel.querySelector('input[type="range"]');
  if (!range) return;
  panel.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", () => {
    panel.style.setProperty("--pos", range.value + "%");
  });
});
