import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Services from '../src/component/Services'
import About from '../src/component/About'
import Heading from '../src/component/Heading'
import Food from '../src/component/Food'
import Ourchef from '../src/component/Ourchef'
import Combo from '../src/component/Combo'
import Contact from '../src/component/Contact'
import Footer from '../src/component/Footer'
import Mybutin from './component/Mybutin';
import Listoffood from './component/Listoffood';




function App() {
  return (
      <div className="App">
        <Heading />
        <Food />
        <Services />
        <About />
        <Ourchef />
        <Combo />
        <Listoffood />
        <Contact />
        <Footer />
        <Mybutin />
      
      </div>


    
  );
}

export default App;
