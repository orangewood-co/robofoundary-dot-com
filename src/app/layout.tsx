import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vega-education.com"),
  title: "Vega",
  description:
    "At Vega, we bridge the gap between theory and real-world tech. From intelligent robotic systems to hands-on learning, we empower the next-gen of innovators with tools that matter.",
  openGraph: {
    title: "Vega",
    description:
      "At Vega, we bridge the gap between theory and real-world tech. Hands-on learning, workshops, and community-driven programs.",
    url: "https://vega-education.com",
    siteName: "Vega",
    images: [
      {
        url: "/vega-main.png",
        width: 1200,
        height: 630,
        alt: "Vega - Hands-on Tech Learning",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vega",
    description:
      "Hands-on learning, workshops, and community-driven programs from Vega.",
    image: "/vega-main.png", // must be in /public
  },
  icons: {
    icon: "/vega.png",
    apple: "/vega.png",
  },
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
