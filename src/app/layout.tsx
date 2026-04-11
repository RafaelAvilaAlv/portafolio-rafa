import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafa Álvarez | Portafolio",
  description:
    "Portafolio profesional de Rafa Álvarez, Tecnólogo Superior Universitario en Desarrollo de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}