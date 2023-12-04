import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy{
  
  counter:any;
  num : number=1;
  @Input() myValue = "UxTrendz";

  constructor(){
    console.log("constructor called")
  }
  ngOnInit(){
    console.log("ngOnInit called")
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num)
    },1000)

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ng onchanges called");
      console.log(changes)
  }
  ngDoCheck(){
      console.log("ng doCheck called");
  }
  ngAfterContentInit(): void {
      console.log("ng after content init called")
  }

  ngAfterContentChecked(): void {
      console.log("ng after content check called")
  }

  ngAfterViewInit(): void {
      console.log("ng after view init called")
  }
  ngAfterViewChecked(): void {
      console.log("ng after view checked called")
  }
  ngOnDestroy(): void {
      console.log("ng onDestroy called")
      clearInterval(this.counter)
  }
}
