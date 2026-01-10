let todos = [];
export const
    addTask = (taskName) => {
        todos.push(
            {
                id: (Date.now() + Math.random()),
                text: taskName,
                isCompleted: false
            }
        );
        console.log(`Task added ${taskName}`);
    };
export const
    deleteTask = (id) => {
        todos = todos
            .filter(task =>
                task.id !== id
            )
    };
export const
    toggleTask = (id) => {
        todos = todos
            .map(task =>
                task.id === id ?
                    {
                        ...task, isCompleted: !task.isCompleted
                    }
                    : task
            );
        // todos=newlist;
    };
export const getTodos = () => todos;