const InputTask = document.querySelector("#Input-Task");
const BtnInputTask = document.querySelector("#Btn-AddTask");
const TasksContainer = document.querySelector(".Tasks-Container");

const AddTask = (TaskTitle) => {
    const taskBody = document.createElement("div");
    taskBody.className = "Tasks";

    taskBody.innerHTML = `
        <h1> ${TaskTitle} </h1>
        <div class="Tasks-Icons">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark" onclick="RemoveTask(this)"></i>
        </div>
    `;

    TasksContainer.appendChild(taskBody);
}

const RemoveTask = (TaskIdentificator) => {
    const taskDiv = TaskIdentificator.closest(".Tasks");
    TasksContainer.removeChild(taskDiv);
}

BtnInputTask.addEventListener("click", () => {
    AddTask(InputTask.value);

    InputTask.value = '';
});

let BtnRemoveTask;

BtnRemoveTask = document.querySelector("#Remove-Task");

if (BtnRemoveTask) {
    BtnRemoveTask.addEventListener("click", () => {
        RemoveTask(BtnRemoveTask);
    });
}
