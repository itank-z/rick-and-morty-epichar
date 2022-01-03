import { Routes, Route } from 'react-router-dom';
import NavigationTabs from './components/NavigationTabs';
import Characters from './components/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div>
      <h1 className='app-title'>Rick and Morty Epichar</h1>
      <div className='main-section'>
      <NavigationTabs />
      <Routes>
        <Route exact path='/' element={<h1>Episodes</h1>} />
        <Route path='/characters' element={< Characters />} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
