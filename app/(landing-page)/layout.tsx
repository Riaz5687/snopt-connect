import "../globals.css";
import Header from "../UI/Header/Header";
import Footer from "@/app/UI/Footer/Footer";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}
