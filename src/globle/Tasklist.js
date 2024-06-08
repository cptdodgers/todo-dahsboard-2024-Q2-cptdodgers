import React, { useState } from "react";
import { Pagination } from '@mui/material';
import './Tasklist.css';



function Tasklist () {
    const tasks = [
        { id: 1, text: "Franklin More's professional review is pending", createdBy: 'Brandon Mango', priority: 'Low', date: 'Sep 12', status: 'completed' },
        { id: 2, text: 'Internship Agreement template is not completed', createdBy: 'James Walter', priority: 'High', date: 'Sep 10', status: 'completed' },
        { id: 3, text: "Contract #2564 need Charlie Puth’s signature", createdBy: 'Allison Torff', priority: 'low', date: 'Sep 08', status: 'pending' },
        { id: 4, text: "David Gram’s professional review is pending", createdBy: 'Chance Kenter', priority: 'Medium', date: 'Sep 08', status: 'completed' },
        { id: 5, text: "Contract #2564 need Charlie Puth’s signature", createdBy: 'Nolan Philips', priority: 'High', date: 'Sep 8', status: 'Pending' },
        { id: 6, text: "Franklin More’s professional review is pending", createdBy: 'Zain Culhane', priority: 'low', date: 'Sep 06', status: 'completed' },
        { id: 7, text: 'Internship Agreement template is not completed', createdBy: 'Paityn Gouse', priority: 'low', date: 'Sep 06', status: 'completed' },
        { id: 8, text: 'Ze hinzek osodojov dibiilo ut soj cujlen sivige osuac fej rehop ri uzewe unatagtiv', createdBy: 'Jakob Baptista', priority: 'Meduim', date: 'Sep 04', status: 'completed' },
      ];



      const [currentPage, setCurrentPage] = useState(1);
      const taskPerPage = 3;
      
      /*useEffect(() =>{
            fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error'));
          }, []);*/

      const indexOfLastTask = currentPage * taskPerPage;
      const indexOfFirstTask = indexOfLastTask - taskPerPage;
      const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  
      const handlePageChange = (value) => {
          setCurrentPage(value);
      };


      return (
        <div className="task-list">
            <h3>Tasks</h3>
            <table>
                <thead>
                    <tr>
                        <th>status</th>
                        <th>Task Name</th>
                        <th>Created by</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task =>(
                        <tr key={task.id}>
                            <td><input type="checkbox" /></td>
                            <td>{task.text}</td>
                            <td>{task.createdBy}</td>
                            <td>{task.priority}</td>
                            <td>{task.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-container">
                <Pagination count={Math.ceil(tasks.length / taskPerPage)} onChange={handlePageChange} />
            </div>
        </div>
      );
}


export default Tasklist;