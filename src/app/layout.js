import "@/styles/globals.css";
import Nav from "@/components/nav";

export const metadata = {
  title: "CRLS Investment Club",
  description: "Wednesday Mornings at 8 in Room 4401",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
