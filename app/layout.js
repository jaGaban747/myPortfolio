
import "./globals.css";
import Layout from "./components/layout";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Leon Changara - Portfolio",
  description:
    "Electrical and Electronics Engineer exploring cloud, DevOps, software engineering, AI, and product development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
