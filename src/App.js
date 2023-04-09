import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import LoliLucky from './components/LoliLucky';
import Haruki from './components/Haruki';
import Miyuki from './components/Miyuki'
import Kyra from './components/Kyra'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/felicia' element={<LoliLucky />} />
        <Route path='/haruki' element={<Haruki />} />
        <Route path='/miyuki' element={<Miyuki />} />
        <Route path='/kyra' element={<Kyra />} />
      </Routes>
    </div>
  );
}

export default App;
