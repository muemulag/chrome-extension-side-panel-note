import SidePanel from "@root/src/sidepanel/SidePanel";
import { createRoot } from "react-dom/client";

function init() {
  const container = document.getElementById("app-container");
  if (!container) {
    throw new Error("Can not find #app-container");
  }

  const root = createRoot(container);
  root.render(<SidePanel />);
}

init();
