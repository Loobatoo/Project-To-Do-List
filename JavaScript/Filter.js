const TaskFilter = document.querySelector("#TaskFilter");

const applyFilter = () => {
    const selectedValue = TaskFilter.value;

    const tasks = document.querySelectorAll(".Tasks");

    tasks.forEach(task => {
        const isComplete = task.querySelector("h1").classList.contains("TaskCompleta");

        switch (selectedValue) {
            case "all":
                task.style.display = "flex";
                break;
            case "complete":
                task.style.display = isComplete ? "flex" : "none";
                break;
            case "todo":
                task.style.display = isComplete ? "none" : "flex";
                break;
        }
    });
}

TaskFilter.addEventListener("change", applyFilter);
