import { useDraggable } from "@dnd-kit/core";
import { Task } from "../type/Type"

type TaskCardProps = {
    task: Task;
}

const TaskCard = ({task}: TaskCardProps) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable ({
        id: task.id,
    })

    const transformStyle = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

    const baseStyle = {
      cursor: "grab",
      borderRadius: "0.5rem",
      backgroundColor: "#3f3f46",
      padding: "1rem",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      transition: "box-shadow 0.2s ease-in-out",
    };

    const combinedStyle = { ...baseStyle, ...transformStyle };

  return (
    <div
     ref={setNodeRef}
     {...attributes}
     {...listeners}
     style={combinedStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)"; 
      }}
    >
      <h3
        style={{
          fontWeight: "500",
          color: "#f3f4f6",
        }}
      >
        {task.title}
      </h3>
      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem", 
          color: "#9ca3af", 
        }}
      >
        {task.description}
      </p>
    </div>
  )
}

export default TaskCard
