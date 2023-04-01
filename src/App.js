import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Starlite from './components/Starlite'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/starlite' element={<Starlite />}/>
      </Routes>
    </div>
  );
}

export default App;
