const RemoveTask = (TaskIdentificator) => {
    const taskDiv = TaskIdentificator.closest(".Tasks");
    TasksContainer.removeChild(taskDiv);
}

let BtnRemoveTask;

BtnRemoveTask = document.querySelector("#Remove-Task");

if (BtnRemoveTask) {
    BtnRemoveTask.addEventListener("click", () => {
        RemoveTask(BtnRemoveTask);
    });
}