import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  actus:Array<any> = new Array(10);
  formations:Array<any> = new Array(10);
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }
 showDialog(index:number){
   let dialog:any = document.querySelector('dialog');
    if (! dialog.showModal) {
      //dialogPolyfill.registerDialog(dialog);
    }
      dialog.showModal();
 }
 closeDialog(){
   let dialog:any = document.querySelector('dialog'); 
   dialog.close();
 }
}
