import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forum-categorie',
  templateUrl: './forum-categorie.component.html',
  styleUrls: ['./forum-categorie.component.css']
})
export class ForumCategorieComponent implements OnInit {
  categories:Array<any> = new Array(9);
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

}
