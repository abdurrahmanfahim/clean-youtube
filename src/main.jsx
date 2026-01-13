import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from 'easy-peasy'
import store from './store'
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
// <StrictMode>
//   <App />
// </StrictMode>,
