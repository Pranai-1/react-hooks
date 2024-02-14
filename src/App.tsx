import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Effect from './components/Effect'
import './App.css'
import { Suspense, lazy } from 'react';
import Navigate from './components/navigate';
import MyForm from './components/UncontrolledComponent';

const Reducer=lazy(()=>import("./components/Reducer"))
//Lazy Loading:-
//Lazy loading is a technique used to defer the loading of components until they are needed. This can help reduce the 
//initial bundle size of your application and improve the overall performance by loading components only when they are required.

//Suspense:-
//Suspense is a React component that allows you to declaratively wait for some asynchronous operation to complete before rendering 
//its children. This asynchronous operation could be fetching data from an API, loading a lazy-loaded component using React.lazy(), 
//or any other asynchronous task

function App() {

  return (
    <>
       <Router>    
      <Routes>
       <Route  path="/" element={<Effect />} />
       <Route  path="/reducer" element={<Suspense><Reducer /></Suspense>}/>
       <Route  path="/navigate" element={<Navigate />}/>
       <Route  path="/un" element={<MyForm />}/>
       </Routes>
       
       </Router>
    </>
  )
}

export default App