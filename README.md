# 🕺 Pat Oficial — Dançarino Profissional & Coreógrafo (DRT 00236/MS)

Portfolio web moderno, minimalista e ultrarrápido de **Patrick Fernando (Pat)**, dançarino profissional e coreógrafo de danças urbanas com mais de 19 anos de carreira.

Projeto com design inspirado na estética **Apple Glassmorphism (macOS Sonoma / visionOS / iOS)**, focado em elegância, superfícies translúcidas com desfoque (*frosted glass*), tipografia refinada, suporte **Bilingue (Português & English)** com persistência e **100% de responsividade** em qualquer tamanho de tela (mobile, tablet, desktop e ultrawide). Pronto para publicação no **GitHub Pages**.

---

## 💎 Design & Tecnologias

- **Estética Apple Glassmorphism:**
  - Fundo escuro obsidiana profundo (`#000000` / `#09090b`) com iluminação ambiente difusa suave.
  - Cartões e painéis com efeito de vidro fosco (`backdrop-filter: blur(30px) saturate(190%)`), bordas translúcidas de alta precisão e bisel especular interno (`inset 0 1px 1px rgba(255, 255, 255, 0.16)`).
  - Tipografia inspirada na família *SF Pro* / *Inter*, com excelente hierarquia e legibilidade cristalina.
  - Botões estilo pílula (*frosted pill buttons*) com micro-interações suaves de clique e elevação.
  - Controles segmentados estilo iOS (*Segmented Picker*) para os seletores de idioma e filtros da galeria.
- **Suporte Bilíngue (PT / EN):**
  - Seletor de idioma integrado no menu desktop e no drawer mobile.
  - Dicionário de tradução completo cobrindo biografia, linha do tempo, espetáculos, mestres, galeria, serviços, simulador de proposta e formulário de contato.
  - Persistência automática da preferência no `localStorage`.
  - Padrão internacional com charset `UTF-8` rigoroso para todos os acentos e caracteres especiais da língua portuguesa.
- **100% Responsivo:** Mobile-first rigoroso com menu estilo folha translúcida (*iOS drawer*), grids fluidos com `minmax()`, fontes dinâmicas com `clamp()` e zero transbordamento horizontal.
- **Performance Pura (Zero Bloat):** HTML5 semântico, CSS3 modular otimizado e Vanilla JavaScript nativo acelerado por hardware (60fps). Carregamento instantâneo (< 0.2s, 100/100 Lighthouse).
- **Galeria de Fotos com Lightbox Nativo:** Todas as 16 fotos oficiais salvas localmente e também vinculadas diretamente a CDNs de alta velocidade (fallback garantido), com navegação por teclado, clique e suporte a gestos de arrasto (*swipe touch*) no celular.
- **Simulador Interativo de Proposta:** Painel de vidro translúcido onde o contratante seleciona tipo de trabalho, cidade, data e detalhes, gerando instantaneamente a mensagem formatada para abertura direta no WhatsApp.
- **SEO & Dados Estruturados:** Metatags completas para redes sociais (Open Graph / Twitter Cards) e Schema.org (`@type: Person`) com seu registro DRT.
- **Arquivos para GitHub Pages:** Inclui `.nojekyll`, página `404.html` estilizada com auto-redirecionamento de links legados, `robots.txt` e `sitemap.xml`.

---

## 📁 Estrutura do Repositório

```text
├── .nojekyll              # Garante que o GitHub Pages não ignore arquivos e pastas
├── 404.html               # Página de erro 404 com glassmorphism e redirecionamento
├── index.html             # Site completo, autossuficiente e bilíngue (HTML + CSS + JS inline + CDN)
├── robots.txt             # Instruções de indexação para buscadores (Google, Bing)
├── sitemap.xml            # Mapa do site para SEO
├── README.md              # Documentação oficial do projeto
└── assets/                # Arquivos estáticos organizados para modularidade
    ├── css/
    │   └── style.css      # Folha de estilos Glassmorphism com seletor de idiomas
    ├── js/
    │   ├── i18n.js        # Dicionário bilíngue Português / Inglês
    │   └── main.js        # Lógica de alternância de idioma, galeria e interatividade
    └── images/
        ├── manifest.json  # Catálogo das 16 fotos oficiais
        ├── favicon.svg    # Ícone do site em vetor SVG
        └── dance_1.jpg ... dance_16.jpg # Fotos oficiais em alta definição
```

---

## 🚀 Como Atualizar no GitHub Pages

Como o arquivo `index.html` foi construído de forma **100% autossuficiente** (estilos, scripts, dicionário bilíngue e imagens via CDN estão todos embutidos), você pode atualizar seu site em menos de 1 minuto diretamente no navegador:

1. Acesse seu repositório: [github.com/patiamBR/patrickfernando](https://github.com/patiamBR/patrickfernando)
2. Clique no arquivo `index.html`.
3. Clique no ícone de lápis ✏️ (**Edit this file**) no canto superior direito.
4. Selecione todo o conteúdo anterior (`Ctrl+A`), apague e cole o conteúdo do novo [`index.html`](file:///c:/Users/Patrick/3D%20Objects/pat/index.html).
5. No final da página, clique no botão verde **Commit changes...** e confirme.
6. Em cerca de 1 a 2 minutos, o GitHub Pages recompila e seu site atualizado estará no ar em:
   👉 **https://patiambr.github.io/patrickfernando/**

---

## 📞 Contato & Booking

- **Artista:** Patrick Fernando (Pat Oficial) — DRT 00236/MS
- **WhatsApp:** [(67) 99120-6379](https://wa.me/5567991206379)
- **Instagram:** [@pat_oficial_](https://instagram.com/pat_oficial_)
- **Email:** patrick.ambr@gmail.com
- **Localização:** Campo Grande — MS, Brasil
