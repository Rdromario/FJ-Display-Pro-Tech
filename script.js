/*
  CONFIGURAÇÃO:
  1. Abra este arquivo.
  2. Troque apenas WHATSAPP_NUMBER pelo número comercial da FJ,
     com DDI + DDD, somente números.
  Exemplo: 5544999999999
*/
const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";

const whatsappMessage =
  "Olá! Vi a página da FJ DisplayPro Tech e gostaria de saber se minha TV pode ter possibilidade de recuperação. Vou enviar uma foto da tela e o modelo.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (WHATSAPP_NUMBER === "SEU_NUMERO_AQUI") {
    link.href = "#whatsapp-config";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Configure o número do WhatsApp no arquivo public/script.js antes de publicar a página.");
    });
  } else {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
