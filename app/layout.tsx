import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RNM Company Profile",
  description:
    "PT Ratu Nayla Mandiri - perusahaan konstruksi, supplier, dan perdagangan umum berbasis di Gresik, Jawa Timur.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
