import "./globals.css"; // Import global styles
import Layout from "./components/layout"; // Import the Layout component

export const metadata = {
  title: "Leon Changara - Portfolio",
  description: "A portfolio showcasing my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
