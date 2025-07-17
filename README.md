# 🧠 EchoMind: Painel de Notificações Cyberpunk

**EchoMind** é um painel de notificações futurista com uma estética cyberpunk, desenvolvido em **React** e **Vite**. Ele simula um sistema de gerenciamento de informações onde o usuário pode visualizar, interagir e filtrar um fluxo contínuo de notificações. Inspirado em interfaces de sistemas avançados, o EchoMind foi projetado para ser intuitivo, visualmente dinâmico e otimizado para performance.

---

## 🌟 Visão Geral do Projeto

Este projeto visa demonstrar o uso de:

- **React Hooks** (`useState`, `useEffect`, `useMemo`, `useRef`, `useContext`, `lazy`, `Suspense`)
- **Context API** para gerenciamento global de notificações
- **CSS Dinâmico** e **animações** para uma experiência cyberpunk envolvente
- **Componentização** para estrutura modular e reutilizável
- **Otimização com Code Splitting** via `React.lazy` e `Suspense`

---

## ✨ Funcionalidades

- **Notificações em Fluxo**: Simulação em tempo real com níveis variados de urgência e categorias
- **Tiles Dinâmicos**: Notificações pulsantes e interativas
- **Interatividade**: Marcar como lida, arquivar/remover
- **Filtros de Visão "Data Stream"**: Filtragem por categorias (Essencial, Rotina, Social, Pessoal)
- **Contador de Notificações Ativas**
- **Interface de Comando por Voz (simulada)**: Feedback visual/textual
- **Visualização de Urgência**: Ondas que mudam conforme a intensidade de notificações não lidas
- **Code Splitting**: Componentes carregados sob demanda

---

## 🛠️ Tecnologias Utilizadas

- **React.js**
- **Vite**
- **CSS3** (animações e estilos cyberpunk)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão LTS)
- npm ou Yarn

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/echomind.git
cd echomind
```

## Instalar Dependências

```bash
npm install
# ou
yarn install
```

## Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```
Acesse: http://localhost:5173/ (ou porta alternativa). HMR ativo para recarregamento automático.

## Compilar para Produção (Opcional)

```bash
npm run build
# ou
yarn build
```
Saída gerada na pasta dist/ pronta para deploy.

## 📂 Estrutura do Projeto

echomind/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── componentes/
│   │   ├── NotificationTile.jsx
│   │   ├── NotificationTile.css
│   │   ├── FilterStream.jsx
│   │   ├── FilterStream.css
│   │   ├── VoiceCommandButton.jsx
│   │   ├── VoiceCommandButton.css
│   │   ├── UrgencyWaveDisplay.jsx
│   │   └── UrgencyWaveDisplay.css
│   └── context/
│       ├── NotificationContext.jsx
│       └── useNotifications.js
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

## 🤝 Contribuição

Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções.


