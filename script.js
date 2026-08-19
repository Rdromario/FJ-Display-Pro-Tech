// ============================================================
// FJ DisplayPro Tech — Landing Page (Google Ads)
// ============================================================

// Ano no rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Slider "antes/depois" — genérico (funciona pra qualquer [data-compare] na página)
document.querySelectorAll("[data-compare]").forEach((panel) => {
  const range = panel.querySelector('input[type="range"]');
  if (!range) return;
  panel.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", () => {
    panel.style.setProperty("--pos", range.value + "%");
  });
});

// ------------------------------------------------------------
// PAINEL FIXO (visual-rail) — troca de caso via botões
// ------------------------------------------------------------
const CASES = [
  {
    before: "img1.jpg",
    after: "img2.jpg",
    title: "TV com linhas verticais",
    desc: "Falha na placa de conexão do display — recuperada com solda e reforço de trilha, sem trocar a tela.",
    fail: "Linhas verticais",
    fix: "Solda de precisão"
  },
  {
    before: "img3.jpg",
    after: "img4.jpg",
    title: "Display com riscos e falha de COF",
    desc: "Recuperado na máquina ACF — colagem profissional do COF sem deixar marca visível.",
    fail: "Riscos / COF solto",
    fix: "Colagem em máquina ACF"
  },
  {
    before: "img5.jpg",
    after: "img6.jpg",
    title: "Imagem escura e manchada",
    desc: "Reativação de moléculas — técnica avançada que devolve o brilho original da tela.",
    fail: "Imagem escura / manchada",
    fix: "Reativação de moléculas"
  }
];

const railTabs = document.querySelectorAll("#railTabs button");
const railBefore = document.getElementById("railBefore");
const railAfter = document.getElementById("railAfter");
const railTitle = document.getElementById("railTitle");
const railDesc = document.getElementById("railDesc");
const statFail = document.getElementById("statFail");
const statFix = document.getElementById("statFix");
const railComparePanel = document.querySelector(".rail-compare");
const railRange = railComparePanel ? railComparePanel.querySelector('input[type="range"]') : null;

railTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const data = CASES[Number(tab.dataset.case)];
    if (!data) return;
    railTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    railBefore.src = data.before;
    railAfter.src = data.after;
    railTitle.textContent = data.title;
    railDesc.textContent = data.desc;
    if (statFail) statFail.textContent = data.fail;
    if (statFix) statFix.textContent = data.fix;
    if (railRange) {
      railRange.value = 50;
      railComparePanel.style.setProperty("--pos", "50%");
    }
  });
});
