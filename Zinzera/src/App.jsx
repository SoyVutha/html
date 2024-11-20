import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Master from './Master';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Master/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App