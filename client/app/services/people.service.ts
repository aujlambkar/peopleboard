import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class PeopleService {

  constructor(private _http: Http) { }

  findPersonByName(name: String) {
    return this._http.get("http://localhost:3000/api/people/" + name)
      .map(response => {
        { return response.json() };
      })
      .catch(error => Observable.throw(error.json()));
  }

}
