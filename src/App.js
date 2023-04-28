import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import LoliLucky from './components/LoliLucky';
import Haruki from './components/Haruki';
import Miyuki from './components/Miyuki'
import Kyra from './components/Kyra'
import Necro from './components/Necro'
import Elfia from './components/Elfia'
import Star from './components/Star'
import Aqua from './components/Aqua'
import Gold from './components/Gold'
import Lightning from './components/Lightning'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/felicia' element={<LoliLucky />} />
        <Route path='/haruki' element={<Haruki />} />
        <Route path='/miyuki' element={<Miyuki />} />
        <Route path='/kyra' element={<Kyra />} />
        <Route path='/necro' element={<Necro />} />
        <Route path='/elfia' element={<Elfia />} />
        <Route path='/star' element={<Star />} />
        <Route path='/aqua' element={<Aqua />} />
        <Route path='/gold' element={<Gold />} />
        <Route path='/lightning' element={<Lightning />} />
      </Routes>
    </div>
  );
}

export default App;
