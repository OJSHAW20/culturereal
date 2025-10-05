import "./globals.css";
import AuthGate from "./(components)/AuthGate";

export const metadata = {
  title: "culturereal",
  description: "Real moments, real cultures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-md min-h-screen flex flex-col px-4 pt-3 pb-16">
          <AuthGate>{children}</AuthGate>
        </div>
      </body>
    </html>
  );
}
