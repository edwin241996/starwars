import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

    // Personagens: any = [{
    // "name": "luke skywalker",
    //"height": "172",
    // "gender": "male",
    //"created": "2014-12-09T13:50:51.644000Z",
    // "price": "29.99",
    // "rating": "4.5678",
    // },
    // {
    // "name": "darth vader",
    //"height": "202",
    //// "gender": "male",
    // "created": "2014-12-20T13:50:51.644000Z",
    // "price": "59.99",
    // "rating": "4.9878",
    // }]
  constructor( private http: HttpClient ) {}

  getTodos() {
    return   this.http.get( 'https://swapi.dev/api/people/' );

    }
    getPersonagem(id) {
      return this.http.get('https://swapi.dev/api/people/'+id);

    }
}