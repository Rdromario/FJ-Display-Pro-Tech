# FJ DisplayPro Tech — Landing Page

Landing page estática criada para a FJ DisplayPro Tech, com foco em geração de leads pelo WhatsApp e posicionamento como especialista em recuperação de displays.

## Estrutura

```text
fj-display-pro-tech/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── logo.png
├── wrangler.json
└── README.md
```

## Antes de publicar

Abra:

`public/script.js`

e troque:

`SEU_NUMERO_AQUI`

pelo WhatsApp comercial da empresa, usando DDI + DDD + número, somente números.

Exemplo:

`5544999999999`

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Nova landing page FJ DisplayPro Tech"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/fj-display-pro-tech.git
git push -u origin main
```

## Publicar no Cloudflare Workers

Este projeto usa Cloudflare Workers Static Assets.

Instale o Wrangler, se necessário:

```bash
npm install -g wrangler
```

Depois, na pasta do projeto:

```bash
npx wrangler login
npx wrangler deploy
```

O `wrangler.json` já aponta os arquivos estáticos para a pasta `public`.

## GitHub + deploy automático

No Cloudflare, conecte o repositório GitHub ao Worker. Depois de conectado, novos pushes no repositório podem disparar novos deploys automaticamente.

## Observações

- A logo fornecida pelo cliente foi preservada e incluída em `public/assets/logo.png`.
- A página foi desenhada para mobile first e tráfego pago.
- Os textos evitam prometer que todo display será recuperado: a viabilidade depende de diagnóstico técnico.
- Substitua futuramente as ilustrações abstratas por fotos reais da máquina ACF, reparos e antes/depois para aumentar a prova visual.
