import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional — omit for variable font
});

export const metadata = {
  title: "PulseWire",
  description:
    "PulseWire is a news website that delivers unbiased and fearless journalism to its readers. We are committed to providing accurate and timely news coverage on a wide range of topics, including politics, business, technology, culture, and more. Our team of experienced journalists works tirelessly to uncover the truth and report it without fear or favor. At PulseWire, we believe that journalism is a vital pillar of democracy, and we strive to uphold the highest standards of integrity and professionalism in everything we do.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
