var = trello;
function trelloApi() {

  loadJSON('https://api.trello.com/1/members/me/boards?key=8647cda40947c5f59daaa1c3f5173a1a&token=5e73a3d20653d1e9f97812fa1572a61499b84ffd6954f1b33f4f93d69fd0fdff', gotData)
}

function gotData(data) {
  trello = data;
}



function countDown() {
  var nr = 0;

  foreach(typeof projekt in trello){
    nr++;
    
  }
  document.getElementById("trelloInfo").innerHTML = nr;
}
  //GET /1/members/me/boards
  https://api.trello.com/1/members/me/boards?key={8647cda40947c5f59daaa1c3f5173a1a}&token={5e73a3d20653d1e9f97812fa1572a61499b84ffd6954f1b33f4f93d69fd0fdff}
