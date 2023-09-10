import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import global_en from './translate/en/global.json'
import global_ru from './translate/ru/global.json'
import global_gl from './translate/gl/global.json'
import global_fr from './translate/fr/global.json'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ru",
  resources: {
    en: {
      global: global_en
    },
    ru: {
      global: global_ru
    },
    gl: {
      global: global_gl
    },
    fr: {
      global: global_fr
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
