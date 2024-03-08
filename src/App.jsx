
import './App.css';
import Header from './components/Header.jsx';
import HeroImageSection from './components/HeroImageSection.jsx';
import ThinkSection from './components/ThinkSection.jsx';
import ParagraphSection from './components/ParagraphSection.jsx';
import AddressSection from './components/AddressSection.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div>
    <Header/>
    <HeroImageSection/>
    <ThinkSection/>
    <ParagraphSection/>
    <hr/>
    <AddressSection/>
    <Footer/>
    </div>
  )
}

export default App
