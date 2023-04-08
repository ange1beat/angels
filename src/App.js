import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import LoliLucky from './components/LoliLucky';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/loli' element={<LoliLucky />} />
      </Routes>
    </div>
  );
}

export default App;
