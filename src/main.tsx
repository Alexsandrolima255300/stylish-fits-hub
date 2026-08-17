import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const style=document.createElement("link");
style.rel="stylesheet";
style.href="/petviva-overrides.css";
document.head.appendChild(style);

const promoStyle=document.createElement("link");
promoStyle.rel="stylesheet";
promoStyle.href="/promo-banner-readability.css";
document.head.appendChild(promoStyle);

createRoot(document.getElementById("root")!).render(<App />);
