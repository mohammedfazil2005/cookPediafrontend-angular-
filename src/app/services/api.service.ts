import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  LoginUser(reqbody:any){
    return this.http.post(`${this.server_url}/login`,reqbody)
  }

  //for passing token to req header
  appendToken(){
    let headers=new HttpHeaders()
    let token=sessionStorage.getItem("token")
    if(token){
     headers= headers.append('Authorization',`bearer ${token}`)
    }
    return {headers}
  }

  getSingleRecipe(id:string){
    return this.http.get(`${this.server_url}/singlerecipe/${id}/view`,this.appendToken())
  }

  getRelatedRecipe(cuisine:any){
    return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appendToken())
  }
  


}
