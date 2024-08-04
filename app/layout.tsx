import '@/app/ui/global.css';
import { erik, montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        
        {children}
        <footer className={`${erik.className}'py-10 flex justify-center items-center'`}>Hecho con 💟 por la gente de Riwi</footer>
        </body>
    </html>
  );
}
