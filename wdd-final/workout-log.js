document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workoutForm");
    const addExerciseBtn = document.getElementById("addExerciseBtn");
    const logTable = document.getElementById("logTable").querySelector("tbody");

    addExerciseBtn.addEventListener("click", () => {
        const date = form.date.value;
        const exercise = form.exercise.value;
        const sets = form.sets.value;
        const reps = form.reps.value;

        if (date && exercise && sets && reps) {
            const newRow = document.createElement("tr");

            newRow.innerHTML = `
                <td>${date}</td>
                <td>${exercise}</td>
                <td>${sets}</td>
                <td>${reps}</td>
            `;

            logTable.appendChild(newRow);

            
            form.exercise.value = '';
            form.sets.value = '';
            form.reps.value = '';
        } else {
            alert("Please fill in all fields before adding an exercise.");
        }
    });
});
