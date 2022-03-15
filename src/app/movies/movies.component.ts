import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title: String;
  showcenter: boolean = true;

  movies:Movies[]=[
    new Movies('Demo0',1992,'Demo1',[new Comments('hello'),new Comments('hello1')]),
    new Movies('Demo1',1992,'Demo1',[new Comments('hello'),new Comments('hello1'),new Comments('hello3')]),
    new Movies('Demo2',1992,'Demo1',[]),
    new Movies('Demo3',1992,'Demo1',[]),
    new Movies('Demo4',1992,'Demo1',[]),
    new Movies('Demo5',1992,'Demo1',[]),
    new Movies('Demo6',1992,'Demo1',[]),
    new Movies('Demo7',1992,'Demo1',[]),
    new Movies('Demo8',1992,'Demo1',[]),
  ];
  constructor() {
    this.title = "Movies Chart"
  }

  ngOnInit(): void {
  }
  remove(index:number){
    console.log(index);
    this.movies.slice(index,2);
  }

}
class Movies {
  name: String;
  year: Number;
  actors: String;
  comments:Comments[];
  constructor(name:String,year:Number,actors:String,comments:Comments[]){
    this.name = name;
    this.year=year;
    this.actors = actors;
    this.comments = comments;
  }
}
class Comments{
  msg:String
  constructor(messge:string){
    this.msg = messge
  }
}