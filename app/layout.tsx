import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELO BARRE | 우아한 움직임, 단단한 변화",
  description:
    "필라테스의 섬세함과 바레의 에너지를 결합한 여성 전문 부티크 스튜디오 VELO BARRE 벨로바레입니다.",
  openGraph: {
    title: "VELO BARRE 벨로바레",
    description: "우아한 움직임, 단단한 변화.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
