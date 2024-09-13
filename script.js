document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const form = document.querySelector("form");
    const container = document.getElementById("container");

    form.addEventListener("submit", (eo) => {
        eo.preventDefault();
        const task = `
            <div class="task">
                <span class="icon-star icon"><i class="fa-solid fa-star"></i></span>
                <p class="task-text">${input.value}</p>
                <div>
                    <span class="icon-angry icon"><i class="fa-solid fa-face-angry"></i></span>
                    <span class="icon-trash icon"><i class="fa-solid fa-trash"></i></span>
                </div>
            </div>`;
        container.innerHTML += task;
        input.value = ''; // Clear the input field after adding the task
    });

    container.addEventListener("click", (eo) => {
        const target = eo.target.closest('.icon-trash, .icon-angry, .icon-star');

        if (target) {
            if (target.classList.contains('icon-trash')) {
                target.closest(".task").remove();
            } else if (target.classList.contains('icon-angry')) {
                const task = target.closest(".task");
                const angryIcon = task.querySelector(".icon-angry");
                const taskText = task.querySelector(".task-text");

                if (angryIcon.querySelector("i").classList.contains("fa-face-angry")) {
                    angryIcon.querySelector("i").classList.remove("fa-face-angry");
                    angryIcon.querySelector("i").classList.add("fa-heart");
                    angryIcon.classList.add("icon-heart");
                    taskText.classList.add("strikethrough");
                } else {
                    angryIcon.querySelector("i").classList.remove("fa-heart");
                    angryIcon.classList.remove("icon-heart");
                    angryIcon.querySelector("i").classList.add("fa-face-angry");
                    taskText.classList.remove("strikethrough");
                }
            } else if (target.classList.contains('icon-star')) {
                const task = target.closest(".task");
                container.prepend(task); // Move the task to the top
            }
        }
    });
});