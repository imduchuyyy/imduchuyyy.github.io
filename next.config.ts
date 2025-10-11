// next.config.ts
import createMDX from "@next/mdx";
import type { NextConfig } from "next";


const base: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // Next Image doesn't optimize in export mode
  images: { unoptimized: true },
  // GH Pages serves directories
  trailingSlash: true,
  // Enable MD/MDX as page/route extensions
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(base);
