import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title:{
    template : "%s | New York",
    default : "Home | New York",
  },
  description: '뉴욕 타임즈 베스트셀러',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
