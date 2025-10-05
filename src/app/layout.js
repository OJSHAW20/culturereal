import "./globals.css";

export const metadata = { title: "culturereal", description: "Real moments, real cultures." };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="mx-auto max-w-md min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
