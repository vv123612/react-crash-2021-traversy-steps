const tasks = [
{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th 2:30pm',
    reminder:true,
},

{
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th 1:30pm',
    reminder:true,
},

{
    id: 3,
    text: 'Food Shoping',
    day: 'Feb 5th 2:30pm',
    reminder:false,
}
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task)=>(
                <h3 key={task.id}> {task.text}</h3> 

            ))}
            
        </>
    )
}

export default Tasks
