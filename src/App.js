
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/search/:searchTerm' element={<div className='app_page'>

            <Sidebar />
            <SearchPage />
          </div>
          } />

          <Route path='/' element={


            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>

          } />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


{/* <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div> */}