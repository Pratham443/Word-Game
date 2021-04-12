var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("player2").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "Question Turn : " + player1;
document.getElementById("playerAnswer").innerHTML = "Answer Turn : " + player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Lower case word: " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length = Math.floor(word.length/2);
    charAt2 = word.charAt(length);
    console.log(charAt2);

    length2 = word.length - 1;
    charAt3 = word.charAt(length2);
    console.log(charAt3);

    removecharAt1 = word.replace(charAt1, "_");
    removecharAt2 = removecharAt1.replace(charAt2, "_");
    removecharAt3 = removecharAt2.replace(charAt3, "_");
    console.log(charAt3);

    question_word = '<h4 id="word-display"> Q. ' + removecharAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' class='form-control' id='input_checkbox' placeholder='Answer'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}