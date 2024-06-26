import "./globals.css";
import Nav from "@/components/navbar/Nav"

export const metadata = {
  title: "Annisa Interior Design",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light text-dark relative">
        <Nav/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
