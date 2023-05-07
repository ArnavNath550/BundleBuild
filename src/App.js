import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PageHero from './components/PageHero';
import AboutUs from './components/AboutUs';
import MissionScroller from './components/MissionScroller';
import OurGuarantees from './components/OurGuarantees';
import SampleWork from './components/SampleWork';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import MobileMission from './components/Mobile/MobileMission';
import MobileGuarantees from './components/Mobile/MobileGuarantees';

function App() {
  return (
   <div className="mountRoot">
      <div classNme="gyanContainer">
        <img alt="Gradient beams background image" className="gradient-shine" decoding="async" data-nimg="1" srcset="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Flanding-page-assets%2Fbeams.jpeg&amp;w=2610&amp;q=70&amp;output=webp 1x" src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Flanding-page-assets%2Fbeams.jpeg&amp;w=2610&amp;q=70&amp;output=webp" />
        <Header />
        <PageHero />
        <AboutUs />
        <div className="desktop-only">
          <MissionScroller />
          <OurGuarantees />
        </div>
        <div className="mobile-only">
          <MobileMission />
        </div>
        <div className="mobile-only">
          <MobileGuarantees />
        </div>
        <QuoteForm />
        <Footer />
      </div>
   </div>
  );
}

export default App;
