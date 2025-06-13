import './globals.css';

export const metadata = {
  title: 'My Counter App',
  description: 'A simple counter app built with Next.js and TurboPack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-base-100">
        {children}
      </body>
    </html>
  );
}