import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
