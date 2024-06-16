import { Inter, Inika } from "next/font/google";
import "./globals.css";
import { NavBar, HomeButton } from "./Navigation";
const inter = Inter({ subsets: ["latin"] });
const inika = Inika({ subsets: ["latin"], weight: ["700","400"] });
export const metadata = {
  title: "Banana",
  description: "organization description????",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inika.className}>
        <header>
          <NavBar className={inika.className} />
        </header>
        {children}
        <footer>
          <div id='contactus' className={`contact ${inika.className}`}>
            <div className="footerBrandName">
              Banana Exports Inc
            </div>
            <div className="footerContact" >
                <span >Contact Us   </span>
              <a href="tel:+944567890" className="pl-2">+94 21 256 223</a>
            </div>
          </div>
          <div className="TandC">
            Terms and Conditions
          </div>
        </footer>
      </body>
    </html>
  );
}
