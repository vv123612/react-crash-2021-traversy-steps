import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th 2:30pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th 1:30pm',
      reminder: true,
    },

    {
      id: 3,
      text: 'Food Shoping',
      day: 'Feb 5th 2:30pm',
      reminder: false,
    }
  ])

  const deleteTask = (id) => {
    // console.log('delete', id)
    // console.log(tasks)
    // console.log(id)
    
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(

      // substitute field reminder on opposite
      // ...task keep all field for task like they was before toggling
      tasks.map((task) => 
      task.id === id ?{...task, reminder:!task.reminder} :task
      
      )
    )    
  }

  return (
    <div className='container'>
      <Header/>
      {/* <Tasks tasks = {tasks} onDelete = {deleteTask}/> */}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
