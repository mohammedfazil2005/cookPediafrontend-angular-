import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{

  recipeArray:any=[]


  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.getRecipe()
  }
  getRecipe(){
    this.api.getAllRecipe().subscribe((res:any)=>{
      console.log(res)
      this.recipeArray=res.slice(0,6)
    })
  }
}
