import React from 'react';
import TaskContextProvider from './Contexts/TaskContext';
import TaskList from './Components/TaskList';
import Header from './Components/Header';
import TaskForm from './Components/TaskForm';



function App() {
  return (
      <div>
        <TaskContextProvider>
          <div className="container">
            <div className="wrapper">
              <Header />
              <TaskList />
              <TaskForm />
            </div>
          </div>
        </TaskContextProvider>
      </div>
  );
}

export default App;
