import React, { useState } from 'react';
import './App.css';
import { useTodoStore } from '../src/store/Todo';

import Header1 from './components/Header1';
// @ts-ignore
import Navigation from './components/Navigation';
import Line from './components/Line';
import TodoItems from './components/TodoItems';


function App() {
  const {todos} = useTodoStore((state) => state)
  const [notes,setNotes] = useState([])
  return (
    <div className="App">
      <div className="container px-24 py-10">
        <Header1 />
        <Navigation />
        <Line />
        <TodoItems />
      </div>
     
    </div>
  );
}

export default App;
