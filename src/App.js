
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import Product from './Components/Views/Product';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/product/:id' element={<Product/>}></Route>
        </Routes>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
