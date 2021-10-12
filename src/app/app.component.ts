import { Component } from '@angular/core';
import usersdata from './users.json';  
import { initializeApp } from 'firebase/app';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
content:any;
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
  
  closeResult = '';
  constructor(private modalService: NgbModal) {}
  
  opencomment(commentcontent) {
    this.modalService.open(commentcontent,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=> {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openreview(reviewcontent) {
    this.modalService.open(reviewcontent,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=> {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 
}
