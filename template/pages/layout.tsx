export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex flex-col h-screen">
          {/* <Header /> */}
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
