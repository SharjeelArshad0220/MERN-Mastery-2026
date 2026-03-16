export function onDelete(id,tasks) {
    return tasks.filter(task => task.id !== id);
}
export function toggleStatus(id,tasks) {
    console.log('function exec...');
    return tasks.map(task => {
        if(task.id === id) {
            return {...task, isCompleted: !task.isCompleted}
        }
        return task;
    });
}
export function sortByPriority(tasksArray) {
    // 1. Strings ko Numbers mein map karne ka object
    const priorityWeights = {
        'High': 1,
        'Medium': 2,
        'Low': 3
    };

    // 2. Original array ki copy
    const copyArray = [...tasksArray];

    // 3. Sorting ka jadoo (Ascending: a - b)
    return copyArray.sort((a, b) =>priorityWeights[a.priority] - priorityWeights[b.priority]);
}
export function sortByDate(tasksArray) {
    const copyArray = [...tasksArray];
    return copyArray.sort((a, b) => new Date(a.date) - new Date(b.date));
}