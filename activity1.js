var score = 0;

function Increase() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function Save() {
    localStorage.setItem("score", score);
}

function Next() {
    window.location = "activity_2.html";
}