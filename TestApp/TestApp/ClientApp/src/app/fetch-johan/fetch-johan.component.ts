import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, HttpModule } from '@angular/http';
import "rxjs/Rx";

@Component({
  selector: 'app-fetch-johan',
  templateUrl: './fetch-johan.component.html'
})
export class FetchJohanComponent {

  public projektCount = 0;
  private baseUrl = "https://api.trello.com/1/members/me/boards?key=8647cda40947c5f59daaa1c3f5173a1a&token=5e73a3d20653d1e9f97812fa1572a61499b84ffd6954f1b33f4f93d69fd0fdff";  // API för att returnera en array av boards
  data: Object;

    constructor(public http: Http) {
    }


  public projektCounter(){
    
     
    var antalProjekt = 0;

    this.http.request(this.baseUrl)
        .subscribe((res: Response) => {
          this.data = res.json();
         

        });
  }

  public postBoard() {
    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log("Posted new board: " + this.responseText);
      }
    });

    xhr.open("POST", "https://api.trello.com/1/boards/?name=Newboard&defaultLabels=true&defaultLists=true&keepFromSource=none&prefs_permissionLevel=private&prefs_voting=disabled&prefs_comments=members&prefs_invitations=members&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=blue&prefs_cardAging=regular&key=8647cda40947c5f59daaa1c3f5173a1a&token=5e73a3d20653d1e9f97812fa1572a61499b84ffd6954f1b33f4f93d69fd0fdff");

    xhr.send(data);
  }

}
