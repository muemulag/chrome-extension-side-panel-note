import { crx, defineManifest } from "@crxjs/vite-plugin";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import packageJson from "./package.json" assert { type: "json" };

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, "src");

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
      default_path: "src/sidepanel/index.html",
    },
    background: {
      service_worker: "src/background/index.ts",
      type: "module",
    },
  });

  return {
    resolve: {
      alias: [
        { find: "@root", replacement: rootDir },
        { find: "@src", replacement: srcDir },
      ],
    },
    plugins: [react(), crx({ manifest })],
    minify: false,
    modulePreload: false,
    build: {
      rollupOptions: {
        input: {
          sidepanel: resolve(srcDir, "sidepanel", "index.html"),
          background: resolve(srcDir, "background", "index.ts"),
        },
        output: {
          entryFileNames: "src/[name]/index.js",
        },
        external: ["webextension-polyfill"],
      },
    },
    server: {
      port: 25174,
      strictPort: true,
      hmr: {
        port: 25174,
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version),
    },
  };
});
