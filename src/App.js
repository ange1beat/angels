import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Narkiks from './components/Nariks';
import Lamba from './components/Lamba';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='news1' element={<Narkiks />} />
        <Route path='news2' element={<Lamba />} />
      </Routes>
    </div>
  );
}

export default App;
