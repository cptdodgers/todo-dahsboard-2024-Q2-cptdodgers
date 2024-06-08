import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

function Homemenu() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Task 1', done: false },
        { id: 2, text: 'Task 2', done: false },
        { id: 3, text: 'Task 3', done: true },
      ]);
    
      const handleToggle = (id) => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, done: !task.done } : task
        ));
      };

      const pending = tasks.filter(task => !task.done).length;
      const done = tasks.filter(task => task.done).length;
      const notDone = tasks.length;

      const data= {
        labels: ['Pending', 'Done', 'Total'],
        datasets: [
            {
                label: 'Tasks',
                data: [pending, done, notDone],
                backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
            },
        ],
      };

      return (
        <div className="home-menu">
            <h2>Tasks</h2>
            <ul>
            {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggle(task.id)}/>
              </li>
            ))}
            </ul>
            <Bar data={data}></Bar>
        </div>
      );
    }


export default Homemenu;