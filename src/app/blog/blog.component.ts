import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   blogs:Array<any> = new Array(6);
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

}
