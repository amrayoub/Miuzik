import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  searchForm: FormGroup;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      query: new FormControl(null)
    });
  }

  searchSubmit(){
    let query = this.searchForm.value.query;

    if(query.length > 0){
      this.router.navigate(['/search', query]);
    }

}
}
