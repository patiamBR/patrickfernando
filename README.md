# 🕺 Pat Oficial — Dançarino Profissional & Coreógrafo (DRT 00236/MS)

Portfolio web moderno, minimalista e ultrarrápido de **Patrick Fernando (Pat)**, dançarino profissional e coreógrafo de danças urbanas com mais de 19 anos de carreira.

Projeto com design inspirado na estética **Apple Glassmorphism (macOS Sonoma / visionOS / iOS)**, focado em elegância, superfícies translúcidas com desfoque (*frosted glass*), tipografia refinada e **100% de responsividade** em qualquer tamanho de tela (mobile, tablet, desktop e ultrawide). Pronto para publicação no **GitHub Pages**.

---

## 💎 Design & Tecnologias

- **Estética Apple Glassmorphism:**
  - Fundo escuro obsidiana profundo (`#000000` / `#09090b`) com iluminação ambiente difusa suave.
  - Cartões e painéis com efeito de vidro fosco (`backdrop-filter: blur(30px) saturate(190%)`), bordas translúcidas de alta precisão e bisel especular interno (`inset 0 1px 1px rgba(255, 255, 255, 0.16)`).
  - Tipografia inspirada na família *SF Pro* / *Inter*, com excelente hierarquia e legibilidade cristalina.
  - Botões estilo pílula (*frosted pill buttons*) com micro-interações suaves de clique e elevação.
  - Controles segmentados estilo iOS (*Segmented Picker*) para os filtros da galeria.
- **100% Responsivo:** Mobile-first rigoroso com menu estilo folha translúcida (*iOS drawer*), grids fluidos com `minmax()`, fontes dinâmicas com `clamp()` e zero transbordamento horizontal.
- **Performance Pura (Zero Bloat):** HTML5 semântico, CSS3 modular otimizado e Vanilla JavaScript nativo acelerado por hardware (60fps). Carregamento instantâneo (< 1s).
- **Galeria de Fotos com Lightbox Nativo:** Todas as 16 fotos oficiais salvas localmente, com navegação fluida por setas do teclado, clique e suporte a gestos de arrasto (*swipe touch*) no celular.
- **Simulador Interativo de Proposta:** Painel de vidro translúcido onde o contratante seleciona tipo de trabalho, cidade, data e detalhes, gerando instantaneamente a mensagem formatada para abertura direta no WhatsApp.
- **SEO & Dados Estruturados:** Metatags completas para redes sociais (Open Graph / Twitter Cards) e Schema.org (`@type: Person`) com seu registro DRT.
- **Arquivos para GitHub Pages:** Inclui `.nojekyll`, página `404.html` estilizada com auto-redirecionamento de links legados, `robots.txt` e `sitemap.xml`.

---

## 📁 Estrutura de Arquivos

```text
/
├── index.html               # Página principal do portfolio
├── 404.html                 # Página 404 personalizada (com auto-redirecionamento)
├── .nojekyll                # Desativa processamento Jekyll no GitHub Pages
├── robots.txt               # Otimização para mecanismos de busca
├── sitemap.xml              # Mapa do site para indexação Google
├── README.md                # Documentação do projeto e guia passo a passo
└── assets/
    ├── css/
    │   └── style.css        # Folha de estilos Apple Glassmorphism
    ├── js/
    │   └── main.js          # Lógica do lightbox, contadores, menu e propostas
    └── images/
        ├── favicon.svg      # Ícone do site vetorizado estilo Apple
        ├── manifest.json    # Metadados das fotos
        └── dance_1.jpg ... dance_16.jpg # Fotos oficiais em alta definição
```

---

## 🌐 Como Subir para o GitHub Pages (Passo a Passo)

### 1. Criar um Repositório no GitHub
1. Acesse [github.com](https://github.com) e acesse sua conta.
2. Clique no botão **"+"** no topo direito e selecione **"New repository"**.
3. Escolha o nome desejado (ex: `pat-oficial` ou `pat-portfolio`).
4. Deixe como **Public** (obrigatório para GitHub Pages gratuito).
5. Clique em **"Create repository"** (não marque para criar README ou .gitignore, pois já criamos tudo aqui).

### 2. Enviar os Arquivos pelo Terminal
No diretório deste projeto (`c:\Users\Patrick\3D Objects\pat`), abra o PowerShell e execute:

```powershell
# 1. Inicializar o repositório git local
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o commit
git commit -m "feat: portfolio Apple Glassmorphism Pat Oficial"

# 4. Definir a branch principal
git branch -M main

# 5. Conectar com o seu repositório no GitHub (substitua SEU-USUARIO e SEU-REPOSITORIO)
git remote add origin https://github.com/SEU-USUARIO/pat-oficial.git

# 6. Enviar para o GitHub
git push -u origin main
```

### 3. Ativar o GitHub Pages
1. No repositório no GitHub, clique na aba **Settings** (Configurações).
2. Na barra lateral esquerda, clique em **Pages**.
3. Na seção **"Build and deployment"** > **Source**, escolha **"Deploy from a branch"**.
4. Em **Branch**, selecione `main` e a pasta `/(root)`.
5. Clique em **Save**.
6. Em cerca de 1 a 2 minutos, o GitHub exibirá o link oficial do seu site no topo da página:
   `https://SEU-USUARIO.github.io/pat-oficial/`

---

## 📞 Contato do Artista
- **Artista:** Patrick Fernando (Pat)
- **Registro Profissional:** DRT 00236/MS
- **WhatsApp:** (67) 99637-6978
- **Instagram:** [@pat.oficial](https://www.instagram.com/pat.oficial)
- **E-mail:** pat.rnb@hotmail.com
- **Local:** Campo Grande — Mato Grosso do Sul, Brasil
