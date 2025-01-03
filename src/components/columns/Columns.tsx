import { useDroppable } from "@dnd-kit/core";
import TaskCard from "../taskCard/TaskCard";
import { Column as ColumnType, Task } from "../type/Type"

type ColumnProps = {
    column: ColumnType;
    tasks: Task[]
}

const Columns = ({column, tasks}: ColumnProps) => {

  const { setNodeRef } = useDroppable({
    id: column.id
  })

  return (
    <div 
    style={{
      display: "flex",
      width: "20rem",
      flexDirection: "column",
      borderRadius: "0.5rem",
      backgroundColor: "#2d2d2d",
      padding: "1rem",
    }}
    >
      <p 
      style={{
        fontSize: '20px',
        fontWeight: "600",
        color: "#f3f4f6",
        fontFamily: 'monospace'
      }}
      >{column.title}</p>
      <div
      ref={setNodeRef} 
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "1rem",
      }}
      >
        {
          tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />
          })
        }
      </div>
    </div>
  )
}

export default Columns
