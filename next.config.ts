import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ancre la racine du projet ici (évite l'avertissement lié au lockfile du dossier home).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
