import React from 'react';
import Header from './Component/Header';
import Aside from './Component/Aside';
import TodoList from './Component/TodoList';
import './App.css';

const App = () => {
  return (<>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4 d-md-block d-none">
          <Aside />
        </div>
        <div className="col-lg-9 col-md-8 col-12">
          <TodoList />
        </div>
      </div>
    </div>
  </>)
}

export default App;