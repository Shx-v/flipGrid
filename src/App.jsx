import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Header';
import AutoSlider from './components/Carousel/AutoSlider';
import Cards from './components/Card/Card';
import Quiz from '../src/components/Quiz/quiz.jsx'
import Modal from './components/Modal/Modal';
const App = () => {
  return (

    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<><AutoSlider/> <Cards/></>}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/product" element={<Modal/>}></Route>
          </Routes>
        </BrowserRouter>
  );
}
 
export default App;