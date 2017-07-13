import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})

export class PersonCardComponent implements OnInit {
  name: String = "";
  email: String = "";

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
  }

  findPersonByName() {
    this._peopleService.findPersonByName(this.name).subscribe(
      result => this.email = result.records[0]._fields[0].properties.email,
      error => {
        console.log(error);
      }
    );
  }

}
