import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header.js'
import ThemeContextProvider from './context/ThemeContext';
import Homepage from './pages/Homepage.js'
import Footer from './components/Footer.js'
import MovieDetails from './pages/MovieDetails'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const baseUrl = process.env.REACT_APP_API_BASE_URL
  const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL
  
  return (
    <div>
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage apiKey={apiKey} baseUrl={baseUrl}/>} />
            <Route path='/moviedetails/:movieid' element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl} />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
          </Routes>
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
