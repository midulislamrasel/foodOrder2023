import '/public/css/bootstrap.min.css';
import './globals.css';
export const metadata = {
  title: "Food ordering",
  description: "...",

};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          {children}
      </body>
    </html>
  );
}
