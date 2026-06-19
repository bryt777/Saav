import "./globals.css";

export const metadata = {
  title: "SEVEN",
  description: "PUBG Mobile & BGMI Active.sav Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
