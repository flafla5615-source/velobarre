import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELOBARRE | 하루 50분, 가장 우아한 바디루틴",
  description:
    "바레와 사이클링을 결합한 프리미엄 바디 루틴 스튜디오 VELOBARRE 벨로바레의 무료체험 신청 랜딩페이지입니다.",
  openGraph: {
    title: "VELOBARRE 벨로바레",
    description: "바레의 섬세함과 사이클의 강력함을 하나로.",
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
