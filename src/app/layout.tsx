import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import "destyle.css"; //ユーザーエージェントスタイルシートのリセット

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ざわたく.com",
  description: "ざわたくのホームページ兼ポートフォリオ",
  openGraph: {
    title: "ざわたく.com",
    description: "ざわたくのホームページ兼ポートフォリオ",
    url: "https://zawataku.com",
    siteName: "ざわたく.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaruGothic.className}`}>
        {children}
      </body>
    </html>
  );
}
