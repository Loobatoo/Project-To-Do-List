const CompleteTask = (TaskIdentificator) => {
    const taskDiv = TaskIdentificator.closest(".Tasks");
    const taskTitle = taskDiv.querySelector("h1");

    if (taskTitle) {
        taskTitle.classList.toggle("TaskCompleta");
    }
}