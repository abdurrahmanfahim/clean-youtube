import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {StoreProvider} from 'easy-peasy'
import "./index.css";
import App from "./App.jsx";
import store from './store'

createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
// <StrictMode>
//   <App />
// </StrictMode>,
