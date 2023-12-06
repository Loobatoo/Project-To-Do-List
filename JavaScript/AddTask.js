const InputTask = document.querySelector("#Input-Task");
const BtnInputTask = document.querySelector("#Btn-AddTask");
const TasksContainer = document.querySelector(".Tasks-Container");

const AddTask = (TaskTitle) => {
    const taskBody = document.createElement("div");
    taskBody.className = "Tasks";
    taskBody.setAttribute("data-title", TaskTitle);

    taskBody.innerHTML = `
        <h1> ${TaskTitle} </h1>
        <div class="Tasks-Icons">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark" onclick="RemoveTask(this)"></i>
        </div>
    `;

    TasksContainer.appendChild(taskBody);

    const checkIcon = taskBody.querySelector(".fa-check");
    checkIcon.addEventListener("click", () => {
        CompleteTask(checkIcon);
    });
}

BtnInputTask.addEventListener("click", () => {
    if (InputTask.value === ''){
        alert("Digite o nome da tarefa!")
    } else {
        AddTask(InputTask.value);

        InputTask.value = '';
    }
}); 