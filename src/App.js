import AboutScreen from './screen/AboutScreen';
import ProjectsScreen from './screen/ProjectsScreen';
import ContactScreen from './screen/ContactScreen';
import Main from './components/Main';
import './App.css';
import MobileScreen from './components/MobileScreen';

function App() {
  return (
    <div>
      <div className='desktop-container'>
      <AboutScreen/>
      </div>
      <div id="mobile-view" classNam="mobile-container">
        <MobileScreen/>
      </div>
    </div>
  );
}

export default App;
