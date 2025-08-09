import ReactDOM from "react-dom/client";
import App from "./app";

import styles from "./global.css?inline";

const container = document.createElement("div");
const shadow = container.attachShadow({ mode: "open" });
const style = document.createElement("style");

container.id = "widget";

style.innerHTML = styles;
shadow.appendChild(style);

document.body.appendChild(container);

ReactDOM.createRoot(shadow).render(<App />);
