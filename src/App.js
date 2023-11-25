
import React, {useState} from 'react'
import News from './Components/News';
import NavBar from './Components/NavBar';
import LoadingBar from 'react-top-loading-bar'



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = ()=> {
 const pageSize=5;
 const apiKey = process.env.REACT_APP_NEWS_API

 const [progress, setProgress] = useState(0)
  
  
    return (


      
        
      <>
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Routes>
         <Route path='/' element={ <News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
         <Route path='/science' element={ <News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>}/>
         <Route path='/business' element={ <News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>}/>
         <Route path='/health' element={ <News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={5} country="in" category="health"/>}/>
         <Route path='/technology' element={ <News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>}/>
         <Route path='/sports' element={ <News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>}/>
         <Route path='/entertainment' element={ <News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}/>
         <Route path='/general' element={ <News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
        </Routes>
      </Router>
      </>
    
    )
  }


  export default  App;



