import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "easy work | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div style={{ height: 40, border: "1px solid red" }}></div>
      {children}
    </div>
  );
}
