import './App.css';
import React, { useState, Fragment } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar/>
            <LoadingBar
            height={3}
              color='#9003fc'
              progress={progress}/>
              <Routes>
                <Route exact path="/" element={<News setProgress= {setProgress} apiKey={apiKey}  key="general" pageSize={6} country="in" category="General"/>}/>
                <Route exact path="/business" element={<News setProgress= {setProgress} apiKey={apiKey}   pageSize={6} country="in" category="business"/>}/>
                <Route exact path="/sports" element={<News setProgress= {setProgress} apiKey={apiKey}  key="sports" pageSize={6} country="in" category="sports"/>}/>
                <Route exact path="/science" element={<News setProgress= {setProgress} apiKey={apiKey}  key="science" pageSize={6} country="in" category="science"/>}/>
                <Route exact path="/health" element={<News setProgress= {setProgress} apiKey={apiKey}  key="health" pageSize={6} country="in" category="health" />}/>
                <Route exact path="/technology" element={<News setProgress= {setProgress} apiKey={apiKey}  key="technology" pageSize={6} country="in" category="technology"/>}/>
                <Route exact path="/entertainment" element={<News setProgress= {setProgress} apiKey={apiKey}  key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
              </Routes>
          </Fragment>
        </Router>
      </div>
    );
}

export default App;
