import Navbar from '../component/header';
import Footer from '../component/footer';
import Hubungi from '../component/hubungi';

function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hubungi/>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
