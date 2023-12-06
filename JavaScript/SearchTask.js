const FilterInput = document.querySelector("#FilterInput");
const BtnFilter = document.querySelector("#BtnFilter");


BtnFilter.addEventListener("click", () => {
    const filterText = FilterInput.value.toLowerCase();
    const tasks = document.querySelectorAll(".Tasks");

    tasks.forEach(task => {
        const title = task.getAttribute("data-title").toLowerCase();
        if (title.includes(filterText)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
});