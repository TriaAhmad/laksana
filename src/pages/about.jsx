import Navbar from "../component/header";
import Footer from "../component/footer";
import Tentang from "../component/tentang";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Tentang />
      </main>
      <Footer />
    </div>
  );
}

export default About;
