import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
