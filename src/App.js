import './App.css';
import Welcome from '../src/compontent/welcome'
import { Route, Routes } from 'react-router-dom'
import TellUs from '../src/compontent/tellUs'
import Error from '../src/compontent/error'
import Summary from '../src/compontent/summary'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path='/tellUs' element={<TellUs />} />
      <Route path='/error' element={<Error />}></Route>
      <Route path="/summary" element={<Summary />}></Route>
    </Routes>
  );
}

export default App;
