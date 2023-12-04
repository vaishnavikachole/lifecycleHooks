import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent 
{
   value :string="";
  submitValue(val:any){
    this.value = val.value;
  }
  comp1Exist : boolean = true;

  destroyComponent(){
    this.comp1Exist = false;
  }

}
