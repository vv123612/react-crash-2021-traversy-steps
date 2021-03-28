import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  const addTask = (task) => {
    // console.log(task)

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }


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
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {/* <AddTask onAdd={addTask}
      /> */}

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
