import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Intro />
     <About />
     <ProductList />
     <Contact />
     <Navbar />
    </div>
  );
}

export default App;
