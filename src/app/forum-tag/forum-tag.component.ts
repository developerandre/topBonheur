import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-tag',
  templateUrl: './forum-tag.component.html',
  styleUrls: ['./forum-tag.component.css']
})

export class ForumTagComponent implements OnInit {
  messages:Array<any> = new Array(10);
  tags:Array<any> = new Array(10);
  constructor() { }

  ngOnInit() {
  }

}
