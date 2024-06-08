import React from 'react';
import Sidebar from './globle/Sidebar';
import Header from './globle/Header';
import TaskList from './globle/Tasklist';
import BarChart from './globle/BarChart';
import ActivityFeed from './globle/ActivityFeed';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="home-menu">
        <Header />
        <div className="content">
          <div className="tasks">
            <TaskList />
          </div>
          <div className="right-panel">
            <BarChart />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
