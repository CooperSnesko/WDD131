document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startBtn");

    startButton.addEventListener("click", () => {
        alert("Let's start tracking your fitness journey!");
        window.location.href = "workout-log.html";
    });
});
