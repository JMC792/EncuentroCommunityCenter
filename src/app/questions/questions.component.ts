import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

h1Style: boolean = false ;

  constructor() { }

  ngOnInit() {
  }

  firstClick(){
    this.h1Style = true ;
  }

}
