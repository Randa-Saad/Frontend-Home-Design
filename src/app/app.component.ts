import { Component } from '@angular/core';
import usersdata from './users.json';  
import { initializeApp } from 'firebase/app';
interface user {
  photo:string;
  name:string;
  date:string;
  review:string;
  reviewnum:number;
  commenttext:string;
  replytext:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shahrydesign';
 //likecontent:string ='fa fa-thumbs-up';
  users: user[] = usersdata;
  liked=true;
  reaction(ratenumber:number):boolean
  {
   if(ratenumber<4)
     {
        let  liked=false;
        //console.log("liked become false");
        return false;
     }

    return true;
 }
   givestar(ratenumber:number) :boolean
   {
    if(ratenumber<4)
      {
      let  liked=false;
      //console.log("liked become false");


return false;
      }

return true;
  }
  
 
}
