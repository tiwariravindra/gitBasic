import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
//import ToggleDiv from './Dropdown.jsx';
//import Deb  from './Deb.jsx';
//import Todo from './Todo.jsx';
//import Calculator from './Cal.jsx';
//import Append from './Append.jsx';
//import Memo from './Memo.jsx';
//import { Suspense } from 'react';
//import { AppProvider } from './contextApi/userContext.jsx';

//import Timer from './Timer.jsx';
//import Test from './Test.jsx';
//import TrafficLight from './TrafficLight.jsx'
//import ConcertTickets from './ConcertTickets.jsx'
//const Lazy = lazy(()=> import('./Memo.jsx'));

import Memo from './UseMemo.jsx';
import DivCenter from './DivCenter.jsx';
import TransitionHook from './TransitionHook.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(

  
  
<>
<TransitionHook />
{
/*
<Timer />
<Suspense fallback={<div>Loading..</div>}>
  <Lazy />
</Suspense>
*/
}
{
/*
  <Todo />
*/
}
  
  

  
{
  /*
 <AppProvider>
   <App />
 </AppProvider>

  */
}
  

</>
    
    
  
  
  
)
