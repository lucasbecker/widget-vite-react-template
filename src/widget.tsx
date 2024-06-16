import ReactDOM from "react-dom/client";
import App from "./app";

const container = document.createElement("div");
const shadow = container.attachShadow({ mode: "open" });

container.id = "widget";
document.body.appendChild(container);

ReactDOM.createRoot(shadow).render(<App />);
