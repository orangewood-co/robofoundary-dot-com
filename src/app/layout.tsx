import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://robofoundry.in"),
  title: "RoboFoundry — Forging Future Roboticists",
  description:
    "Learn Robotics, AI, ROS2, Computer Vision, and Autonomous Systems through real hardware, industry mentors, and hands-on projects — not just slides. Powered by Orangewood Labs (YC W18).",
  openGraph: {
    title: "RoboFoundry — Forging Future Roboticists",
    description:
      "Learn Robotics, AI, ROS2, Computer Vision, and Autonomous Systems through real hardware, industry mentors, and hands-on projects. Powered by Orangewood Labs (YC W18).",
    url: "https://robofoundry.in",
    siteName: "RoboFoundry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboFoundry — Forging Future Roboticists",
    description:
      "Robotics, AI, and autonomous systems training with real hardware and industry mentors. Powered by Orangewood Labs (YC W18).",
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
