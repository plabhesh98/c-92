player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + " : " ;
document.getElementById("player_2_name").innerHTML = player_2_name + " : " ;
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;

function send() {
    Question = document.getElementById("word").value;
    Word = Question.toLowerCase();
    console.log("Word in Lowercase is  " + Word);

    CharAt1 = Word.charAt(1);
    console.log(CharAt1);

    lenght_divide_2 = Math.floor(Word.length / 2);
    CharAt2 = Word.charAt(lenght_divide_2);
    console.log(CharAt2);

    length_minus_1 = Word.length - 1;
    CharAt3 = Word.charAt(length_minus_1);
    console.log(CharAt3);

    remove_CharAt1 = Word.replace(CharAt1 , "_");
    remove_CharAt2 = remove_CharAt1.replace(CharAt2 , "_");
    remove_CharAt3 = remove_CharAt2.replace(CharAt3, "_");
    console.log(remove_CharAt3);

    Question_box = "<h4 id='Word_display'> Q. " + remove_CharAt3 +  "</h4>";
    input = "<br> Answer:  <input type='text' id='input_check_box'>"
    button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = Question_box + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase - " , answer);
    if (answer == Word) {
       if(answer_turn == "player1") {
           player_1_score = player_1_score + 1;
           document.getElementById("player_1_score").innerHTML = player_1_score;
       }
       else {
           player_2_score = player_2_score + 1;
           document.getElementById("player_2_score").innerHTML = player_2_score;
       }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
    }
    if(answer_turn == "player2") {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player_1_name;
    } else {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;
    }
    document.getElementById("output").innerHTML = "";
}