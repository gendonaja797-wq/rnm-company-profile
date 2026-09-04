import type { NextConfig } from "next";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const isUserPagesRepository =
  repositoryName.endsWith(".github.io");

const basePath =
  process.env.GITHUB_ACTIONS && !isUserPagesRepository
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
