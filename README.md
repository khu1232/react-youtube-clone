# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎥 React YouTube Clone

A modern YouTube UI clone built with **React.js**, **Material UI**, and **styled-components**, using the **YouTube Data API v3** to fetch real video data. This project replicates core YouTube features such as browsing trending videos, searching content, and viewing video details in a responsive UI.

---

## 🚀 Live Demo

---

## ✨ Features

- 🔎 Search videos using YouTube Data API
- 📺 Trending / popular videos feed
- 🎬 Video detail page with embedded player
- 📱 Fully responsive UI (mobile + desktop)
- ♾️ Infinite scroll for video listing
- 🧭 YouTube-like navigation experience
- 🎨 Clean UI built with Material UI

---

## 🧱 Tech Stack

**Frontend**
- React.js (Create React App)
- React Router DOM
- Material UI v4
- styled-components


**API**
- YouTube Data API v3

**HTTP Client**
- Axios

---

## 📁 Project Structure
react_youtube-clone/

│
├── public/

├── src/

│ ├── components/

│ │ ├── SeachBar/

│ │ ├── VideoDetails/

│ │ ├── VideoItems/

│ │ └── VideoList/

│ │ └── youtube.jsx/
│ │
│ │

│ ├── App.jsx
│ └── index.jsx
│

├── package.json
└── README.md



---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/krothwal/react_youtube-clone.git
cd react_youtube-clone

npm install

npm start

http://localhost:3000

