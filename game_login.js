function addUser() {
    player_1_name = document.getElementById("player1_name").value;
    player_2_name = document.getElementById("player2_name").value;
     localStorage.setItem("player_1_name", player_1_name);
     localStorage.setItem("player_2_name", player_2_name);
     window.location.replace("game_page.html");
}