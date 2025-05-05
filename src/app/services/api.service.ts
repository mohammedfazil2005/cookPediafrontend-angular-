import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getAllRecipe() {
    return this.http.get(`${this.server_url}/getallrecipes`)
  }

  AddTestimonyApi(reqbody: any) {
    return this.http.post(`${this.server_url}/addtestimony`, reqbody)
  }

  RegisterUser(reqbody: any) {
    return this.http.post(`${this.server_url}/register`,reqbody)
  }


}
