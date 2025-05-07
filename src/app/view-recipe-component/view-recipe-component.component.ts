import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipe-component',
  imports: [HeaderComponent],
  templateUrl: './view-recipe-component.component.html',
  styleUrl: './view-recipe-component.component.css'
})
export class ViewRecipeComponentComponent {

  recipeID:string=""
  recipeData:any={}
  relatedRecipe:any=[]

  constructor(private route:ActivatedRoute,private api:ApiService){}

  ngOnInit(){
    this.route.params.subscribe((res:any)=>{
      this.recipeID=res.id
      console.log(this.recipeID)
    })
    this.getOneRecipe()
   
  }


  getOneRecipe(){
    this.api.getSingleRecipe(this.recipeID).subscribe((res:any)=>{
    this.recipeData=res
    this.getAllRelatedRecipes(this.recipeData.cuisine)
    })
  }

  getAllRelatedRecipes(cuisine:any){
    this.api.getRelatedRecipe(cuisine).subscribe((res:any)=>{
      if(res.length>0){
        this.relatedRecipe=res.filter((a:any)=>a['_id']!=this.recipeData._id)
        console.log(this.relatedRecipe)
      }else{
        this.relatedRecipe=[]
      }
     
    })
  }

}
