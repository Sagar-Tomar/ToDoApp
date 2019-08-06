import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './shared/services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toDoItemForm: FormGroup;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.toDoItemForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
  
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  addClicked(){
    
    this.toDoItemForm.value.complete = false;
    

    this.api.addItemIncomplete(this.toDoItemForm.value).subscribe(res => {
      this.api.changeMessage(true);
    },error => {
      this.api.changeMessage(false);
    });
  }

}
