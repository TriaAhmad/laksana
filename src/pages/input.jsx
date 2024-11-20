import Navbar from '../component/header';
import Footer from '../component/footer';
import Form from '../component/form';

function Input() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Form/>
      </main>
      <Footer />
    </div>
  );
}

export default Input;
