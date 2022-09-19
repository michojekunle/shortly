import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LinkShortener from './components/LinkShortener';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import iconBR from './images/icon-brand-recognition.svg';
import iconDR from './images/icon-detailed-records.svg';
import iconFC from './images/icon-fully-customizable.svg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <div className="section-two" role='section-two'>
        <LinkShortener/>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our
          advanced statistics dashboard
        </p>
        
        <div className="statistics">
          <div className='bg-statistics'></div>
          <Statistics imageUrl={iconBR} title={'Brand Reconotion'} content={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."}/>
          <Statistics imageUrl={iconDR} title={"Detailed Records"} content={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
          <Statistics imageUrl={iconFC} title={"Fully Customizable"} content={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}/>
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
