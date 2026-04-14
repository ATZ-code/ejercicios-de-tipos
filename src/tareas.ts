type TaskStatus = "pendiente" | "en_progreso" | "finalizada";

interface Task {
  id: number;
  description: string;
  isComplete: boolean;
  status: TaskStatus;
}

function getPendingAndProgressTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => task.status !== "finalizada");
}


const tareas: Task[] = [
  { id: 1, description: "Estudiar TypeScript", isComplete: false, status: "pendiente" },
  { id: 2, description: "Hacer ejercicio", isComplete: false, status: "en_progreso" },
  { id: 3, description: "Entregar tarea", isComplete: true, status: "finalizada" }
];

const resultado = getPendingAndProgressTasks(tareas);
console.log(resultado);