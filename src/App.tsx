import { useState } from 'react'
import './App.css'
import { Column, Task } from './components/type/Type'
import Columns from './components/columns/Columns'
import { DndContext, DragEndEvent } from '@dnd-kit/core'

const COLUMNS: Column[] = [
  {id: 'TODO', title: 'To Do'},
  {id: 'IN_PROGRESS', title: 'In Progress'},
  {id: 'DONE', title: 'Done'},
]

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO'
  },
  {
    id: '2',
    title: 'Read book about marketing',
    description: 'On page 241, chapter 16',
    status: 'IN_PROGRESS'
  },
  {
    id: '3',
    title: 'Do my Home-Work',
    description: 'Math',
    status: 'DONE'
  },
  {
    id: '4',
    title: 'Work 2 hours on my Project',
    description: 'Web-site - with Shadcn in Next.js',
    status: 'TODO'
  },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'] 

    setTasks(() => 
       tasks.map((task)=>
       task.id == taskId ? 
          {...task, status: newStatus} : 
       task
   ))
  }

  return ( 
    <div 
    style={{
      padding: "1rem", 
    }}
    >
      <div 
       style={{
        display: "flex",
        justifyContent: 'space-evenly'
      }}
      >
        <DndContext onDragEnd={handleDragEnd}>
          {
            COLUMNS.map((column) => {
              return <Columns 
              key={column.id} 
              column={column} 
              tasks={tasks.filter((task) => task.status === column.id)} />
            })
          }
        </DndContext>
      </div>
    </div>
  )
}

export default App
