import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Vega",
  description:
    "At Vega, we bridge the gap between theory and real-world tech. From intelligent robotic systems to hands-on learning, we empower the next-gen of innovators with tools that matter.  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
