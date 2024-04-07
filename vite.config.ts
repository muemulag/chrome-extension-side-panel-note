import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import packageJson from "./package.json" assert { type: "json" };

export default defineConfig(() => {
  const manifest = defineManifest({
    manifest_version: 3,
    name: "Markdown SidePanel Notes",
    description:
      "Add the reading time to Chrome Extension documentation articles",
    version: packageJson.version,
    permissions: ["sidePanel", "tabs", "activeTab", "storage"],
    host_permissions: ["<all_urls>"],
    side_panel: {
      default_path: "src/side_panel.tsx",
    },
  });

  return {
    plugins: [react(), crx({ manifest })],
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version),
    },
  };
});

// export default defineConfig({
//   plugins: [react(), crx({ manifest })],
//   build: {
//     rollupOptions: {
//       input: {
//         side_panel: "src/sidepanel.tsx",
//       },
//     },
//   },
//   define: {
//     __APP_VERSION__: JSON.stringify(packageJson.version),
//   },
// });
