import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LinkShortener from './components/LinkShortener';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <LinkShortener/>
      <div className="statistics-section">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our
          advanced statistics dashboard
        </p>
        
        <div className="statistics">
        <div className='bg-statistics'></div>
          <Statistics/>
          <Statistics/>
          <Statistics/>
        </div>

      </div>
      <div className='boost-links'>
        <h1>Boost your Links today</h1>
        <button>Get Started</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
