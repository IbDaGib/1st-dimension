import '@/app/globals.scss';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>Hello World</body>
    </html>
  );
}
