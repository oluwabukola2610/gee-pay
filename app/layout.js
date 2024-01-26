import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jarkata = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Geepay Dashboard",
  description: "Analytical Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${Jarkata.className}!bg-[#FAFAFA] dark:bg-gray-900  text-black dark:text-white`}>
          {children}
      </body>
    </html>
  );
}
