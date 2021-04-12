var score;

function get() {
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "Score: " + score;
}

function back() {
    window.location = "activity_1.html"
}