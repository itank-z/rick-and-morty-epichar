import { Routes, Route } from 'react-router-dom';
import NavigationTabs from 'components/NavigationTabs';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className='app-body'>
      <h1 className='app-title'>Rick and Morty Fandom Dictionary</h1>
      <div className='main-section'>
      <NavigationTabs />
      <Routes>
        <Route exact path='/' element={<Episodes />} />
        <Route path='/characters' element={< Characters />} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
