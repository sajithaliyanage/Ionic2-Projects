import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  name1='';
  name2='';
  calculator:FormGroup;
  values = 0;

  constructor(_builder: FormBuilder){
    this.calculator =_builder.group({
        "user1":["",Validators.required],
        "user2":["",Validators.required]
    })
  }

  score() {
    const letters = (this.name1.trim() + this.name2.trim()).toLowerCase();

    let sum =0;

    for(let i=0; i< letters.length ;i++ ){
        sum += letters.charCodeAt(i);
    }

    this.values = sum % 101;
  }

  refresh(){
    this.name1='';
    this.name2='';
    this.values =0;
  }

}
